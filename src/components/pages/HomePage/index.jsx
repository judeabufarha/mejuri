import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { JewelryItem } from "../../JewelryItem";
import JewelsOrderContext from "../../../context/jewelContext";


export const HomePage = () => {
    const [jewelry, setJewelry] = useState([]);
    useEffect(
        () => {
            getJewelry();
        }, []
    );
    const globalState = useContext(JewelsOrderContext);

    const getJewelry = async () => {
        try{
            const response = await fetch('https://firestore.googleapis.com/v1/projects/itec4014assignment3/databases/(default)/documents/products/');
            const data = await response.json();
            console.log(data);
            const formattedData = await data.documents.map((item) => {
                return item.fields;
            });

            setJewelry(formattedData);
            globalState.initializeJewels(formattedData);
            
            console.log(data.documents[0].id);
        } catch(err){
            console.log(err)
        }
    }
    console.log(jewelry);
  return (
    <div className="home-page">
        <h2 className = "title"> Shop it all</h2>
        <div className = "jewelry-container">
            {
                jewelry.map((jItem) => (console.log(jItem)))
            }
            {
                jewelry.map((jItem) => (
                    jItem.price !== undefined &&
                    <JewelryItem key = {jItem.id.stringValue} image = {jItem.image.stringValue}  name = {jItem.name.stringValue} price = {jItem.price.stringValue} material = {jItem.material.stringValue} id = {jItem.id.stringValue}>  </JewelryItem>   
                     
                ))
            }
           
        </div>

    </div>
  );
};
