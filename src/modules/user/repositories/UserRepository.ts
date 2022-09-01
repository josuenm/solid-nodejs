import { v4 as uuidv4 } from "uuid";
import User from "../models/User";
import { UserDTO } from "../types/User";
import { IUserRepository } from "./implementations/IUserRepository";

class UserRepository implements IUserRepository {
  private user: UserDTO | undefined;

  private static INSTANCE: UserRepository;

  private constructor() {
    this.user;
  }

  public static getInstance() {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  login(password: string): boolean {
    if (this.user?.password === password) {
      return true;
    }

    return false;
  }

  async create({ name, email, password }: Omit<UserDTO, "id">): Promise<void> {
    this.user = {
      id: uuidv4(),
      name,
      email,
      password,
    };
  }

  async save() {
    const user = new User(this.user);
    await user.save();
  }

  async findUser(email: string): Promise<void> {
    // Buscar no banco de dados
  }
}

export { UserRepository };
