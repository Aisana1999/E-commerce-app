import "./ProductCard.css";

function ProductCard(values) {}

const key = values.item.id + "svg";

let stars = [];
for (let i = 0; i < Number(values.item.rating.rate); i++) {
  stars[i] = 1;
}

return (
  <div className="card">
    <h5 className="card-title">{values.item.title}</h5>
    <img src={values.item.image} alt="..."></img>
    <hr />
  </div>
);
export default ProductCard;
