let categoryPages=['plumbing.html','electrical.html','paint.html','cleaning.html','pestControl.html','kitchen.html','lundry.html','conditioner.html','photography.html','eventManage.html','compMob.html','shifting.html']
let ckd=document.querySelectorAll('.tryi');
if (ckd.length === 0) {
    console.error("Navigation links not found! Ensure header is loaded.");
}

console.log("✅ Navigation links detected:", ckd.length);

ckd.forEach(link => {
    link.addEventListener('click', function (event) {
        console.log('clicked');
        event.preventDefault();
        let elemntIndex = parseInt(this.getAttribute('data-new'), 10);

        if (elemntIndex >= 0 && elemntIndex < categoryPages.length) {
            let baseUrls=window.location.origin + '/subCategory/';
            let targetUrl = baseUrls + categoryPages[elemntIndex];
            console.log("Navigating to:", targetUrl);
            window.location.href = targetUrl;
        } else {
            console.error("Invalid path index:", elemntIndex);
        }
    });
});