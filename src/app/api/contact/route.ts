import * as nodemailer from 'nodemailer'

if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP credentials are not fully defined.');
    process.exit(1); // Exit the process with an error code
  }

  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
export async function POST(req:Request) {
    try{
        const formData =  await req.json()
        const name = formData['name']
        const email = formData['email']
        const message = formData['message']

        await transporter.sendMail({
            from: `${email}`, // Sender address
            to: `adityaakilesh@gmail.com`, // Recipient address
            subject: 'From My Portfolio website',
            text: 'Contact Form Help',
            html:`<h2>${name}</h2><p>${message}</p>`
          });
        return Response.json("success")
        
    }
    catch (error) {
        return Response.json(error)
    }
    
}