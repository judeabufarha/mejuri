import './styles.css';
import {Link, link} from 'react-router-dom';

export const JewelryItem = (props) => {
    const {image, name, price, material, id} = props;
    console.log(id);

return (
    <div className = "jewelry">
        <img className ="jewel-img" src={image} alt={name + "photo"} />
        <Link to = {`/jewelry/${id}`} >
            <h2 className ="jewel-name"> { name } </h2>
        </Link>
        <p className ="jewel-price"> { price }</p>
        <p className ="jewel-material"> { material }</p>
    </div>

);
};
