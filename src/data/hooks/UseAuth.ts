import { useContext } from "react";
import AuthContext from "../Context/AuthContext";


const useAppData = () => useContext(AuthContext)

export default useAppData