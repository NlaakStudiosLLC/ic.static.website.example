var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 3000,()=>{
    console.log('\x1b[32m'," WEBAPP STARTED AT http://localhost:"+(process.env.PORT||3000));
});