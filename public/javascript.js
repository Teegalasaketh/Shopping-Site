document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});


function viewProduct(id) {
    localStorage.setItem("productId", id);
    window.location.href = "sproduct.html";
}

function addToCart(id) {
    const products = getProducts();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === id);
if (existingItem) {
    existingItem.qty += 1;
    showCartMessage("Quantity updated");
} else {
    const product = products[id - 1];
    product.id = id;
    product.qty = 1;
    cart.push(product);
    showCartMessage("Added to cart!");
}
    localStorage.setItem("cart", JSON.stringify(cart));
}
function showCartMessage(msg) {
    const msgBox = document.createElement("div");
    msgBox.innerText = msg;
    msgBox.style.position = "fixed";
    msgBox.style.bottom = "20px";
    msgBox.style.right = "20px";
    msgBox.style.backgroundColor = "#088178";
    msgBox.style.color = "white";
    msgBox.style.padding = "12px 20px";
    msgBox.style.borderRadius = "5px";
    msgBox.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    msgBox.style.fontWeight = "bold";
    msgBox.style.zIndex = "9999";
    msgBox.style.opacity = "0";
    msgBox.style.transition = "opacity 0.5s ease";

    document.body.appendChild(msgBox);
    setTimeout(() => { msgBox.style.opacity = "1"; }, 50);
    setTimeout(() => { msgBox.style.opacity = "0"; }, 2000);
    setTimeout(() => { document.body.removeChild(msgBox); }, 2500);
}
function addToCartAndGo(id) {
    addToCart(id);
    setTimeout(() => {
        window.location.href = "cart.html";
    }, 800); // wait for animation to finish
}

function getProducts() {
    return [
        { img: "images/products/f1.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f2.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f3.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f4.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f5.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f6.jpg", name: "Cartoon Astronaut Shirt", price: "$78.99", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/f7.jpg", name: "Women's Comfort Pant", price: "$45.00", description: "Soft and comfortable pants designed for women. Ideal for casual wear or lounging at home." },
        { img: "images/products/f8.jpg", name: "Women's Top", price: "$45.00", description: "A stylish and versatile women's top suitable for any occasion." },
        { img: "images/products/n1.jpg", name: "Cartoon Astronaut Shirt", price: "$50.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n2.jpg", name: "Cartoon Astronaut Shirt", price: "$60.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n3.jpg", name: "Cartoon Astronaut Shirt", price: "$55.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n4.jpg", name: "Cartoon Astronaut Shirt", price: "$65.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n5.jpg", name: "Cartoon Astronaut Shirt", price: "$70.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n6.jpg", name: "Men's Short", price: "$75.00", description: "Comfortable and stylish men's shorts, perfect for summer outings, sports, or casual wear." },
        { img: "images/products/n7.jpg", name: "Cartoon Astronaut Shirt", price: "$80.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." },
        { img: "images/products/n8.jpg", name: "Cartoon Astronaut Shirt", price: "$90.00", description: "A fun and stylish shirt featuring a cartoon astronaut design. Perfect for space lovers." }
    ];
}