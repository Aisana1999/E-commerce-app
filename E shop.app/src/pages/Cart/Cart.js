import "./Cart.css";

function Cart() {
  const [cartItems, setcartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((res) => {
        updateTotalPrice(res);
        setcartItem(res);
      });
  }, []);

  return (
    <div>
      <div className="cart-header">
        <Header />
      </div>

      <div className="cart-container">
        {/* 2. Print updated total price */}
        <h4 className="totalPrice">Total Price: {totalPrice}</h4>
        <div>
          {cartItems.map((item, index) => (
            <CartItem
              // 4. Pass function as props.

              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
