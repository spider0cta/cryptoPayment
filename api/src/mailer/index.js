const config = require('../configuration')
const nodemailer = require('nodemailer')

const host = config.get('SMTP_HOST')
const user = config.get('SMTP_USER')
const pass = config.get('SMTP_PASS')

class Mailer {
  constructor() {
    this.smtpConfig = {
      host: host,
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass
      }
    }
    this.transporter = nodemailer.createTransport(this.smtpConfig)
  }

  async sendCoinTopupMail({ address, balance }) {
    const host = config.get('FAUCET_DOMAIN')
    const admin = config.get('ADMIN_EMAIL')
    const message = {
      from: `faucet@${host}`,
      to: admin,
      subject: 'Please topup coins',
      text: `Remaining balance: ${balance}\nPlease send coins to this address: ${address}`,
      html: `<h2>Remaining balance: ${balance}</h2><p>Please send coins to this address: ${address}</p>`,
    }

    const result = await this.transporter.sendMail(message)
    return result
  }
}

module.exports = Mailer
