        // Function to load HTML content into an element
        function loadContent(url, elementId) {
            fetch(url)  
            .then(response => response.text())  
            .then(data => document.getElementById(elementId).innerHTML = data);
        }
    
        // Load Header
        loadContent('adminHeader.html', 'head');

        // Load Footer
        loadContent('adminFooter.html', 'foot');


       
        