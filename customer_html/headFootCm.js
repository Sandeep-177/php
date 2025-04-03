
        // Auto-detect if running on GitHub or locally
        const isGitHubPages = window.location.hostname.includes("github.io");
        const projectPath = isGitHubPages ? "/php/" : "/"; // Adjust based on where your files are
        const BASE_PATH = window.location.origin + projectPath;
        let filesLoaded = 0;

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
                        filesLoaded++;

                        // if (callback) callback();
                    }
                    if (filesLoaded === 3) {
                        console.log("✅ All dynamic content loaded!");
                        attachNavEventListeners(); // ✅ Call function after all files load
                    } 
                    else {
                        console.error(`Element with ID '${elementId}' not found in the DOM!`);
                    }
                })
                .catch(error => console.error(`Error loading '${url}':`, error));
            }
    
        // Load Header
        loadContent('customer_html/header.html', 'head');

        // Load who we are
        loadContent('customer_html/whoWeAre.html', 'who');

        // Load Footer
        loadContent('customer_html/footer.html', 'foot');

        function attachNavEventListeners() {
                let isGitHub = window.location.hostname.includes("github.io");
                let baseUrl = isGitHub ? window.location.origin + "/project/" : window.location.origin + "/";
                let links= document.querySelectorAll('a');
                if(links.length>0){
                    console.log(`there is ${links.length} number of links found`);
                }else{
                console.log('links not found');
            }
                links.forEach(link=>{
                    link.addEventListener('click',function(event){
                        event.preventDefault();
                        let targetUrl=baseUrl+link.getAttribute("href");
                        console.log("Navigating to:", targetUrl);
                        window.location.href = targetUrl;
                    })
                })
        }
        // function attachNavEventListeners() {
        //     // let baseUrl = window.location.origin + '/';
        //     let isGitHub = window.location.hostname.includes("github.io");
        //     let baseUrl = isGitHub ? window.location.origin + "/project/" : window.location.origin + "/";

        //     let pages = ['index.html', 'customer_html/category.html', 'customer_html/contactUs.html', 'customer_html/feedback.html'];
        
        //     let links = document.querySelectorAll('.naviLink');
            
        //     if (links.length === 0) {
        //         console.error("Navigation links not found! Ensure header is loaded.");
        //         return;
        //     }
        
        //     console.log("✅ line 59, Navigation links detected:", links.length);
        
        //     links.forEach(link => {
        //         link.addEventListener('click', function (event) {
        //             event.preventDefault();
        //             let pageIndex = parseInt(this.getAttribute('data-target'), 10);
        
        //             if (pageIndex >= 0 && pageIndex < pages.length) {
        //                 let targetUrl = baseUrl + pages[pageIndex];
        //                 console.log("Navigating to:", targetUrl);
        //                 window.location.href = targetUrl;
        //             } else {
        //                 console.error("Invalid path index:", pageIndex);
        //             }
        //         });
        //     });
        // }

        
        


       
        