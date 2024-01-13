const increment = document.getElementById('increment');

let counterValue = 0;

increment.addEventListener('click',function(){
    counterValue++;
    let container = document.getElementById('container');
    container.innerHTML=counterValue
});



const Decrement = document.getElementById('Decrement');

counterValue;

Decrement.addEventListener('click',function(){
    counterValue--;
    let container = document.getElementById('container');
    container.innerHTML=counterValue
});
