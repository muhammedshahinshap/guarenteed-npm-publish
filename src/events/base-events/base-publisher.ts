import nats, { Stan } from "node-nats-streaming";
import { Subjects } from "../subjects/Subjects";
interface Event {
  subject: Subjects;
  data: any;
}
export abstract class Publisher<T extends Event> {
  abstract subject: T["subject"];
  private client: Stan;
  constructor(client: Stan) {
    this.client = client;
  }
  publish(data: T["data"]): Promise<void> {
    return new Promise((res, rej) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        console.log(this.subject);
        if (!err) return res();
        else return rej();
      });
    });
  }
}
