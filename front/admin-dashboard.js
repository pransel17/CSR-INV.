<<<<<<< HEAD
// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard elements
    initDashboard();
});

const homePage = document.getElementById('home-page');
const invPage = document.getElementById('inv-page');
const equipPage = document.getElementById('equip-page');
const borrowPage = document.getElementById('borrow-page');
const userPage = document.getElementById('user-page');
const reportPage = document.getElementById('reports-page');
const headTitle = document.getElementById('header-title');

function initDashboard() {
    // Set today's date as default for date inputs
    setDefaultDates();
    
    // Add event listeners for tab switching
    const tabs = document.querySelectorAll('.dashboard-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-content`).classList.add('active');
            
            console.log('Tab selected:', tabName);
        });
    });
    
    // Add event listeners for sidebar menu items
    const menuItems = document.querySelectorAll('.sidebar-menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked menu item
            item.classList.add('active');
            
            // Get the menu text
            const menuText = item.querySelector('span').textContent.trim();
            
            // Navigate based on the selected menu
            if (menuText === 'Inventory') {
                headTitle.innerHTML = 'Inventory';
                homePage.style.opacity = '0';
                invPage.style.opacity = '1';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '3';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Equipment') {
                headTitle.innerHTML = 'Equipment';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '1';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '3';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Borrowing') {
                headTitle.innerHTML = 'Borrowing';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '1';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '3';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Users') {
                headTitle.innerHTML = 'Users';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '1';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '3';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Reports') {
                headTitle.innerHTML = 'Reports';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '1';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '3';
            } else if (menuText === 'Home') {
                headTitle.innerHTML = 'Dashboard';
                homePage.style.opacity = '1';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '3';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else {
                // Handle other menu items
                console.log('Menu selected:', menuText);
            }
        });
    });
    
    // Initialize period buttons in statistics tab
    const periodButtons = document.querySelectorAll('.period-button');
    periodButtons.forEach(button => {
        button.addEventListener('click', () => {
            periodButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            console.log('Period selected:', button.textContent.trim());
            // Here you would update the statistics based on the selected period
        });
    });
    
    // Initialize filter button in activity tab
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', () => {
            const filterValue = document.querySelector('.filter-select').value;
            console.log('Filtering activities by:', filterValue);
            // Here you would filter the activities based on the selected option
        });
    }
}

function setDefaultDates() {
    // Get today's date
    const today = new Date();
    
    // Format date as YYYY-MM-DD for input[type="date"]
    const formattedDate = formatDate(today);
    
    // Set start date to 30 days ago
    const startDate = new Date();
    startDate.setDate(today.getDate() - 30);
    
    // Set the date inputs
    document.querySelector('input[name="start-date"]').value = formatDate(startDate);
    document.querySelector('input[name="end-date"]').value = formattedDate;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// Function to load dashboard data
function loadDashboardData(startDate, endDate) {
    console.log(`Loading dashboard data from ${startDate} to ${endDate}`);
    
    // This would typically be an API call to fetch real data
    // For now, we're just using placeholder data already in the HTML
}

// Add event listeners for date changes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.date-input input').forEach(input => {
        input.addEventListener('change', () => {
            const startDate = document.querySelector('input[name="start-date"]').value;
            const endDate = document.querySelector('input[name="end-date"]').value;
            
            loadDashboardData(startDate, endDate);
        });
    });
=======
// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard elements
    initDashboard();
});

const homePage = document.getElementById('home-page');
const invPage = document.getElementById('inv-page');
const equipPage = document.getElementById('equip-page');
const borrowPage = document.getElementById('borrow-page');
const userPage = document.getElementById('user-page');
const reportPage = document.getElementById('reports-page');
const headTitle = document.getElementById('header-title');

function initDashboard() {
    // Set today's date as default for date inputs
    setDefaultDates();
    
    // Add event listeners for tab switching
    const tabs = document.querySelectorAll('.dashboard-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-content`).classList.add('active');
            
            console.log('Tab selected:', tabName);
        });
    });
    
    // Add event listeners for sidebar menu items
    const menuItems = document.querySelectorAll('.sidebar-menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked menu item
            item.classList.add('active');
            
            // Get the menu text
            const menuText = item.querySelector('span').textContent.trim();
            
            // Navigate based on the selected menu
            if (menuText === 'Inventory') {
                headTitle.innerHTML = 'Inventory';
                homePage.style.opacity = '0';
                invPage.style.opacity = '1';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '3';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Equipment') {
                headTitle.innerHTML = 'Equipment';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '1';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '3';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Borrowing') {
                headTitle.innerHTML = 'Borrowing';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '1';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '3';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Users') {
                headTitle.innerHTML = 'Users';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '1';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '3';
                reportPage.style.zIndex = '1';
            } else if (menuText === 'Reports') {
                headTitle.innerHTML = 'Reports';
                homePage.style.opacity = '0';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '1';

                homePage.style.zIndex = '1';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '3';
            } else if (menuText === 'Home') {
                headTitle.innerHTML = 'Dashboard';
                homePage.style.opacity = '1';
                invPage.style.opacity = '0';
                equipPage.style.opacity = '0';
                borrowPage.style.opacity = '0';
                userPage.style.opacity = '0';
                reportPage.style.opacity = '0';

                homePage.style.zIndex = '3';
                invPage.style.zIndex = '1';
                equipPage.style.zIndex = '1';
                borrowPage.style.zIndex = '1';
                userPage.style.zIndex = '1';
                reportPage.style.zIndex = '1';
            } else {
                // Handle other menu items
                console.log('Menu selected:', menuText);
            }
        });
    });
    
    // Initialize period buttons in statistics tab
    const periodButtons = document.querySelectorAll('.period-button');
    periodButtons.forEach(button => {
        button.addEventListener('click', () => {
            periodButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            console.log('Period selected:', button.textContent.trim());
            // Here you would update the statistics based on the selected period
        });
    });
    
    // Initialize filter button in activity tab
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', () => {
            const filterValue = document.querySelector('.filter-select').value;
            console.log('Filtering activities by:', filterValue);
            // Here you would filter the activities based on the selected option
        });
    }
}

function setDefaultDates() {
    // Get today's date
    const today = new Date();
    
    // Format date as YYYY-MM-DD for input[type="date"]
    const formattedDate = formatDate(today);
    
    // Set start date to 30 days ago
    const startDate = new Date();
    startDate.setDate(today.getDate() - 30);
    
    // Set the date inputs
    document.querySelector('input[name="start-date"]').value = formatDate(startDate);
    document.querySelector('input[name="end-date"]').value = formattedDate;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// Function to load dashboard data
function loadDashboardData(startDate, endDate) {
    console.log(`Loading dashboard data from ${startDate} to ${endDate}`);
    
    // This would typically be an API call to fetch real data
    // For now, we're just using placeholder data already in the HTML
}

// Add event listeners for date changes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.date-input input').forEach(input => {
        input.addEventListener('change', () => {
            const startDate = document.querySelector('input[name="start-date"]').value;
            const endDate = document.querySelector('input[name="end-date"]').value;
            
            loadDashboardData(startDate, endDate);
        });
    });
>>>>>>> c0c8ad2 (first commit)
});