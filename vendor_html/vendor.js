        // Function to load HTML content into an element
        function loadContent(url, elementId) {
            fetch(url)  
            .then(response => response.text())  
            .then(data => document.getElementById(elementId).innerHTML = data);
            // if (callback) callback(); 
        }
    
        // Load Header
        loadContent('venHeader.html', 'head');
        
        // Load who we are
        // loadContent('whoWeAre.html', 'who');

        // Load Footer
        loadContent('venFooter.html', 'foot');
        




       
        