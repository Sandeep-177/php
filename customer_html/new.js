// Get the base path dynamically (ensures correct path regardless of the page)
const BASE_PATH = window.location.origin + "/customer_html/";

// Function to load HTML content into an element
function loadContent(filename, elementId, callback) {
    let url = BASE_PATH + filename; // Construct absolute URL
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            let element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                if (callback) callback(); // Execute callback after loading content
            } else {
                console.error(`❌ Element with ID '${elementId}' not found!`);
            }
        })
        .catch(error => console.error(`❌ Error loading '${filename}':`, error));
}

// ✅ Use Absolute Paths (Works on all pages)
loadContent('header.html', 'head', attachNavEventListeners);
loadContent('whoWeAre.html', 'who');
loadContent('footer.html', 'foot');

// Function to attach event listeners AFTER header loads
function attachNavEventListeners() {
    let baseUrl = window.location.origin + '/';
    let pages = ['index.html', 'customer_html/category.html', 'customer_html/contactUs.html', 'customer_html/feedback.html'];

    let links = document.querySelectorAll('.naviLink');

    if (links.length === 0) {
        console.error("❌ Navigation links not found! Ensure header is loaded.");
        return;
    }

    console.log("✅ Navigation links detected:", links.length);

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let pageIndex = parseInt(this.getAttribute('data-target'), 10);

            if (pageIndex >= 0 && pageIndex < pages.length) {
                let targetUrl = baseUrl + pages[pageIndex];
                console.log("➡️ Navigating to:", targetUrl);
                window.location.href = targetUrl;
            } else {
                console.error("❌ Invalid path index:", pageIndex);
            }
        });
    });
}
