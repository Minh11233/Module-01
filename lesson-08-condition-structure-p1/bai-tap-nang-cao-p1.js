<!--Bài tập 1-->
function checkMod() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let result = ""
    if (a % b == 0) {
        result = `Số ${a} chia hết cho ${b}`
    } else {
        result = `Số ${a} không chia hết cho ${b}`
    }
    document.getElementById("result1").innerHTML = result;
}

<!--Bài tập 2-->
function checkAge() {
    let age = document.getElementById("student-age").value; // trong khi bài tập 2 lại k cần
    let result = ""
    console.log(typeof age);
    if (age >= 15) {
        result = "Học sinh đủ tuổi vào lớp 10";
    } else {
        result = "Học sinh không đủ tuổi vào lớp 10";
    }
    document.getElementById("result2").innerHTML = result;
}

<!--Bài tập 3-->
function checkInt() {
    let int = +document.getElementById("integer").value; // tại sao phải ép số trong khi type là number
    let result = ""
    if (int >= 0 && Number.isInteger(int)) {
        result = `Số ${int} là số nguyên dương`;
    } else if (int < 0 && Number.isInteger(int)) {
        result = `Số ${int} là số nguyên âm`;
         } else {
        result = "Vui lòng nhập số nguyên!";
    }
    document.getElementById("result3").innerHTML = result;
}

<!--Bài tập 4-->
function checkMax() {
    let a = document.getElementById("1st_num").value;
    let b = document.getElementById("2nd_num").value;
    let c = document.getElementById("3rd_num").value;
    let result = "";
    if (a > b) {
        if (a > c) {
            result = `Số ${a} là số lớn nhất`;
        } else {
            result = `Số ${c} là số lớn nhất`;
        }
    } else {
        if (b > c) {
            result = `Số ${b} là số lớn nhất`;
        } else {
            result = `Số ${c} là số lớn nhất`;
        }
    }
    document.getElementById("result4").innerHTML = result;
}

<!--Bài tập 5-->
function checkRank() {
    let a = +document.getElementById("test").value;
    let b = +document.getElementById("mid-sem").value;
    let c = +document.getElementById("final-sem").value;
    let average = (a+b+c*c)/4;
    console.log(average);
    let result = "";

    if (average >= 9) {
        result = "Con bạn đạt danh hiệu HS Xuất Sắc";
    } else if (9 > average >= 7 ) {
        result = "Con bạn đạt danh hiệu HS Giỏi";
    } else if (7 > average >= 5 ) {
        result = "Con bạn học hơi DỐT";
    } else {
        result = "Con bạn ở lại lớp";
    }
    document.getElementById("result5").innerHTML = result;
}

<!--Bài tập 6-->
function checkCom() {
    let com = +document.getElementById("com").value;
    let result = "";
    if (com < 100) {
        result = `Hoa hồng bạn nhận được là ${com*0.05} triệu VNĐ`;
    } else if (100 < com <= 300) {
        result = `Hoa hồng bạn nhận được là ${com*0.1} triệu VNĐ`;
    } else {
        result = `Hoa hồng bạn nhận được là ${com*0.2} triệu VNĐ`;
    }
    document.getElementById("result6").innerHTML = result;
}

<!--Bài tập 7-->
function checkCost() {
    const COST = 25000;
    let timecall = +document.getElementById("minute").value;
    let result = "";
    if (timecall < 50) {
        result = `Cước điện thoại bàn của khách là ${COST+timecall*600} VNĐ`;
    } else if (50 < timecall <= 200)
        result = `Cước điện thoại bàn của khách là ${COST+(timecall-50)*400+50*600} VNĐ`;
    else {
        result = `Cước điện thoại bàn của khách là ${COST+(timecall-200)*200+200*400+50*600} VNĐ`;
    }
    document.getElementById("result7").innerHTML = result;
}