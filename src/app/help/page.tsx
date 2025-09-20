import React from "react";

import Contact from "@/components/help/Contact";
import Chat from "@/components/help/Chat";
import Help from "@/components/help/Help";

const Page = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-5 pb-5">
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          <Contact />
          <Chat />
        </div>
        <div className="w-full lg:w-2/3">
          <Help />
        </div>
      </div>
    </div>
  );
};

export default Page;
