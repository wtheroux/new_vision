import { useState, useEffect } from 'react'
import { useGetListItemsQuery } from '../../shared/api';
import { BeerCard } from '../../entities/beer/ui';

export const BeersList: React.FC = () => {
    const [page, setPage] = useState(1);
    const { isFetching } = useGetListItemsQuery(page);

    useEffect(() => {
        const onScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if  (scrolledToBottom && !isFetching) {
                setPage(page + 1);
            }
        };
        
        document.addEventListener("scroll", onScroll);
        
        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [page, isFetching]);

    return (
        <BeerCard page={page}/>
    );
}