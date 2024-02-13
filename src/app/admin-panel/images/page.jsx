"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "../../../components/admin-panel/ImageCard";
import toast from "react-hot-toast";
import CVCard from "../../../components/admin-panel/CVCard";
import { getImages } from "../../../libs/data";
import { updateImages } from "@/libs/admin-panel/actions";

const ImagesPage = () => {
  const [loading, setLoading] = useState(false);
  // const [images, setImages] = useState({
  //   logo: "",
  //   hero: "",
  //   about: "",
  //   cv: "",
  // });
  const [images, setImages] = useState({
    logo: "",
    hero: "",
    about: "",
    cv: "",
  });
  const [logo, setLogo] = useState({
    preview: "",
    file: "",
  });
  const [hero, setHero] = useState({
    preview: "",
    file: "",
  });
  const [about, setAbout] = useState({
    preview: "",
    file: "",
  });
  const [cv, setCv] = useState({
    preview: "",
    file: "",
  });

  const handleLogoChange = (e) => {
    setLogo((prev) => ({
      ...prev,
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    }));
  };
  const handleHeroChange = (e) => {
    setHero((prev) => ({
      ...prev,
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    }));
  };
  const handleAboutChange = (e) => {
    setAbout((prev) => ({
      ...prev,
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    }));
  };
  const handleCvChange = (e) => {
    setCv((prev) => ({
      ...prev,
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    }));
  };

  useEffect(() => {
    getImages()
      .then((data) => JSON.parse(data))
      .then((data) => {
        setLogo((prev) => ({ ...prev, preview: data.logo.previewUrl }));
        setHero((prev) => ({ ...prev, preview: data.hero.previewUrl }));
        setAbout((prev) => ({ ...prev, preview: data.about.previewUrl }));
        setCv((prev) => ({ ...prev, preview: data.cv.previewUrl }));
      });
  }, []);

  const handleUpdateImages = async () => {
    const data = new FormData();
    data.set("logo", logo.file);
    data.set("hero", hero.file);
    data.set("about", about.file);
    data.set("cv", cv.file);
    try {
      const res = await updateImages(data);
      if (res) {
        toast.success("Successfully updated images.");
        getImages()
          .then((data) => JSON.parse(data))
          .then((data) => {
            setLogo((prev) => ({ ...prev, preview: data.logo.previewUrl }));
            setHero((prev) => ({ ...prev, preview: data.hero.previewUrl }));
            setAbout((prev) => ({ ...prev, preview: data.about.previewUrl }));
            setCv((prev) => ({ ...prev, preview: data.cv.previewUrl }));
          });
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
        <CVCard href={cv.preview} handleFileChange={handleCvChange} />
        <ImageCard
          alt="images"
          name={"logo"}
          key={"logo"}
          width={40}
          height={40}
          src={logo?.preview}
          handleFileChange={handleLogoChange}
        />
        <ImageCard
          alt="images"
          name={"hero"}
          key={"hero"}
          width={200}
          height={200}
          src={hero?.preview}
          handleFileChange={handleHeroChange}
        />
        <ImageCard
          alt="images"
          name={"about"}
          key={"about"}
          width={200}
          height={200}
          src={about?.preview}
          handleFileChange={handleAboutChange}
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
