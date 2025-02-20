// const token = localStorage.getItem("token")

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
fetch("http://127.0.0.1:8000/accounts/login/", {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: "admin",  // Replace with actual username
        password: "123" // Replace with actual password
    })
})
.then(response => response.json())
.then(data => {
    if (data.token) {
        localStorage.setItem("token", data.token);  // ✅ Store token
        console.log("Token received:", data.token);
    } else {
        console.error("Login failed:", data);
    }
})
.catch(error => console.error("Error:", error));






const toggleButton = () => {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Add event listener to toggle button
    themeToggleButton.addEventListener("click", () => {
        const body = document.body;

        // Toggle the dark theme on the body
        const isDarkTheme = body.classList.toggle("dark-theme");

        // Optionally toggle the hamburger menu style
        document.getElementById('hamburger')?.classList.toggle('text-gray-700');

        // Update the button's text and icon appearance
        themeToggleButton.classList.toggle('text-gray-700');
        const icon = themeToggleButton.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-sun", !isDarkTheme);
            icon.classList.toggle("fa-moon", isDarkTheme);
        }
    });
}; 

// header control
// if (token){
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }

const upperHeaderControl = () =>
{
    const upperHeaderAuthentication = document.getElementById('upper-header-authentication');
    if ('token' in localStorage)
    {


        upperHeaderAuthentication.innerHTML = 
            `

            
            <!-- Hamburger Menu for Mobile -->
            <div class="lg:hidden">
                <button id="hamburger-menu" class="text-gray-900 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Navigation Menu (Desktop) -->
            <nav class="hidden lg:flex space-x-6 text-lg ">
                <a href="index.html" class="hover:text-red-600  transition duration-300 ">Home</a>
                <a href="products.html" class="hover:text-red-600 transition duration-300">Products</a>
                <a href="contact_us.html" class="hover:text-red-600 transition duration-300">Contact</a>
                <a href="about_us.html" class="hover:text-red-600 transition duration-300">About Us</a>
            </nav>

            <!-- Mobile Navigation Menu -->
            <nav id="mobile-nav"
                class="z-20 text-lg gap-4 text-center lg:hidden absolute top-0 left-0 right-0 bg-red-500 text-white font-smallbold p-10 space-y-4 hidden">
                <a href="index.html" class="px-2 hover:text-gray-600 transition duration-300">Home</a>
                <a href="products.html" class="px-2 hover:text-gray-600  transition duration-300">Products</a>
                <a href="contact_us.html" class="px-2 hover:text-gray-600  transition duration-300">Contact</a>
                <a href="about_us.html" class="hover:text-red-600 transition duration-300">About Us</a>
                
                 <!-- Close Button -->
                <button id="close-menu" class="absolute top-2 right-4 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 font-bold rounded-full bg-red-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>
 
            `;
    }
    else
    {
        upperHeaderAuthentication.innerHTML = 
        `

        
        <!-- Hamburger Menu for Mobile -->
        <div class="lg:hidden">
            <button id="hamburger-menu" class="text-gray-900 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Navigation Menu (Desktop) -->
        <nav class="hidden lg:flex space-x-6  ">
            <a href="index.html" class="hover:text-red-600 transition duration-300 ">Home</a>
            <a href="products.html" class="hover:text-red-600 transition duration-300">Products</a>
            <a href="contact_us.html" class="px-2 hover:text-gray-600  transition duration-300">Contact</a>
            <a href="about_us.html" class="hover:text-red-600 transition duration-300">About Us</a>
        </nav>

        <!-- Mobile Navigation Menu -->
        <nav id="mobile-nav"
            class="z-20  gap-4 text-center lg:hidden absolute top-0 left-0 right-0 bg-red-500 text-white  font-smallbold   p-10 space-y-4 hidden">
            <a href="/index.html" class="px-2 hover:text-gray-600 transition duration-300">Home</a>
            <a href="products.html" class="px-2 hover:text-gray-600  transition duration-300">Products</a>
            <a href="contact_us.html" class="px-2 hover:text-gray-600  transition duration-300">Contact</a>
            <a href="about_us.html" class="hover:text-red-600 transition duration-300">About Us</a>

             <!-- Close Button -->
            <button id="close-menu" class="absolute top-2 right-4 hover:scale-105 font-bold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 font-bold rounded-full bg-red-500 border-2 " fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>

        `;
    }

}








