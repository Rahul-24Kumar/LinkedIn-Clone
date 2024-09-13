import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({ token: token });

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME,
};
