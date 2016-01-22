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

Next comes the `JavaScript`, first create a scene, a camera and a renderer. This are required for every `THREE.js` instance:

```
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
```

