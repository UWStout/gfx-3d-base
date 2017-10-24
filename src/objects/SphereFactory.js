// Import the three.js library and components needed
import * as THREE from 'three'

// Parent class
import MeshFactory from './MeshFactory'

/**
 * A class to build sphere meshes for use with Three.js
 **/
class SphereFactory extends MeshFactory {
  /**
   * Create a new sphere factory object that will use the given subdivision
   * parameters to generate unit spheres centered at (0, 0, 0).
   * @param {slices} number The number of subdivisions around the equator.
   * @param {stacks} number The number of subdivisions between the poles.
   **/
  constructor (slices, stacks) {
    super()
    this._count++
    this._name = `Sphere ${this._count}`
    this._slices = slices || 36
    this._stacks = stacks || 18
  }

  /**
   * Set the subdivisions around the equator of the sphere.
   * @param {newVal} number The number of subdivisions around the equator.
   **/
  set slices (newVal) {
    if (typeof newVal === 'number') {
      this._slices = newVal
    }
  }

  /**
   * Set the subdivisions between the poles of the sphere.
   * @param {newVal} number The number of subdivisions between the poles.
   **/
  set stacks (newVal) {
    if (typeof newVal === 'number') {
      this._stacks = newVal
    }
  }

  /**
   * Build and return a THREE.Geometry() object representing a sphere.
   * @override
   **/
  makeObjectGeometry () {
    // A fresh, empty Geometry object that will hold the mesh geometry
    var cylGeom = new THREE.Geometry()

    // TODO: Create a unit sphere using this._slices and this._stacks for sampling the dimensions.
    //   - The south pole should be at Y=-1 and the north pole at Y=1 thhe radius should be 1.
    //   - See buildUnitCube() for an example of how to use the Geometry object to do this.
    //   - You should have a single THREE.Geometry() for your sphere that you return.
    //   - Your vertices must wind counter-clockwise and normals must point outwards.

    // Return finished geometry
    return cylGeom
  }
}

// Export the SphereFactory class for use in other modules
export default SphereFactory
