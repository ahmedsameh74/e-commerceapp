import React, { useState } from "react";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useEffect } from "react";
import "./MyOrders.css";

export default function MyOrders() {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [delifered, setDelifered] = useState(null);
  const [stat, setStat] = useState(null);

  console.log(user);
  console.log(delifered);
  useEffect(() => {
    getOrders();
    orders.map((stat) => {
      if (stat.order_states_id === 1) {
        setDelifered("in progress");
        setStat("red");
      } else {
        setDelifered("Delifered");
        setStat("green");
      }
    });
  }, []);

  const getOrders = async () => {
    await fetch(`http://ecommerce-app0040.herokuapp.com/api/orders/44`)
      .then((res) => res.json())
      .then((data) => {
        console.log(orders);
        setOrders(data);
      });
  };
  return (
    <div className="container">
      <h3>My Orders</h3>
      {orders &&
        orders.map((item) => (
          <div className="orderState" key={item.id}>
            <span>tax: </span>
            <span>{item.tax}</span>
            <span>Total Price: </span>
            <span>{item.total_price}</span>
            <span>Order State: </span>
            <span className={stat}>{delifered}</span>
          </div>
        ))}
    </div>
  );
}
