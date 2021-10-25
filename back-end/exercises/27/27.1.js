/**
 * Função que recebe três parâmetros retorna uma Promise.
 */
const promiseReturner= (a, b, c) => {

    return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        reject(new Error('ERROR: Informe apenas números.'));
      }
      const resultado = (a + b) * c;
      if (resultado > 50) {
        resolve(`O valor é: ${resultado}.`);
      } else {
        reject(new Error('O valor é muito baixo.'));
      }
    });
  }
  
  module.exports = promiseReturner;