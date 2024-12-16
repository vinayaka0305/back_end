const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`serve is running on port ${process.env.PORT}`);
});
