/*

  THREE.JS

*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 20;
var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

/*

  CUBE GRID

*/

// var cube = function( x, y, z, posX, posY ) {

//   var geometry = new THREE.BoxGeometry( x, y, z );
//   var material = new THREE.MeshNormalMaterial();
//   var cube = new THREE.Mesh( geometry, material );
//       cube.position.setX(posX);
//       cube.position.setY(posY);

//   scene.add( cube );

// };

// var cubeGrid = function(cubeYOffset) {

//   var cubeXOffset = 3;

//   var row = function(cubeYOffset) {
//     for (var i = -camera.position.z; i < camera.position.z; i++) {
//       new cube( 1, 1, 1, i*cubeXOffset, cubeYOffset );
//     }
//   }

//   for (var i = -camera.position.z; i < camera.position.z; i++) {
//     var cubeYOffset = 3 * i;
//     new row(cubeYOffset);
//   }

// }

// var cubeGrid = new cubeGrid();

/*

  PRISM GRID

*/

var cylinder = function(offsetX, offsetY) {
  var geometry = new THREE.CylinderGeometry( 1, 1, 1, 3, 1 );
  var material = new THREE.MeshNormalMaterial();
  var cylinder = new THREE.Mesh( geometry, material );
      cylinder.position.x = offsetX;
      cylinder.position.y = offsetY;

  scene.add( cylinder );

};

var cylinderGrid = function() {
  var row = function(offsetY) {
    var offsetX = 3;
    for (var i = -camera.position.z; i < camera.position.z; i++) {
      new cylinder(offsetX*i, offsetY);
    }
  }
  for (var i = -camera.position.z; i < camera.position.z; i++) {
    var offsetY = 3 * i;
    new row(offsetY);
  }
}

new cylinderGrid();

/*

  RENDERER

*/

var render = function () {

  requestAnimationFrame( render );

  for (var i = 0; i < scene.children.length; i++) {
    scene.children[i].rotation.x += 0.025;
    scene.children[i].rotation.y += 0.025;
  }

  renderer.render(scene, camera);

};

render();

/*

  CLEAR SCENE

*/

var clear = function() {



}
