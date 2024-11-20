// Event listener for filters
document.getElementById("category").addEventListener("change", filterProducts);
document.getElementById("price").addEventListener("change", filterProducts);
document.getElementById("sort-price").addEventListener("change", sortProducts);
document.getElementById("sort-rating").addEventListener("change", sortProducts);

function filterProducts() {
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    
    const products = document.querySelectorAll(".product-card");
    
    products.forEach(product => {
        let show = true;
        
        // Category filter
        if (category !== "all" && product.dataset.category !== category) {
            show = false;
        }
        
        // Price filter
        if (price !== "all") {
            const priceRange = price.split("-");
            const productPrice = parseInt(product.dataset.price);
            
            if (price === "0-500000" && productPrice > 500000) {
                show = false;
            }
            if (price === "500000+" && productPrice <= 500000) {
                show = false;
            }
        }
        
        // Show or hide the product
        product.style.display = show ? "block" : "none";
    });
}

function sortProducts() {
    const sortPrice = document.getElementById("sort-price").value;
    const sortRating = document.getElementById("sort-rating").value;
    const products = Array.from(document.querySelectorAll(".product-card"));
    
    // Sorting by price
    if (sortPrice === "low-to-high") {
        products.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
    } else if (sortPrice === "high-to-low") {
        products.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
    }
    
    // Sorting by rating
    if (sortRating === "high-to-low") {
        products.sort((a, b) => b.dataset.rating - a.dataset.rating);
    } else if (sortRating === "low-to-high") {
        products.sort((a, b) => a.dataset.rating - b.dataset.rating);
    }
    
    // Re-append the sorted products to the container
    const container = document.querySelector(".products-container");
    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}

// Initial load to apply filters and sorting
filterProducts();
