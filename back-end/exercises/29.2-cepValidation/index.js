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

const brasilApiService = async(cep) => {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  const request = await axios.get(URL);

  console.log(request.data)
}

const viaCepService = async(cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json`;

  const request = await axios.get(URL);

  console.log(request.data)
}

const ConsultingCep = async(userName, service) => {
    const { cep } = USERS_CEP[`${userName}`];

    const validation = validatingCep(cep);
  
    let verifiedCep;

    if(validation) {
      verifiedCep = cep.replace(/[^\d]+/g, "");
      service(cep);
    }

}

ConsultingCep("victorMoraes", brasilApiService)
ConsultingCep("iveteMoraes", brasilApiService)