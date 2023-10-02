import { Beer } from "../../api/beer/model"
import { formatedText } from "../../lib"
import s from './style.module.css'

export const Card:React.FC<{item:Beer}> = ({item}) => {

    return(
        <div className={s.card}>
            <img src={item.imageUrl} alt="Beer picture"/>
            <h3>{item.name}</h3>
            <p>{formatedText(item.description)}</p>
        </div>
)
}