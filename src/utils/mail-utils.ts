export interface IMailContent{
  subject: string;
  body: string;
}

export interface IMailUtils{
  sendMail: (data: IMailContent) => Promise<void>;
}