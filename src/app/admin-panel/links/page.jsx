"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LinksCard from "../../../components/admin-panel/LinksCard";

const linksPage = () => {
  const [links, setLinks] = useState({
    github: "",
    linkedin: "",
  });

  const fetchLinks = async () => {
    try {
      const res = await axios("/api/admin-panel/links");
      const data = res.data?.[0];
      setLinks(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleLinkChange = (e) => {
    setLinks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLinkUpload = async () => {
    try {
      if (!links.github || !links.linkedin) {
        toast.error("All fields are required.");
        return;
      }
      const textPromise = new Promise(async (resolve, reject) => {
        const res = await axios.post("/api/admin-panel/links", links);
        if (res.data.status === 200) {
          fetchLinks();
          resolve();
        } else reject();
      });
      await toast.promise(textPromise, {
        loading: "Updating links...",
        success: "Successfully updated the links.",
        error: "Couldn't update the links.",
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex flex-col gap-4 rounded-lg wrapper">
      <LinksCard
        onChange={handleLinkChange}
        name={"github"}
        linkTitle={"GitHub Link"}
        value={links?.github}
      />
      <LinksCard
        onChange={handleLinkChange}
        name={"linkedin"}
        linkTitle={"LinkedIn Link"}
        value={links?.linkedin}
      />
      <div>
        <button onClick={handleLinkUpload} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default linksPage;
