import { pickRandom } from '../../lib/func.js'

const bot = ['ada apa bro ?','apa sih','apa sayang','jangan ngagetin dong','iya','kenapa dah','bodo amat','gua tandain muka lu','bukan, ini patrick','lu itu gak diajak','gua mulu ajg','menahan emosi','males','ada yang bisa dibantu ?','lagi tes sinyal ya ?','selalu disampingmu','selalu bersamamu']
const ping = ['pakai prefix','command yg betul','gak btul','contoh : .ping','pake titik coba','apa coba','Kecepatan Repon = Kecepatan Cahaya','yahaha ngemlag','pakai titik\n\n.ping gitu','waktunya bayar wifi','kuota mu sekarat','Ping : 0 miliseconds','adu .testspeed ?']
const p = ['kirim perintah ulang dengan contoh (#menu) untuk melihat daftar isi']

export async function before(m) {
//	if (m.isGroup) return !1
	if (m.text.toLowerCase() == 'bot') await this.reply(m.chat, pickRandom(bot), fliveLoc2)
	if (m.text.toLowerCase() == 'p') await this.reply(m.chat, pickRandom(p), fliveLoc2)
	if (m.text.toLowerCase() == 'pp') await this.reply(m.chat, pickRandom(p), fliveLoc2)
	if (m.text.toLowerCase() == 'ping') await this.reply(m.chat, pickRandom(ping), fliveLoc2)
	return !0
}