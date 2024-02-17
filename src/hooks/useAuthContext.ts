import { AuthenticationContext } from "@/app/context/AuthContext";
import { useContext } from "react";

export default function useAuthContext() {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );

  return { data, error, loading, setAuthState };
}
