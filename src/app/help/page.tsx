import React from "react";

import Contact from "@/components/help/Contact";
import Chat from "@/components/help/Chat";
import Help from "@/components/help/Help";



const Page = () => {
  return (
    <div className="father flex gap-5 pb-5">
      <div className="flex flex-col gap-5">
        <Contact/>
        <Chat/>
      </div>
      <Help/>
    </div>
  );
};

export default Page;
