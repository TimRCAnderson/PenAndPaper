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

function roll(diceString)
{
  let diceSplit = diceString.toLowerCase().split(",");
  console.log(diceSplit);
  let results = [];
  for(let i = 0; i < diceSplit.length; i++)
  {
    let dieParse = diceSplit[i].split("+").map(x => x.trim());
    console.log(dieParse);
    let dice = {};
    /*for(let i = 0; i < dieParse.length; i++)
    {
      dice[dieParse[0].substring(0, dieParse[0].indexOf("d") + 1)] = {"rolls": int[]}
    }*/
    let quantity = dieParse[0].substring(0, dieParse[0].indexOf("d") - 1);
    console.log(quantity);
    let magnitude = dieParse[0].substring(dieParse[0].indexOf("d") + 1);
    console.log(magnitude);
    let addend = dieParse.length > 1 ? dieParse[1] : 0;
    console.log(addend);
    results[i] = 0;
    for(let i = 0; i < quantity; i++)
    {
      results[i] += randomInt(0, magnitude);
    }
    results[i] += addend;
  }
  return results;
}

function postResult()
{
  document.getElementById("rollResult").innerText = roll(document.getElementById("dieString").value);
}

document.getElementById("Roll").onclick(postResult);