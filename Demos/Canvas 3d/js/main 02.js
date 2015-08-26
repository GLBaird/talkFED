window.addEventListener("load", initPage, false);

// create objects for 3D
var camera, scene, renderer, cube, material, mesh;


function initPage() {
    // create scene
    scene  = new THREE.Scene();
    
    // create and position camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    
    // add to scene
    scene.add(camera); 
    
    // create cube of 300px
    cube = new THREE.CubeGeometry(300, 300, 300);
    
    // create material
    material = new THREE.MeshLambertMaterial( { color: 0x0000FF } );
    
    // Create Light
    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 1000;
    scene.add(pointLight);
    
    // create simple mesh
    mesh = new THREE.Mesh(cube, material);
    
    // add to scene, to present the cube and material
    scene.add(mesh);
    
    // create render
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 400);
    document.getElementById("page").appendChild(renderer.domElement);
    
    animate();
    
}

function animate() {
    // animation code
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    
    renderer.render(scene, camera);
}