import React from "react";
import Search from "../../Components/Search";
import Pagination from "../../Components/Pagination";
import Sort from "../../Components/Sort";
import List from "../../Components/Product/list";
import { useState, useEffect } from "react";

function Home() {

  const [state, setState] = useState({
    products: [],
    list: [],
    isLoading: true,
    currentPage: 1,
    sortOption: null
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((res) => res.json())
      .then((data) => {
        const products = data;
        stateReducer({products, list: products, isLoading: false})
      });
  }

  function stateReducer(payLoad){
    setState({...state, ...payLoad});
  }

  function sortProducts(sortOption, list) {
    let sorted;
    if(sortOption === "asc") {
      sorted = [...list].sort((ob1, ob2) => ob1.price - ob2.price);
    }
    else if(sortOption === "desc"){
      sorted = [...list].sort((ob1, ob2) => ob2.price - ob1.price);
    }
    else{
      sorted = state.products.filter(item1 => list.some(item2 => item1.id === item2.id))
    }
    return sorted;
  }

  function handleSort(sortOption) {
    const sorted = sortProducts(sortOption, state.list);
    stateReducer({list: sorted, sortOption: sortOption, currentPage: 1});
  }

  function handleSearch(searchparam) {
    const searchResult = [...state.products].filter(product => {
      return product.name.toLowerCase().includes(searchparam.toLowerCase());
    });
    const sorted = sortProducts(state.sortOption, searchResult);
    stateReducer({list: sorted, currentPage: 1})
  }

  function handlePagination(currentPage) {
    stateReducer({currentPage:currentPage});
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }
  
  return (
    <div className="wrapper">
      <Search handleChange={handleSearch} />
      {state.isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Sort changeSort={handleSort}/>
          <List products={state.list} currentPage={state.currentPage}/>
          {state.list.length ? 
            (<Pagination total={state.list.length} currentPage={state.currentPage} handlePagination={handlePagination}/>):null
          }
        </>
      )}
    </div>
  );
}

export default Home;
