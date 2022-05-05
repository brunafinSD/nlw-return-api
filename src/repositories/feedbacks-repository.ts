export interface IFeedbackCreate{
  type: string;
  comment: string;
  screenshot?: string;
}

// contrato
export interface IFeedbacksRepository{
  create: (data: IFeedbackCreate) => Promise<void>;
}