const downHeaderControl = () => {
     
    const headerAuthentication = document.getElementById('header-authentication');
 

    if ('token' in localStorage) { 

        headerAuthentication.innerHTML = `
        <div>
            <!-- Right Section -->
            <div class="flex items-center space-x-4 relative">
                <!-- Notification Icon -->
                <div class="relative">
                    <button onclick="toggleNotificationBox()" class="relative hover:scale-105 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 17h5l-1.405-1.405C18.21 15.21 18 14.703 18 14.17V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.936 6 7.828 6 10v4.17c0 .533-.21 1.041-.595 1.425L4 17h5m4 0a2.5 2.5 0 01-5 0h5z" />
                        </svg>
                        <span class="absolute -top-3 -right-3 text-xs bg-red-600 text-white rounded-full px-2 py-1">0</span>
                    </button>

                    <!-- Notification Box -->
                    <div id="notification-box"
                        class="absolute z-10 right-0 mt-2 hidden bg-white text-black shadow-lg rounded-lg py-4 px-6 w-72 max-h-96 overflow-y-auto transition-all duration-300 transform scale-95 opacity-0 hover:scale-100 hover:opacity-100">
                        <p class="font-semibold text-xl mb-4">Notifications</p>
                        <ul class="space-y-4">
                         
                            <li class="border-b pb-2">
                                <a href="#" class="block hover:bg-gray-100 px-2 py-1 rounded-lg transition-colors duration-200">
                                     
                                    <small class="text-gray-500 text-xs block mt-1"> </small>
                                </a>
                            </li> 
                            <!-- More notifications here -->
                        </ul>
                    </div>
                </div>

                <!-- Profile Dropdown -->
                <div class="relative z-10" id="profile-dropdown">
                    <button class="flex items-center space-x-2 hover:text-teal-800 transition duration-300"
                        onclick="toggleDropdown('profile-menu')">
                        <span>Profile</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.23 7.21a1 1 0 011.32-.083L10 9.584l3.45-2.457a1 1 0 011.1 1.664l-4 2.857a1 1 0 01-1.1 0l-4-2.857a1 1 0 01-.22-1.38z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <!-- Main Dropdown -->
                    <ul id="profile-menu"
                        class="absolute right-0 mt-2 hidden bg-white text-black shadow-lg rounded-lg py-2 w-48">
                        <li><a href="profile.html" class="block px-4 py-2 hover:bg-gray-100">Profile</a></li>
                        <li><a href="#" onclick="handlelogOut()" class="block px-4 py-2 hover:bg-gray-100">Logout</a></li>
                    </ul>
                </div>

            </div>
        </div>
        `;
 
    }
    else
    {  
        console.log("No")
        headerAuthentication.innerHTML =
        `
            <nav class=" lg:flex space-x-4" id=""> 
                <a href="login.html" class="text-lg font-semibold  border-[1px] border-transparent hover:border-gray-500 hover:text-red-500 hover:bg-gray-200 px-4 py-3 rounded-lg transition duration-300">Login</a>
                <a href="registration.html" class="text-lg font-semibold  border-[1px] border-transparent hover:border-gray-500  hover:text-red-500 hover:bg-gray-200 px-4 py-3 rounded-lg transition duration-300">Register</a> 
            </nav> 
        `;    
    }

}


downHeaderControl();
upperHeaderControl();



// Toggle dropdown visibility
function toggleDropdown(menuId) {
    const menu = document.getElementById(menuId);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('#profile-menu, #nested-menu');
    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    });
});

function toggleDropdown(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');
}
 

function toggleNotificationBox() {
    const box = document.getElementById("notification-box");
    box.classList.toggle("hidden");
    box.classList.toggle("scale-100");
    box.classList.toggle("opacity-100");
    box.classList.toggle("scale-95");
    box.classList.toggle("opacity-0");
}

// Close dropdown when clicking outside
window.addEventListener("click", (e) => {
    const notificationBox = document.getElementById("notification-box");
    if (!e.target.closest("#notification-box") && !e.target.closest("button")) {
        notificationBox.classList.add("hidden");
        notificationBox.classList.remove("scale-100", "opacity-100");
        notificationBox.classList.add("scale-95", "opacity-0");
    }
});




//  Notificaion box 
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');

// Toggle mobile menu on hamburger click
hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Close the mobile menu when close button is clicked
closeMenu.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
});

// Close the menu when any item is clicked (optional)
const menuItems = mobileNav.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
    });
});
 

