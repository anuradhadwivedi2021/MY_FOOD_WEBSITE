// Menu Items
const menuItems = [
  { name: "Pizza", price: 250, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D/400x300/?pizza" },
  { name: "Burger", price: 150, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww/400x300/?burger" },
  { name: "Pasta", price: 200, img: "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D/400x300/?pasta" },
  { name: "Ice Cream", price: 120, img: "https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D/400x300/?icecream" },
  { name: "coldcoffe", orice: 100, img:"https://images.unsplash.com/photo-1625242662341-5e92c5101338?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D/400*300/?coldcofee" },
  { name: "samosa",price: 60, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400*300/?samosa"  },
  { name: "sandwich", price: 90, img: "https://images.unsplash.com/photo-1712746784291-e29d5d2694d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2x1YiUyMHNhbmR3aWNofGVufDB8fDB8fHww/300*400/?" },
  { name: "fry rice", price: 150, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D/300*400/?" },
  
];

// Add menu dynamically
const menuContainer = document.getElementById("menu-items");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button>Add to Cart</button>
  `;
  card.querySelector("button").addEventListener("click", () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  });
  menuContainer.appendChild(card);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
function showSignup() {
  document.getElementById('signup-modal').style.display = 'block';
}

function closeSignup() {
  document.getElementById('signup-modal').style.display = 'none';
}

function goToWebsite() {
  window.location.href = "index.html"; // replace with your main website file
}

// Close modal if user clicks outside
window.onclick = function(event) {
  const modal = document.getElementById('signup-modal');
  if(event.target == modal) {
    modal.style.display = 'none';
  }
}