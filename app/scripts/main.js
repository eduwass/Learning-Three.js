/*

  THREE.JS

*/

// Create a scene
var scene = new THREE.Scene();

// Add a camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// Create the viewport for the scene to sit in
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0xdddddd, shading: THREE.FlatShading } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
dirLight.color.setHSL( 0.1, 1, 0.95 );
dirLight.position.set( -1, 1.75, 1 );
dirLight.position.multiplyScalar( 50 );
scene.add( dirLight );

camera.position.z = 4;

// For canceling the animation frame request...
var animate;

var render = function () {

  animate = requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();

/*

  DAT GUI

*/

var gui = new dat.GUI();

var params = {

}

gui.add(camera.position, 'x', -5, 5);
gui.add(camera.position, 'y', -5, 5);
gui.add(camera.position, 'z', 1, 41);
