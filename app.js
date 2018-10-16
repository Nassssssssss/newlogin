const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./router');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'newlogin'
};
const sessionStore = new MySQLStore(options);


app.engine('html', require('express-art-template'));
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.use(router)
app.listen(13579,()=>{
    console.log('run it 13579')
})