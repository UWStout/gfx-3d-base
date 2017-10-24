// Parent class
import MeshFactory from './MeshFactory'

// Base geometry factories
// TODO: Import factory classes as needed

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

    // TODO: Create a hierarchical object for a humanoid character
    // - Each part of your humanoid should be a primitive object made with
    //   one of the MeshFactory classes (cubes, cylinders, and spheres)
    // - Set appropriate NAMES and TRANSFORMATIONS for each mesh
    // - Use the add() function of a mesh to create a hierarchy
    // - Do NOT attach all parts to a single root, you must build an
    //   intuitive skeletal hierarchy
    // - You MUST set appropriate pivot points for all joints
    //   > For full credit, arms and legs must move correctly when rotated

    // NOTE: There is a special function to help isolate the effects of scaling
    // - It is often the case that you don't want scale to be inherited
    // - If so, use MeshFactory.isolateScale() to do just that.
    // EXAMPLE: Given a mesh 'leftArm' with a scale that you do not want to affect the
    // left hand (a child of leftArm), do the following:
    //   leftArm = MeshFactory.isolateScale(leftArm)

    // Return the completed mesh
    return root
  }
}

// Export the HumanoidFactory class for use in other modules
export default HumanoidFactory
