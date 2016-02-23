/*

  INITITAL

*/

$(document).on('ready', function() {

  // prismGrid();

});

/*

  MENU EVENTS

*/

$('.rotating-cube-grid').on('click', function() {

  clear();

  cubeGrid();

});

$('.rotating-prism-grid').on('click', function() {

  clear();

  prismGrid();

});

/*

  THREE.JS

*/

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 10;

var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

/*

  LIGHTS

*/

scene.add( new THREE.AmbientLight( 0xcccccc ) );

var pointLight = new THREE.PointLight( 0xff4400, 5, 30 );
    pointLight.position.set( 5, 0, 0 );

scene.add( pointLight );

/*

  CUBE GRID

*/

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
      cube( 1.25, 1.25, 1.25, i*cubeXOffset, cubeYOffset );
    }
  }

  for (var i = -camera.position.z; i < camera.position.z; i++) {
    var cubeYOffset = 3 * i;
    row(cubeYOffset);
  }

}

/*

  PRISM GRID

*/

var prism = function(offsetX, offsetY) {
  var geometry = new THREE.CylinderGeometry( 1, 1, 1, 3, 1 );
  var material = new THREE.MeshNormalMaterial();
  var prism = new THREE.Mesh( geometry, material );
      prism.position.x = offsetX;
      prism.position.y = offsetY;

  scene.add( prism );

};

var prismGrid = function() {
  var row = function(offsetY) {
    var offsetX = 3;
    for (var i = -camera.position.z; i < camera.position.z; i++) {
      prism(offsetX*i, offsetY);
    }
  }
  for (var i = -camera.position.z; i < camera.position.z; i++) {
    var offsetY = 3 * i;
    row(offsetY);
  }
}

/*

  JSON LOADER

*/

var loader = new THREE.JSONLoader();

loader.load('assets/meteor.json', function ( geometry, materials ) {
    console.log( geometry );
    console.log( materials );
    var material = new THREE.MultiMaterial( materials );
    var object = new THREE.Mesh( geometry, material );
    scene.add( object );
  }
);

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

  for ( var i = scene.children.length - 1; i >= 0; i--) {
    var obj = scene.children[i];
    scene.remove(obj);
  }

}
