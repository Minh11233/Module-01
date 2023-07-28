<!--Bài 1-->
function startCount() {
    for (let i = 1; i < 100; i++) {
        document.write(i + "<br>");
    }
    alert("Hoàn thành");
}

// <!--Bài 2-->
function checkTemp() {
    let temp = Number(prompt("Nhập nhiệt độ vào đây"));
    while (temp < 20 || temp > 100 || isNaN(temp)) {
        if (temp < 20) {
            temp = Number(prompt("Tăng nhiệt độ"))
        } else if (temp > 100) {
            temp = Number(prompt("Giảm nhiệt độ"))
        } else {
            temp = Number(prompt("Vui lòng nhập số nguyên"))
        }
    }
    document.getElementById("result").innerHTML = "Nhiệt độ là " + temp + "<sup>o</sup>C";
}

<!--Bài 3-->
function Fibo(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return Fibo(n-2) + Fibo(n-1); //2
    }
}
function printFibo() {
    let inputFibo = parseInt(document.getElementById("Fibo").value);
    let count = 0;
    let i = 1;
    let result = `${inputFibo} số đầu tiên của chuỗi Fibonancci là: 0,`
    while (count < inputFibo-1) {
        if (Fibo(i)) {
            result += Fibo(i) + ",";
            i++;
        }
        count++
    }
    document.getElementById("result3").innerHTML = result;
}

<!--Bài 4-->
function Fibo1(n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return Fibo1(n-2) + Fibo1(n-1);
    }
}

function divine5() {
    let i = 1
    let result = `Số fibo đầu tiên chia hết cho 5 là:`
    while (((Fibo1(i)) % 5) != 0) {
        i++;
    }
    document.getElementById("result4").innerHTML = result + i;
}

<!--Bài 5-->
function Fibo2(n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return Fibo1(n-2) + Fibo1(n-1);
    }
}
function totalFibo() {
    let count = 0;
    let inputFibo = document.getElementById("fibo-string").value;
    let total = 0;
    while (count < inputFibo) {
        total += Fibo2(count);
        count++;
    }
    document.getElementById("result5").innerHTML = `Tổng của ${inputFibo} số đầu tiên trong chuỗi Fibonancci là ${total}`;
}

// Bài 6
function total7() {
    let total = 0;
    let str = ""
    input = document.getElementById("inputNum").value;
    for (let i = 1; i <= input; i++) {
        total += 7*i
        str += 7*i + ","
    }
        document.getElementById("result6").innerHTML = `Tổng của ${input} số đầu tiên chia hết cho 7 là ${total} và những số đó là ${str} `
}

//Bài 7
function printNum() {
    str = ""
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str += i + "FizzBuzz"
        } else if (i % 3 == 0) {
            str += i + "Fizz"
        } else if (i % 5 == 0) {
            str += i + "Buzz"
        } else {
            str += i
        }
    }
    document.write(str);
}

// Bài 8

function play() {
    let rangeNum = +prompt("Bạn muốn đoán số trong mảng nào?")
    let numberMax = Math.floor(Math.random() * rangeNum)
    console.log(numberMax);

}




















