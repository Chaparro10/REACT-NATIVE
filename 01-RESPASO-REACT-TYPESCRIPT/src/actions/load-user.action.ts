import axios from "axios";
import type {ReqResUser, ReqResUserListResponse } from "../interfaces/reqres.response";

export const loadUserAction = async (page: number)=> {
  try {
    const response = await axios.get<ReqResUserListResponse>(
  `https://reqres.in/api/users?page=${page}`,
  {
    headers: {
      "x-api-key": "reqres-free-v1"
    }
  }
);

    return response.data.data;
  } catch (error) {
    return [];
  }
};
