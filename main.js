let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
buttons.forEach( function (button){
    button.addEventListener('click',function(e){
        console.log(e.target); // this e.target tells us that from where the event is coming.
        if(e.target.id === "btn-1"){
            body.style.backgroundColor="grey"
            body.style.color="white"

        }
        else if (e.target.id === "btn-2"){
            body.style.backgroundColor="crimson"
            body.style.color="white"

        }
        else if (e.target.id === "btn-3"){
            body.style.backgroundColor="blue"
            body.style.color="white"

        }
        else if (e.target.id === "btn-4"){
            body.style.backgroundColor="red"
            body.style.color="white"
        }
        
    })
})