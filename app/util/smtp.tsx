import nodemailer, { Transporter } from 'nodemailer';
import { emailTemplate } from './email-template';


export const sendEmailContactForm = async (email: string, name: string, msg: string) => {
    let textTemplate = emailTemplate;
    textTemplate = textTemplate.replace("{{name}}", name)
    textTemplate = textTemplate.replace("{{email}}", email)
    textTemplate = textTemplate.replace("{{msg}}", msg)
    await sendEmail(email, "New Contact Form Submission - @ReynaldiRepo", textTemplate)
}

// Define the email sending function
export const sendEmail = async (to: string, subject: string, text: string): Promise<boolean> => {
    // Create a transporter using SMTP
    const transporter: Transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'developer.mail.debug@gmail.com', // Replace with your Gmail address
            pass: 'wpuxqsczihdskjkg', // Replace with your Gmail password or an app-specific password
        },
    });

    try {
        // Send the email
        await transporter.sendMail({
            from: 'developer.mail.debug@gmail.com', // Replace with your email address
            to: to,
            subject: subject,
            html: text
        });
        return true
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Send Email");
    }
};
