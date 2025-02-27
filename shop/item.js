const json_bin = "https://api.jsonbin.io/v3/qs/67bf5ecde41b4d34e49d3c36"

let cart = JSON.parse(localStorage.getItem("cart_cache"))

const sku = document.getElementById("sku").innerText.replace(/\D/g,'');

let record = null

fetch("https://api.jsonbin.io/v3/qs/67bf5ecde41b4d34e49d3c36")
  .then(res => res.json())
  .then(dta => data(dta))

function data(dta) {
    console.log("dta", dta)
    record = dta
    console.log("Record", record)
}


function item(sku) {
    data.forEach(_item => console.log(_item))
}

function cart_add_sku() {
    console.log(sku)
    if (cart.length == 0) 
        cart.push(item)
    else { 
        let exist = cart.filter(_item => sku == _item.sku)
        if (exist.length != 0) {
            cart.find(_item =>  _item.quantity += 1)
        } else {
            cart.push(item)
        }
     }
}

function cart_quantity() {
    let quantity = JSON.parse(localStorage.getItem("cart_quantity"))
    console.log("_quantity", quantity)
    if (!quantity) quantity = 0
    let quantity_button = document.getElementById("shop_quantity")
    quantity_button.innerText = quantity
}

function quantity() {
    let quantity = 0;
    const _cart = JSON.parse(localStorage.getItem("cart_cache")) 
    _cart.forEach(item => quantity += item.quantity)
    console.log("quantity", quantity)
    localStorage.setItem("cart_quantity", quantity)
    cart_quantity()
}

quantity()