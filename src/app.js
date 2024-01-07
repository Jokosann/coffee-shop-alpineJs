document.addEventListener('alpine:init', () => {
	Alpine.data('products', () => ({
		items: [
			{ id: 0, name: 'Instans Coffee', img: 'product-1.png', price: 5 },
			{ id: 1, name: 'Black Coffee', img: 'product-2.png', price: 5 },
			{ id: 2, name: 'Latte', img: 'product-3.png', price: 7 },
			{ id: 3, name: 'Cappuccino', img: 'product-4.png', price: 6 },
			{ id: 4, name: 'Expresso', img: 'product-5.png', price: 8 },
			{ id: 5, name: 'Mocha', img: 'product-6.png', price: 6 },
		],
	}));

	Alpine.store('cart', {
		items: [],
		total: 0,
		quantity: 0,

		add(newItem) {
			// cek apakah ada baran yang sama
			// const cartItem = this
			this.items.push(newItem);
			this.quantity++;
			this.total += newItem.price;
		},
	});
});

// conversi dolar
const dolar = (number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
	}).format(number);
};
