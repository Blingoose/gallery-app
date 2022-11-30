import { useAuth } from "../context/AuthContext";
import AlertUser from "./AlertUser";

const MainAlert = () => {
  const {
    alert: { location },
  } = useAuth();
  return location === "main" && <AlertUser />;
};

export default MainAlert;
