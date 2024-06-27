import React, {useEffect, useState} from 'react';
import {Pagination} from "antd";
import PagesWrapper from "../../components/PagesWrapper/PagesWrapper";
import PokeItem from "../../components/PokeItem/PokeItem";
import {ConfigThemeProvider} from "../../providers/ConfigThemeProvider";
import axios from "axios";

const PaginationPage = () => {

    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}?limit=10000&offset=0`)
            .then(response => setData(response.data.results));
    }, []);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <PagesWrapper pageTitle='Pagination' homeLink={true}>
            <div className='h-screen flex flex-col justify-between'>
                <div className='py-5'>
                    <div className='grid grid-cols-2 font-bold text-center'>
                        <p>NAME</p>
                        <p>URL</p>
                    </div>
                    <ul>
                        {currentItems.map((item, index) => <PokeItem key={index} name={item.name} url={item.url}/>
                        )}
                    </ul>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <ConfigThemeProvider>
                        <Pagination total={data.length}
                                    defaultCurrent={1}
                                    showSizeChanger={false}
                                    pageSize={20}
                                    onChange={handlePageChange}
                        />
                    </ConfigThemeProvider>
                </div>
            </div>
        </PagesWrapper>
    );
};

export default PaginationPage;