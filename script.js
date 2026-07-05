const text = [
"Graphic Designer",
"Photo & Video Editor",
"AI Content Creator",
"Professional House Painter"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

current = text[count];
letter = current.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === current.length){
setTimeout(()=>{
count++;
index = 0;
type();
},1500);
}else{
setTimeout(type,100);
}

})();
