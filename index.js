const PORT = process.env.PORT || 8000;
const app = require('./app.js');
require("dotenv").config();

app.listen(PORT, () => {
  console.log('Server is on');
})