module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: 'asd345#5%$token',
  ip: 'localhost',
  porta: '3306',
  password: 'ArchanjoJr',
  user: 'root',
  database: 'artesanal',
};
// Untoggle this comment to use on digital ocean server
/* Original
* port: process.env.PORT || 3001,
* db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
* SECRET_TOKEN: 'asd345#5%$token',
* ip: 'localhost',
* porta: '3306',
* passw: 'apiNodeanvdev!2',
* user: 'apiNode',
* database: 'artesanal',
*/
