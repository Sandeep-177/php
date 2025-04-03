        // Function to load HTML content into an element
        function loadContent(url, elementId) {
            fetch(url)  
            .then(response => response.text())  
            .then(data => document.getElementById(elementId).innerHTML = data);
        }
    
        // Load Header
        loadContent('vendefheader.html', 'vendHead');

        // Load who we are
        // loadContent('whoWeAre.html', 'who');

        // Load Footer
        loadContent('vendeffooter.html', 'vendFoot');


       
        