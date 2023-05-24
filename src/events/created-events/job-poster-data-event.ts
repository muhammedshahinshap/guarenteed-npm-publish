import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface JobPosterEvents {
  subject: Subjects.jobPosterData;
  data: {
    _id: ObjectId;
    fk_id: ObjectId;
    type: string;
    noOfYears: string;
    tech: string;
    salary: string;
    discription: string;
    image?: string;
    status: boolean;
    reportStatus: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
