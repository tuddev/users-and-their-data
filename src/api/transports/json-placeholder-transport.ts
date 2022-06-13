import axios from 'axios';
import { PostModel } from '../models';
import { UserModel } from '../models/userModel';

const USERS_LINK = 'https://jsonplaceholder.typicode.com/users';

/**
 * Json placeholder api requests
 */
export class JsonplaceholderTransoprt {
  /**
   * Get users list
   */
  static getUsers(): Promise<Array<UserModel>> {
    return axios(USERS_LINK)
      .then((response) => {
        return response.data.map((user: object) => user);
      });
  }

  /**
   * Get user by id
   */
  static getUser(id: string): Promise<UserModel> {
    return axios(`${USERS_LINK}/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  /**
   * Get posts list by user id
   */
  static getUserPosts(id: string): Promise<Array<PostModel>> {
    return axios(`${USERS_LINK}/${id}/posts`)
      .then((response) => {
        return response.data;
      });
  }
}


