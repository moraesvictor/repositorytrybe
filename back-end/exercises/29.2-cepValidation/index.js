const { default: axios } = require("axios");

const USERS_CEP = {
  iveteMoraes: {
    cep: "03.564-020"
  },

  victorMoraes: {
    cep: "03.590-010"
  }
}

const validatingCep = (CEP) => {
  const REGEX_CEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  const validation = REGEX_CEP.test(CEP);

  return validation;
}


const ConsultingCep = async(userName) => {
    const { cep } = USERS_CEP[`${userName}`];

    const validation = validatingCep(cep);
  
    let verifiedCep;

    if(validation) {
      verifiedCep = cep.replace(/[^\d]+/g, "");

      const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;

      const request = await axios.get(URL);

      console.log(request.data)
    }

}

ConsultingCep("victorMoraes")
ConsultingCep("iveteMoraes")