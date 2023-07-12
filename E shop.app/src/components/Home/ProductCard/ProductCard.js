import "./ProductCard.css";

function ProductCard(values) {}

const key = values.item.id + "svg";

let stars = [];
for (let i = 0; i < Number(values.item.rating.rate); i++) {
  stars[i] = 1;
}
export default ProductCard;
