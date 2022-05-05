import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackService } from './services/submit-feedback-service';
import { NodemailerMailUtils } from './utils/nodemailer/nodemailer-mail-utils';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailUtils = new NodemailerMailUtils();
  const submitFeedbackRepositoryService = new SubmitFeedbackService(prismaFeedbackRepository, nodemailerMailUtils);

  await submitFeedbackRepositoryService.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send();
});