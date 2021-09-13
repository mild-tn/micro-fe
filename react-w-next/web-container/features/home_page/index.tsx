import React from "react";

import dynamic from "next/dynamic";

//@ts-ignore
const Button = dynamic(() => import("components/ButtonPrimary"), {
  ssr: false,
});
// const Button = (await import("components/ButtonPrimary")).default;

const Index = () => {
  return (
    <>
      <div className="flex justify-center w-screen text-center">
        <h1 className="text-3xl text-purple-800">Hello</h1>
      </div>
      <Button>
        <p className="text-white">Hey ! Guys</p>
      </Button>
    </>
  );
};

export default Index;
