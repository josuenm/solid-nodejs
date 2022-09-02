import { client } from "../../../databases/postgre";
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
      name,
      email,
      password,
    };
  }

  async save(): Promise<void> {
    const user = new User(this.user as UserDTO);

    console.log(user);

    await client
      .query(
        `INSERT INTO users(id, name, email, password) values('${user.id}', '${user.name}', '${user.email}', '${user.password})'`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  async findUser(email: string): Promise<string> {
    const user: any = await client.query(
      `SELECT * FROM users WHERE email='${email}'`
    );

    if (user.rows.length === 0) {
      return "User not found";
    }

    this.user = {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
    };

    return "User found";
  }
}

export { UserRepository };
