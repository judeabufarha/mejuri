
import './styles.css';
import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import JewelsOrderContext from '../../../context/jewelContext';

export const DetailsPage = (props) => {
  const {id} = useParams();

  const [jewel, setJewel] = useState({});

  const globalState = useContext(JewelsOrderContext);

  useEffect ( () => {
    const jewelItem = globalState.jewels.find(
        (jewelItem) => jewelItem.id.stringValue === id
    );
    console.log(globalState);
    setJewel(jewelItem);
  }, [globalState]);

  if (jewel) {
    return (
      <div className="jewel-page">
           
            <div className="images">
                <img className="jewel-image" src={jewel.image?.stringValue} alt="jewel photo" />
                <img className="jewel-image2" src={jewel.image2?.stringValue} alt="jewel photo 2" />
                <img className="jewel-image3" src={jewel.image3?.stringValue} alt="jewel photo 3" />
                <img className="jewel-image4" src={jewel.image4?.stringValue} alt="jewel photo 4" />
            </div>
           
            <div className="content">
            <h2 className="jewel-tit"> {jewel.name?.stringValue}</h2>
                <p className="jewel-pri" >{jewel.price?.stringValue} </p>
                <p className="jewel-mat" >{jewel.material?.stringValue} </p>
            </div>
      </div>
    );
  } else {
      
    return <p>No jewel with this ID</p>
  }
}