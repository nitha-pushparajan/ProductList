import Review from "../../Components/Review";
import ColorChips from "./colorChips";

function Product(props) {
  return (
    <li>
      <div className="product-wrapper">
        <a href={props.product_link}>
          <div className="image-wrapper"><img src={props.image_link} alt={props.name} /></div>
          {props.product_colors.length ? (
            <ColorChips colorChips={props.product_colors}/>
          ): null}
          <p className="product-name">{props.name}</p>
          <p className="product-price">{`${props.price} ${props.currency || "AED"}`}</p>
          <p className="product-description">{props.description}</p>
          <Review value={props.rating}/>
        </a>
      </div>
    </li>
  );
}

export default Product;
