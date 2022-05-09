const cheerio = require('cheerio')
const axios = require('axios')

const GITHUB_LINK = 'https://github.com/Derposoft'
const GITHUB_DATA = axios.get(GITHUB_LINK).then(data => {
    const $ = cheerio.load(data)
    const pins = $('.pinned-item-list-item-content')//.find('')
    console.log(pins)
})

