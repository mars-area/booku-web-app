import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import {
  getCategoryAction,
  getCategoryResetAction,
  getBooksAction,
  getBooksResetAction,
} from "./redux/actions/book";

function App() {
  // state
  const [category, setCategory] = useState("");
  console.log('category:', category);

  // redux
  const dispatch = useDispatch();
  const {
    isLoadingGetCategory,
    isSuccessGetCategory,
    isErrorGetCategory,
    dataGetCategory,
    isLoadingGetBooks,
    isSuccessGetBooks,
    isErrorGetBooks,
    dataGetBooks,
  } = useSelector((state) => state.getCategory);
  console.log('dataGetBooks:', dataGetBooks);

  useEffect(() => {
    if (dataGetCategory.length === 0) {
      dispatch(getCategoryAction());
    }
    if (isSuccessGetCategory) {
      if (category !== '')
      dispatch(
        getBooksAction({
          id: category,
          page: 1,
          limit: 10,
        })
      );
    }
  }, [dispatch, isSuccessGetCategory, category, dataGetCategory]);

  useEffect(() => {
    if (isSuccessGetCategory) {
      dispatch(getCategoryResetAction());
    }
    if (isErrorGetCategory) {
      console.log("error");
      dispatch(getCategoryResetAction());
    }
    // if (isSuccessGetBooks) {
    //   console.log(dataGetBooks);
    //   dispatch(getBooksResetAction());
    // }
    // if (isErrorGetBooks) {
    //   dispatch(getBooksResetAction());
    // }
  }, [
    isSuccessGetCategory,
    isErrorGetCategory,
    // isSuccessGetBooks,
    // isErrorGetBooks,
    dispatch,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container">
        <div>
          <h2>available category</h2>
          <select id="category" onChange={(e) => setCategory(e.target.value)}>
            {isLoadingGetCategory ? (
              <option>loading...</option>
            ) : (
              dataGetCategory?.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div>Category: {category}</div>

        <div className="book__container">
          <h2>Books</h2>
          <div className="book__list">
            {isLoadingGetBooks ? (
              <div>loading...</div>
            ) : dataGetBooks?.map((item, index) => {
                return (
                  <div className="book__wrapper" key={item.id}>
                    <h3 className="book__title">{item.title}</h3>
                    <img className="img" src={item.cover_url} alt={item.title} />
                    <caption>{item.author}</caption>
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
