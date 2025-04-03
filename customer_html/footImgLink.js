document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
    const images = document.querySelectorAll(".svgLnk");
    console.log(`svgLnk elements found: ${images.length}`);
    images.forEach(img => {
        console.log("processing:",img);
        let svgTest= window.location.hostname.includes("github.io");
        let currentSrc=img.getAttribute("src");
        console.log(`current src: ${currentSrc}`);
        if (svgTest) {
            img.setAttribute("src", "/project" + img.getAttribute("src"));
            console.log(`Updated src: ${img.getAttribute("src")}`);
        }else{
            console.log("svgLnk not found, line 89")
        }
    });
}, 1000);          
    console.log("all svgs loaded, line 98");
});