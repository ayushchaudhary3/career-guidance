import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prerequisite, setPrerequisite] = useState("");
  const [coursename, setCoursename] = useState("");
  const [exam, setExam] = useState("");
  const [futurescope, setFuturescope] = useState("");
  const [course1, setCourse1] = useState("");
  const [course2, setCourse2] = useState("");
  const [course3, setCourse3] = useState("");
  const [coursel1, setCoursel1] = useState("");
  const [coursel2, setCoursel2] = useState("");
  const [coursel3, setCoursel3] = useState("");
  const [oppor1, setOppor1] = useState("");
  const [oppor2, setOppor2] = useState("");
  const [oppor3, setOppor3] = useState("");
  const [opporl1, setOpporl1] = useState("");
  const [opporl2, setOpporl2] = useState("");
  const [opporl3, setOpporl3] = useState("");
  const [job1, setJob1] = useState("");
  const [job2, setJob2] = useState("");
  const [job3, setJob3] = useState("");
  const [jobl1, setJobl1] = useState("");
  const [jobl2, setJobl2] = useState("");
  const [jobl3, setJobl3] = useState("");
  const [recruiter1, setRecruiter1] = useState("");
  const [recruiter2, setRecruiter2] = useState("");
  const [recruiter3, setRecruiter3] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("prerequisite", prerequisite);
      productData.append("coursename", coursename);
      productData.append("exam", exam);
      productData.append("futurescope", futurescope);
      productData.append("course1", course1);
      productData.append("course2", course2);
      productData.append("course3", course3);
      productData.append("coursel1", coursel1);
      productData.append("coursel2", coursel2);
      productData.append("coursel3", coursel3);
      productData.append("oppor1", oppor1);
      productData.append("oppor2", oppor2);
      productData.append("oppor3", oppor3);
      productData.append("opporl1", opporl1);
      productData.append("opporl2", opporl2);
      productData.append("opporl3", opporl3);
      productData.append("job1", job1);
      productData.append("job2", job2);
      productData.append("job3", job3);
      productData.append("jobl1", jobl1);
      productData.append("jobl2", jobl2);
      productData.append("jobl3", jobl3);
      productData.append("recruiter1", recruiter1);
      productData.append("recruiter2", recruiter2);
      productData.append("recruiter3", recruiter3);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Add Career"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Add Career</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <textarea
                  type="text"
                  value={prerequisite}
                  placeholder="write a prerequisite"
                  className="form-control"
                  onChange={(e) => setPrerequisite(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={coursename}
                  placeholder="write a coursename"
                  className="form-control"
                  onChange={(e) => setCoursename(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={exam}
                  placeholder="write a exam"
                  className="form-control"
                  onChange={(e) => setExam(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={futurescope}
                  placeholder="write a futurescope"
                  className="form-control"
                  onChange={(e) => setFuturescope(e.target.value)}
                />
              </div>


              <div className="mb-3">
                <textarea
                  type="text"
                  value={course1}
                  placeholder="write 1st course"
                  className="form-control"
                  onChange={(e) => setCourse1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={coursel1}
                  placeholder="write 1st course link"
                  className="form-control"
                  onChange={(e) => setCoursel1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={course2}
                  placeholder="write 2nd course"
                  className="form-control"
                  onChange={(e) => setCourse2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={coursel2}
                  placeholder="write 2nd course link"
                  className="form-control"
                  onChange={(e) => setCoursel2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={course3}
                  placeholder="write 3rd course"
                  className="form-control"
                  onChange={(e) => setCourse3(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={coursel3}
                  placeholder="write 3rd course link"
                  className="form-control"
                  onChange={(e) => setCoursel3(e.target.value)}
                />
              </div>


              <div className="mb-3">
                <textarea
                  type="text"
                  value={oppor1}
                  placeholder="write 1st opportunity"
                  className="form-control"
                  onChange={(e) => setOppor1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={opporl1}
                  placeholder="write 1st opportunity link"
                  className="form-control"
                  onChange={(e) => setOpporl1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={oppor2}
                  placeholder="write 2nd opportunity"
                  className="form-control"
                  onChange={(e) => setOppor2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={opporl2}
                  placeholder="write 2nd opportunity link"
                  className="form-control"
                  onChange={(e) => setOppor2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={oppor3}
                  placeholder="write 3rd opportunity"
                  className="form-control"
                  onChange={(e) => setOppor3(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={opporl3}
                  placeholder="write 3rd opportunity link"
                  className="form-control"
                  onChange={(e) => setOpporl3(e.target.value)}
                />
              </div>


              <div className="mb-3">
                <textarea
                  type="text"
                  value={job1}
                  placeholder="write 1st job"
                  className="form-control"
                  onChange={(e) => setJob1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={jobl1}
                  placeholder="write 1st job link"
                  className="form-control"
                  onChange={(e) => setJobl1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={job2}
                  placeholder="write 2nd job"
                  className="form-control"
                  onChange={(e) => setJob2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={jobl2}
                  placeholder="write 2nd job link"
                  className="form-control"
                  onChange={(e) => setJob2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={job3}
                  placeholder="write 3rd job"
                  className="form-control"
                  onChange={(e) => setJob3(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={jobl3}
                  placeholder="write 3rd job link"
                  className="form-control"
                  onChange={(e) => setJobl3(e.target.value)}
                />
              </div>
              

              {/* Recruiter */}
              <div className="mb-3">
                <textarea
                  type="text"
                  value={recruiter1}
                  placeholder="write 1st recruiter"
                  className="form-control"
                  onChange={(e) => setRecruiter1(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={recruiter2}
                  placeholder="write 2nd recruiter"
                  className="form-control"
                  onChange={(e) => setRecruiter2(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  type="text"
                  value={recruiter3}
                  placeholder="write 3rd recruiter"
                  className="form-control"
                  onChange={(e) => setRecruiter3(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ADD CAREER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
