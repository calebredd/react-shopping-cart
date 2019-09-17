import React from "react";

const Item = props => {
  const remove = e => {
    const itemId = e.target.parentNode.parentNode.id;
    props.removeItem(itemId);
  };
  return (
    <div id={props.id} className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={e => remove(e)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
