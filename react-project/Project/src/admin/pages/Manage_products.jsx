import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Manage_products() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formValue, setFormvalue] = useState({
    id: "",
    title: "",
    price: "",
    image: "",
    category_id: "",
  });

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete Product
  const deleteHandel = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      toast.success("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  // Edit Product
  const editHandel = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/products/${id}`
      );

      setFormvalue(res.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load product");
    }
  };

  // Input Change
  const changeHandel = (e) => {
    setFormvalue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  // Update Product
  const submitHandel = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/products/${formValue.id}`,
        formValue
      );

      toast.success("Product Updated Successfully");
      fetchProducts();
      setShowModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Products</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th width="200">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((value) => (
                <tr key={value.id}>
                  <td>
                    <img
                      src={value.image}
                      alt={value.title}
                      width="60"
                      height="60"
                    />
                  </td>

                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>₹ {value.price}</td>
                  <td>{value.category_id}</td>

                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => editHandel(value.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandel(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={submitHandel}>
                <div className="modal-header">
                  <h5 className="modal-title">
                    Edit Product
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">
                      Title
                    </label>

                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formValue.title}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Price
                    </label>

                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      value={formValue.price}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Image URL
                    </label>

                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      value={formValue.image}
                      onChange={changeHandel}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Category ID
                    </label>

                    <input
                      type="text"
                      name="category_id"
                      className="form-control"
                      value={formValue.category_id}
                      onChange={changeHandel}
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Manage_products;