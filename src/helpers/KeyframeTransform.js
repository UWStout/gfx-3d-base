import Transform from './Transform'

/**
 * A child of Transform that adds the ability to clone other transform
 * Objects and to interpolate between them.
 */
class KeyframeTransform extends Transform {
  /**
    * @constructor
    * @param {Transform} copyMe - A transform to copy (must always be provided)!
    */
  constructor (copyMe) {
    // Inherit all the stuff from parent mesh
    super(copyMe._meshObj)

    // Copy the core properties from the other Transform object
    this._position.copy(copyMe._position)
    this._rotation.copy(copyMe._rotation)
    this._scale.copy(copyMe._scale)
    this._pivotPoint.copy(copyMe._pivotPoint)
  }

  /**
   * Create a new KeyframeTransformation that is the linear interpolation
   * of 'this' with Btrans using 'alpha'.
   * @this {KeyframeTransform} The 'previous' transform in the pair.
   * @param {KeyframeTransform} Btrans The 'next' transform in the pair.
   * @param {number} alpha A value between 0 and 1 used for interpolation.
   * @return {KeyframeTransform} The result of linearly interpolating
   */
  lerp (Btrans, alpha) {
    // Clone the current transform
    let interp = new KeyframeTransform(this)

    // TODO: Create a new inbetween frame using linear interpolation
    //  - 'this' is the previous key frame & Btrans is the next key frame
    //  - 'alpha' is the percent of Btrans that should be in the result
    //  - Update the values of 'interp' to be a combination of 'this' and Btrans
    //  - Use the equation we derived in class and apply it to the x, y, and z
    //    coordinates of position, rotation, scale, and pivotpoint.
    //  - Make sure to interpolate all 12 values individually.
    //  - You may NOT use THREE.Vector3.lerp(); you must write it yourself!

    // Return the interpolated result
    return interp
  }
}

export default KeyframeTransform
