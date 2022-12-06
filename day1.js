const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('input_d1'),
  output: process.stdout,
  terminal: false
})

let calorieMax = [];
let calorieTotal = 0;

rl.on('line', line => {

    //check if line is a value
    if(line.match(/\d+/)){
        calorieTotal+=parseInt(line);
    }
    // new line - store calorieTotal + set to 0 for next
    else{
        calorieMax.push(calorieTotal);
        calorieTotal= 0;
    }

})

//needed to give time for file to load.
setTimeout(()=>{
    calorieMax.sort((a,b)=> b-a);
    let topThreeTotal = calorieMax.splice(0,3).reduce(getSum,0)
    console.log(topThreeTotal);
},3000)

function getSum(total, num){
    return total+num;
}