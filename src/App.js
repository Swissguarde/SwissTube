import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Videos from "./pages/Videos";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { selectAllNav } from "./features/navSlice";
import Categories from "./components/Categories";
import VideoDetails from "./pages/VideoDetails";
import Search from "./pages/Search";
import ChannelDetails from "./pages/ChannelDetails";
import ScrollToTop from "./components/ScrollToTop";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const { isOpen } = useSelector(selectAllNav);
  return (
    <div className="bg-[#181818] text-white">
      <Router>
        <ScrollToTop />
        <Header />
        <Sidebar />

        <div className={`${isOpen ? "sm:ml-64" : "sm:ml-14"} `}>
          <Categories />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/channel/:channelId" element={<ChannelDetails />} />
            <Route path="/video-detail/:id" element={<VideoDetails />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
