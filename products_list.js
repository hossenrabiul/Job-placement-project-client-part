
// const baseURL = "https://sporting-server-xi.vercel.app/posts/postlist/";
// const baseURL = `http://127.0.0.1:8000/posts/postlist/?search=${search?search : ""}`;
const user_id = localStorage.getItem("user_id");
let currentPage = 1
// console.log(currentPage)
// console.log(user_id); 
const productLoad = (slug = '', search = '', page = 1) => {
  // console.log(page)

  const parent = document.querySelector('.products').innerHTML = "";
  let url = `https://sporting-server-xi.vercel.app/posts/postlist/?page=${page}`

  if (slug){
    url += `${slug}/`;
  }
  else if(search){
    url += `?search=${search}`;
   
  }
  console.log(url)
  // fetch(`https://sporting-server-xi.vercel.app/posts/postlist/${slug}/`)
  // fetch(`https://sporting-server-xi.vercel.app/posts/postlist/${slug ? slug + '/' : ''}`)
  fetch(url)
    
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => displayProduct(data.results))
   
    
    // .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));

    // document.getElementById('prevPage').disabled = !data.previous;
    // document.getElementById('nextPage').disabled = !data.next;

    
};


document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage = currentPage - 1
    console.log(currentPage)
    productLoad('', '', currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  currentPage = currentPage + 1
  console.log(currentPage)
  productLoad('', '', currentPage);
});


const displayProduct = (products) => {
    // console.log(products);
  
   const productsSection = document.querySelector('.products');

   // Clear any existing content inside products-section
   productsSection.innerHTML = '';

   // Loop through the products and generate HTML
   products.forEach(product => {
       const productHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="Product 1" />
                    <div class="overlay">
                        <i class="cart-icon add-to-cart" data-id="${product.id}" data-image = "${product.image}"  data-name="${product.name}" data-price="${product.price}" data-stock="${product.storkQuantity}">🛒</i>
                        <i class="like-icon" onclick="goToLikePage('alproductsDetails.html?id=${product.id}')">➡️</i>
                    </div>
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <p>${product.rating}</p>
                </div>
            </div>
       `;
       
       // Add the product HTML to the container
       productsSection.innerHTML += productHTML;
   });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    // console.log("Yes")
    button.addEventListener("click", (event) => {
      const product = {
        id: event.target.dataset.id,
        image : event.target.dataset.image,
        name: event.target.dataset.name,
        price: parseFloat(event.target.dataset.price),
        stock: parseInt(event.target.dataset.storkQuantity),
        quantity: 1, // Default quantity
      };
      addToCart(product);
    });
  });

}

const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    if (existingProduct.quantity < product.storkQuantity) {
      existingProduct.quantity++;
    } else {
      alert("No more stock available!");
    }
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};


productLoad();




document.getElementById("search-btn").addEventListener("click", function () {
  const searchQuery = document.getElementById("search-input").value.trim();
  console.log("Hd")
  productLoad("", searchQuery); // Fetch products based on the search term
});


document.addEventListener("DOMContentLoaded", function () {
  fetchCategories();
  
});


function fetchCategories() {
  
  fetch("https://sporting-server-xi.vercel.app/category/categoryView/") // Replace with your actual API URL
      
      .then(response => response.json())
      
      .then(categories => {
     
          console.log(categories)
          const dropdown = document.getElementById("category-dropdown").querySelector("ul");
          dropdown.innerHTML = ""; // Clear previous categories

          categories.forEach(category => {
           
              const listItem = document.createElement("li");
              listItem.classList.add("hover:bg-gray-100", "px-4", "py-2", "cursor-pointer");
              listItem.textContent = category.name
            
              listItem.addEventListener("click", function () {
                  console.log(`Selected category: ${category.name}`);
                  productLoad(category.slug)
              });
              dropdown.appendChild(listItem);
          });

          // Show dropdown on button click
          const categoryBtn = document.getElementById("category-btn");
          categoryBtn.addEventListener("click", function () {
              // console.log("ye")
              dropdown.parentElement.classList.toggle("hidden");
          });

          // Hide dropdown when clicking outside
          // document.addEventListener("click", function (event) {
          //     if (!dropdown.parentElement.contains(event.target)) {
          //         console.log("No")
          //         dropdown.parentElement.classList.add("hidden");
          //     }
          // });
      })
      .catch(error => console.error("Error fetching categories:", error));
}
