var nome = window.prompt('Qual é seu nome?')

document.write(`Olá, ${nome}. Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)

/*
---  Comando importante para transformar em valor monetário.

.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})   

---  Comando para fixar casas decimais

.toFixed()

---  Comando para realizar substituição na string

.replace('(a ser substituido)', '(o que substitui)')

*/