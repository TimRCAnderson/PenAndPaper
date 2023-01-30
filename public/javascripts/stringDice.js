function randomInt(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
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
    dice[i] = randomInt(0, decomposed[1]);
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
//       results[i] += randomInt(0, magnitude);
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