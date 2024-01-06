import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const data = await req.json();
  const { email, subject, message } = data;
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

    return Response.json({ status: 200, response });
  } catch (error) {
    throw error;
  }
}
