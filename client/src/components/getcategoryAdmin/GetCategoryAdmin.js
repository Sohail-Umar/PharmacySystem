import React from "react";
import "./GetCategoryAdmin.css";

const GetCategoryAdmin = () => {
  const [category, setCategory] = React.useState({});
  const [deleteddata, setDeleteddata] = React.useState(false);

  React.useEffect(() => {
    getCategory();
  }, [deleteddata]);

  const deleteCategory = async (categoryID) => {
    try {
      const response = fetch(
        `http://localhost:3001/category/deletecategory/${categoryID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      const data = await (await response).json();
      setCategory(data);
      setDeleteddata(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = fetch("http://localhost:3001/category/getallcategory", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3001",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      const data = await (await response).json();
      // console.log("data api response", data);
      setCategory(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        {category.length &&
          category?.map((category, key) => {
            return (
              <div className="">
                <div className="block-container">
                  <p className="data-props duration-color">
                    <span className="span-headings">Product name: </span>
                    {category.category_name}
                  </p>
                  <p className="data-props duration-color">
                    <span className="span-headings">Description: </span>
                    {category.description}
                  </p>
                  <button
                    className="btn admin-dlt-btn"
                    onClick={() => deleteCategory(category._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default GetCategoryAdmin;
