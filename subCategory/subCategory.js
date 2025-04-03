let x= document.querySelectorAll('.catButton');
x.forEach(function(fu){
    fu.addEventListener('click',function (){
        window.location.href="/customer_html/order.html";
    })
})