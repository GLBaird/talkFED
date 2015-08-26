var PostNote = React.createClass({

	getInitialState: function() {
		return {
			editMode: false,
			note: this.props.children
		};
	},

	componentDidMount: function() {
		var comp = React.findDOMNode(this);
		$(comp).draggable({ containment: "div#bulletinBoard" });
	},

	editNote: function() {
		this.setState({ editMode: !this.state.editMode });
	},

	deleteNote: function() {
		console.log(this._reactInternal);
		var comp = React.findDOMNode(this);
		React.unmountComponentAtNode(comp.parentNode);
	},

	updateNote: function(e) {
		this.setState({ note: e.target.value });
	},

	closeEdit: function() {
		//this.props.children = "Boo";
		this.setState({ editMode: false });
	},

	render: function() {

		var content;



		if (this.state.editMode) {
			content = (
				<div>
					<textarea name="update" value={ this.state.note } onChange={ this.updateNote } />
					<p className="buttons">
						<button onClick={ this.closeEdit } className="btn btn-default btn-sm"><span className="glyphicon glyphicon-floppy-save"></span></button>
					</p>
				</div>
			);
		} else {
			content = (
				<div>
					<p>{ this.state.note }</p>
					<p className="buttons">
						<button onClick={ this.editNote } className="btn btn-default btn-sm"><span className="glyphicon glyphicon-pencil"></span></button>
						<button onClick={ this.deleteNote } className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"></span></button>
					</p>
				</div>
			);
		}


		return (
			<div className="post-note">
				<h2 className="header">{ this.props.title }</h2>
				{ content }
			</div>
		)
	}

});