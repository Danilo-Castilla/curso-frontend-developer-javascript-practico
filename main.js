const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const deployMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#prductDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
deployMenuIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarIcon)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {

    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsaidClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {

    const isAsaidClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaidClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarIcon() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){

    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 220,
    img: 'https://cdn.pixabay.com/photo/2012/04/18/03/09/tv-36723__340.png'
})

productList.push({
    name: 'PC',
    price: 1120,
    img: 'https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_960_720.jpg'
})


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('Img')
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const emptyDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        emptyDiv.appendChild(productPrice)
        emptyDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(emptyDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
    
}

renderProducts(productList);