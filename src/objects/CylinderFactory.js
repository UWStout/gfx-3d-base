// Import the three.js library and components needed
import * as THREE from 'three'

// Parent class
import MeshFactory from './MeshFactory'

/**
 * A class to build cylinder meshes for use with Three.js
 **/
class CylinderFactory extends MeshFactory {
  /**
   * Create a new cylinder Factory object that will use the given subdivision
   * parameter to generate unit cylinders centered at (0, 0, 0) aligned with Y.
   * @param {slices} number The number of subdivisions around the central axis.
   **/
  constructor (slices) {
    super()
    this._count++
    this._name = `Cylinder ${this._count}`
    this._slices = slices || 18
  }

  /**
   * Set the subdivisions around the outside of the cylinder.
   * @param {newVal} number The number of subdivisions around the central axis.
   **/
  set slices (newVal) {
    if (typeof newVal === 'number') {
      this._slices = newVal
    }
  }

  /**
   * Build and return a THREE.Geometry() object representing a cylinder.
   * @override
   **/
  makeObjectGeometry () {
    // A fresh, empty Geometry object that will hold the mesh geometry
    var cylGeom = new THREE.Geometry()

    // TODO: Create a unit cylinder using this._slices to sample the circular dimension.
    //   - Base circle should be at Y = -1 and have a radius of 1
    //   - Top circle should be at Y = 1 and also have a radius of 1
    //   - See CubeFactory for an example of how to use the Geometry object
    //   - Your vertices must wind counter-clockwise and normals must point outwards
    //   - You should have a single THREE.Geometry() for your cylinder that you return.

    // Return finished geometry
    return cylGeom
  }
}

// Export the CylinderFactory class for use in other modules
export default CylinderFactory
