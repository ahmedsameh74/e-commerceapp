import { useState } from 'react';
import './checkout.css'
import { useCartContext } from '../../hooks/useCartContext';
const Checkout = () => {
    const[chosenOption, setOption]=useState('')
    const[userData, setUserData] = useState({})
    const handleChange=(event)=>{
        setOption(event.target.value)
        console.log(event.target.value)
    }

    const { cart } = useCartContext();
    const [total_price, setTotalPrice] = useState(0);
    var t_p = 0;
    var t_tax = 0;
  
    for (let i = 0; i < cart.length; i++) {
      t_p = t_p + (cart[i].price * cart[i].ordQty);
      t_tax = t_tax + ((cart[i].price * cart[i].ordQty) * 0.14);
      console.log(t_p);
    }
  return (
    <div className='main'>
    <div className='outerCheckoutContainer'>
    <div className='priceContainer'>
      <h4>Total Price</h4>
      <p>{t_p}$</p>
      </div>
      <h2>Choose your payment method</h2>
      <div className="radioContainer">
      <label>
        <input type="radio" name="choice1" value="cash" onChange={handleChange} /> Cash
      </label>

      <label>
        <input type="radio" name="choice1" value="creditCard" onChange={handleChange}/> Credit Card
      </label>
    </div>
    <div className='inputContainer'>
        <form>
        <div className='inputs'>
        <label>Name</label>
            <input onChange={()=>{setUserData({...userData})}} type='text' placeholder='eg: Jane Doe'/>
            </div>
            <div className='inputs'>
            <label>Phone</label>
            <input type='number' placeholder="eg: 012345678"/>
            </div>
            <div className='inputs'>
            <label>Address</label>
            <input type='Address' placeholder='eg: Apt, Building, Street'/>
            </div>
        </form>
    </div>
    <button>Confirm</button>
    </div>
    </div>
  );
};
export default Checkout;
