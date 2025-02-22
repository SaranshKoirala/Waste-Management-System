import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Subscription from "./pages/Subscription";
import AdminLogin from "./pages/AdminLogin";
import SchedulePickup from "./pages/SchedulePickup";
import UserProfile from "./pages/UserProfile";
import AdminLayout from "./pages/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/schedulepickup" element={<SchedulePickup />} />
      <Route path="/subscribe" element={<Subscription />} />
      <Route path="/admin" element={<AdminLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
