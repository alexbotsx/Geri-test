let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:SIABOT;;\nFN:SIABOT\nORG:SIABOT\nTITLE:\nitem1.TEL;waid=56971943258:56971943258\nitem1.X-ABLabel:SIABOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:SIABOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
