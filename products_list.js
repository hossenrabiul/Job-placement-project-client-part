
// const baseURL = "https://sporting-server-xi.vercel.app/posts/postlist/";
// const baseURL = `http://127.0.0.1:8000/posts/postlist/?search=${search?search : ""}`;
const user_id = localStorage.getItem("user_id");

// console.log(user_id); 
const productLoad = (slug) => {

  const parent = document.getElementById("products-details").innerHTML = "";
  // fetch(`https://sporting-server-xi.vercel.app/posts/postlist/${slug}/`)
  fetch(`https://sporting-server-xi.vercel.app/posts/postlist/${slug ? slug + '/' : ''}`)
    
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => displayProduct(data))
   
    // .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
};


const displayProduct = (products) => {
    // console.log(products);
  const parent = document.getElementById("products-details");
  const secondParent = document.getElementById("new-arrival");
  parent.innerHTML = ""; 

  products.forEach((product) => {
    // console.log(product.id);
    const div = document.createElement("div");
  
    // const imageUrl = product.image.startsWith("http") ? product.image : `${baseURL}${product.image}`;

    // const descriptionText = (product.description || "").trim();
    // const descriptionWords = descriptionText.split(/\s+/).slice(0, 5).join(" ") + "...";

    div.innerHTML = `
        <div class="bg-white shadow-lg rounded-lg p-3">
            <img src="${product.image}" alt="Product Image" class="w-full h-40 object-cover rounded-lg">
            <h2 class="text-lg font-semibold mt-3">${product.name}</h2>
           
            <p class="text-md font-bold text-gray-900 mt-1">$${product.price}</p>
            <p class="text-yellow-500 mt-1">${product.rating}</p>
            <div class="flex justify-between mt-3">
                <a href="details.html?id=${product.id}" class="bg-gray-600 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 text-sm">Details</a>
                <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-sm add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add To Cart</button>
            </div>
        </div>
    `;
    parent.appendChild(div);
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





document.addEventListener("DOMContentLoaded", function () {
  fetchCategories();
});


function fetchCategories() {
  
  fetch("https://sporting-server-xi.vercel.app/category/categoryView/") // Replace with your actual API URL
      
      .then(response => response.json())
      
      .then(categories => {
     
          // console.log(categories)
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
