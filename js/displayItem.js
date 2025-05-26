document.addEventListener('click', function(e) {
    // Check if the clicked element has the product-btn class
    if (e.target.classList.contains('product-btn') || e.target.closest('.product-btn')) {
        // Prevent the default button action
        e.preventDefault();
        
        // Get the actual button element (in case an icon inside was clicked)
        const btn = e.target.closest('.product-btn') || e.target;
        
        // Find the parent product card element
        const productCard = btn.closest('.product-card');
        
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
        
        // get product-id
        const productId = productCard.getAttribute('data-product-id');
        if (!productId) {
            console.error('Product ID not found in the product card.');
            return;
        }
        
        const reviews = [];
        const hiddenReviews = productCard.querySelectorAll('.hidden-reviews .review');
        if (hiddenReviews.length > 0) {
            hiddenReviews.forEach(review => {
                const reviewName = review.querySelector('.review-name').textContent.trim();
                const reviewRating = review.querySelector('.review-stars').textContent.trim();
                const reviewDate = review.querySelector('.review-date').textContent.trim();
                const reviewComment = review.querySelector('.review-comment') ? review.querySelector('.review-comment').textContent.trim() : '';
                reviews.push({
                    name: reviewName,
                    rating: reviewRating,
                    date: reviewDate,
                    comment: reviewComment
                });
            });
        }

        
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
            description: productDescription,
            reviews: reviews
        };
        
        // Save the selected product to localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        
        // Redirect to the item details page
        window.location.href = 'components/item.html';
    }
});