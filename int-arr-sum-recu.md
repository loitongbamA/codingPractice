# sum of array of integers using recursion

## method 1

```js
const inputNumArr = [1,2,3,4];

const sumRec = (numsArr, sum = 0) => {
    if(numsArr.length){     
        sum += numsArr.pop();
        sum = sumRec(numsArr, sum);
    }
    
    return sum;
}

console.log(sumRec(inputNumArr)) // 10
```

## method 2

```js
const inputNumArr = [1,2,3,4,5,6,7,8,9,0];

function sumRec (numArr, i = 0, sum = 0){
    if(numArr && i < numArr.length ){
        sum += numArr[i];
        sum = sumRec(numArr, ++i, sum)
    }
    
    return sum;
}

console.log(sumRec(inputNumArr));
```
