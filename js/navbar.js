// Local Storage Management for Cart

// Initialize localStorage structure if it doesn't exist
function initializeLocalStorage() {
    // Initialize cart data
    if (!localStorage.getItem('cartItems')) {
        localStorage.setItem('cartItems', JSON.stringify([]));
    }
}

// Cart Management
class CartManager {
    static getCartData() {
        try {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            return {
                items: cartItems,
                totalCount: cartItems.reduce((total, item) => total + item.quantity, 0),
                totalPrice: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
            };
        } catch (error) {
            console.error('Error parsing cart data:', error);
            return {
                items: [],
                totalCount: 0,
                totalPrice: 0
            };
        }
    }

    static updateCartData(cartData) {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartData.items));
            updateCartDisplay();
        } catch (error) {
            console.error('Error updating cart data:', error);
        }
    }

    static addToCart(item) {
        const cartData = this.getCartData();
        const existingItemIndex = cartData.items.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            cartData.items[existingItemIndex].quantity += item.quantity || 1;
        } else {
            cartData.items.push({
                ...item,
                quantity: item.quantity || 1
            });
        }

        this.calculateCartTotals(cartData);
        this.updateCartData(cartData);
    }

    static removeFromCart(itemId) {
        const cartData = this.getCartData();
        cartData.items = cartData.items.filter(item => item.id !== itemId);
        this.calculateCartTotals(cartData);
        this.updateCartData(cartData);
    }

    static updateQuantity(itemId, quantity) {
        const cartData = this.getCartData();
        const itemIndex = cartData.items.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            if (quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                cartData.items[itemIndex].quantity = quantity;
                this.calculateCartTotals(cartData);
                this.updateCartData(cartData);
            }
        }
    }

    static calculateCartTotals(cartData) {
        cartData.totalCount = cartData.items.reduce((total, item) => total + item.quantity, 0);
        cartData.totalPrice = cartData.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    static clearCart() {
        const emptyCart = {
            items: [],
            totalCount: 0,
            totalPrice: 0
        };
        this.updateCartData(emptyCart);
    }

    static getCartCount() {
        const cartData = this.getCartData();
        return cartData.totalCount;
    }
}

// UI Update Functions
function updateCartDisplay() {
    const cartData = CartManager.getCartData();
    const cartCount = cartData.totalCount;
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        
        // Hide cart count if empty
        if (cartCount === 0) {
            cartCountElement.style.display = 'none';
        } else {
            cartCountElement.style.display = 'flex';
        }
    }
    
    // Also update itemsCount if we're on the cart page
    const itemsCountElement = document.getElementById('itemsCount');
    if (itemsCountElement) {
        itemsCountElement.textContent = `${cartCount} ${cartCount === 1 ? 'item' : 'items'}`;
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const navSection = document.getElementById('navSection');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const icon = mobileToggle.querySelector('i');
    
    navSection.classList.toggle('active');
    
    // Toggle hamburger/close icon
    if (navSection.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize localStorage on page load
    initializeLocalStorage();
    
    // Update cart display
    updateCartDisplay();

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navSection = document.getElementById('navSection');
            const mobileToggle = document.querySelector('.mobile-toggle');
            const icon = mobileToggle.querySelector('i');
            
            navSection.classList.remove('active');
            icon.className = 'fas fa-bars';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navSection = document.getElementById('navSection');
        const mobileToggle = document.querySelector('.mobile-toggle');
        const icon = mobileToggle.querySelector('i');
        
        if (!e.target.closest('.navbar') && navSection.classList.contains('active')) {
            navSection.classList.remove('active');
            icon.className = 'fas fa-bars';
        }
    });
});