import { Subjects } from "../subjects/Subjects";
export interface UserMyChatReplyEvent {
  subject: Subjects.MychatDataReply;
  data: any;
}
