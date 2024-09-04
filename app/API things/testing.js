'use strict';

const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'finestFoodOutlet' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING city
 *  2. INTEGER votes
 * API URL https://jsonmock.hackerrank.com/api/food_outlets?city={city}&page={page_no}
 */

async function finestFoodOutlet(city, votes) {
    const url = `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}`
    
    
    function getFoodData() {
        return(
            'GET'
        )
        
    }
    let results = []
    const response = await fetch(url, getFoodData())
    const responseObj = await response.json()
    const data = responseObj.data
    if (length(data) > 0)
    
    
    
}

async function main() {