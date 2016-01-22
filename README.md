#Learning THREE.js


###Introduction
This is an idiots guide to THREE.js, for those who wish words like 'simple' were removed from technical documentation. This aims to be the ultimate laymen's guide, with pictures to boot!

**NB:** This is heavily plagarised from the `THREE.js` Github, because they made `THREE.js`!


####Creating a scene 
Ok, first is the `HMTL` used to house all the things you need. Here it is:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
      <title>My first Three.js app</title>
      <style>
        body { margin: 0; }
        canvas { width: 100%; height: 100% }
      </style>
  </head>
  <body>
    <script src="js/three.min.js"></script>
    <script> // Our Javascript will go here. </script>
  </body>
</html>
```

Next comes the `JavaScript`, first create a scene, a camera and a renderer. This are required for every `THREE.js` instance. The output of the following code will create a `<canvas>` the full width and height of the browser viewport:

```
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 4;

var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
```

There is a very good explanation of how to add a cube to this scene here from the [THREE.js website](http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene). It explains the interaction of `WebGL` and `THREE.js`, to understand what `THREE.js` adds in terms of fallbacks and other cross-browser bonuses.


####Adding to a scene
Without using and lights in your scene there is not much you can do, other than add flat shape. If you follow the tutorial in the link provided above, you can add a rotating cube. However, why add a cube when you can add an Icosahedron. That's what I always say, anyway!

```
var geometry = new THREE.IcosahedronGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var shape = new THREE.Mesh( geometry, material );
scene.add( shape );
```

The previous code creates a new geometry specific to our desired shape, gives it a material of a solid colour and adds it to our scene.

The final necessary code to see something in the browser, is to create a function to render the camera and defined geometries in to the scene:

```
var render = function () {
  renderer.render(scene, camera);
};

render();
```

The example on the [THREE.js website](http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene) does show you how to animate this, but I think this is the absolute minimum starting point. Now we have learned how to appropriate other people's online tutorials, we can move on to more fun!


####Glossary
Code is great, but I think with something as mind-bending as working out `THREE.js`, it is good to get an understanding of the principles behind 3D, even if just to understand what people are going on about in forums and blog posts. Starting from the smallest:

**Vertex**


