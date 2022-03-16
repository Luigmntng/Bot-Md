let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(API('http://zekais-api.herokuapp.com', '/randomhusbu')
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Follow ig sya yh @ahmdlui', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

handler.premium = true
handler.register = true

module.exports = handler
