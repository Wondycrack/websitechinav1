const express = require('express')
const app = express()
const port = 3000

//Importer la logique de la page d acceuil 
const generatorHomePage = require('./page/index-get.js') 

//ecouter la methode GET et la route 
app.get('/', async(req,res) => {
    const indexHtml = await generatorHomePage()

    res.send(indexHtml)
    
})

//ecoute les requete du repertoire styles/xx

// retourne les images 
app.use('/styles', express.static('/Users/hi/code/dotfiles/dev/websitechina1/styles/'))
app.use('/images', express.static('/Users/hi/code/dotfiles/dev/websitechina1/images/'))
//retourne les styles 



//demarrer le  serveur et ecouter un port donne 
app.listen(port,() => {
    console.log
    (`Example app listening on port ${port}`)
})