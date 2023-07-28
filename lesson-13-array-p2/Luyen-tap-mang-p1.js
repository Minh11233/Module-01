
var array = [12,3,2,111,7,12,5,64,6,23]
var array1 = [-2,3,45,3,-2,-434,65,-8]

// Bài 1
function showBiggerThan10() {
    let newArray = []
    for (i = 0; i < 10;i++) {
        if (array[i] < 10) {
            newArray.push();
        } else {
            newArray.push(array[i]);
        }
    }
    let str = newArray.join();
    document.getElementById("result").innerHTML = `Số lượng phần tử lớn hơn 10 là ${newArray.length} và chúng là ${str}`
}

// Bài 2
function maxArray() {
    let numberOrder = array.sort(function (a,b){
        return a -b
    }
    )
    let max = numberOrder[array.length-1]
    let maxposition = array.indexOf(max)
    document.getElementById("result2").innerHTML = `Số lớn nhát trong mảng là ${max} nằm ở vị trí ${maxposition}`
}

// Bài 3
function averageArr() {
    let sum = array[0];
    let result;
    for (let i = 1; i < array.length; i++) {
        sum += array[i]
    }
    document.getElementById("result3").innerHTML = `Trung bình của các phàn tử trong mảng là ${sum/array.length}`
}

// Bài 4
function reverse() {
    newArray = array.slice().reverse();
    document.getElementById("result4").innerHTML = `Mảng được đảo ngược là ${newArray}`
}

// Bài 5
function countNegative() {
    let count = 0;
    for (i = 0; i < array1.length; i++) {
        if (array1[i] < 0) {
            count++
        }
    }
    document.getElementById("result5").innerHTML = `Số lương phần tử nguyên âm là ${count++}`
}

// Bài 7
function findV() {
    let V = 5;
    let array2 = [12,3,2,111,7,12,5,64,6,23];
    for (let i = 0; i < array2.length; i++) {
        if ( V == array2[i]) {
            array2.splice(array2[i],1)
        }
    }
    document.getElementById("result7").innerHTML = array2;
}

// Bài 8
function numberReverseOrder() {
    let numberReverseOrder = array.sort(function (a,b) {
        return b-a;
    })
    document.getElementById("result8").innerHTML = numberReverseOrder;
}
// Bài 9

function combineArr() {
    let combineArr = array.concat(array1);
    document.getElementById("result9").innerHTML = combineArr;
}

















