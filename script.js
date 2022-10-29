/*let resTag = document.getElementsByTagName('div');
for (const iterator of resTag) {
  iterator.style.backgroundColor = 'yellow'; 
}

let resId = document.getElementById('lastDiv');
resId.style.backgroundColor = 'red';
console.warn(resId.style.backgroundColor);

let resClass = document.getElementsByClassName('fDiv');
for (const iterator of resClass) {
  iterator.style.backgroundColor = 'blue'; 
}*/

//Отрисовать поле для игры в шашки закрасив его средствами JS
let resClass = document.getElementsByClassName('cell');
for (const iterator of resClass) {
    iterator.style.backgroundColor = 'blue';
}