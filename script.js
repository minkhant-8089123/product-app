const url = "https://fakestoreapi.com/products";
fetch(url)
        .then((response) => {
            const responseData = response.json();
            return responseData;
        })
        .then((productDataFromServer) => {
            products = productDataFromServer;
            console.log("products: ", products);
        })
        .catch((error) => {
            console.log("Inside catch: ", error);
        });

const searchBox = document.getElementsByClassName("searchBox")[0];

const resultContainer = document.getElementsByClassName("resultContainer")[0];

searchBox.addEventListener("keyup", (event) => {
    resultContainer.innerHTML = "";
    const searchText = event.target.value.toLowerCase();
    if (searchText.length === 0){
        return;
    }

    const filteredProducts = products.filter ((product) => {
    return product.title.toLowerCase().includes(searchText);
    });
    const hasProductsToShow = filteredProducts.length > 0;
    if(hasProductsToShow) {
        for (let i = 0; i < filteredProducts.length; i++) {
            const productItemContainer = document.createElement("div");
            productItemContainer.id = filteredProducts[i].id;
            productItemContainer.classList.add("productItemContainer");

            const productItemContainerImage = document.createElement("div");
            productItemContainerImage.classList.add("productItemContainerImage");

            const productText = document.createElement("div");
            productText.classList.add("productText");

            const productIconContainer = document.createElement("div");
            productIconContainer.classList.add("productIconContainer");

            const productImage = document.createElement("img");
            productImage.classList.add("productImage");
            productImage.src = filteredProducts[i].image;
      
            const productName = document.createElement("div");
            productName.classList.add("productName");
            productName.append(filteredProducts[i].title);

            const productPrice = document.createElement("div");
            productPrice.classList.add("productName");
            productPrice.append("Price: ", filteredProducts[i].price, " K");

            const productIcon = document.createElement("i");
            productIcon.classList.add("fa-regular", "fa-star", "productIcon");
            
            productItemContainerImage.append(productImage);
            productText.append(productName, productPrice);
            productIconContainer.append(productIcon);
            productItemContainer.append(productItemContainerImage,productText,productIconContainer);
            resultContainer.append(productItemContainer);
        }
    }
})