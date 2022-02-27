import Config from "../../Config";

function Sort({ selectedOption, changeSort }) {
  
    function changeSorting(event) {
        changeSort(event.target.value);
    }

    return (
        <div className="sort-wrapper">
            <div>
                <label>Sort By: </label>
                <select className="form-control" id="sort" value={selectedOption} onChange={changeSorting}>
                    { Config.sortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
          </div>
        </div>
      );
  }

  export default Sort;