const pushAlert = (title, description) => {
    // Create the alert box container
    const alertBox = document.createElement('div');

    // Define the inner HTML of the alert box based on the title
    alertBox.innerHTML = `
        <!-- Custom Alert Modal -->
        <div id="customAlert" class="fixed z-40 top-0 right-0 transform -translate-x-1/2 w-96 bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center space-x-2">
                ${
                    title === "success" ? `
                        <i class="fas fa-check-circle text-green-500 text-2xl"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Success</h2>
                    ` : title === "alert" ? `
                        <i class="fas fa-times-circle text-red-500 text-2xl"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Alert</h2>
                    ` : `
                        <i class="fas fa-exclamation-circle text-yellow-500 text-2xl"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Warning</h2>`
                }
            </div>
            <p class="mt-4 text-gray-700">${description}</p>
            <div class="mt-6 flex justify-end">
                <button onclick="closeAlert()" class="${title === 'success' ? 'bg-green-500' : title === 'alert' ? 'bg-red-600' : 'bg-yellow-700'} text-white px-4 py-2 rounded-md hover:bg-opacity-80">Close</button>
            </div>
        </div>
    `;

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Make the alert visible
    document.getElementById("customAlert").classList.remove("hidden");

    // Optionally, auto-close the alert after a certain time
    setTimeout(() => {
        closeAlert();
    }, 5000); // Close after 5 seconds
}
 
 
// Function to close the alert
const closeAlert = () => {
    const alertBox = document.getElementById("customAlert");
    if (alertBox) {
        alertBox.classList.add("hidden");
        alertBox.remove(); // Remove the alert from DOM after closing
    }
} 


const guestProfile = (guest_id) => {
    localStorage.setItem('guest_id', guest_id);
    window.open('/guest_profile.html', '_blank');
  
}
  

const is_authticated = () => {
    
    if (!localStorage.getItem('user_id')) {
        window.location.href = "./login.html" 

        pushAlert('warning', 'You should first login ') 
        window.location.href = "./login.html" 
        

    }

} 































// 
// 
// 
//const navbarLoad = () => {
//     const navbar = document.getElementById("navbarElement");
//     const user_id = localStorage.getItem("user_id");

//     navbar.innerHTML = `
//         <div class="container mx-auto flex justify-between items-center">
//             <!-- Left Side - Logo -->
//             <div class="flex items-center space-x-3">
//                 <img src="./images/product-img/football.png" alt="Sport Club Logo" class="h-12 w-12 rounded-full">
//                 <span class="text-2xl font-bold tracking-wide">Sport Club</span>
//             </div>

//             <!-- Middle - Navigation Links -->
//             <div class="hidden md:flex space-x-6">
//                 <a href="index.html" class="nav-link">Home</a>
//                 <a href="products.html" class="nav-link">Products</a>
//                 <a href="contact_us.html" class="nav-link">Contact</a>
//                 <a href="about_us.html" class="nav-link">About Us</a>
//             </div>

//             <!-- Right Side - User Profile & Cart -->
//             <div class="flex items-center space-x-6">
//                 <a href="cart.html" class="relative p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
//                     <i class="fas fa-shopping-cart text-xl text-gray-800"></i>
//                     <span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md">3</span>
//                 </a>
                
//                 ${user_id ? `
//                 <!-- Profile Dropdown -->
//                 <div class="relative z-10" id="profile-dropdown">
//                     <button class="flex items-center space-x-2 hover:text-teal-800 transition duration-300"
//                         onclick="toggleDropdown('profile-menu')">
//                         <span>Profile</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fill-rule="evenodd"
//                                 d="M5.23 7.21a1 1 0 011.32-.083L10 9.584l3.45-2.457a1 1 0 011.1 1.664l-4 2.857a1 1 0 01-1.1 0l-4-2.857a1 1 0 01-.22-1.38z"
//                                 clip-rule="evenodd" />
//                         </svg>
//                     </button>
//                     <!-- Main Dropdown -->
//                    <ul id="profile-menu"
//                         class="absolute right-0 mt-2 hidden bg-white text-black shadow-lg rounded-lg py-2 w-48">
//                         <li><a href="/profile.html" class="block px-4 py-2 hover:bg-gray-100">Profile</a></li>
//                         <li><a href="#" onclick="handlelogOut()" class="block px-4 py-2 hover:bg-gray-100">Logout</a></li>
//                     </ul>
//                 </div>` : `
//                 <nav class=" lg:flex space-x-4" id=""> 
//                 <a href="/login.html" class="text-lg font-semibold  border-[1px] border-transparent hover:border-gray-500 hover:text-red-500 hover:bg-gray-200 px-4 py-3 rounded-lg transition duration-300">Login</a>
//                 <a href="/registration.html" class="text-lg font-semibold  border-[1px] border-transparent hover:border-gray-500  hover:text-red-500 hover:bg-gray-200 px-4 py-3 rounded-lg transition duration-300">Register</a> 
//                 </nav>`}
//             </div>
//         </div>
//     `;
// };

// // Call function to load navbar

// navbarLoad();

// // function toggleDropdown(menuId) {
// //     const menu = document.getElementById(menuId);
// //     if (menu.classList.contains('hidden')) {
// //         menu.classList.remove('hidden');
// //     } else {
// //         menu.classList.add('hidden');
// //     }
// // }

