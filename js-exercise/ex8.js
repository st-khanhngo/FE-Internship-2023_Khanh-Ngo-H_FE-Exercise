// 8. Write a function to find the new time after a specified time from the given time.
// Input: (givenTime string, period number(s))
// Output: newTime string
// Ex: ('12:30:29', 600) => '12:40:29'
// Ex: ('23:30:29', 6000) => '01:10:29'

/**
 * Returns new time after add a period of time.
 *
 * @param {string} givenTime The time input.
 * @param {number} period The period seconds number add.
 * @return {string} new time after add a period of time.
 */

function addTime(givenTime, period) {
  let arr = givenTime.split(':').map(Number);
  let d = new Date();
  d.setHours(...arr);
  d.setSeconds(d.getSeconds() + period);
  return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0') + ':' + d.getSeconds().toString().padStart(2, '0')
}
