import { UserDTO } from "../../types/User";

export interface IUserRepository {
  create: (user: Omit<UserDTO, "id">) => Promise<void>;
  findUser: (email: string) => Promise<void>;
  save: () => Promise<void>;
}
