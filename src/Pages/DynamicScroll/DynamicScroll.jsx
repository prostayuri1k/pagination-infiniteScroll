import React, {useEffect, useState} from 'react';
import PagesWrapper from "../../components/PagesWrapper/PagesWrapper";
import PokeItem from "../../components/PokeItem/PokeItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import EndMessage from "../../components/EndMessage/EndMessage";
import Loader from "../../components/Loader/Loader";
import ButtonUp from "../../components/ButtonUp/ButtonUp";
import {Slide, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DynamicScroll = () => {
    const itemsPerLoad = 20;
    const [loadedItems, setLoadedItems] = useState(itemsPerLoad);
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}?limit=20&offset=0`)
            .then(response => {
                setData(response.data.results);
                setTotalCount(response.data.count)
            });
    }, []);

    const fetchMoreData = async () => {
        if (data.length >= totalCount) {
            setHasMore(false)
        }

        setLoadedItems(prevState => prevState + itemsPerLoad);

        await axios.get(`${process.env.REACT_APP_API_URL}?limit=20&offset=${loadedItems}&offset=0`)
            .then(response => {
                setData(prevState => prevState.concat(response.data.results));
            })
            .then(() => toast.success(`${itemsPerLoad} more items loaded!`, {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide,
            }))
        ;
    }

    return (
        <PagesWrapper pageTitle='Infinite Scroll' homeLink={true}>
            <ToastContainer autoClose={500}/>
            <div className='h-screen flex flex-col justify-between'>
                <div className='py-5'>
                    <div className='grid grid-cols-2 font-bold text-center'>
                        <p>NAME</p>
                        <p>URL</p>
                    </div>
                    <ul>
                        <InfiniteScroll
                            dataLength={data.length}
                            hasMore={hasMore}
                            loader={<Loader/>}
                            next={fetchMoreData}
                            endMessage={<EndMessage/>}
                        >
                            {data.map((item, index) => <PokeItem key={index} name={item.name} url={item.url}/>)}
                        </InfiniteScroll>
                    </ul>
                </div>
                <ButtonUp/>
            </div>
        </PagesWrapper>
    );
};

export default DynamicScroll;