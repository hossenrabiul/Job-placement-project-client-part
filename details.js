async function fetchPostDetails() {
    // Get the post ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        document.getElementById('post-details').innerHTML = "<p class='text-red-600 font-semibold'>Invalid Post ID</p>";
        return;
    }

    try {
        const response = await fetch(`https://sporting-server-xi.vercel.app/posts/postdetail/${postId}/`);
        const post = await response.json();
        const div = document.createElement("div")
        const parent = document.getElementById("post-details")
        // console.log(post)
        div.innerHTML = `
            <img id="post-image" src="${post.image}" alt="Post Image" class="w-full h-64 object-cover rounded-lg shadow-md mb-4">
            <h2 id="post-title" class="text-3xl font-bold text-gray-800 mb-4">${post.name}</h2>
            <h2 id="post-title" class="text-3xl font-bold text-gray-800 mb-4">${post.descirption}</h2>
            <p id="post-content" class="text-gray-700 leading-relaxed">$${post.price}</p>
            <p id="post-content" class="text-gray-700 leading-relaxed">${post.rating}</p>
            <div class="p-4">
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 add-to-cart" data-id="${post.id}" data-name="${post.name}" data-price="${post.price}">Add To Cart</button>
               
            </div>
        `;
        
        parent.appendChild(div)
        console.log(parent)
        // document.getElementById('post-image').src = post.image;
        // document.getElementById('post-title').textContent = post.title;
        // document.getElementById('post-content').textContent = post.content;
    } catch (error) {
        document.getElementById('post-details').innerHTML = "<p class='text-red-600 font-semibold'>Error loading post details</p>";
    }

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

function goBack() {
    window.history.back();
}

fetchPostDetails();


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
