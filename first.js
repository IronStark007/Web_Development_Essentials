var one = document.getElementsByTagName('h1')
console.log(one[0].innerText);
var two = document.getElementsByClassName('second')
console.log("Before change", two[0].innerText);
two[0].innerText = "To The"
console.log("After change", two[0].innerText);
var three = document.getElementById('third')
console.log(three.innerText);