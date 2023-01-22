import "./App.css";
import UserRegister from "./components/User/UserRegister";
import UserLogin from "./components/User/UserLogin";
import UserLogout from "./components/User/Logout";
import { Route, Routes } from "react-router-dom";
import Addpost from "./components/User/AddPost";
import AllPosts from "./components/User/AllPost";
import Header from "./components/User/Header";
import UserListing from "./components/User/UserCrudOperations/UserListing";

import UserDetail from "./components/User/UserCrudOperations/UserDetail";
import UserEdit from "./components/User/UserCrudOperations/UserEdit";

import Home from "./components/HomePage";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminRegister from "./components/Admin/AdminRegister";
import AdminLogout from "./components/Admin/AdminLogout";
import AdminAllPost from "./components/Admin/AdminAllPost";
import AdminAddPost from "./components/Admin/AdminAddPost";
import AdminPostApproval from "./components/Admin/AdminPostApproval";

import ReportUser from "./components/User/ReportUser";
import ViewReportUser from "./components/User/ViewReportUser";
import ReportedUserList from "./components/Admin/PostAndUserCrudByAdmin/AdminReportedUser";
import UserPostListing from "./components/User/PostCrudByUser/UserPostList";
import Chatting from "./components/Message/Chatting";

import UserPostUpdate from "./components/User/PostCrudByUser/UserPostUpdate";
import DisplayAllPosts from "./components/User/PostCrudByUser/DisplayAllPosts";
import AddUser from "./components/User/UserCrudOperations/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/register" element={<UserRegister />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/logout" element={<UserLogout />}></Route>
        <Route path="header" element={<Header />}></Route>

        <Route path="/addpost" element={<Addpost />}></Route>
        <Route path="/allpost" element={<AllPosts />}></Route>

        <Route path="/usercrud" element={<UserListing />}></Route>
        <Route path="/user/create" element={<AddUser />}></Route>
        <Route path="/user/detail/:userId" element={<UserDetail />}></Route>
        <Route path="/user/update/:userId" element={<UserEdit />}></Route>
        <Route path="/postcrud" element={<DisplayAllPosts />}></Route>

        <Route path="/post/update/:postId" element={<UserPostUpdate />}></Route>
        <Route path="/reportuser" element={<ReportUser />}></Route>
        <Route path="/reported/:id" element={<ViewReportUser />}></Route>
        <Route path="/reportedusers" element={<ReportedUserList />}></Route>
        <Route path="/userpostlist" element={<UserPostListing />}></Route>

        <Route path="/chathere" element={<Chatting />}></Route>

        {/* Admin Part */}
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/adminregister" element={<AdminRegister />}></Route>
        <Route path="/adminlogout" element={<AdminLogout />}></Route>
        <Route path="/admin/allposts" element={<AdminAllPost />}></Route>
        <Route path="/adminaddpost" element={<AdminAddPost />}></Route>

        <Route
          path="/admin/postapprove"
          element={<AdminPostApproval />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
