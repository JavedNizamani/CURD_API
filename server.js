const http = require('http');
const PORT = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
require('./utils/db.tables');

    server.listen(PORT,()=>{
        console.log(`Server Running at PORT : ${PORT} `);
    });



