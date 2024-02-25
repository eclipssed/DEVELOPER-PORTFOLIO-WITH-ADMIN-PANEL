"use client";
import { Suspense } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height="4px"
          color="#710EC8"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
};

export default ProgressBarProvider;
