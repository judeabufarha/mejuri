import React, { useState } from 'react';

const JewelsOrderContext = React.createContext({
  jewels: [],
  order: [],
  initializeJewels: () => { },
  addJewelsToOrder: () => { },
  removeJewelsFromOrder: () => { },
});

export const JewelsOrderContextProvider = (props) => {
  const [order, setOrder] = useState([]);
  const [jewels, setJewels] = useState([]);

  const initializeJewels = (jewelsFromApi) => {
    setJewels(jewelsFromApi);
  };

  const addJewelsToOrder = (jewelItem) => {
    let newOrder = order;
    newOrder.push(jewelItem);
    setOrder(order);
  }

  const removeJewelsFromOrder = (jewelId) => {
    let prevOrder = order;
    const found = order.findIndex((jewelItem) => {
      return (jewelItem.id === jewelId);
    })
    if (found !== -1) {
      prevOrder.splice(found, 1); // delete one
      setOrder([...prevOrder]);
    } else {
      console.log("error delete");
    }
  }

  return (<JewelsOrderContext.Provider
    value={{ order: order, addJewelsToOrder: addJewelsToOrder, removeJewelsFromOrder: removeJewelsFromOrder, jewels: jewels, initializeJewels: initializeJewels }}
  >
    {props.children}
  </JewelsOrderContext.Provider>)

}

export default JewelsOrderContext;