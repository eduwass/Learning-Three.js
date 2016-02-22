/*

  THREE.JS

*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 20;
var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var cube = function( x, y, z, posX, posY ) {

  var geometry = new THREE.BoxGeometry( x, y, z );
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh( geometry, material );
      cube.position.setX(posX);
      cube.position.setY(posY);

  scene.add( cube );

};

var cubeGrid = function(cubeYOffset) {

  var cubeXOffset = 3;

  var row = function(cubeYOffset) {
    for (var i = -camera.position.z; i < camera.position.z; i++) {
      new cube( 1, 1, 1, i*cubeXOffset, cubeYOffset );
    }
  }

  for (var i = -camera.position.z; i < camera.position.z; i++) {
    var cubeYOffset = 3 * i;
    new row(cubeYOffset);
  }

}

var cubeGrid = new cubeGrid();

var render = function () {

  requestAnimationFrame( render );

  for (var i = 0; i < scene.children.length; i++) {
    scene.children[i].rotation.x += 0.05;
    scene.children[i].rotation.y += 0.05;
  }

  renderer.render(scene, camera);

};

render();
