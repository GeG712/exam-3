b = ['54, 21, 65, 32, 43, 76, 87, 98']
document.getElementById('original').innerHTML = b


document.getElementById('array-ex1').innerHTML =  `Array length is: ${b.length}`

document.getElementById('array-ex2').innerHTML =  b[3] = 59

document.getElementById('array-ex3').innerHTML =  b.push(22)

document.getElementById('array-ex4').innerHTML =  b.sort().pop()