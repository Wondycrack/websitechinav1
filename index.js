const express = require('express')
const app = express()
const port = process.env.port || 3000
const nodemailer = require('nodemailer')

//Importer la logique de la page d acceuil 
const generatorModele = require('./api/page/page-get') 

//ecouter la methode GET et la route 
app.get('/', async(req,res) => {
    const indexHtml = await generatorModele('index')

    res.send(indexHtml)
    
})

app.get ('/tech', async(req,res) => {
    const techHtml = await generatorModele('tech')
    res.send(techHtml)
})

app.get ('/contact', async(req,res) => {
    const contactHtml = await generatorModele('contact')
    res.send(contactHtml)
})

app.get ('/signUp', async(req,res) => {
    const signUpHtml = await generatorModele('signUp')
    res.send(signUpHtml)
})

//ecouter la methode Post et la route 
app.post('/', (req,res)=>{
    console.log(req.body)



    //nodemailer

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    })

    const mailOptions = {
        from: req.body.email,
        loaderto: 'mickaelat09@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.subject
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent' + info.response)
            res.send('success')
        }
    })

})


//ecoute les requete du repertoire styles,js,images/ 
app.use('/styles', express.static('/Users/hi/code/dotfiles/dev/websitechina1/styles'))
app.use('/images', express.static('/Users/hi/code/dotfiles/dev/websitechina1/images/'))
app.use('/js', express.static('/Users/hi/code/dotfiles/dev/websitechina1/js/'))
app.use(express.json())



//demarrer le  serveur et ecouter un port donne 
app.listen(process.env.PORT || port,() => {
    console.log
    (`Example app listening on port ${port}`)
})