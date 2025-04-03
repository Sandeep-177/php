        // Function to load HTML content into an element
        // function loadContent(url, elementId,callback) {
        //     fetch(url)  
        //     .then(response => response.text())  
        //     .then(data => {document.getElementById(elementId).innerHTML = data;
        //     if (callback) callback();
        // })
        //     .catch(error => console.error(`Error loading ${url}:`, error));
        // }

        // const BASE_PATH = window.location.origin + "/customer_html/";
        // Auto-detect if running on GitHub or locally
        const isGitHubPages = window.location.hostname.includes("github.io");
        const projectPath = isGitHubPages ? "/project/customer_html/" : "/customer_html/"; // Adjust based on where your files are
        const BASE_PATH = window.location.origin + projectPath;

        function loadContent(url, elementId, callback) {
            let newUrl=BASE_PATH+ url;
            console.log("Loading:", newUrl); // Debugging
            fetch(newUrl)
                .then(response => response.text())
                // .then(data => {document.getElementById(elementId).innerHTML = data;})
                .then(data => {
                        let element = document.getElementById(elementId);
                    if (element) {
                        element.innerHTML = data;
                        if (callback) callback();
                    } else {
                        console.error(`Element with ID '${elementId}' not found in the DOM!`);
                    }
                })
                .catch(error => console.error(`Error loading '${url}':`, error));
            }
    
        // Load Header
        loadContent('header.html', 'head',attachNavEventListeners);

        // Load who we are
        loadContent('whoWeAre.html', 'who');

        // Load Footer
        loadContent('footer.html', 'foot');


        function attachNavEventListeners() {
            // let baseUrl = window.location.origin + '/';
            let isGitHub = window.location.hostname.includes("github.io");
            let baseUrl = isGitHub ? window.location.origin + "/project/" : window.location.origin + "/";

            let pages = ['index.html', 'customer_html/category.html', 'customer_html/contactUs.html', 'customer_html/feedback.html'];
        
            let links = document.querySelectorAll('.naviLink');
            
            if (links.length === 0) {
                console.error("Navigation links not found! Ensure header is loaded.");
                return;
            }
        
            console.log("✅ line 59, Navigation links detected:", links.length);
        
            links.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    let pageIndex = parseInt(this.getAttribute('data-target'), 10);
        
                    if (pageIndex >= 0 && pageIndex < pages.length) {
                        let targetUrl = baseUrl + pages[pageIndex];
                        console.log("Navigating to:", targetUrl);
                        window.location.href = targetUrl;
                    } else {
                        console.error("Invalid path index:", pageIndex);
                    }
                });
            });
        }

        
        


       
        