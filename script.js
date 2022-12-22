const h1 = document.querySelector('h1');
const p  = document.querySelector('p');
const pfo = document.querySelector('.pfo');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btncalcular');

btn.addEventListener('click', btnclick);

function btnclick(){
    console.log(input1.value + input2.value)
}
/*alert(input.value);

console.log({
    h1,
    p,
    pfo,
    input
});

h1.innerHTML = 'patito feo';
h1.classList.add('rojo','grande');
h1.classList.remove('grande');*/

