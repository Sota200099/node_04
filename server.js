const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT
const default_login_name = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

const app = express()

//public フォルダを許可
app.use(express.static(__dirname + '/public'))
//URLエンコード
app.use(express.urlencoded({ extended: true }))

app.post('/auth', (req, res) => {
    const login_name = req.body.login_name
    const password = req.body.password
    console.log("default_login:" + default_login_name)
    console.log("default_pass:" + default_password)
    console.log("login:" + login_name)
    console.log("pass:" + password)
    if(login_name == default_login_name && password == default_password){
        console.log("ログインできました");
    }else{
        console.log("ログインできませんでした");
    }
})

app.get('/', (req, res) => {
    res.send('Hello YSE!!!!')
})

app.get('/profile', (req, res) => {
    res.send('This is profile page')
})

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})