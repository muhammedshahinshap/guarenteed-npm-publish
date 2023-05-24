import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface UserCartDetailsEvent {
  subject: Subjects.userCreated;
  data: {
    wishList?: { _id: ObjectId }[] | [];
  };
}
