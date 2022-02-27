import Config from "../../Config";


function Pagination({ total, currentPage, handlePagination }) {
    const {dataLimit, pageLimit} = Config;
    const pages = Math.round(total / dataLimit);

    function goToNextPage() {
        handlePagination(currentPage + 1);
    }
  
    function goToPreviousPage() {
        handlePagination(currentPage - 1);
    }
  
    function changePage(index) {
        handlePagination(index);
    }
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        if(start+pageLimit > pages)
            start = Math.max(0, pages-pageLimit);
        const arr = new Array(Math.min(pageLimit, pages)).fill().map((_, idx) => start + idx + 1);
        return arr;
    };
  
    return (
        <div>
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              «
            </button>
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={() => changePage(item)}
                className={`pagination-item ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              »
            </button>
          </div>
        </div>
      );
  }

  export default Pagination;
