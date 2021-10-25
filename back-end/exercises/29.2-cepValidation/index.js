const { default: axios } = require("axios");

const ValidationCep = async() => {

    const CEP = "03.564-020"
    const REGEX_CEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
    const validation = REGEX_CEP.test(CEP);

    let verifiedCep;

    if(validation) {
      verifiedCep = CEP.replace(/[^\d]+/g, "");

      const URL = `https://brasilapi.com.br/api/cep/v1/${CEP}`;

      const request = await axios.get(URL);

      console.log(request.data)
    }

}

ValidationCep()