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
