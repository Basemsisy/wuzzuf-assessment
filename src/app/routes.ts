/*IMPORT_PAGE*/
import Job from "./pages/Job";
import Home from "./pages/Home";

const appRoutes = [
  /*INJECT_ROUTE*/
  { path: "/job/:id", component: Job },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default appRoutes;
