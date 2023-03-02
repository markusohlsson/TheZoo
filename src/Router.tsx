import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalDetails } from "./components/AnimalDetails/AnimalDetails";
import { AnimalsSmall } from "./components/AnimalsSmall/AnimalsSmall";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    children: [
      {
        path: "/animals",
        element: <AnimalsSmall />
      },{
        path:"/animals/:id",
        element:<AnimalDetails/>
      }]}
  ]);