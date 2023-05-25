import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface JobPosterReplyEvent {
  subject: Subjects.jobPosterDataReply;
  data: any;
}
