document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    // console.log("Yes")
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://sporting-server-xi.vercel.app/accounts/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
        
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = "Login successful!";
        document.getElementById('message').classList.remove('text-red-600');
        document.getElementById('message').classList.add('text-green-600');
        window.location.href = 'index.html'
    } else {
        console.log("Ye")
        document.getElementById('message').textContent = data.error || "Login failed!";
    }
});