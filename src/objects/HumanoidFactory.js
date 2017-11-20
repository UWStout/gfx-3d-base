// Parent class
import MeshFactory from './MeshFactory'

// TODO: Replace this file with your version from project 3

/**
 * A class to build a representation of robitic skeletal bipedal character
 * for use with Three.js.  Do not call makeObjectGeometry() on this class
 * as it is left abstract. Use generateMesh() instead.
 **/
class HumanoidFactory extends MeshFactory {
  /**
   * Create a new humanoid factory object.
   **/
  constructor () {
    super()
    this._name = 'Humanoid'
  }

  /**
   * Build and return a THREE.Mesh() object representing a bipedal robot.
   * @override
   **/
  generateMesh () {
    // Empty root object for the entire humanoid character
    let root = MeshFactory.generateEmptyNode('Humanoid')

    // Return the completed mesh
    return root
  }
}

// Export the HumanoidFactory class for use in other modules
export default HumanoidFactory
