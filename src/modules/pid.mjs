/**
 * PID controller
 * @module PID
 * @alias pid
 */
export default class PID {
  constructor(P = 0, I = 0, D = 0) {
    this.set(P, I, D)
    this.ep = 0 // error proportional
    this.ei = 0 // error integral
    this.ed = 0 // error derivative
  }

  /**
   * Set PID gains
   * @param {number} P - Proportional Gain
   * @param {number} I - Integral Gain
   * @param {number} D - Derivative Gain
   */
  set(P = 0, I = 0, D = 0) {
    this.Kp = P // Proportional Gain
    this.Ki = I // Integral Gain
    this.Kd = D // Derivative Gain
  }

  /**
   * Update PID controller
   * @param {number} current - Current value
   * @param {number} target - Target value
   * @returns {number} Output value
   */
  update(current, target) {
    const error = target - current
    this.ei += error
    this.ed = error - this.ep
    this.ep = error
    return this.Kp * this.ep + this.Ki * this.ei + this.Kd * this.ed
  }
}
