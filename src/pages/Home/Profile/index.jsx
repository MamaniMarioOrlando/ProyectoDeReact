import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

export const Profile = () => {
  const { userProfie,getProfile } = useAuth();

  useEffect(() => {
    getProfile()
  }, []);
  return (
    userProfie && (
      <div>
        <h1>{userProfie.name}</h1>
        <hr />
        <h3>{userProfie.email}</h3>
      </div>
    )
  );
};
