const products = require("../controllers/database-controller.js")
const path = require('path');

module.exports = function(app) {
  app.get('/products', products.index);
  app.get('/products/:id', products.show);
  app.post('/products', products.create);
  app.put('/products/:id', products.update);
  app.delete('/products/:id', products.delete);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./../public/dist/index.html"))
  });
}
