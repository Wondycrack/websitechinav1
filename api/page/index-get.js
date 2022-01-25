const { readFile } = require('fs')
const { encode } = require('punycode')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const READFILES = {encoding: 'UTF-8'}
const INDEX_URL = '/Users/hi/code/dotfiles/dev/websitechina1/index.html'

module.exports = async() => {
    //operation
    //recuperer le contenu du fichier index.html
    const contenu = await readFileAsync(INDEX_URL , READFILES)
    //retourner la page html
    return contenu
}
