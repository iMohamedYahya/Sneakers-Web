function incrementValue()
{
    var number = document.getElementById('number')
    var error = document.getElementById('x')
    var icons = document.getElementById('plus')
    number.innerHTML++
    if (parseInt(number.innerHTML) > 5){
        error.style.display="block"
        if(parseInt(number.innerHTML) > 5){
            number.innerHTML--
        }
    }else if(parseInt(number.innerHTML) === 5){
        icons.style.opacity = '50%'
    }
}
function decrementValue()
{
    var number = document.getElementById('number')
    var icons = document.getElementById('plus')
    var error = document.getElementById('x')
    if (parseInt(number.innerHTML) > 0){
        number.innerHTML--
        if (parseInt(number.innerHTML) !== 5){
            icons.style.opacity = '100%'
        }
        if(parseInt(number.innerHTML) < 5){
            error.style.display="none"
        }
    }
}
function addItem()
{
    var items = document.getElementById('items')
    var number = document.getElementById('number')
    if (parseInt(number.innerHTML) > 0){
        items.style.opacity = '1'
        items.innerHTML = number.innerHTML
    }
}
function product11()
{
    var photo1 = document.getElementById("product1")
    var photo2 = document.getElementById("product2")
    var photo3 = document.getElementById("product3")
    var photo4 = document.getElementById("product4")
    var image1 = document.getElementById('product0')
        image1.setAttribute("src","image-product-1.jpg")
        photo1.style.opacity ="50%"
        photo2.style.opacity = "100%"
        photo3.style.opacity = "100%"
        photo4.style.opacity = "100%"

}

function product22()
{
    var photo1 = document.getElementById("product1")
    var photo2 = document.getElementById("product2")
    var photo3 = document.getElementById("product3")
    var photo4 = document.getElementById("product4")
    var image2 = document.getElementById('product0')
        image2.setAttribute("src","image-product-2.jpg")
        photo1.style.opacity ="100%"
        photo2.style.opacity = "50%"
        photo3.style.opacity = "100%"
        photo4.style.opacity = "100%"
}
function product33()
{
    var photo1 = document.getElementById("product1")
    var photo2 = document.getElementById("product2")
    var photo3 = document.getElementById("product3")
    var photo4 = document.getElementById("product4")
    var image3 = document.getElementById('product0')
        image3.setAttribute("src","image-product-3.jpg")
        photo1.style.opacity ="100%"
        photo2.style.opacity = "100%"
        photo3.style.opacity = "50%"
        photo4.style.opacity = "100%"
}

function product44()
{
    var photo1 = document.getElementById("product1")
    var photo2 = document.getElementById("product2")
    var photo3 = document.getElementById("product3")
    var photo4 = document.getElementById("product4")
    var image4 = document.getElementById('product0')
        image4.setAttribute("src","image-product-4.jpg")
        photo1.style.opacity ="100%"
        photo2.style.opacity = "100%"
        photo3.style.opacity = "100%"
        photo4.style.opacity = "50%"
}

