"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "../../../components/admin-panel/ImageCard";
import toast from "react-hot-toast";
import axios from "axios";
import CVCard from "../../../components/admin-panel/CVCard";

const imagesPage = () => {
  const [images, setImages] = useState({
    logo: "",
    hero: "",
    about: "",
    cv: "",
  });

  const fetchImages = async () => {
    try {
      const res = await axios("/api/admin-panel/images");
      const data = res.data?.[0];
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages((prev) => ({ ...prev, [e.target.name]: file }));
  };
  const handleImageSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.set("logo", images.logo);
      data.set("hero", images.hero);
      data.set("about", images.about);
      data.set("cv", images.cv);
      const imagePromise = new Promise(async (resolve, reject) => {
        const res = await axios.put("/api/admin-panel/images", data);
        if (res.status === 200) {
          fetchImages();
          resolve();
        } else reject();
      });
      await toast.promise(imagePromise, {
        loading: "updating...",
        success: "successfully updated the image",
        error: "couldn't update the image.",
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="flex flex-col gap-4 wrapper">
      <form
        onSubmit={handleImageSubmit}
        className="space-y-8 border-2 border-[#334155] rounded-lg py-4 px-8"
      >
        <CVCard href={images?.cv} handleFileChange={handleImageChange} />
        <ImageCard
          name={"logo"}
          key={"logo"}
          width={40}
          height={40}
          src={images?.logo}
          handleFileChange={handleImageChange}
        />
        <ImageCard
          name={"hero"}
          key={"hero"}
          width={200}
          height={200}
          src={images?.hero}
          handleFileChange={handleImageChange}
        />
        <ImageCard
          name={"about"}
          key={"about"}
          width={200}
          height={200}
          src={images?.about}
          handleFileChange={handleImageChange}
        />
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </section>
  );
};

export default imagesPage;
