import React, { useState } from "react";
import axios from "axios";
import upload_area from "../../assets/react.svg";
import Nav from "../Nabvar/Nav";
import Sidebar from "../Sidebar/Sidebar";

const PhoneAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    id: "",
    discount: "",
    warranty: "",
    type: "",
    img: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setFormData({
        ...formData,
        img: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) {
      data.append("image", image);
    }

    axios
      .post("http://localhost:3001/api_mobile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 bg-light p-3">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 py-4">
            <div className="container">
              <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Add New Phone</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Brand</label>
                      <input
                        type="text"
                        className="form-control"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        <option value="iPhone">iPhone</option>
                        <option value="Android">Android</option>
                      </select>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">ID</label>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Discount</label>
                      <input
                        type="text"
                        className="form-control"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Warranty</label>
                      <input
                        type="text"
                        className="form-control"
                        name="warranty"
                        value={formData.warranty}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12 text-center mb-3">
                      <label htmlFor="file-input" className="d-block">
                        <img
                          src={image ? URL.createObjectURL(image) : upload_area}
                          alt="Upload"
                          style={{
                            width: "200px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                          className="img-thumbnail cursor-pointer"
                        />
                      </label>
                      <input
                        onChange={imageHandler}
                        type="file"
                        name="img"
                        id="file-input"
                        hidden
                      />
                      <small className="text-muted">
                        Click the image to upload
                      </small>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAdd;