// // // Close dropdowns when clicking outside
// // document.addEventListener('click', function (e) {
// //     const dropdowns = document.querySelectorAll('#profile-menu, #nested-menu');
// //     dropdowns.forEach((dropdown) => {
// //         if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
// //             dropdown.classList.add('hidden');
// //         }
// //     });
// // });

// // function toggleDropdown(menuId) {
// //     const menu = document.getElementById(menuId);
// //     menu.classList.toggle('hidden');
// // }
 

// // function toggleNotificationBox() {
// //     const box = document.getElementById("notification-box");
// //     box.classList.toggle("hidden");
// //     box.classList.toggle("scale-100");
// //     box.classList.toggle("opacity-100");
// //     box.classList.toggle("scale-95");
// //     box.classList.toggle("opacity-0");
// // }

// // // Close dropdown when clicking outside
// // window.addEventListener("click", (e) => {
// //     const notificationBox = document.getElementById("notification-box");
// //     if (!e.target.closest("#notification-box") && !e.target.closest("button")) {
// //         notificationBox.classList.add("hidden");
// //         notificationBox.classList.remove("scale-100", "opacity-100");
// //         notificationBox.classList.add("scale-95", "opacity-0");
// //     }
// // });




// // //  Notificaion box 
// // const hamburgerMenu = document.getElementById('hamburger-menu');
// // const mobileNav = document.getElementById('mobile-nav');
// // const closeMenu = document.getElementById('close-menu');

// // // Toggle mobile menu on hamburger click
// // hamburgerMenu.addEventListener('click', () => {
// //     mobileNav.classList.toggle('hidden');
// // });

// // // Close the mobile menu when close button is clicked
// // closeMenu.addEventListener('click', () => {
// //     mobileNav.classList.add('hidden');
// // });

// // // Close the menu when any item is clicked (optional)
// // const menuItems = mobileNav.querySelectorAll('a');
// // menuItems.forEach(item => {
// //     item.addEventListener('click', () => {
// //         mobileNav.classList.add('hidden');
// //     });
// // });
 

// // const pushAlert = (title, description) => {
// //     // Create the alert box container
// //     const alertBox = document.createElement('div');

// //     // Define the inner HTML of the alert box based on the title
// //     alertBox.innerHTML = `
// //         <!-- Custom Alert Modal -->
// //         <div id="customAlert" class="fixed z-40 top-0 right-0 transform -translate-x-1/2 w-96 bg-white p-6 rounded-lg shadow-lg">
// //             <div class="flex items-center space-x-2">
// //                 ${
// //                     title === "success" ? `
// //                         <i class="fas fa-check-circle text-green-500 text-2xl"></i>
// //                         <h2 class="text-xl font-semibold text-gray-800">Success</h2>
// //                     ` : title === "alert" ? `
// //                         <i class="fas fa-times-circle text-red-500 text-2xl"></i>
// //                         <h2 class="text-xl font-semibold text-gray-800">Alert</h2>
// //                     ` : `
// //                         <i class="fas fa-exclamation-circle text-yellow-500 text-2xl"></i>
// //                         <h2 class="text-xl font-semibold text-gray-800">Warning</h2>`
// //                 }
// //             </div>
// //             <p class="mt-4 text-gray-700">${description}</p>
// //             <div class="mt-6 flex justify-end">
// //                 <button onclick="closeAlert()" class="${title === 'success' ? 'bg-green-500' : title === 'alert' ? 'bg-red-600' : 'bg-yellow-700'} text-white px-4 py-2 rounded-md hover:bg-opacity-80">Close</button>
// //             </div>
// //         </div>
// //     `;

// //     // Append the alert box to the body
// //     document.body.appendChild(alertBox);

// //     // Make the alert visible
// //     document.getElementById("customAlert").classList.remove("hidden");

// //     // Optionally, auto-close the alert after a certain time
// //     setTimeout(() => {
// //         closeAlert();
// //     }, 5000); // Close after 5 seconds
// // }
 
 
// // // Function to close the alert
// // const closeAlert = () => {
// //     const alertBox = document.getElementById("customAlert");
// //     if (alertBox) {
// //         alertBox.classList.add("hidden");
// //         alertBox.remove(); // Remove the alert from DOM after closing
// //     }
// // } 


// // const guestProfile = (guest_id) => {
// //     localStorage.setItem('guest_id', guest_id);
// //     window.open('/guest_profile.html', '_blank');
  
// // }
  

// // const is_authticated = () => {
    
// //     if (!localStorage.getItem('user_id')) {
// //         window.location.href = "./login.html" 

// //         pushAlert('warning', 'You should first login ') 
// //         window.location.href = "./login.html" 
        

// //     }

// // } 

