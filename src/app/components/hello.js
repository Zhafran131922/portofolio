"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hello() {
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <DotLottieReact
        src="https://lottie.host/27274dc7-0d7a-42b3-bf65-a3d28ed40262/8VmnfUW0mw.lottie"
        loop
        autoplay
        style={{ width: "600px", height: "600px" }} // atur ukuran di sini
      />
    </div>
  );
}
