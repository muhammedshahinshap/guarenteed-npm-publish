import { Subjects } from "../subjects/Subjects";
export interface UserMyChatEvent {
  subject: Subjects.MychatData;
  data: any;
}
