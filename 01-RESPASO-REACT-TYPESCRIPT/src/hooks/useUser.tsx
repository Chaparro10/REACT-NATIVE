import { useEffect, useState } from "react";
import type { ReqResUser } from "../interfaces/reqres.response";
import { loadUserAction } from "../actions/load-user.action";

export const useUsers = () => {
  const [user, setUser] = useState<ReqResUser[]>([]);

  useEffect(() => {
    getInfoPerUser();
  }, []);

  const getInfoPerUser = async () => {
    const response = await loadUserAction(1);
    console.log('response', response)
     setUser(response);
  };
  return {
    user,
  };
};
