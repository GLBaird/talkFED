var app = {
    start: function() {
        $(document.body).keydown(this.keyboardListener.bind(this));
        $(document.body).keyup(this.keyboardListenerUp.bind(this));
        this.character = $("#gb");
        this.characterPosition = parseInt(this.character.css("left").split("px")[0]);
    },
    
    keyboardListener: function(e) {
        if (e.keyCode == 37) {
            this.moveLeft();
        } else if (e.keyCode == 39) {
            this.moveRight();
        }
    },
    keyboardListenerUp: function(e) {
        if (this.character.hasClass("leftWalk")) {
            this.character.attr("class", "").addClass("left");
        } else {
            this.character.attr("class", "").addClass("right");
        }
    },
    
    position: 0,
    
    character: $(),
    characterPosition: 0,
        
    moveLeft: function() {
        this.character.attr("class", "").addClass("leftWalk");
        if (this.position < 0) {
            this.position += 50;
            $("#container").css("left", this.position+"px");
            this.characterPosition -= 60;
            this.character.css("left", this.characterPosition+"px");
        }        
    },
    
    moveRight: function() {
        this.character.attr("class", "").addClass("rightWalk");
        if (this.position > -2000) {
            this.position -= 50;
            $("#container").css("left", this.position+"px");
            this.characterPosition += 60;
            this.character.css("left", this.characterPosition+"px");
        } 
    }
}