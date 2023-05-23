import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface UsercreatedEvents {
  subject: Subjects.userCartDetails;
  data: {
    wishList?: { _id: ObjectId }[];
  };
}
