// Import the three.js library
import * as THREE from 'three'

/**
 * Object to hold and update a basic 3D transformation. It has
 * scale, translation and rotation about a pivot point.
 **/
class Transform {
  /**
   * Construct a new Transform object for the given mesh object
   * @param {THREE.Mesh} parentMesh The mesh object that is controlled
   * by this particular transform (auto-updated when changed).
   **/
  constructor (parentMesh) {
    // Treat these as private internal members accessed through
    // the setters and getters listed below.
    this._position = new THREE.Vector3(0.0, 0.0, 0.0)
    this._scale = new THREE.Vector3(1.0, 1.0, 1.0)
    this._rotation = new THREE.Vector3(0.0, 0.0, 0.0)
    this._pivotPoint = new THREE.Vector3(0.0, 0.0, 0.0)

    // The mesh object that uses this transformation
    this._meshObj = parentMesh
  }

  /**
   * Return the position which represents this object's TRANSLATION
   * @return {THREE.Vector3} Vector that holds the translation parameters
   **/
  get position () {
    return this._position
  }

  /**
   * Return the values for the sacle of this transformation
   * @return {THREE.Vector3} Vector that holds the scale parameters
   **/
  get scale () {
    return this._scale
  }

  /**
   * TODO: Remember to keep in mind DEGREES vs RADIANS
   * Return the values for the rotation angles of this transformation
   * @return {THREE.Vector3} Vector that holds the rotation angles in RADIANS
   **/
  get rotation () {
    return this._rotation
  }

  /**
   * Return the center of rotation (pivot point) for this transformation
   * @return {THREE.Vector3} Vector that holds the location of the pivot point
   **/
  get pivot () {
    return this._pivotPoint
  }

  /**
   * Change the 'position' (aka translation) and update the world matrix
   * @param {Number} x - The x translation value
   * @param {Number} y - The y translation value
   * @param {Number} z - The z translation value
   */
  setPosition (x, y, z) {
    this._position.set(x, y, z)
    this.apply()
  }

  /**
   * Change the 'rotation' as Euler angles and update the world matrix
   * @param {Number} x - The x rotation angle in radians
   * @param {Number} y - The y rotation angle in radians
   * @param {Number} z - The z rotation angle in radians
   */
  setRotation (x, y, z) {
    this._rotation.set(x, y, z)
    this.apply()
  }

  /**
   * Change the scale values and update the world matrix
   * @param {Number} x - The x scaling value
   * @param {Number} y - The y scaling value
   * @param {Number} z - The z scaling value
   */
  setScale (x, y, z) {
    this._scale.set(x, y, z)
    this.apply()
  }

  /**
   * Change the pivot point for rotation and update the world matrix
   * @param {Number} x - The x-dimension of the pivot point
   * @param {Number} y - The y-dimension of the pivot point
   * @param {Number} z - The z-dimension of the pivot point
   */
  setPivot (x, y, z) {
    this._pivotPoint.set(x, y, z)
    this.apply()
  }

  /**
   * Apply this transformation's values to the parent mesh object
   * @this The transform object for ths function.
   */
  apply () {
    this._meshObj.matrix = this.rebuildMatrix()
    this._meshObj.matrixWorldNeedsUpdate = true
  }

  /**
   * Rebuild the full transformation as a single 3D matrix and return the result.
   * @return {THREE.Matrix4} The 3d matrix that achieves this transformation
   */
  rebuildMatrix () {
    // TODO: BCopy your code from project 3 here

    let M = new THREE.Matrix4()

    // Be sure to return the final combined matrix
    return M
  }
}

export default Transform
