const nodemailer = require("nodemailer");




const sendmail=async(req,res)=>{


let testAccount=await nodemailer.createTestAccount()

// connect with smtp server 
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'herbert.sporer@ethereal.email',
        pass: '8Wk3kvuTFC9jtx2VUv'
    }
});


  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Bishal Roy 👻" <herbert.sporer@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔ Bishal, How are you", // Subject line
    text: "Hello world + BIshal?", // plain text body
    html: "<b>Hello world?............</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);



  
res.json(info)
}

module.exports=sendmail