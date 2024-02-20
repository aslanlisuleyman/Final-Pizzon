import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const [edit, setEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/pizza/${id}`)
      .then((res) => {
        setEdit(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  useEffect(() => {
    formik.setValues({
      name: edit.title || '',
      image: edit.image || '',
      category: edit.brand || '',
      desc:edit.desc || '',
      price:edit.price || ''
    })
  }, [edit])
  const formik = useFormik({
    initialValues: {
      name: '',
      image:  '',
      category:   '',
      desc:  '',
      price: ''
    },
    onSubmit: values => {
      axios.put(`http://localhost:3000/pizza/${edit._id}`, values)
        .then(res => {
          navigate('/admin');
          toast.success('Updated successfully.');
        })
        .catch(error => {
          toast.error('An error occurred while updating.');
          console.error("Error updating data:", error);
        });
    },
  });




  return (
    <div style={{ marginTop: "30px", minHeight: "500px" }}>
      <div className="application"></div>
      <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            
          </div>

        

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
            </div>

            
          </div>

          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="image">Price</label>
              <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>

            
          </div>

          
          <div className="form-row">
           

           <div className="form-group">
             <label htmlFor="catagory">Desc</label>
             <input
               id="desc"
               name="desc"
               type="text"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.desc}
             />
           </div>


          
         </div>
 


          <div className="form-row">
           

            <div className="form-group">
              <label htmlFor="catagory">Category</label>
              <input
                id="catagory"
                name="catagory"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
            </div>
          </div>

          <button className="differbtn" type="submit">Submit</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Edit;
