let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lui', '/api/downloader/xvideo', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xvideosearch <judul>']
handler.tags = ['bokep']
handler.command = /^(xvideosearch)$/i

handler.limit = 12

module.exports = handler
