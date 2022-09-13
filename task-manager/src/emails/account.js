const sgMail = require('@sendgrid/mail')
const { CancellationToken } = require('mongodb')
const sendgridApiKey = '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'
sgMail.setApiKey(sendgridApiKey)

const WelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hamza2@dr.com',
        subject: "Welcome to the App",
        text: `Welcome to App ${name}. lemme know how is your experience`

    })
}

const ByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'hamza2@dr.com',
        subject:'User Cancellation',
        text: `It was nice experience with you ${name}.Hope you die soon :(`

    })
}
module.exports = {
    WelcomeEmail,
    ByeEmail
}