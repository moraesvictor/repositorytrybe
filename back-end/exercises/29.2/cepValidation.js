const {default: axios} = require(axios);

const ValidationCep = async() => {

    const CEP = "035.64-020"

    const REGEX_CEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

    const validation = REGEX_CEP.test(CEP);
}