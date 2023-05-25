import { Subjects } from "../subjects/Subjects";
export interface JobHomeReplyEvent {
  subject: Subjects.JobHomeDataReply;
  data: any;
}
