// Import the three.js library
import * as THREE from 'three'

class RandoCube extends THREE.Mesh {
  constructor (edgeDim, material) {
    material = material || new THREE.MeshNormalMaterial()
    let geometry = new THREE.BoxGeometry(edgeDim, edgeDim, edgeDim)
    super(geometry, material)

    // Set random rotation increments within the range [-0.04 0.04]
    this._x_inc = (Math.random() * 0.08) - 0.04
    this._y_inc = (Math.random() * 0.08) - 0.04
  }

  update () {
    // Change the rotation so the cube spins
    this.rotation.x += this._x_inc
    this.rotation.y += this._y_inc
  }
}

export default RandoCube
