document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchBtn = document.getElementById('search-btn');
    const productDetails = document.getElementById('product-details');
    const popularSearches = document.getElementById('popular-searches');
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const bestPriceValue = document.getElementById('best-price-value');
    const bestPriceAt = document.getElementById('best-price-at');
    const priceComparison = document.getElementById('price-comparison');
    const categories = document.querySelectorAll('.category');
    const popularProducts = document.querySelectorAll('.popular-product');

    // Function to toggle search clear button
    searchInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
    });

    // Clear search
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        searchInput.focus();
    });

    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Attach event listeners to popular products
    popularProducts.forEach(product => {
        product.addEventListener('click', function() {
            const productKey = this.getAttribute('data-product');
            displayProductDetails(productKey);
        });
    });

    // Attach event listeners to categories
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Get the category text (e.g., "Phones", "Laptops")
            const categoryText = this.textContent.trim().replace(/^\\S+\\s+/, '');
            
            // Set the search input to the category
            searchInput.value = categoryText;
            
            // Show clear button
            clearSearchBtn.style.display = 'block';
            
            // Focus on search
            searchInput.focus();
        });
    });

    // Function to handle search
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length === 0) return;
        
        let foundProduct = null;
        
        // Check for exact matches first
        for (const key in products) {
            if (products[key].name.toLowerCase() === query) {
                foundProduct = key;
                break;
            }
        }
        
        // If no exact match, check for partial matches
        if (!foundProduct) {
            for (const key in products) {
                if (products[key].name.toLowerCase().includes(query)) {
                    foundProduct = key;
                    break;
                }
            }
        }
        
        // Display product details if found
        if (foundProduct) {
            displayProductDetails(foundProduct);
        } else {
            alert('Product not found. Try searching for iPhone, MacBook, Samsung, or boAt products.');
        }
    }

    // Function to display product details
    function displayProductDetails(productKey) {
        const product = products[productKey];
        
        if (!product) return;
        
        // Update product info
        productTitle.textContent = product.name;
        productImage.src = product.image;
        productImage.alt = product.name;
        productDescription.textContent = product.description;
        
        // Sort prices to find the best deal
        const sortedPrices = [...product.prices].sort((a, b) => a.currentPrice - b.currentPrice);
        const bestDeal = sortedPrices[0];
        
        // Update best price
        bestPriceValue.textContent = '₹' + bestDeal.currentPrice.toLocaleString();
        bestPriceAt.textContent = 'at ' + bestDeal.store;
        
        // Clear previous price comparison
        priceComparison.innerHTML = '';
        
        // Add price cards
        sortedPrices.forEach(price => {
            const isBestDeal = price.currentPrice === bestDeal.currentPrice;
            
            const card = document.createElement('div');
            card.className = 'store-card' + (isBestDeal ? ' best-deal' : '');
            
            card.innerHTML = `
                <div class="store-info">
                    <div class="store-logo">
                        <img src="${price.logo}" alt="${price.store}">
                    </div>
                    <div class="store-name">${price.store}</div>
                </div>
                <div class="price-info">
                    <div>
                        <span class="current-price">₹${price.currentPrice.toLocaleString()}</span>
                        <span class="original-price">₹${price.originalPrice.toLocaleString()}</span>
                        <span class="discount">${price.discount} off</span>
                    </div>
                    <a href="${price.link}" target="_blank">
                        <button class="view-deal">View Deal</button>
                    </a>
                </div>
            `;
            
            priceComparison.appendChild(card);
        });
        
        // Show product details and hide popular searches
        productDetails.classList.remove('hidden');
        popularSearches.classList.add('hidden');
        
        // Scroll to product details
        productDetails.scrollIntoView({ behavior: 'smooth' });
    }
});
