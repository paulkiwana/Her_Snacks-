const snacks = [
            { name: 'Chocolate Chip Cookies', image: '/placeholder.svg?height=150&width=150' },
            { name: 'Fruit Gummies', image: '/placeholder.svg?height=150&width=150' },
            { name: 'Potato Chips', image: '/placeholder.svg?height=150&width=150' },
            { name: 'Granola Bars', image: '/placeholder.svg?height=150&width=150' },
        ];

        const snackContainer = document.getElementById('snack-container');

        snacks.forEach(snack => {
            const snackItem = document.createElement('div');
            snackItem.classList.add('snack-item');
            snackItem.innerHTML = `
                <img src="${snack.image}" alt="${snack.name}">
                <h3>${snack.name}</h3>
                <button onclick="addToCart('${snack.name}')" aria-label="Add ${snack.name} to cart">Add to Cart</button>
            `;
            snackContainer.appendChild(snackItem);
        });

        function addToCart(snackName) {
            alert(`Added ${snackName} to cart!`);
            // In a real application, you would implement actual cart functionality here
        }

        document.getElementById('cart-icon').addEventListener('click', () => {
            alert('Cart clicked! View your items here.');
            // In a real application, you would show the cart contents here
        });