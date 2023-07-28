// Bài 1
function bai1() {
    let num = prompt("Nhập số")
    function square(a) {
        return a*a
    }
    let result = square(num)
    document.getElementById("result1").innerHTML = `Bình phương của ${a} là ${result}`;
}

// Bài 2
function bai2() {
    let inputWidth = +prompt("Nhập chiều dài HCN (đơn vị:cm)")
    let inputHeight = +prompt("Nhập chiều cao HCN (đơn vị:cm)")
    function perimeter(a,b) {
        return (a+b)*2
    }
    function area(a,b) {
        return a*b
    }
    let dt = perimeter(inputWidth,inputHeight)
    let cv = area(inputWidth,inputHeight)
    document.getElementById("result2").innerHTML = `Diện tích và chu vi của HCN lần lượt là ${dt} cm2 và ${cv} cm`
}

// Bài 3
function getTotalFactorial() {
    let input = +document.getElementById("input").value;
    function totalFactorial (num) {
        let total = 1;
        for (let i = 1; i <= num; i++) {
            total *= i;
        } return total
    }
    let result = totalFactorial(input);
    document.getElementById("result3").innerHTML = result;
}

// Bài 4
function isNaNTrue() {
    let result = "";
    let number = +document.getElementById("inputIsNaN").value;
    function checkIsNaN(x) {
        if (isNaN(x)) {
            result = "Không phải là số";
        } else {
            result = `Số bạn vừa nhập là ${number}`;
        }
        return result;
    }
    let a = checkIsNaN(number);
    document.getElementById("result4").innerHTML = a;
}


//Bài 5

function isSmallestz () {
    let num1 = prompt("Nhập số đầu tiên");
    let num2 = prompt("Nhập số thứ hai")
    let num3 = prompt("Nhập số thứ ba")
    function findSmallest (a,b,c) {
        let arr = [];
        arr.push(a);
        arr.push(b);
        arr.push(c);
        let newArr = arr.sort(function (a1,b1) {
            return a1-b1;
        })
        let s = newArr.shift()
        alert(`Số nhỏ nhất trong 3 số vừa nhập là ${s}`)
    }
    findSmallest(num1,num2,num3);
}

// Bài 6
function checkInt() {
    let num = +prompt("Nhập số vào đây")
    check(num);
    function check(a) {
        if (Number.isInteger(a) && a > 0) {
            alert("Số bạn vừa nhập là số nguyên dương")
        } else if (Number.isInteger(a) && a < 0) {
            alert("Số bạn vừa nhập là số nguyên âm")
        } else if (a == 0) {
            alert("Số bạn vừa nhập là số 0")
        } else {
            alert("Vui lòng nhập lại")
        }
    }
}


































