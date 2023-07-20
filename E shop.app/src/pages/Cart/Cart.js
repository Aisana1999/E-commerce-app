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

      



}

export default Cart;
