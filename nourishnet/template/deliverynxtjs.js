// script.js
document.addEventListener('DOMContentLoaded', function() {
    const deliveryList = document.getElementById('deliveryList');
    const profileSection = document.getElementById('profile');
  
    // Dummy data for demonstration
    const deliveries = [
      { id: 1, pickupLocation: '123 Main St', deliveryLocation: '456 Elm St', time: '10:00 AM' },
      { id: 2, pickupLocation: '789 Oak St', deliveryLocation: '321 Pine St', time: '11:30 AM' },
    ];
  
    // Dummy profile data
    const profileData = {
      username: 'delivery_agent',
      email: 'delivery@example.com',
      phone: '123-456-7890'
    };
  
    // Display deliveries on page load
    displayDeliveries();
  
    function displayDeliveries() {
      deliveryList.innerHTML = '';
      deliveries.forEach(delivery => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>Delivery ID:</strong> ${delivery.id}<br>
          <strong>Pickup Location:</strong> ${delivery.pickupLocation}<br>
          <strong>Delivery Location:</strong> ${delivery.deliveryLocation}<br>
          <strong>Time:</strong> ${delivery.time}<br>
          <button onclick="acceptDelivery(${delivery.id})">Accept</button>
        `;
        deliveryList.appendChild(listItem);
      });
    }
  
    window.acceptDelivery = function(deliveryId) {
      // Dummy function for accepting delivery - for demonstration purposes
      alert(`Accepted delivery with ID ${deliveryId}`);
    };
  
    // Populate profile form with dummy data
    document.getElementById('username').value = profileData.username;
    document.getElementById('email').value = profileData.email;
    document.getElementById('phone').value = profileData.phone;
  
    // Show profile section when clicked
    document.getElementById('profileLink').addEventListener('click', function(event) {
      event.preventDefault();
      profileSection.classList.remove('hidden');
    });
  
    // Profile form submission
    document.getElementById('profileForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Dummy update profile function
      alert('Profile updated successfully!');
    });
  });
  