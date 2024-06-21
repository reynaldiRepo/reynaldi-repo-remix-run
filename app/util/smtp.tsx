import type { Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import { emailTemplate } from "./email-template";

export const sendEmailContactForm = async ({
  email,
  name,
  msg,
}: {
  email: string;
  name: string;
  msg: string;
}) => {
  let textTemplate = emailTemplate;
  textTemplate = textTemplate.replace("{{name}}", name);
  textTemplate = textTemplate.replace("{{email}}", email);
  textTemplate = textTemplate.replace("{{msg}}", msg);
  await sendEmail({
    to: process.env.OWNER_EMAIL ?? "",
    subject: "New Contact Form Submission - @ReynaldiRepo",
    text: textTemplate,
  });
};

// Define the email sending function
export const sendEmail = async ({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}): Promise<boolean> => {
  const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.GOOGLE_SMTP_USER,
      pass: process.env.GOOGLE_SMTP_PASSWORD,
    },
  };
  console.log(smtpConfig)
  const transporter: Transporter = nodemailer.createTransport(smtpConfig);

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.GOOGLE_SMTP_USER,
      to: to,
      subject: subject,
      html: text,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Send Email");
  }
};
