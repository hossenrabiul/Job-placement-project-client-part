async function fetchPostDetails() {
    // Get the post ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        document.getElementById('post-details').innerHTML = "<p class='text-red-600 font-semibold'>Invalid Post ID</p>";
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:8000/posts/postdetail/${postId}/`);
        const post = await response.json();
        console.log(post)
        const div = document.createElement("div")
        const parent = document.getElementById("post-details")
        // console.log(post)
        div.innerHTML = `
          
             <div class="container">
            <div class="image-section">
                <img src="${post.image}" alt="Product">
            </div>
            <div class="details">
                <h2>${post.name}</h2>
                <p class="price">$${post.price}.00</p>
                <p class="description">${post.descirption}</p>
            
                <div class="select-box">
                    <label for="color"><strong>Choose Color:</strong></label>
                    <select id="color">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </div>
            
                <div class="select-box">
                    <label for="material"><strong>Choose Material:</strong></label>
                    <select id="material">
                        <option value="cotton">Cotton</option>
                        <option value="leather">Leather</option>
                        <option value="plastic">Plastic</option>
                    </select>
                </div>
            
                <p class="price" id="total-price">Total: ${post.price}</p>
            
                <div class="bottom-actions">
                    <div class="quantity-selector">
                        <button onclick="changeQuantity(-1)">-</button>
                        <span id="quantity">1</span>
                        <button onclick="changeQuantity(1)">+</button>
                    </div>
                    <button class="buy-now add-to-cart" data-id="${post.id}" data-name="${post.name}" data-price="${post.price}">Buy Now</button>
                </div>
            </div>
        </div>
    

      </div>


        `;
    
        parent.appendChild(div)
        console.log(parent)
        // 
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
