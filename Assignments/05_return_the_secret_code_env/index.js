const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

app.listen(8088,()=>{
    console.log('listen to the server 8088')
})