// Parent class
import MeshFactory from './MeshFactory'

// Base geometry factories
import CubeFactory from './CubeFactory'
// TODO: Import other factory classes as needed

/**
 * A class to build a representation of the UW Stout Bell monument
 * for use with Three.js.  Do not call makeObjectGeometry() on this
 * class as it is left abstract. Use generateMesh() instead.
 **/
class SculptureFactory extends MeshFactory {
  /**
   * Create a new sculpture factory object.
   **/
  constructor () {
    super()
    this._name = 'Sculpture'
  }

  /**
   * Build and return a THREE.Mesh() object representing the Stout Bell Monument.
   * @override
   **/
  generateMesh () {
    // Empty root object for the entire bell sculpture
    let root = MeshFactory.generateEmptyNode('Sculpture')

    // TODO: Create an object representing the bell monument as indicated in the
    //       instructions (should be minimally hierarchical)
    // - It's a good idea to make other functions to construct the individual
    //   parts as actual meshes (like buildBench() or buildBell())
    // - Set appropriate names for each component and set their transform
    // - Import other Factory classes to make cubes, cylinders, or spheres as needed.
    //   > Call 'generateMesh()' on the factory classes to make a component
    //   > Use 'add()' on a mesh to add children to its hierarchy
    // - Do not worry about making a deep or intuitive hierarchy but make sure
    //   there is a global root for the entire sculpture.

    // TODO: Here is an example of how this works.
    //       BE SURE TO REMOVE THIS BEFORE YOU SUBMIT YOUR CODE!
    alert('WARNING: This is an example object. You should replace it with your ' +
          'own code and remove this warning and the example code.')

    // Build and transform four cube objects
    let cubeMaker = new CubeFactory()
    let cube1 = cubeMaker.generateMesh()
    cube1.name = 'Cube 1'
    cube1.transform.setScale(0.8, 0.8, 0.2)
    cube1.transform.setPosition(-1.1, -1.1, 0.0)

    let cube2 = cubeMaker.generateMesh()
    cube1.name = 'Cube 2'
    cube2.transform.setScale(0.8, 0.8, 0.2)
    cube2.transform.setPosition(1.1, -1.1, 0.0)

    let cube3 = cubeMaker.generateMesh()
    cube1.name = 'Cube 3'
    cube3.transform.setScale(0.8, 0.8, 0.2)
    cube3.transform.setPosition(1.1, 1.1, 0.0)

    let cube4 = cubeMaker.generateMesh()
    cube1.name = 'Cube 4'
    cube4.transform.setScale(0.8, 0.8, 0.2)
    cube4.transform.setPosition(-1.1, 1.1, 0.0)

    // Set four cubes as children of and empty root object
    root.name = 'Quad Window'
    root.transform.setScale(0.5, 0.5, 0.5)
    root.add(cube1)
    root.add(cube2)
    root.add(cube3)
    root.add(cube4)
    // TODO: REMOVE EXAMPLE CODE UP TO HERE BEFORE SUBMITTING

    // Return finished geometry
    return root
  }
}

export default SculptureFactory
