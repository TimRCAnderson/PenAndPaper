function randomInt(min, max)
{
  return Math.floor(Math.random() * (max - (min - 1))) + min;
}

function getQuantity(dieString)
{
  return dieString.substring(0, dieString.indexOf("d"));
}

function getMagnitude(dieString)
{
  return dieString.substring(dieString.indexOf("d") + 1);
}

/*
To get the complex dice logic resolved (most will not use anything too complicated), it should be possible to use a recursive
parser that iterates on different segments. It may be optimal to break it into smaller functions for readability, such as
breaking into parts or keeping highest. The string should be broken into 

roll("4(2d6kh-(1d2)) - 2(3d4dl+1)")
parentheticals should be split out first so that they aren't broken up by splitting on mathematical operators.

*/
function basicDice(diceString)
{
  //This function assumes that it is receiving a string in the format of "MdS", where M is the number of dice being rolled, d is a separator, and S is the number of sides on each die.
  let decomposed = diceString.split("d");
  let dice = [];
  for(i = 0; i < decomposed[0]; i++)
  {
    dice[i] = randomInt(1, decomposed[1]);
  }
  return dice;
}

function sum(dice)
{
  let total = 0;
  for(let die of dice)
  {
    total += die;
  }
  return total;
}

function initializeArrayLow(item, index, arr)
{
  arr[index] = 0;
}

function initializeArrayHigh(item, index, arr)
{
  arr[index] = 4000;
}

//The following 4 functons are intended to keep or drop a number of dice based on the number specified number in the second parameter.
//expected format for string is "NdSFQ" to indicate rolling N S-sided dice and then performing function F (kl, kh, dl, dh) on a certain number of dice. 
function keepHighest(dice, number = 1)
{
  let diceObject = {};
  let indices = [];
  let highest = []
  for(let i = 0; i < number; i++)
  {
    for(let j = 0; j < dice.length; j++)
    {
      if((highest[i] == undefined || highest[i] < dice[j]) && (indices.indexOf(j) != -1))
      {
        highest[i] = dice[j];
        indices[i] = j;
      }
    }
  }
  for (let i = 0; i < indices.length; i++)
  {

  }
  diceObject.highest = highest;
  diceObject.dice = dice;
  diceObject.highestIndices = indices;
  return diceObject
}

function keepLowest(dice, number = 1)
{

}

function dropHighest(dice, number = 1)
{

}

function dropLowest(dice, number = 1)
{

}

//for a string of format "NdS + B", roll N S-sided dice and add B to the total, then return it. If there is no " + B", then 
//just return the sum of the dice roll.
function diceWithAddend(diceString)
{
  let segmented;
  if(diceString.indexOf("+") >= 0)
  {
    segmented = diceString.split("+");
    return sum(basicDice(segmented[0])) + parseInt(segmented[1].trim());
  }
  else if(diceString.indexOf("-") >= 0)
  {
    segmented = diceString.split("-");
    return sum(basicDice(segmented[0])) - parseInt(segmented[1].trim());
  }
  else
  {
    return sum(basicDice(diceString.trim()));
  }
}

function extractParenth(diceString)
{
  
}

function breakOnMath(diceString)
{
  let brokenString = diceString.split("+");

}

// function roll(diceString)
// {
//   let diceSplit = diceString.toLowerCase().split(",");
//   console.log(diceSplit);
//   let results = [];
//   for(let i = 0; i < diceSplit.length; i++)
//   {
//     let dieParse = diceSplit[i].split("+").map(x => x.trim());
//     console.log(dieParse);
//     let dice = {};
//     /*for(let i = 0; i < dieParse.length; i++)
//     {
//       dice[dieParse[0].substring(0, dieParse[0].indexOf("d") + 1)] = {"rolls": int[]}
//     }*/
//     let quantity = dieParse[0].substring(0, dieParse[0].indexOf("d") - 1);
//     console.log(quantity);
//     let magnitude = dieParse[0].substring(dieParse[0].indexOf("d") + 1);
//     console.log(magnitude);
//     let addend = dieParse.length > 1 ? dieParse[1] : 0;
//     console.log(addend);
//     results[i] = 0;
//     for(let i = 0; i < quantity; i++)
//     {
//       results[i] += randomInt(1, magnitude);
//     }
//     results[i] += addend;
//   }
//   return results;
// }

// function postResult()
// {
//   document.getElementById("rollResult").innerText = roll(document.getElementById("dieString").value);
// }

// document.getElementById("Roll").onclick(postResult);