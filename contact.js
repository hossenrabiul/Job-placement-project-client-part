document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: form.querySelector("input[placeholder='Name']").value,
            email: form.querySelector("input[placeholder='Email Address']").value,
            phone: form.querySelector("input[placeholder='Phone']").value,
            subject: form.querySelector("input[placeholder='Subject']").value,
            message: form.querySelector("textarea").value,
        };

        fetch("https://sporting-server-xi.vercel.app/accounts/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            alert("Failed to send message. Please try again later.");
        });
    });
});
