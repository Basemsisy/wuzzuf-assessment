/*IMPORT_PAGE*/
import Search from "./pages/Search"; 
import Skill from "./pages/Skill";
import Job from "./pages/Job";
import Home from "./pages/Home";

const appRoutes = [
  /*INJECT_ROUTE*/
  { path: "/search", component: Search },
  { path: "/skill/:id", component: Skill },
  { path: "/job/:id", component: Job },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default appRoutes;
