import { IFeedbacksRepository } from "../repositories/feedbacks-repository";
import { IMailUtils } from "../utils/mail-utils";

interface ISubmitFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailUtils: IMailUtils,

  ) { }

  async execute(req: ISubmitFeedbackRequest) {
    const { type, comment, screenshot } = req;

    if(!type){
      throw new Error('Type is required.')
    }

    if(!comment){
      throw new Error('Comment is required.')
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailUtils.sendMail({
      subject: 'Novo feedback! ;)',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111; background-color: #ff0370">`,
        `<p style="font-weight: bold">Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join('\n')
    })
  }
}