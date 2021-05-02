import {hi} from './m.js'

let a = 10;
console.log('hello')

//test comments
console.log(hi);

let box1 = document.getElementById("box1");
//have to check null before use
if(box1 !== null){
    box1.addEventListener('click', function(){
        alert("some");
    })
}
//or use ?
box1?.addEventListener('click', function(){
    alert("some");
})
