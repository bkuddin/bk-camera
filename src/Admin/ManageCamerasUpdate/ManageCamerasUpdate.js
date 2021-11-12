import React, { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const ManageCamerasUpdate = () => {
  const { updateId } = useParams();
  //   const [cameras, setCameras] = useState([]);

  //   Step 1: Get all Cameras

  //   fetch(`https://rocky-lowlands-76183.herokuapp.com/allCameras/${updateId}`)
  //     .then((res) => res.json())
  //     .then((data) => setCameras(data));

  // React Hook
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch(`https://rocky-lowlands-76183.herokuapp.com/allCameras/${updateId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          alert("Successfully Updated");
          reset({});
        }
      });
  };
  // React Hook end

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

export default ManageCamerasUpdate;
