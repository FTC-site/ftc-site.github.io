const json_bin = "https://api.npoint.io/7de8cd42317a93c47a99"

let cart = JSON.parse(localStorage.getItem("cart_cache"))

if (cart == null) cart = []

const sku = document.getElementById("sku").innerText.replace(/\D/g,'');

let record = null

fetch("https://api.npoint.io/7de8cd42317a93c47a99")
  .then(res => res.json())
  .then(dta => data(dta))

function data(dta) {
    console.log("dta", dta)
    record = dta
    console.log("Record", record)
}

function sku_item(sku) {
    let exist = cart.filter(_item => sku == _item.sku)
    return record[exist]
}

function cart_add_sku() {
    console.log(sku)
    let item = sku_item(sku)
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