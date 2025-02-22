
document.addEventListener("DOMContentLoaded", function () {
    fetchCategories();
});

function fetchCategories() {
    fetch("https://sporting-server-xi.vercel.app/category/categoryView/") // Replace with your actual API URL
        .then(response => response.json())
        .then(categories => {
            const dropdown = document.getElementById("category-dropdown").querySelector("ul");
            dropdown.innerHTML = ""; // Clear previous categories

            categories.forEach(category => {
                const listItem = document.createElement("li");
                listItem.classList.add("hover:bg-gray-100", "px-4", "py-2", "cursor-pointer");
                listItem.textContent = category.name;
                listItem.addEventListener("click", function () {
                    console.log(`Selected category: ${category.name}`);
                });
                dropdown.appendChild(listItem);
            });

            // Show dropdown on button click
            const categoryBtn = document.getElementById("category-btn");
            categoryBtn.addEventListener("click", function () {
                console.log("ye")
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
