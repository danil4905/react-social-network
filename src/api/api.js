import * as Axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return Axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true
    }
  ).then (Response => {return Response.data});
};
debugger;
