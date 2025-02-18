
const baseURL = "https://sporting-server-xi.vercel.app/posts/postlist/";
const user_id = localStorage.getItem("user_id");

// console.log(user_id); 
const productLoad = () => {
  fetch(baseURL)
    .then((res) => res.json())
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
            <img src="./images/sample-product.jpg" alt="Product Image" class="w-full h-40 object-cover rounded-lg">
            <h2 class="text-lg font-semibold mt-3">${product.name}</h2>
            <p class="text-gray-600 text-xs mt-1">${product.descirption}</p>
            <p class="text-md font-bold text-gray-900 mt-1">$${product.price}</p>
            <p class="text-yellow-500 mt-1">⭐⭐⭐⭐☆</p>
            <div class="flex justify-between mt-3">
                <a href="details.html?id=${product.id}" class="bg-gray-600 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 text-sm">Details</a>
                <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-sm" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add To Cart</button>
            </div>
        </div>
    `;
    parent.appendChild(div);
  });



  secondParent.innerHTML = ""; 

  products.forEach((product) => {
    // console.log(product.id);
    const div = document.createElement("div");
    // const imageUrl = product.image.startsWith("http") ? product.image : `${baseURL}${product.image}`;

    // const descriptionText = (product.description || "").trim();
    // const descriptionWords = descriptionText.split(/\s+/).slice(0, 5).join(" ") + "...";

    div.innerHTML = `

        <div class="bg-white shadow-lg rounded-lg flex items-center p-4 max-w-sm mx-auto">
                <img src="./images/sample-product.jpg" alt="Product Image" class="w-28 h-28 object-cover rounded-lg">
                <div class="ml-4">
                    <h2 class="text-lg font-semibold">${product.name}</h2>
                    <p class="text-gray-600 text-sm">${product.descirption}</p>
                    <p class="text-lg font-bold text-gray-900">$${product.price}</p>
                    <p class="text-yellow-500 text-sm">⭐⭐⭐⭐☆</p>
                    <div class="flex justify-between mt-2 gap-2">
                        <a href="details.html?id=${product.id}" class="bg-gray-600 text-white px-2 py-1 text-xs rounded-lg hover:bg-gray-700">Details</a>
                        <button class="bg-blue-600 text-white px-2 py-1 text-xs rounded-lg hover:bg-blue-700" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                            Add To Cart
                        </button>
                    </div>
                </div>
        </div> 
    `;
    secondParent.appendChild(div);
  });
}


productLoad();










// <div class="bg-white shadow-lg rounded-lg p-4">
//                 <img src="./images/sample-product.jpg" alt="Product Image" class="w-full h-48 object-cover rounded-lg">
//                 <h2 class="text-xl font-semibold mt-4"></h2>
//                 <p class="text-gray-600 text-sm mt-2"></p>
//                 <p class="text-lg font-bold text-gray-900 mt-2"></p>
//                 <p class="text-yellow-500 mt-2">⭐⭐⭐⭐☆</p>
//                 <div class="flex justify-between mt-4">
//                     <a href="details.html?id=${product.id}" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"> Details</a>

//                     <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
//                      Add To Cart
//                     </button>
//                 </div>
//     </div>