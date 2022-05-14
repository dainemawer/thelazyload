const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

const handler = async (req, res) => {
    const { to, from, name, message, subject, text_body, html_body } = req.body
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "hello@thelazyload.com",
                        "Name": "thelazyload"
                    },
                    "To": [
                        {
                            "Email": "hello@dainemawer.com",
                            "Name": "Daine Mawer"
                        }
                    ],
                    "Variables": {
                        "name": `${name}`,
                        "email": `${from}`,
                        "message": `${message}`
                    },
                    "Subject": `${subject}`,
                    "TextPart": `${text_body}`,
                    "HTMLPart": `${html_body}`,
                    "TemplateID": 3922219,
                    "TemplateLanguage": true,
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            res.send({ success: true, result: result.Messages })
        })
        .catch((err) => {
            res.send({ success: false, result: err })
        })
}

export default handler