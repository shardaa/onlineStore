function getItems() {
    db.collection("items")
        .get()
        .then((querySnapshot) => {

            let items = [];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    name: doc.data().name,
                    image: doc.data().image,
                    price: doc.data().price,
                    rating: doc.data().rating,
                    make: doc.data().make,
                });
            });
            generateItems(items);
        });
}

function addToCart(data) {
    let cartItem = db.collection("cart-items").doc(data.id)
    cartItem.get().then(function (doc) {
        if (doc.exists) {
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            cartItem.set({
                name: data.name,
                image: data.image,
                price: data.price,
                rating: data.rating,
                make: data.make,
                quantity: 1
            })
        }
    })

}

function generateItems(items) {

    let itemsHTML = "";
    items.forEach((data) => {
        let doc = document.createElement("div")
        doc.classList.add("main-product", "mr-5")
        doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
            <img class="w-full h-full object-contain"
                src="${data.image}" alt="">
                </div>
                <div class="product-name font-bold mt-2 text-sm">
                    ${data.name}
                </div>
                <div class="product-make text-green-700 font-bold">
                    ${data.make}
                </div>
                <div class="product-rating text-yellow-300 font-bold my-1">
                    ⭐⭐⭐⭐⭐ ${data.rating}
                </div>
                <div class="product-price font-bold text-lg">
                    ${data.price}
                </div>
                
        `

        let addToCartEl = document.createElement("div")
        addToCartEl.classList.add("add-to-cart", "h-8", "w-28", "bg-yellow-500", "flex", "justify-center", "items-center", "rounded", "cursor-pointer", "hover:bg-yellow-600", "text-white", "mt-2")

        addToCartEl.innerText = "Add to cart"
        addToCartEl.addEventListener("click", function () {
            addToCart(data)
        })

        doc.appendChild(addToCartEl)
        document.querySelector(".main-section-product").appendChild(doc)


    });

}
getItems();