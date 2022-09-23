import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "./../slices/api";
import { productsCreate } from "./../slices/productSlice";

function MyStore() {
  const products = useSelector((state) => state.products);

  const [productCount, setProductCount] = useState([]);

  // Handle Submit-->
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productsCreate({
        name,

        price,

        image: productImg,
      })
    );
  };

  // Image Upload-->

  const [productImg, setProductImg] = useState("");
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    // Convert to base64
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  // Useeffect for the no of orders

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${url}/products/productcount/`);
      setProductCount(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section id="mystore">
        <ul class="box-info">
          <li>
            <i class="bx bxs-gift"></i>{" "}
            <span class="text">
              <h3>{productCount}</h3>
              <p>Gifts</p>
            </span>
          </li>
        </ul>
      </section>
      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>All Gift's</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Gift Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.items.map((product) => (
                <tr>
                  <td>
                    <img src={product.image.url} />
                    <p>{product.name}</p>
                  </td>
                  <td>Rs.{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add  */}

      <div className="add-container">
        <form action="">
          <div class="row">
            <div class="col">
              <h3 class="title">Add Gift</h3>

              <div class="inputBox">
                <span>Gift Name :</span>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="christmas tree"
                />
              </div>
              <div class="inputBox">
                <span>Price Rs:</span>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="Number"
                  placeholder="500"
                />
              </div>
              <div class="inputBox">
                <span>Add Gift Image :</span>
                <label htmlFor="image">
                  <i class="bx bxs-image-add"></i>
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/"
                  onChange={handleProductImageUpload}
                  hidden
                />
              </div>
            </div>

            <div class="col">
              <h3 class="title">Preview</h3>
              <div className="preview">
                {productImg ? (
                  <>
                    <img src={productImg} style={{ width: "100%" }} alt="" />
                  </>
                ) : (
                  <>
                    <i class="bx bxs-image-add"></i>
                  </>
                )}
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className="submit-btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default MyStore;
