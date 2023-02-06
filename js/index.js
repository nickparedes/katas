import hamburguerMenu, {codeInMarkdown} from "./app.js";

import {addBinary} from "./katas/7-kyu.js"
import {summation} from "./katas/8-kyu.js"
import {flood} from "./katas/3-kyu.js"


const d =document

d.addEventListener("DOMContentLoaded",()=>{
    hamburguerMenu(".panel-btn",".panel",".menu a")
    codeInMarkdown(
        "Binary Addition - NIVEL 7",
        "Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string.",
        "BinaryAddition.md",
    );

    codeInMarkdown(
        "Summation - NIVEL 8",
        "Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.",
        "Summation.md",
    );


    codeInMarkdown(
        "Flood Room - NIVEL 3",
        "FloodRoom",
        "FloodRoom.md",
    );




    console.log(flood());

})



