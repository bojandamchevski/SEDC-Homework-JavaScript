// var arrRandom = [1,3,2,5,"yes",true,false,null,3,5,3,["a","b","c"],6,2,4,"sedc",NaN];

// function arr(inputArray){
//     let newArray = [];
//     for(let i of inputArray){
//         if(!!i){
//             newArray.push(i);
//         }
//     }
//     return newArray;
// }

// let result = arr(arrRandom);
// console.log(result);


var arr = [2,,2,3,4,3,5,5,["a","b","c"], null,false,true, "sedc", 0];


function check(inputArray) {
    let newArray = []
    for(let item of inputArray) {
        if(!!item) {
            newArray.push(item);
        }
    }
    return newArray;
}

let newArray = check(arr);
console.log(newArray);