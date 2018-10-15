const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./router');


app.engine('html', require('express-art-template'));
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)
app.listen(13579,()=>{
    console.log('run it 13579')
})