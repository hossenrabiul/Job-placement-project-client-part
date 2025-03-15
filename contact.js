document.querySelector('.submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
   
    const data = {
        name: document.querySelector('[name="name"]').value,
        email: document.querySelector('[name="email"]').value,
        phone: document.querySelector('[name="phone"]').value,
        subject: document.querySelector('[name="subject"]').value,
        message: document.querySelector('[name="message"]').value
    };
    console.log(name)

    fetch('http://127.0.0.1:8000/accounts/contact/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    console.log(data.message)
    .catch(error => console.error('Error:', error));
});
