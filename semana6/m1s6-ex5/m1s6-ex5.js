function aprovarDadosCadastrais(cliente) {
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) resolve(true);
    else reject(false);
  });
}

function aprovarValorSolicitado(cliente, valor) {
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) resolve(true);
    else reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovarDadosCadastrais, aprovarValorSolicitado])
  .then(console.log('DADOS CADASTRAIS APROVADOS'))
  .catch(error => {
    console.log(`O VALOR SOLICITADO FOI REPROVADO.`);
  })
  .finally(() => {
    console.log('PROCESSO FINALIZADO');
  });

// continue com o tratamento dos resultados de ambas as promises...
