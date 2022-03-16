let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, command }) => {
    let res = await fetch(global.API('http://docs-jojo.herokuapp.com', '/api/husbuando')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    const amv = `${json.waifu}`
    await conn.sendFile(m.chat, json.image '', amv, m)
}
handler.help = ['husbu]
handler.tags = ['anime']
handler.command = /^husbu$/i
handler.limit = true
module.exports = handler




