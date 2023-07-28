let product = [
    "Điện thoại Xiaomi Redmi Note 11",
    "Điện thoại iPhone 13 128GB",
    "Điện thoại iPhone 11 64GB",
    "Điện thoại POCO C40",
    "Điện thoại Samsung Galaxy A03 4GB",
    "Điện thoại OPPO A54",
    "Điện thoại OPPO A16K",
    "Điện thoại Xiaomi Redmi 9A",
    "Điện thoại Samsung Galaxy A13 6GB",
    "Điện thoại Samsung Galaxy A23 6GB",]

function showProduct() {
    let table;
    table = "<table cellspacing='0';>"
    table += "<tr>" + "<td>" + "<strong>" + "STT" + "</strong>" + "</td>" + "<td width='430px'>" + "<strong>" + "Sản phẩm" + "</strong>" + "<td width='60px'>" + "</td>" + "<td width='91px'>" + "</td>" + "</tr>"
    for (var i = 0; i < product.length; i++) {
        table += "<tr>";
        let numberOrder = i + 1;
        for (let j = 0; j < 1; j++) {

            table += "<td style='text-align: center'>" + numberOrder + "</td>" +
                "<td style='padding-right: 150px; width: 300px'>" + product[i] + "</td>" +
                "<td>" + "<button onclick='editItem("+ i +")'>Edit</button>" + "</td>" +
                "<td>" + "<button onclick='removeItem("+ i +")'>Remove</button>" + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("result").innerHTML = table;
}

showProduct()

function addProduct() {
    let newProduct = document.getElementById("NewProduct").value;
    if (newProduct !== "") {
        product.push(newProduct);
    }
    showProduct()
}

function editItem(editProduct) {
    product.splice(product.indexOf(product[editProduct]), 1, `<input id="${editProduct}" value="${product[editProduct]}" onfocusout='updateProduct(${editProduct})' style='width: 350px; height: 20px'>`)
    showProduct()
}
function updateProduct(updateProduct) {
    var newProduct = document.getElementById(`${updateProduct}`).value;
    product.splice(product.indexOf(product[updateProduct]), 1, newProduct)
    showProduct()
}

function removeItem(removeProduct) {
    if (confirm("Bạn muốn xoá sản phẩm ra khỏi danh sách?")) {
        product.splice(product.indexOf(product[removeProduct]), 1)
    }
    showProduct()
}

