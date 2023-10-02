import { useGetListItemsQuery } from '../../../shared/api';
import { Beer } from '../../../shared/api/beer/model';
import { Card } from '../../../shared/ui/card';
import s from './style.module.css';

export const BeerCard: React.FC<{page: number}> = ({page}) => {
    const { data } = useGetListItemsQuery(page);
    const beers = data ?? [];

    return (
        <div className={s.cardWrapper}>
            {beers.map((p: Beer) => (
                <Card key={p.id} item ={p}></Card>
            ))}
        </div>
    );
}