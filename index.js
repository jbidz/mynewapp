require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')


app.use(express.urlencoded({extended: false}))

//setup view engine
app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');


var name = ''
//setup routes
app.get('/', (req, res) => {
    res.render('welcome')
})

app.post('/', (req, res) => {

    console.log(req.body)
    name = req.body.name
    res.redirect('/user')
})

app.get('/user', (req, res) => {
    res.render('user', {name: name})
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})