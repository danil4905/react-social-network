import * as Axios from "axios";
const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "108fc3e2-3513-4a0f-bd09-dc2d0da947cc"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(Response => {
        return Response.data;
      });
  },

  following(userId = 2) {
    return instance.post(`follow/${userId}`).then(Response => {
      return Response.data;
    });
  },
  unfollowing(userId = 2) {
    return instance.delete(`follow/${userId}`).then(Response => {
      return Response.data;
    });
  }
};
