let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let number = Math.floor(Math.random()*10000);
    let result = document.getElementById('result');
    result.innerText= number;
})