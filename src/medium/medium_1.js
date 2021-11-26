import { variance, variance } from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array = array.sort(function(a, b) {
        return a - b
    })
    var middle = Math.floor(array.length / 2)
    if (!middle % 2) {
        lowerIndex = middle - 1
        highIndex = middle
        var sum = array[lowerIndex] + array[highIndex]
        sum = sum / 2
        return sum
    }
    return array[middle]
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var length = array.length
    var sum = getSum(array)
    var mean = sum / length
    var median = getMedian(array)
    var min = 10000
    var max = 0
    for (let i = 0; i < length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
        if (array[i] > max) {
            max = array[i]
        }
    }
    var variance = variance(array, mean)
    var standard_deviation = Math.sqrt(variance)

    var object = {
        length: length,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: variance,
        standard_deviation: standard_deviation
    }

    return object
}