import { v4 as uuidV4 } from "uuid";
import { UserDTO } from "../types/User";

class User {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;

  constructor({ name, email, password }: UserDTO) {
    this.name = name;
    this.email = email;
    this.password = password;

    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export default User;
