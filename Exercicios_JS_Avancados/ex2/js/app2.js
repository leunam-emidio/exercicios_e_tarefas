function profundidade(vetor) {
  let nivel = 1;
  
  vetor.forEach(element => {
  
    if (Array.isArray(element)) {
      nivel = Math.max(nivel, 1 + profundidade(element));
    }
  });
  return nivel;
}


let vetor_aninhado = [1,[2,[3,[4]]]]

let vetor_plano = vetor_aninhado.flat(profundidade(vetor_aninhado))

document.writeln(JSON.stringify(vetor_plano))