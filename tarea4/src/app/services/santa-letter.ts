import nodemailer from "nodemailer";

export async function enviarCorreo(contenido: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Carta a Santa</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f7f7f7;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .card {
          max-width: 600px;
          margin: 40px auto;
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          border-left: 6px solid #c0392b;
        }
        h1 {
          font-size: 24px;
          color: #c0392b;
          margin-bottom: 20px;
          text-align: center;
        }
        .content {
          white-space: pre-line;
          font-size: 16px;
          line-height: 1.6;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 14px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Carta para Santa Claus</h1>
        <div class="content">
          ${contenido}
        </div>
        <div class="footer">
          Que la temporada sea luminosa.
        </div>
      </div>
    </body>
    </html>
  `;

  const info = await transporter.sendMail({
    from: process.env.GMAIL_USER!,
    to: "franciscosevilla@iteso.mx",
    subject: "Carta de navidad",
    html
  });


  console.log("Correo enviado:", info.messageId);
}
