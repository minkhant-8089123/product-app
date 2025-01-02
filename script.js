const products = [
    {
        id: 27,
        name: "Smartphone",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A high-quality smartphone with cutting-edge features.",
        price: 699.99
    },
    {
        id: 28,
        name: "Smartphone",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A premium smartphone with exceptional performance.",
        price: 749.99
    },
    {
        id: 33,
        name: "T-Shirt",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A comfortable cotton T-shirt available in various colors.",
        price: 19.99
    },
    {
        id: 37,
        name: "Pizza",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A delicious cheesy pizza with your favorite toppings.",
        price: 12.99
    },
    {
        id: 38,
        name: "Ice Cream",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "Creamy ice cream available in multiple flavors.",
        price: 4.99
    },
    {
        id: 39,
        name: "Burger",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A juicy burger made with fresh ingredients.",
        price: 8.99
    },
    {
        id: 40,
        name: "Keyboard",
        categoryId: 1,
        productType: "stockable",
        productCode: "P1",
        isActive: true,
        isAddon: false,
        uomId: 2,
        description: "A durable keyboard with ergonomic design.",
        price: 49.99
    }
];

const searchBox = document.getElementsByClassName("searchBox")[0];

const resultContainer = document.getElementsByClassName("resultContainer")[0];

searchBox.addEventListener("keyup", (event) => {
    resultContainer.innerHTML = "";
    const searchText = event.target.value.toLowerCase();
    if (searchText.length === 0){
        return;
    }

    const filteredProducts = products.filter ((product) => {
    return product.name.toLowerCase().includes(searchText);
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

            const productImage = document.createElement("i");
            productImage.classList.add("fa-solid", "fa-image", "productImage");
      
            const productName = document.createElement("div");
            productName.classList.add("productName");
            productName.append(filteredProducts[i].name);

            const productPrice = document.createElement("div");
            productPrice.classList.add("productName");
            productPrice.append("Price: ", filteredProducts[i].price, " K");

            const productType = document.createElement("div");
            productType.classList.add("productType");
            productType.append("ProductType: ", filteredProducts[i].productType);

            const productIcon = document.createElement("i");
            productIcon.classList.add("fa-regular", "fa-star", "productIcon");
            
            productItemContainerImage.append(productImage);
            productText.append(productName, productPrice, productType);
            productIconContainer.append(productIcon);
            productItemContainer.append(productItemContainerImage,productText,productIconContainer);
            resultContainer.append(productItemContainer);
        }
    }
})