import Product from "../../Components/Product";
import Config from "../../Config";

function List({products, currentPage}) {
    const {dataLimit} = Config;
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    const productList = products.slice(startIndex, endIndex);

    return (
        <ul className="product-list">
        {products.length ?
          productList.map((data) => (
            <Product key={data.id} {...data} />
          ))
          :
          <div className="no-search-result">No products found</div>
          }
      </ul>
    );
  }
  
  export default List;
  