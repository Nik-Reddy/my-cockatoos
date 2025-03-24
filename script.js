document.getElementById('registration-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        event: document.getElementById('event').value,
        tickets: document.getElementById('tickets').value,
        payment: document.getElementById('payment').value
    };

    try {
        const response = await fetch('https://your-backend-api-endpoint/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            document.getElementById('message').textContent = 'Registration successful!';
            document.getElementById('registration-form').reset();
        } else {
            document.getElementById('message').textContent = 'Registration failed. Please try again.';
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'An error occurred. Please try again later.';
        document.getElementById('message').style.color = 'red';
        console.error('Error:', error);
    }
});
