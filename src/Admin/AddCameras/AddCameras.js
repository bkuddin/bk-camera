import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddCameras.css";

const AddCameras = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://rocky-lowlands-76183.herokuapp.com/addCameras", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Data added, Successfully!");
          reset();
        }
      });
  };
  return (
    <div className="add-cameras">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("brand", { required: true, maxLength: 40 })}
          placeholder="Camera Brand"
        />
        <input
          {...register("model", { required: true, maxLength: 60 })}
          placeholder="Camera model"
        />
        <input
          {...register("options", { required: true, maxLength: 60 })}
          placeholder="Camera options"
        />
        <textarea {...register("brief")} placeholder="Short Description" />
        <textarea {...register("description")} placeholder="Long Description" />

        <input type="number" {...register("price")} placeholder="price" />

        <input {...register("img")} placeholder="image url" />
        <input type="submit" className="bk-button" />
      </form>
    </div>
  );
};

export default AddCameras;
