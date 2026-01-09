import nodemailer from 'nodemailer';

// Email configuration using environment variables
const transporterConfig = {
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true', // Use SSL/TLS for port 465
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
    },
};

// Create reusable transporter
export const createTransporter = () => {
    return nodemailer.createTransport(transporterConfig);
};

// Email sending function for contact form
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    interest: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData) {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO || 'info@nokinc.com',
        subject: `New Contact Form Submission - ${data.interest}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #059669; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 3px solid #10b981; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>NOK Inc. - Clean Energy Solutions</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Interest Area:</div>
                <div class="value">${data.interest}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the NOK Inc. contact form.</p>
              <p>Received at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `,
        text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Interest Area: ${data.interest}

Message:
${data.message}

---
Received at: ${new Date().toLocaleString()}
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error) {
        console.error('Email sending error:', error);
        throw error;
    }
}
