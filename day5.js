let crateStack = 
[
    ['R', 'N', 'P', 'G'],
    ['T', 'J', 'B', 'L', 'C', 'S', 'V', 'H'],
    ['T', 'D', 'B', 'M', 'N', 'L'],
    ['R', 'V', 'P', 'S', 'B'],
    ['G', 'C', 'Q', 'S', 'W', 'M', 'V', 'H'],
    ['W', 'Q', 'S', 'C', 'D', 'B', 'J'],
    ['F', 'Q', 'L'],
    ['W', 'M', 'H', 'T', 'D', 'L', 'F', 'V'],
    ['L', 'P', 'B', 'V', 'M', 'J', 'F'],
];

const crateChanges= `
move 3 from 3 to 7
move 4 from 1 to 9
move 5 from 6 to 3
move 6 from 9 to 8
move 2 from 9 to 5
move 4 from 3 to 7
move 1 from 3 to 6
move 3 from 5 to 7
move 1 from 2 to 1
move 4 from 7 to 8
move 17 from 8 to 7
move 1 from 6 to 2
move 2 from 6 to 7
move 1 from 8 to 3
move 2 from 4 to 6
move 3 from 9 to 6
move 5 from 6 to 3
move 5 from 2 to 1
move 9 from 3 to 4
move 20 from 7 to 3
move 7 from 5 to 3
move 6 from 3 to 5
move 4 from 1 to 9
move 4 from 5 to 6
move 2 from 1 to 8
move 2 from 7 to 3
move 3 from 6 to 3
move 2 from 5 to 8
move 2 from 9 to 3
move 1 from 9 to 6
move 2 from 2 to 4
move 26 from 3 to 4
move 28 from 4 to 6
move 8 from 6 to 1
move 4 from 8 to 6
move 1 from 9 to 3
move 2 from 3 to 6
move 1 from 3 to 9
move 26 from 6 to 9
move 2 from 7 to 3
move 5 from 1 to 4
move 1 from 1 to 4
move 1 from 6 to 5
move 1 from 2 to 5
move 2 from 3 to 7
move 2 from 5 to 8
move 10 from 4 to 5
move 1 from 6 to 1
move 1 from 8 to 5
move 2 from 7 to 2
move 4 from 4 to 3
move 4 from 7 to 2
move 2 from 1 to 8
move 12 from 9 to 2
move 5 from 2 to 3
move 3 from 3 to 1
move 1 from 1 to 7
move 6 from 3 to 8
move 1 from 5 to 3
move 10 from 9 to 1
move 7 from 8 to 7
move 1 from 3 to 9
move 7 from 7 to 2
move 3 from 2 to 9
move 6 from 2 to 9
move 5 from 9 to 1
move 7 from 2 to 1
move 21 from 1 to 7
move 2 from 1 to 2
move 5 from 2 to 3
move 2 from 4 to 3
move 10 from 5 to 4
move 11 from 4 to 7
move 5 from 3 to 1
move 1 from 4 to 2
move 2 from 8 to 3
move 7 from 9 to 3
move 3 from 9 to 1
move 9 from 7 to 9
move 1 from 3 to 4
move 3 from 9 to 4
move 5 from 9 to 3
move 4 from 3 to 8
move 22 from 7 to 8
move 10 from 3 to 5
move 1 from 9 to 4
move 8 from 1 to 5
move 3 from 4 to 9
move 1 from 3 to 6
move 2 from 1 to 7
move 1 from 4 to 3
move 1 from 4 to 7
move 1 from 2 to 1
move 1 from 6 to 9
move 1 from 3 to 7
move 1 from 1 to 7
move 4 from 9 to 3
move 22 from 8 to 5
move 37 from 5 to 9
move 37 from 9 to 6
move 3 from 7 to 9
move 2 from 8 to 6
move 1 from 9 to 3
move 2 from 5 to 1
move 1 from 2 to 5
move 7 from 6 to 4
move 18 from 6 to 2
move 1 from 3 to 7
move 1 from 5 to 4
move 1 from 8 to 5
move 9 from 2 to 5
move 3 from 4 to 6
move 2 from 2 to 7
move 5 from 2 to 3
move 1 from 8 to 1
move 1 from 9 to 4
move 2 from 7 to 8
move 7 from 3 to 7
move 3 from 1 to 3
move 1 from 9 to 5
move 17 from 6 to 2
move 12 from 7 to 9
move 1 from 4 to 8
move 1 from 8 to 4
move 4 from 5 to 2
move 2 from 8 to 9
move 3 from 4 to 2
move 3 from 3 to 7
move 2 from 4 to 3
move 8 from 9 to 1
move 1 from 4 to 2
move 24 from 2 to 1
move 6 from 5 to 1
move 1 from 7 to 4
move 3 from 2 to 8
move 3 from 3 to 7
move 1 from 4 to 6
move 2 from 8 to 5
move 3 from 9 to 4
move 1 from 5 to 3
move 1 from 3 to 5
move 3 from 9 to 8
move 1 from 5 to 7
move 5 from 7 to 9
move 2 from 8 to 4
move 1 from 3 to 2
move 1 from 7 to 3
move 1 from 8 to 5
move 1 from 2 to 9
move 1 from 6 to 2
move 2 from 9 to 8
move 1 from 3 to 7
move 24 from 1 to 3
move 1 from 7 to 6
move 3 from 5 to 1
move 1 from 4 to 3
move 1 from 8 to 6
move 1 from 6 to 4
move 1 from 5 to 4
move 1 from 8 to 5
move 1 from 5 to 7
move 1 from 2 to 5
move 1 from 6 to 3
move 1 from 4 to 9
move 1 from 5 to 7
move 2 from 9 to 2
move 3 from 4 to 8
move 2 from 4 to 3
move 11 from 1 to 9
move 7 from 9 to 1
move 9 from 1 to 9
move 1 from 3 to 7
move 3 from 7 to 4
move 2 from 2 to 6
move 2 from 4 to 1
move 1 from 6 to 7
move 22 from 3 to 7
move 1 from 3 to 5
move 1 from 5 to 2
move 1 from 6 to 7
move 5 from 1 to 9
move 1 from 8 to 5
move 1 from 2 to 1
move 15 from 9 to 4
move 6 from 9 to 6
move 14 from 4 to 1
move 5 from 6 to 2
move 1 from 5 to 1
move 9 from 1 to 4
move 5 from 1 to 3
move 3 from 2 to 6
move 2 from 8 to 1
move 5 from 1 to 9
move 10 from 7 to 8
move 3 from 3 to 8
move 2 from 8 to 7
move 5 from 4 to 9
move 3 from 3 to 5
move 1 from 6 to 9
move 1 from 3 to 9
move 1 from 3 to 6
move 1 from 3 to 7
move 2 from 6 to 9
move 2 from 4 to 1
move 13 from 9 to 8
move 2 from 1 to 4
move 6 from 4 to 9
move 1 from 6 to 2
move 1 from 2 to 3
move 3 from 5 to 3
move 4 from 3 to 2
move 7 from 9 to 2
move 1 from 6 to 4
move 4 from 2 to 5
move 2 from 2 to 1
move 4 from 5 to 8
move 1 from 4 to 2
move 6 from 2 to 1
move 2 from 2 to 1
move 22 from 8 to 2
move 16 from 7 to 4
move 14 from 2 to 7
move 7 from 8 to 2
move 4 from 7 to 1
move 14 from 2 to 1
move 10 from 7 to 1
move 1 from 7 to 3
move 1 from 3 to 4
move 1 from 2 to 5
move 25 from 1 to 5
move 1 from 5 to 3
move 4 from 4 to 2
move 13 from 4 to 6
move 4 from 2 to 1
move 3 from 6 to 2
move 9 from 1 to 2
move 22 from 5 to 4
move 1 from 2 to 7
move 8 from 1 to 5
move 1 from 4 to 5
move 15 from 4 to 3
move 11 from 2 to 1
move 1 from 7 to 3
move 2 from 5 to 1
move 13 from 3 to 5
move 10 from 6 to 7
move 1 from 3 to 4
move 1 from 3 to 6
move 1 from 3 to 9
move 1 from 9 to 5
move 1 from 6 to 2
move 6 from 4 to 9
move 1 from 3 to 7
move 1 from 5 to 1
move 3 from 5 to 6
move 1 from 4 to 3
move 12 from 5 to 6
move 1 from 2 to 8
move 4 from 1 to 7
move 1 from 3 to 2
move 1 from 2 to 6
move 9 from 6 to 4
move 1 from 8 to 7
move 3 from 1 to 2
move 2 from 2 to 5
move 5 from 4 to 6
move 1 from 4 to 6
move 6 from 7 to 3
move 6 from 5 to 7
move 12 from 7 to 4
move 1 from 2 to 8
move 6 from 9 to 5
move 1 from 8 to 9
move 1 from 3 to 6
move 4 from 4 to 1
move 1 from 7 to 9
move 4 from 4 to 6
move 2 from 9 to 7
move 7 from 5 to 1
move 3 from 1 to 4
move 4 from 3 to 1
move 10 from 6 to 9
move 1 from 3 to 5
move 8 from 4 to 6
move 2 from 5 to 2
move 4 from 7 to 4
move 1 from 5 to 9
move 5 from 4 to 7
move 1 from 4 to 8
move 2 from 2 to 6
move 1 from 5 to 3
move 4 from 9 to 6
move 11 from 6 to 8
move 1 from 1 to 4
move 1 from 4 to 1
move 1 from 3 to 1
move 10 from 1 to 4
move 3 from 9 to 5
move 1 from 9 to 3
move 2 from 7 to 4
move 3 from 9 to 4
move 3 from 5 to 8
move 1 from 3 to 5
move 15 from 8 to 2
move 8 from 1 to 4
move 2 from 1 to 2
move 10 from 2 to 3
move 1 from 5 to 7
move 3 from 7 to 8
move 10 from 3 to 5
move 4 from 4 to 2
move 7 from 4 to 1
move 2 from 7 to 4
move 1 from 8 to 9
move 5 from 1 to 6
move 13 from 6 to 2
move 2 from 1 to 4
move 15 from 4 to 5
move 1 from 9 to 3
move 1 from 3 to 4
move 2 from 8 to 3
move 20 from 2 to 6
move 3 from 2 to 8
move 2 from 3 to 8
move 9 from 5 to 2
move 6 from 5 to 9
move 2 from 4 to 1
move 8 from 5 to 4
move 2 from 8 to 1
move 5 from 9 to 5
move 3 from 5 to 7
move 1 from 8 to 2
move 2 from 4 to 1
move 14 from 6 to 4
move 2 from 1 to 8
move 5 from 6 to 3
move 3 from 1 to 6
move 5 from 3 to 2
move 1 from 9 to 6
move 8 from 6 to 2
move 2 from 7 to 4
move 1 from 1 to 3
move 2 from 5 to 8
move 5 from 4 to 3
move 2 from 5 to 3
move 1 from 7 to 5
move 4 from 4 to 3
move 2 from 4 to 2
move 1 from 3 to 7
move 5 from 3 to 7
move 1 from 7 to 3
move 3 from 3 to 2
move 1 from 5 to 9
move 2 from 7 to 9
move 1 from 9 to 5
move 1 from 5 to 3
move 10 from 4 to 9
move 3 from 3 to 9
move 27 from 2 to 5
move 3 from 8 to 3
move 2 from 2 to 6
move 4 from 9 to 7
move 5 from 3 to 8
move 5 from 7 to 3
move 25 from 5 to 1
move 3 from 9 to 8
move 1 from 3 to 2
move 1 from 5 to 3
move 2 from 7 to 9
move 10 from 8 to 7
move 1 from 2 to 3
move 13 from 1 to 7
move 3 from 9 to 7
move 3 from 3 to 1
move 1 from 5 to 8
move 2 from 8 to 6
move 4 from 6 to 5
move 4 from 5 to 6
move 1 from 4 to 6
move 23 from 7 to 9
move 2 from 6 to 8
move 28 from 9 to 1
move 1 from 8 to 1
move 3 from 7 to 3
move 1 from 9 to 4
move 3 from 3 to 6
move 3 from 3 to 4
move 6 from 6 to 8
move 12 from 1 to 7
move 9 from 1 to 6
move 3 from 6 to 3
move 2 from 4 to 7
move 4 from 8 to 7
move 1 from 8 to 5
move 1 from 8 to 4
move 8 from 1 to 7
move 1 from 3 to 4
move 1 from 8 to 3
move 3 from 7 to 5
move 9 from 1 to 3
move 3 from 6 to 5
move 3 from 1 to 7
move 4 from 4 to 2
move 3 from 1 to 4
move 4 from 2 to 8
move 1 from 6 to 2
move 3 from 5 to 6
move 4 from 8 to 5
move 9 from 7 to 6
move 12 from 7 to 1
move 5 from 7 to 3
move 1 from 9 to 7
move 1 from 2 to 9
move 1 from 9 to 4
move 7 from 6 to 3
move 5 from 6 to 2
move 1 from 7 to 6
move 3 from 6 to 1
move 2 from 4 to 9
move 7 from 5 to 8
move 2 from 9 to 4
move 1 from 5 to 8
move 4 from 4 to 1
move 11 from 1 to 7
move 8 from 3 to 1
move 8 from 8 to 6
move 3 from 3 to 5
move 5 from 6 to 1
move 2 from 1 to 2
move 6 from 2 to 3
move 2 from 6 to 7
move 3 from 5 to 4
move 7 from 3 to 9
move 5 from 9 to 5
move 3 from 4 to 3
move 4 from 5 to 2
move 2 from 9 to 4
move 6 from 1 to 9
move 1 from 6 to 9
move 7 from 7 to 1
move 1 from 7 to 3
move 2 from 4 to 5
move 1 from 9 to 1
move 4 from 2 to 3
move 2 from 5 to 2
move 9 from 3 to 1
move 3 from 2 to 4
move 28 from 1 to 6
move 2 from 1 to 3
move 17 from 6 to 3
move 2 from 9 to 5
move 2 from 6 to 7
move 1 from 5 to 7
move 1 from 9 to 4
move 5 from 6 to 9
move 14 from 3 to 5
move 15 from 5 to 9
move 1 from 4 to 9
move 1 from 5 to 6
move 1 from 4 to 1
move 11 from 3 to 6
move 1 from 1 to 6
move 12 from 6 to 8
move 4 from 9 to 7
move 20 from 9 to 4
move 18 from 4 to 5
move 6 from 5 to 8
move 12 from 8 to 2
move 2 from 2 to 6
move 1 from 5 to 2
move 4 from 4 to 8
move 5 from 5 to 9
move 4 from 3 to 6
move 1 from 3 to 8
move 7 from 7 to 8
move 10 from 2 to 8
move 1 from 6 to 3
move 10 from 6 to 5
move 10 from 5 to 2
move 2 from 7 to 5
move 9 from 2 to 1
move 27 from 8 to 9
move 2 from 2 to 7
move 9 from 1 to 2
move 1 from 5 to 3
move 9 from 2 to 1
move 1 from 8 to 7
move 2 from 1 to 3
move 19 from 9 to 1
move 5 from 5 to 1
move 3 from 9 to 2
move 2 from 3 to 9
move 1 from 3 to 4
move 5 from 7 to 4
move 1 from 7 to 3
move 17 from 1 to 2
move 1 from 5 to 3
move 9 from 9 to 5
move 2 from 1 to 2
move 1 from 4 to 9
move 2 from 4 to 6
move 1 from 4 to 7
move 6 from 1 to 8
`
let crateStack2 = [...crateStack];
console.log(crateStack2);
let data = crateChanges.split(/\n/).map(x => x.split(/move | from | to /).filter(x=> x!=''));
data.pop();
data.shift();
console.log(data);


