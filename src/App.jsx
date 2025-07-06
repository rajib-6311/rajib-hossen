import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import ProjectDetailsTwo from "./Pages/ProjectDetailsTwo";
import ProjectDetailsThree from "./Pages/ProjectDetailsThree";
import ProjectDetailsFour from "./Pages/ProjectDetailsFour";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/project-details-two" element={<ProjectDetailsTwo/>}/>
        <Route path="/project-details-three" element={<ProjectDetailsThree/>}/>
        <Route path="/project-details-four" element={<ProjectDetailsFour/>}/>
      </Routes>
    </>
  );
};

export default App;