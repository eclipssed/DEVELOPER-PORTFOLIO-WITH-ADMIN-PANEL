"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function sendEmail(formData) {
  const { email, subject, message } = formData;
  console.log(email, subject, message);
  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: ["furqanmirzaig@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>Sender: {email}</p>
          <h2 className="text-xl font-bold">{subject}</h2>
          <p>{message}</p>
        </>
      ),
    });
    return true;
  } catch (err) {
    console.log("Error happened while sending email: ", err);
    throw err;
  }
}
