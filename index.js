const express = require('express') // import express
const app = express() // assign express ke variable

app.set('view engine', 'ejs') // set view engine
app.use(express.static('public')) // set folder public sebagai folder static'

app.get('/', (req, res) => {
    res.render('home')
} )

app.get('/pricing', (req, res) => {
    res.render('pricing')
} )

app.listen( 2500, () => { console.log('localhost:2500 sudah berjalan') } ) // listener port 2500



























/* contoh pertama
// console.log('Halo semua')

const express = require('express') // import express
const app = express() // assign express ke variable

/* contoh ke-1
// // path '/'
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

// path '/'
app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query.nama + ': ' + req.query.umur) // http://localhost:2500/?nama=Ifa&umur=22
}) *

// contoh ke-2 : middleware 
// deklarasi path : route
const gabungNama = (req, res, next) => {
    const fullName = req.query.firstName + ' ' + req.query.middleName + ' ' + req.query.lastName
    req.fullName = fullName
    next()
}

const autentikasi = (req, res, next) => {
    if ( req.query.pass === 'sayabolehmasuk' ) {
        next()
    } else {
        res.send('<h1 style="color: red;">Maaf! anda tidak boleh masuk</h1>')
    }
}

// biar autentikasi semua
// app.use(autentikasi)

// path '/'
app.get('/', gabungNama, (req, res) => {
    // console.log(req.fullName) // http://localhost:2500/?firstName=Arifa&middleName=Nurul&lastName=Fadlila
    res.send(`<h1>Hello ${req.fullName}</h1>`)
})

// path '/halaman-rahasia'
app.get('/halaman-rahasia', autentikasi, (req, res) => {
    res.send('<h1>Welcome to bimil page</h1>') // http://localhost:2500/halaman-rahasia?pass=sayabolehmasuk
})

app.listen( 2500, () => { console.log('localhost:2500 sudah berjalan') } )
*/