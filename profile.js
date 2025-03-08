async function fetchUserProfile() {
    const token = localStorage.getItem("token");  // Retrieve stored JWT token
    console.log(token)
    const response = await fetch("https://sporting-server-xi.vercel.app/accounts/profile/", {
        method: "GET",
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const userData = await response.json();
        console.log("User Profile:", userData);

        // Dynamically update profile page
        // document.getElementById("username").textContent = userData.username;
        // document.getElementById("email").textContent = userData.email;
        // document.getElementById("firstName").textContent = userData.first_name;
        // document.getElementById("lastName").textContent = userData.last_name;
        const parent = document.getElementById("user-details")
        const account_details = document.getElementById("accounts-details")

        const div = document.createElement("div")
        const details_div = document.createElement("div")
        div.innerHTML = `
            <h2 class="text-2xl font-bold text-gray-800">${userData.username}</h2>
            <p class="text-gray-600 text-lg">${userData.email}</p>
            <p class="text-gray-500">Member Since: Jan 2024</p>
        `
        parent.appendChild(div)

        details_div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Account Details</h3>
            <div class="grid grid-cols-2 gap-4" id="accounts-details">
                <p class="text-gray-700"><strong>Username: </strong>${userData.username}</p>
                <p class="text-gray-700"><strong>Email: </strong>${userData.email}</p>
                <p class="text-gray-700"><strong>Phone: </strong> +123 456 7890</p>
                <p class="text-gray-700"><strong>Address: </strong> 123 Main Street, City, Country</p>
            </div>
        
        `
        account_details.appendChild(details_div)

        
    } else {
        console.error("Failed to fetch user profile");
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchUserProfile);
