let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `*「 RECODED BY FALLXZ 」*
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler