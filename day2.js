const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('input_d2'),
  output: process.stdout,
  terminal: false
})


let scoreTotal = 0;
rl.on('line', line => {
    let round = line.split(/\s/);
    let selectedValue = round[1];
    let opponentValue = round[0];
    console.log(selectedValue);
    console.log(opponentValue);
    
    // Rock selected
    if (selectedValue === 'X'){
        scoreTotal+=1;
        if (opponentValue === 'A'){
            //draw
            scoreTotal+=3;
        } else if(opponentValue === 'B'){
            //loss

        } else {
            //win
            scoreTotal+=6;
        }
    }
   
    // paper selected
    if (selectedValue === 'Y'){
        scoreTotal+=2;
        if (opponentValue === 'B'){
            //draw
            scoreTotal+=3;
        } else if(opponentValue === 'C'){
            //loss

        } else {
            //win
            scoreTotal+=6;
        }
    }

    // scissors selected
    if (selectedValue === 'Z'){
        scoreTotal+=3;
        if (opponentValue === 'C'){
            //draw
            scoreTotal+=3;
        } else if(opponentValue === 'A'){
            //loss

        } else {
            //win
            scoreTotal+=6;
        }
    }

})


//needed to give time for file to load.
setTimeout(()=>{
    console.log(scoreTotal);
},10000)