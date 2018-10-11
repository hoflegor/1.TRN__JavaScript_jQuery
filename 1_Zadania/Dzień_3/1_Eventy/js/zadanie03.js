document.addEventListener('DOMContentLoaded', function () {

    // console.log('ok');

    var btn = document.querySelector('#mainBtn');
    
    console.log(btn);

    function clickBtn(){
        console.log("Hura! Działa!");
    }
    
    btn.addEventListener('click', function () {
        clickBtn();
    })
    
});