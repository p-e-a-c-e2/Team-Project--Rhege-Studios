
    document.getElementById('userForm').addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        const formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            track: document.getElementById('track').value,
            // portfolio: document.getElementById('portfolio').value
        };

       
        fetch('https://rhedge-studios.onrender.com/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);  
            alert('User information updated successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);  
            alert('An error occurred. Please try again later.');
        });
    });




    
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
