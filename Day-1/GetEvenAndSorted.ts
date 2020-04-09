//Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only the even numbers, but sorted.[12,3,2,1,7,6].getEvenAndSort()

var getEvenAndSorted = (arr: number[]) => { 
    let arr1 = new Array();
    arr.sort();
    var i: any;
    for (i in arr) { 
        if (i % 2 == 0) { 
            arr1.push(i);
        }
    }
    return arr1;
}

const myArr = getEvenAndSorted([2, 6, 9, 0, 1, 3, 4]);
console.log(myArr);