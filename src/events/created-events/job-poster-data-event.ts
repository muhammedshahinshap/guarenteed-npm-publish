import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface JobPosterEvents {
  subject: Subjects.jobPosterData;
  data:any
}
