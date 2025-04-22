function Order(props) {
    return (
      <div>
        <h1>Your Order</h1>
        <p>
          Product name: <b>{props.name}</b>
        </p>
        <p>
          Quantity: <b>{props.quantity}</b>
        </p>
      </div>
    );
  }
  export default Order;