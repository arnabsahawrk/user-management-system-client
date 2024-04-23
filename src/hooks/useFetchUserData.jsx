import axios from "axios";
import { useEffect, useState } from "react";

const useFetchUserData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://user-management-system-server-pearl.vercel.app/users"
      );
      const { data } = response;
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Failed To Fetch Data", err);
    }
  };

  const refetch = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetchData();
  }, [toggle]);
  return { users, refetch, isLoading };
};

export default useFetchUserData;
