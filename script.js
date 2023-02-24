const cabecera = document.getElementById('cabecera');
const container = document.querySelector(".container");
const items = document.querySelectorAll(".item span");
const btn=document.querySelector("button");

console.log({
    cabecera,
    container,
    items
});

cabecera.innerHTML="Jugador 2";
console.log(items);
console.log(items[0].innerText);
items.addEventListener('click',itemOnClick)
btn.addEventListener('click',buttonOnClick)


function buttonOnClick(){
    console.log("Se hizo clic al botón");
}

function itemOnClick(item){

    if (items[0].innerText=="X"){
        items[0].innerText="O";
    }else{
        items[0].innerText="X";
    }
}
