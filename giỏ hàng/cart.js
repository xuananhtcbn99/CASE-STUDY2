const btn = document.querySelectorAll("button")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            let btnItem = event.target
            let product = btnItem.parentElement
            let productImg = product.querySelector("img").src
            let productName = product.querySelector("h1").innerText
            let productPrice = product.querySelector("span").innerText
            addCart(productImg, productName, productPrice)
        }
    })
})

function addCart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML== productName) {
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    let trcontent = '<tr>\n' +
        '                <td style="display: flex; align-items: center"><img style="width: 70px" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td>\n' +
        '                <td><p><span class="price">' + productPrice + '</span></p></td>\n' +
        '                <td><input style="width: 30px;outline: none" type="number" value="1" min="1"></td>\n' +
        '                <td style="cursor: pointer"><span class="cart-delete">Xóa</span></td>\n' +
        '            </tr>'
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    cartTable.append(addtr)
    carttotal();
    deleteCart();
}


function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr")
    let totalS = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let productPrice = cartItem[i].querySelector(".price").innerHTML
        totalA = inputValue * productPrice
        totalS = totalS + totalA
        console.log(totalS)
    }
    let cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalS
    let cartPrice = document.querySelector(".cart-icon span")
    cartPrice.innerHTML = totalS
    inputChange();

}
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function (event){
            let cartDelete = event.target;
            let cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })

    }
}
function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function (){
            carttotal()
        })

    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-cart-plus")
cartshow.addEventListener("click",function (){
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function (){
    document.querySelector(".cart").style.right="100%"
})