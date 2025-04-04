// Page Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Show login page by default
    document.getElementById('login-page').classList.add('active');

    // Role selection
    const roleButtons = document.querySelectorAll('.role-btn');
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Login form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedRole = document.querySelector('.role-btn.active').textContent;
            
            // Hide login page
            document.getElementById('login-page').classList.remove('active');
            
            // Show appropriate dashboard based on role
            switch(selectedRole) {
                case 'Restaurant':
                    document.getElementById('restaurant-dashboard').classList.add('active');
                    break;
                case 'NGO':
                    document.getElementById('ngo-dashboard').classList.add('active');
                    break;
                case 'User':
                    document.getElementById('user-dashboard').classList.add('active');
                    break;
            }
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Donation request form
    const requestDonationBtn = document.querySelector('.primary-btn');
    if (requestDonationBtn) {
        requestDonationBtn.addEventListener('click', () => {
            // Show donation form modal
            alert('Donation request form would open here');
        });
    }

    // Accept/Reject buttons
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');
    
    acceptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.style.backgroundColor = '#d4f5e5';
            alert('Donation request accepted!');
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.style.backgroundColor = '#ffe3e3';
            alert('Donation request rejected');
        });
    });

    // Mark as received buttons
    const markReceivedButtons = document.querySelectorAll('.mark-received-btn');
    markReceivedButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.style.backgroundColor = '#e3f2fd';
            alert('Donation marked as received!');
        });
    });

    // Verify/Reject buttons in admin panel
    const verifyButtons = document.querySelectorAll('.verify-btn');
    const adminRejectButtons = document.querySelectorAll('.reject-btn');
    
    verifyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.style.backgroundColor = '#d4f5e5';
            alert('NGO report verified!');
        });
    });

    adminRejectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            row.style.backgroundColor = '#ffe3e3';
            alert('NGO report rejected');
        });
    });

    // Order buttons in restaurant leaderboard
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Ordering system would open here');
        });
    });

    // Redeem coupons button
    const redeemButton = document.querySelector('.redeem-btn');
    if (redeemButton) {
        redeemButton.addEventListener('click', () => {
            alert('Coupon redemption system would open here');
        });
    }
}); 