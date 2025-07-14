import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