// part 1
for (move of data){
    let elementsToMove = parseInt(move[0]);
    let elementsMovedFrom = parseInt(move[1]);
    let elementsMovedTo = parseInt(move[2]);
    let currentMove = 0;
    let stackTo = crateStack[elementsMovedTo-1]
    let stackFrom = crateStack[elementsMovedFrom -1]
    while (currentMove < elementsToMove){
        stackTo.push(stackFrom.pop());
        currentMove+=1
    }

}
for (i of crateStack){
    console.log(i[i.length-1])
}

//part 2
console.log(crateStack2)
for (move of data){
    let elementsToMove = parseInt(move[0]);
    let elementsMovedFrom = parseInt(move[1]);
    let elementsMovedTo = parseInt(move[2]);
    let currentMove = 0;
    let movingElements = [];
    let stackTo = crateStack2[elementsMovedTo-1]
    let stackFrom = crateStack2[elementsMovedFrom -1]
    // console.log(stackTo)
    while (currentMove < elementsToMove){
        let movingElement = stackFrom.pop();
        // console.log(movingElement);
        movingElements.unshift(movingElement);
        currentMove+=1

    }
    console.log(movingElements);
    stackTo.splice(stackTo.length, 0,...movingElements);
    console.log(stackTo)
}
console.log('ANSWER part 2')
console.log(crateStack2);
for (i of crateStack2){
    console.log(i[i.length-1])
}

// PQTJRSHWS

