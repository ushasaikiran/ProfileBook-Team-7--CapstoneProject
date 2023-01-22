import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

//used to perform user logout operation
const AdminLogout = () => {
  const history = useNavigate();
  //notifies Logout successfully
  alert("Admin Logout Successfully");
  //navigating to another page using history.push()
  history("/");
};
//exporting UserLogout
export default AdminLogout;
