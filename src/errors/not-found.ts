import custErr from "./custErr";

export default class NotFound extends custErr {
  public statusCode = 404;
  serializeError() {
    return [{ message: "invalid Api" }];
  }
  constructor() {
    super("invalid Api");
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}
