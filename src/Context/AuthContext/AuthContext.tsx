import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { AuthContextType, UserData } from "../../Interfaces/userInfo/UserInfoResponse";


export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  const saveUserData = () => {
    const enCodedToken = localStorage.getItem("token");
    if (enCodedToken) {
      const deCodedToken = jwtDecode<UserData>(enCodedToken);
      setUserData(deCodedToken);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") || userData != null) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
}