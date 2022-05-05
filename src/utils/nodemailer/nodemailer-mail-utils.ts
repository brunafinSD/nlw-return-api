import { IMailContent, IMailUtils } from "../mail-utils";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bc557c616617a6",
    pass: "2051fb40bc59b6"
  }
});

export class NodemailerMailUtils implements IMailUtils {
  async sendMail({subject, body}: IMailContent) {
    await transport.sendMail({
      from: 'Bruna <luis.fernando.araujo.10@gmail.com>',
      to: 'Bruna Fraga <bruna.f.n@hotmail.com>',
      subject,
      html: body,
    })
  };
}