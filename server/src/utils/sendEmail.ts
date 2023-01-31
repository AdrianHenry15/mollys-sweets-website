// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";

module.exports = async (email: any, subject: any, text: any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: process.env.HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
            from: process.env.USER,
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent successfully");
    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
};
