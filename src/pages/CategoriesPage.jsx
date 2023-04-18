import React, { useState } from "react";
import "./categoriespage.css";
import { category_books } from "../categorybooks";
import Newsletter from "../components/Newsletter";
import Books from "../components/Books";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CategoriesPage() {
  const [data, setData] = useState(category_books);

  function search(value) {
    const result = category_books.filterResult((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.author.toLowerCase().includes(value) ||
        item.subject.toLowerCase().includes(value) ||
        item.publish_date.toLowerCase().includes(value)
      );
    });
    setData(result);
  }

  function filterResult(category) {
    const result = category_books.filter((currentdata) => {
      return currentdata.subject === category;
    });
    setData(result);
  }
  const navigate = useNavigate();
  const navigateToBookdesc =() =>{
    navigate('/bookdescription');
  };
  

  return (
    <div className="categoriespage">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => {
          search(e.target.value);
        }}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Fantasy")}
            >
              <span>Fantasy</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Fiction")}
            >
              <span>Fiction</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Adventure")}
            >
              <span>Adventure</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Romance")}
            >
              <span>Romance</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Autobiography")}
            >
              <span>Autobiography</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Time travel")}
            >
              <span>Time travel</span>
            </button>
            <button
              className="cpbtn btn-dark w-100 mb-3"
              onClick={() => filterResult("Feminist")}
            >
              <span>Feminist</span>
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const {
                  id,
                  image,
                  title,
                  author,
                  subject,
                  publish_date,
                  desc
                } = values;
                return (
                  <>
                    <div className="col-md-3 ms-4">
                      <div className="cpcard">
                        <img
                          className="cpimg"
                          src={image}
                          alt=""
                        />
                        <div className="cpcard-body">
                          <h5 className="cptitle">{title}</h5>
                          <h6 className="cpauthor">{author}</h6>
                          <button href="/bookdescription" className="cpbtn" onClick={navigateToBookdesc}>Read more</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
}
export default CategoriesPage;
