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
function App() {
  const { isOpen } = useSelector(selectAllNav);
  return (
    <div className="bg-[#181818] text-white">
      <Router>
        <Header />
        <Sidebar />

        <div className={`${isOpen ? "sm:ml-64" : "sm:ml-14"} `}>
          <Categories />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/video-detail/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
