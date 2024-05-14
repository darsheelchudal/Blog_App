import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account();
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name    
      );
      if (userAccount) {
        return await this.login({ email, password });
      } else {
        return userAccountccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login(email, password) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serivce :: getCurretUser :: error", error);
    }

    return null;
  }
  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service:: Logout ::", erro);
    }
  }
}

export default authService;
