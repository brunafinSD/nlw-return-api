import { prisma } from "../../prisma";
import { IFeedbackCreate, IFeedbacksRepository } from "../feedbacks-repository";

// arquivo de implementações

export class PrismaFeedbacksRepository implements IFeedbacksRepository{
  async create({type, comment, screenshot}: IFeedbackCreate){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  };
}