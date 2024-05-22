// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const deliverySection = document.getElementById('deliveries');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Simulate login - for demonstration purposes
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === 'delivery_agent' && password === 'password') {
        // Show deliveries section on successful login
        deliverySection.classList.remove('hidden');
        // Fetch and display deliveries
        displayDeliveries();
      } else {
        alert('Invalid username or password');
      }
    });
  
    function displayDeliveries() {
      // Dummy data for demonstration
      const deliveries = [
        { id: 1, pickupLocation: '123 Main St', deliveryLocation: '456 Elm St', time: '10:00 AM' },
        { id: 2, pickupLocation: '789 Oak St', deliveryLocation: '321 Pine St', time: '11:30 AM' },
      ];
  
      const deliveryList = document.getElementById('deliveryList');
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
  });
  