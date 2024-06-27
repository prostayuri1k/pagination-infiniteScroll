import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import PaginationPage from "../Pages/Pagination/PaginationPage";
import DynamicScroll from "../Pages/DynamicScroll/DynamicScroll";

export const router = createBrowserRouter(
    [
        {path: '/pagination-infiniteScroll', element: <Home/>},
        {path: '/pagination-infiniteScroll/pagination', element: <PaginationPage/>},
        {path: '/pagination-infiniteScroll/infiniteScroll', element: <DynamicScroll/>},
    ]
)