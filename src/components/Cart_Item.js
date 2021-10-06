import React, { useContext } from 'react'
import CartContext from '../context/CartContext';
import "../css/Cart_Items.css"

const Cart_Item = ({title,price,image,rating,item}) => {
    const {removeItem}=useContext(CartContext);
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="product_image"/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {rating}/5
                </div>
               
                    <button onClick={()=>removeItem(item.id)}>Remove from Basket</button>
    
            </div>
        </div>
    )
}

export default Cart_Item
