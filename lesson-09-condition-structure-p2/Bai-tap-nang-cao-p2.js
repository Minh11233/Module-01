<!--Bài 1-->
function changeTemp() {
    let tempC = +document.getElementById("tempC").value;
    let tempF = tempC * 9 / 5 + 32;
    let result = "";

    result = `Độ F - Fahrenheit (°F) là: ${tempF}`
    document.getElementById("result").innerHTML= result;
}

<!--Bài 2-->
function changeLengthUnit() {
    let m = +document.getElementById("meter").value;
    const CHANGE = 3.2808
    let ft = m*3.2808;
    let result = "";

    result = `Chiều dài theo đơn vị feet(ft) là: ${ft}`;
    document.getElementById("result2").innerHTML= result;
}

<!--Bài 3-->
function areaSquare() {
    let edge = +document.getElementById("edge").value;
    let area = Math.pow(edge,2);
    let result = "";

    result = `Diện tích hình vuông là ${area} m2`;
    document.getElementById("result3").innerHTML= result;
}

<!--Bài 4-->
function dtHinhchunhat() {
    let chieudai = document.getElementById("chieudai").value;
    let chieurong = document.getElementById("chieurong").value;
    let result = "";
    let areaHCN = chieudai*chieurong;

    if (areaHCN > 0) {
        result = `Diện tích hình chữ nhật là: ${areaHCN} cm2`
    } else {
        result = "Vui lòng nhập số nguyên dương > 0"
    }

    document.getElementById("result4").innerHTML= result;
}

<!--Bài 5-->
function dttgvuong() {
    let a = document.getElementById("canhke-a").value;
    let b = document.getElementById("canhke-b").value;
    let result = "";
    let areaTGV = a*b/2;

    if (areaTGV > 0) {
        result = `Diện tích hình chữ nhật là: ${areaTGV} cm2`
    } else {
        result = "Vui lòng nhập số nguyên dương > 0"
    }

    document.getElementById("result5").innerHTML= result;
}

<!--Bài 6-->
function ptBac1() {
    let a = +document.getElementById("so-a").value;
    let b = +document.getElementById("so-b").value;
    let x = -b/a;
    let result = "";

    result = `Biến x có giá trị là ${x}`;
    document.getElementById("result6").innerHTML = result;
}

<!--Bài 7-->
function ptBac2() {
    let a = +document.getElementById("so-a1").value;
    let b = +document.getElementById("so-b1").value;
    let c = +document.getElementById("so-c1").value;
    let delta = Math.pow(b,2) - 4*a*c;
    let result = "";

    if (a == 0) {
        result = "Vui lòng nhập số a khác 0"
    } else if (delta < 0) {
        result = "Phương trình vô nghiệm"
    } else if (delta = 0) {
        result = `Phương trình có nghệm kép x1 = x2 = ${-b/2*a}`
    } else {
        result = `Phương trình có 2 nghiệm phân biệt: x1 = ${((-b+Math.sqrt(delta))/2*a)} và x2 = ${((-b-Math.sqrt(delta))/2*a)}`
    }
    document.getElementById("result7").innerHTML = result;

}

<!--Bài 8-->
function checkAge() {
    let age = document.getElementById("age").value;
    let result = "";
    let humanAge = (age > 0) && (age <= 120);

    if (humanAge) {
        result = "Bạn là con người"
    } else {
        result = "Vui lòng nhập lại tuổi"
    }
    document.getElementById("result8").innerHTML = result;

}

<!--Bài 9-->
function checkTriagle() {
    let a = +document.getElementById("canh-a").value;
    let b = +document.getElementById("canh-b").value;
    let c = +document.getElementById("canh-c").value;
    let result = "";
    let dk1 = (a > 0) && (b > 0) && (c > 0);
    let dk2 = a + b > c;
    let dk3 = b + c > a;
    let dk4 = a + c > b;

    if (dk1 && dk2 && dk3 && dk4) {
        result = "Đây là 3 cạnh của một tam giác"
    } else {
        result = "Vui lòng nhập lai thông tin"
    }
    document.getElementById("result9").innerHTML = result;
}

<!--Bài 10-->
function checkGiadien() {
    let kwh = document.getElementById("kWh").value;
    let result = "";

    if (kwh < 100) {
        result = `Giá điện tháng này của nhà bạn là ${kwh*1000} VNĐ`;
    } else if (kwh >100 && kwh <= 150) {
        result = `Giá điện tháng này của nhà bạn là ${100*1000+(kwh-100)*1200} VNĐ`;
    }
    else if (kwh > 150 && kwh <= 200) {
        result = `Giá điện tháng này của nhà bạn là ${100*1000+50*1200+(kwh-150)*2000} VNĐ`;
    }
    else {
        result = `Giá điện tháng này của nhà bạn là ${100*1000+50*1200+50*2000+(kwh-200)*2500} VNĐ`;
    }
    document.getElementById("result10").innerHTML = result;
}

<!--Bài 11-->
function checkThueTNCN() {
    let income = document.getElementById("income").value;
    let result = "";
    let VND = /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/;



    if (income <= 5e6) {
        result = `Thuế TNCN phải nộp: ${0.05*income} VNĐ`
    } else if (income > 5e6 && income <= 1e7) {
        result = `Thuế TNCN phải nộp: ${0.1*income-25e4} VNĐ`
    } else if (income > 1e7 && income <= 18e6) {
        result = `Thuế TNCN phải nộp: ${0.15*income-75e4} VNĐ`
    } else if (income > 18e6 && income <= 32e6) {
        result = `Thuế TNCN phải nộp: ${0.2*income-165e4} VNĐ`
    } else if (income > 32e6 && income <= 52e6)  {
        result = `Thuế TNCN phải nộp: ${0.25*income-325e4} VNĐ`
    } else if (income > 52e6 && income <= 8e7) {
        result = `Thuế TNCN phải nộp: ${0.3*income-585e4} VNĐ`
    } else {
        result = `Thuế TNCN phải nộp: ${0.35*income-985e4} VNĐ`
    }
    document.getElementById("result11").innerHTML = result;
}