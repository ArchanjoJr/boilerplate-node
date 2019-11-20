const Joi = require('joi-i18n');

const marcarPonto = Joi.object().keys({
  TokenApp:           Joi.string().required(),
  Tipo:               Joi.number().required(),
  AppId:              Joi.string().required(),
  AppDiaId:           Joi.string().required(),
  Latitude:           Joi.number(),
  Longitude:          Joi.number(),
  PrecisaoGPSMetros:  Joi.number(),
  WiFi:               Joi.object().required().keys({
    validBSSID:       Joi.string().required(),
    Ranges:           Joi.number().required(),
  }),
  Beacon:             Joi.object().keys({
    validUUID:        Joi.string().required(),
    validMajor:       Joi.number().required(),
    validMinor:       Joi.number().required(),
    validNamespaceId: Joi.string().required(),
    validInstanceId:  Joi.string().required(),
  }).required(),
  Origem:             Joi.number(),
  Dispositivo:        Joi.string().required(),
  UrlFoto:            Joi.string().required(),
  ApiId:              Joi.number(),
  DataHoraUtc:        Joi.string().required(),
  DataDevice:         Joi.string().required(),
  MarcarOffline:      Joi.bool(),
  TokenAppLogin:      Joi.string().required(),
  Kiosk:              Joi.bool(),
});

module.exports = {
  marcarPontoSchema: marcarPonto
};