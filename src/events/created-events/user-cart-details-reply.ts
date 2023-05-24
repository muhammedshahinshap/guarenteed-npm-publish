import { Subjects } from "../subjects/Subjects";
export interface UserCartDetailsReplyEvent {
  subject: Subjects.userCartReplay;
  data: {
    data?: any;
  };
}
