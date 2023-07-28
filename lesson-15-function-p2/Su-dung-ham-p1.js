
<!--Bài 1-->
function alertMessage(a) {
    return alert(a);
}

<!--Bài 2-->
function plus1(num) {
    document.getElementById("result").innerHTML = ++num;
}

<!--Bài 3-->
// let x = +prompt("Nhập số a")
// let y = +prompt("Nhập số b")
// function bai3(a,b) {
//  if (a > b) {
//      alertMessage("Số a lớn hơn b")
//  } else {
//      document.write(a+b)
//  }
// }
// bai3(x,y)

// Bài 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert(result);
result = addNumbers();
alert(result);

//Bài 5

