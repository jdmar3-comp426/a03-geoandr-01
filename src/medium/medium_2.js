import mpg_data from "./data/mpg_data.js";
import { getStatistics } from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
        city: undefined,
        highway: undefined,
    },
    allYearStats: undefined,
    ratioHybrids: undefined,
};

var ratio = 0
var yearArray = []
var city = 0
var highway = 0
for (let i = 0; i < mpg_data.length; i++) {
    city += mpg_data[i]["city_mpg"]
    highway += mpg_data[i]["highway_mpg"]
    if (mpg_data[i]["hybrid"] == true) {
        ratio++
    }
    yearArray.push(mpg_data[i]["year"])
}

allCarStats.avgMpg["city"] = city / mpg_data.length

allCarStats.avgMpg["highway"] = highway / mpg_data.length

allCarStats.allYearStats = getStatistics(yearArray)

allCarStats.ratioHybrids = ratio / mpg_data.length


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */


var arrayAllHybrids = mpg_data.filter(object => object["hybrid"] == true)
var arrayHybridMakes = []
for (let i = 0; i < arrayAllHybrids.length; i++) {
    if (!arrayHybridMakes.includes(mpg_data[i]["make"])) {
        arrayHybridMakes.push(mpg_data[i]["make"])
    }
}
var arrayMakeAndHybrid = []
var finalArray = []
for (let i = 0; i < arrayHybridMakes.length; i++) {
    arrayMakeAndHybrid = arrayAllHybrids.filter(object => object["make"] == arrayHybridMakes[i])
    var object = {
        "make": arrayHybridMakes[i],
        "hybrids": [],
    }
    for (let j = 0; j < arrayMakeAndHybrid.length; j++) {
        if (!object["hybrids"].includes(arrayMakeAndHybrid[j]["id"])) {
            object["hybrids"].push(arrayMakeAndHybrid[j]["id"])
        }
    }
    finalArray.push(object)
}

finalArray = finalArray.filter(object => object["hybrids"].length != 0)

console.log(finalArray)


export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};