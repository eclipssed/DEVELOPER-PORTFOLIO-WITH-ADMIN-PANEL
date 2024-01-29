"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "../../../components/admin-panel/ImageCard";
import toast from "react-hot-toast";
import CVCard from "../../../components/admin-panel/CVCard";
import { getImages } from "../../../libs/data";
import { updateImages } from "@/libs/admin-panel/actions";

const ImagesPage = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState({
    logo: "",
    hero: "",
    about: "",
    cv: "",
  });

  useEffect(() => {
    getImages()
      .then((data) => JSON.parse(data))
      .then((data) => setImages(data));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages((prev) => ({ ...prev, [e.target.name]: file }));
  };
  const handleUpdateImages = async () => {
    const data = new FormData();
    data.set("logo", images.logo);
    data.set("hero", images.hero);
    data.set("about", images.about);
    data.set("cv", images.cv);
    try {
      const res = await updateImages(data);
      if (res) {
        toast.success("Successfully updated images.");
        setImages({
          logo: "",
          hero: "",
          about: "",
          cv: "",
        });
        getImages()
          .then((data) => JSON.parse(data))
          .then((data) => setImages(data));
      }
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="flex flex-col gap-4 wrapper">
      <form
        action={handleUpdateImages}
        onSubmit={() => setLoading(true)}
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
        <div>
          <button
            disabled={loading ? true : false}
            type="submit"
            className={`btn ${loading ? "!bg-slate-500" : ""}`}
          >
            {loading ? "Updating..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ImagesPage;
