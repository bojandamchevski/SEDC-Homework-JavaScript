let arrayNumbers = [1,2,3,"hello",4,5,6,7,8,9,10];

function oddEven(arr){
    let evenArr = [];
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            console.log("Something is not a number");
        }
        else{
            if(arr[i] % 2 == 0){
                evenArr.push(arr[i]);
            }
            else{
                oddArr.push(arr[i]);
            }
        }
    }
    return [oddArr, evenArr];
    // console.log(evenArr);
    // console.log(oddArr);
}

let result = oddEven(arrayNumbers);
console.log(result);