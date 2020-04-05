import * as Axios from "axios";
const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "11b34c0a-3f0a-485a-b5a0-b33e700d72ee",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => {
        return Response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
