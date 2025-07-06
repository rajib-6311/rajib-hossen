import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import ProjectDetailsTwo from "./Pages/ProjectDetailsTwo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/project-details-two" element={<ProjectDetailsTwo/>}/>
      </Routes>
    </>
  );
};

export default App;