const p1 = document.getElementsByTagName('p')[0]
const corpo = window.document.body
const btn = document.getElementById('btn')
const divBtn = document.querySelector('div.boxBtn')


p1.style.color = "blue"
corpo.style.backgroundColor = "black"
btn.onclick = function() {
    window.alert('OPA')
}
divBtn.style.backgroundColor = 'gray'