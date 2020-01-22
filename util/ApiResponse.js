const { isNull } = require('underscore');
const { HTTP_STATUS } = require('./index');

module.exports = class ResponseGenerator {
  constructor(response) {
    this.response = response;
  }

  /**
   * @description funcao de retorno padrao da api
   * @param {number} Status - status de resposta da API
   * @param {object} Message - messsage de retorno da API
   * @param {headers} Headers - instancia de response de Express
   * @returns retorna a response para a API
   */
  GenericResponse(Status, Message = null, Headers = {}) {
    if (!isNull(Message)) {
      return this.response.status(Status)
        .json(Message)
        .set({ ...Headers });
    }
    return this.response.status(Status)
      .set({ ...Headers });
  }

  /**
   * @description funcao de retorno padrao da api // DEFUALT retorna 500 e error
   * @param {Error} Error - messsage de error a ser retornado para a API
   * @returns retorna uma response de ERROR para a API
   */
  ErrorResponse(Error) {
    if (Error.status) {
      return this.response.status(Error.status)
        .json({ error: Error.message });
    }
    return this.response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: Error.message });
  }
};
