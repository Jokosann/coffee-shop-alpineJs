document.addEventListener('alpine:init', () => {
	Alpine.data('products', () => ({
		items: [
			{ id: 0, name: 'Instans Coffee', img: 'product-1.png', price: 2.75 },
			{ id: 1, name: 'Black Coffee', img: 'product-2.png', price: 3.5 },
			{ id: 2, name: 'Latte', img: 'product-3.png', price: 2.75 },
			{ id: 3, name: 'Cappuccino', img: 'product-4.png', price: 3.6 },
			{ id: 4, name: 'Expresso', img: 'product-5.png', price: 2.5 },
			{ id: 5, name: 'Mocha', img: 'product-6.png', price: 4.2 },
		],
	}));

	Alpine.store('cart', {
		items: [],
		total: 0,
		quantity: 0,

		add(newItem) {
			// cek apakah ada barang yang sama atau tidak
			const cartItem = this.items.find((item) => item.id === newItem.id);

			if (!cartItem) {
				this.items.push({ ...newItem, quantity: 1, total: newItem.price });
				this.quantity++;
				this.total += newItem.price;
			} else {
				this.items = this.items.map((item) => {
					// jika barang berbeda
					if (item.id !== newItem.id) {
						return item;
					} else {
						// jika barang sudah ada tambah subtotal dan quanttity
						item.quantity++;
						item.total = item.price * item.quantity;
						this.quantity++;
						this.total += item.price;
						return item;
					}
				});
			}
		},

		remove(id) {
			const cartItem = this.items.find((item) => item.id === id);

			// jika item lebih dari satu
			if (cartItem.quantity > 1) {
				this.items = this.items.map((item) => {
					// jika bukan barang diclick
					if (item.id !== id) {
						return item;
					} else {
						item.quantity--;
						item.total = item.price * item.quantity;
						this.quantity--;
						this.total -= item.price;
						return item;
					}
				});
			} else if (cartItem.quantity === 1) {
				// jika barang sisa satu
				this.items = this.items.filter((item) => item.id !== id);
				this.quantity--;
				this.total -= cartItem.price;
			}
		},
	});
});

// conversi dolar
const dolar = (number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		// minimumFractionDigits: 0,
	}).format(number);
};
