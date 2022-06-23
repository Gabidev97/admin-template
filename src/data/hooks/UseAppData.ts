import { useContext } from "react";
import AppContext from "../Context/AppContext";


const useAppData = () => useContext(AppContext)

export default useAppData