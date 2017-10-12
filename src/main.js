// Import bootstrap's contents for webpack (not used below)
// These lines simply ensure that bootstrap is placed in the bundle files
// that are generated by webpack so we don't have to link them separately
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import jQuery as the usual '$' variable
import $ from 'jquery'

// Import the three.js library
import * as THREE from 'three'

// To run once after the DOM is fully loaded
$(document).ready(() => {
  // Initialize the three.js scene
  initThree()

  // Setup resize callback for the window
  $(window).resize(checkResize)

  // Start the animation
  requestAnimationFrame(animate)
})

// Variables used below
let mesh, renderer, scene, camera
let widgetWidth, widgetHeight, resizeNeeded

// Initialize three.js geometry, scene, and renderer
function initThree () {
  // Build the cube mesh
  let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  let material = new THREE.MeshNormalMaterial()
  mesh = new THREE.Mesh(geometry, material)

  // Build the scene with the cube in it
  scene = new THREE.Scene()
  scene.add(mesh)

  // Make a renderer that will draw the scene
  renderer = new THREE.WebGLRenderer({ antialias: true })
  $('#GLWidget').append(renderer.domElement)
  widgetWidth = $('#GLWidget').width()
  widgetHeight = $('#GLWidget').height()

  // Make a perspective projection camera for the scene
  let aspect = widgetWidth / widgetHeight
  camera = new THREE.PerspectiveCamera(70, aspect, 0.01, 10)
  camera.position.z = 1

  // Call resize once so everything is syncronized
  resize()
}

// Compare widget dimensions and flag if they've changed
function checkResize () {
  if ($('#GLWidget').width() !== widgetWidth ||
      $('#GLWidget').height() !== widgetHeight) {
    resizeNeeded = true
  }
}

// Syncronize the widget dimensions with the three.js renderer
function resize () {
  let container = $('#GLWidget')
  camera.aspect = container.width() / container.height()
  camera.updateProjectionMatrix()
  renderer.setSize(container.width(), container.height())

  widgetWidth = $('#GLWidget').width()
  widgetHeight = $('#GLWidget').height()
}

// Render and animate the scene
function animate () {
  // Queue the next animation frame (continuously animates)
  requestAnimationFrame(animate)

  // Check for needed resize
  if (resizeNeeded) {
    resize()
    resizeNeeded = false
  }

  // Rotate the cube
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.02

  // Render the scene
  renderer.render(scene, camera)
}
