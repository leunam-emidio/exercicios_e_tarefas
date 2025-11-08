function achatarObjeto(obj, prefixo = '', resultado = {}) {
  for (const chave in obj) {
    const valor = obj[chave];
    const novaChave = prefixo ? `${prefixo}.${chave}` : chave;

    if (typeof valor === 'object' && valor !== null && !Array.isArray(valor)) {
      achatarObjeto(valor, novaChave, resultado); 
    } else {
      resultado[novaChave] = valor;
    }
  }
  return resultado;
}

let obj = { nome: "Ana", endereco: { cidade: "Luanda" } }

let novoObj = achatarObjeto(obj)

document.writeln(JSON.stringify(novoObj))
