"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LinksCard from "../../../components/admin-panel/LinksCard";
import { getLinks } from "../../../libs/data";
import { updateLinks } from "@/libs/admin-panel/actions";
import SaveButton from "@/components/admin-panel/SaveButton";

const linksPage = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState({
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    getLinks()
      .then((data) => JSON.parse(data))
      .then((data) => setLinks(data));
  }, []);

  const handleLinkChange = (e) => {
    setLinks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLinksUpdate = async () => {
    try {
      const res = await updateLinks(links);
      if (res) {
        toast.success("Successfully updated links.");
        getLinks()
          .then((data) => JSON.parse(data))
          .then((data) => setLinks(data));
      }
    } catch (error) {
      console.log("Error while updating links: ", error.message);
      toast.error("Error while updating links");
    }
    setLoading(false);
  };
  return (
    <form
      action={handleLinksUpdate}
      onSubmit={() => setLoading(true)}
      className="flex flex-col gap-4 rounded-lg wrapper"
    >
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
      <SaveButton loading={loading} />
      {/* <div>
        <button
          disabled={loading ? true : false}
          type="submit"
          className={`btn ${loading ? "!bg-slate-500" : ""}`}
        >
          {loading ? "Updating..." : "Save"}
        </button>
      </div> */}
    </form>
  );
};

export default linksPage;
