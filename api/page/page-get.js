const { readFile } = require('fs')
const { encode } = require('punycode')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const { join } = require('path')


const READ_OPTIONS = {encoding: 'UTF-8'}
const HTML_URL = './html/'

const readFileHtml = file =>
readFileAsync(join(HTML_URL, file), READ_OPTIONS)

module.exports = async nomPage => {
    //recuperer le contenu du fichier index.html
   const [
        modelHtml,
        indexHeadHtml,
        indexBodyHtml,
    ] = await Promise.all([
        readFileHtml('model.html'),
        readFileHtml(`${nomPage}_head.html`),
        readFileHtml(`${nomPage}_body.html`)
    ])

    const indexHtml = modelHtml
    .replace('{{HEAD}}', indexHeadHtml)
    .replace('{{BODY}}', indexBodyHtml)

    //retourner la page html
    return indexHtml
    };
