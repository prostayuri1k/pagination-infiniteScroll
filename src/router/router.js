import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import PaginationPage from "../Pages/Pagination/PaginationPage";
import InfiniteScroll from "../Pages/InfiniteScroll/InfiniteScroll";

export const router = createBrowserRouter(
    [
        {path: '/', element: <Home />},
        {path: 'pagination', element: <PaginationPage />},
        {path: 'infiniteScroll', element: <InfiniteScroll />},
    ]
)