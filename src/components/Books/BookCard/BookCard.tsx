import { Button } from '@components/feedback';
import styles from './BookCard.module.css';
import { TBooks } from '@customtypes/booksType';
import { useNavigate } from 'react-router-dom';
const { pic, text, btnCard, booCard } = styles;
const BookCard = ({ img, desc, Author, title, id }: TBooks) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`${id}`)} className={booCard} >
            <div className={pic}>
                <img src={img} alt="" />
            </div>
            <div className={text}>
                <h3>{title}</h3>
                <span>{Author}</span>
                <p>{desc}</p>
                <div className={btnCard}>
                    <Button>
                        Read
                    </Button >
                </div>
            </div>
        </div>
    )
}

export default BookCard
