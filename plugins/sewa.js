let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _5k/grup (1 minggu)_
║┊ ⌲ Sewa = _10k/grup (1 bulan)_
║┊ ⌲ Sewa = _20k/grup (permanen)_                                                          ╰═ ┅ ═══════

╭═══ *〘 BELI PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Premium = _10k/minggu_
║┊ ⌲ Premium = _20k/bulan_
║┊ ⌲ Premium = _35k/permanen
╰═ ┅ ═══════



༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*
◪ *Jika Minat Hubungi owner kami*
◪ *wa.me/6281802626072*
▌│█║▌║▌║║▌║▌║█│▌

`.trim(), `aresbotz`, 'Payment', '#payment', 'Owner', '#owner', m)

}
handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i

module.exports = handler

