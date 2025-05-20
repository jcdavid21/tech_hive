// Select all product buttons with the correct class name
const productBtns = document.querySelectorAll('.product-btn');

// Add click event listeners to each button
productBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        // Prevent the default button action
        e.preventDefault();
        
        // Find the parent product card element
        const productCard = this.closest('.product-card');
        
        // Extract product details from the card
        const productTitle = productCard.querySelector('.product-title').textContent;
        let productPrice = productCard.querySelector('.product-price').textContent.trim().split('\n')[0].trim();
        
        // Extract badge if present
        let badge = '';
        const badgeElement = productCard.querySelector('.product-badge');
        if (badgeElement) {
            badge = badgeElement.textContent;
        }
        
        // Find image URL if present
        let imageUrl = '';
        const imageElement = productCard.querySelector('.product-image img');
        if (imageElement) {
            imageUrl = imageElement.src;
        }
        
        // Find original price if present
        let originalPrice = '';
        const originalPriceElement = productCard.querySelector('.original-price');
        if (originalPriceElement) {
            originalPrice = originalPriceElement.textContent.trim();
        }
        
        // Find rating if present
        let rating = 0;
        const ratingStars = productCard.querySelectorAll('.rating-stars .fas.fa-star').length;
        const ratingHalfStars = productCard.querySelectorAll('.rating-stars .fas.fa-star-half-alt').length;
        rating = ratingStars + (ratingHalfStars * 0.5);
        
        // Find rating count if present
        let ratingCount = '';
        const ratingCountElement = productCard.querySelector('.rating-count');
        if (ratingCountElement) {
            ratingCount = ratingCountElement.textContent.trim();
        }
        
        // Extract hidden features (if they exist)
        const features = [];
        const hiddenFeatures = productCard.querySelectorAll('.hidden-features .feature');
        if (hiddenFeatures.length > 0) {
            hiddenFeatures.forEach(feature => {
                if (feature.value) {
                    features.push(feature.value);
                }
            });
        }

        let productDescription = '';
        const descriptionElement = productCard.querySelector('.hidden-features .description');
        console.log(descriptionElement);
        if (descriptionElement) {
            productDescription = descriptionElement.value.trim();
        }
        
        // Generate a unique ID using the product title
        const productId = 'prod_' + productTitle.replace(/\s+/g, '_').toLowerCase().substring(0, 15);
        
        // Create product object to save to localStorage
        const productData = {
            id: productId,
            title: productTitle,
            price: productPrice,
            originalPrice: originalPrice,
            imageUrl: imageUrl,
            badge: badge,
            rating: rating,
            ratingCount: ratingCount,
            features: features,
            description: productDescription
        };
        
        // Save the selected product to localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        
        // Redirect to the item details page
        window.location.href = 'components/item.html';
    });
});