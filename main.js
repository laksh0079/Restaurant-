let cartCount = 0;
function updateCartNumber(){
	cartCount++;
	document.getElementById('number').textContent = cartCount;
	alert('Added to cart!');
}