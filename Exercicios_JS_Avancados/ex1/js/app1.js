let vetor = prompt('Digite varios numeros separados por virgula:').split(' ')

vetor = vetor.map(n => Number(n))

let nRepetidos = []
let qtdRepetidos = []

let tamanho = vetor.length
for (let i = 0; i < tamanho; i++) {
    let n = vetor[i]
    let repetido = 0

    for (let j = 0; j < (tamanho); j++) {

        if (vetor[j] == n) {
            if (nRepetidos.includes(n)) {
                continue
            } else {
                repetido++

            }
        }
    }
    if (repetido > 1) {

        qtdRepetidos.push({ numero: n, vez: repetido })
        nRepetidos.push(n)
    }
}


console.log(nRepetidos)
console.log(qtdRepetidos)

let ordem = []
for (i in qtdRepetidos) {
    ordem.push(qtdRepetidos[i].vez)
}

ordem = ordem.sort().reverse()

console.log(ordem)
let qtdRepetidosOrdenados = []
for (i in qtdRepetidos) {
    for (j in ordem) {
        if (ordem[i] == qtdRepetidos[j].vez) {

            qtdRepetidosOrdenados.push(qtdRepetidos[j])
        }
    }
}

qtdRepetidosOrdenados = qtdRepetidosOrdenados.slice(0,3)


document.writeln(JSON.stringify(qtdRepetidosOrdenados))
