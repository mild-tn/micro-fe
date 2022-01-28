import React, { ChangeEvent, useState } from "react";

import dynamic, { DynamicOptions } from "next/dynamic";
import { ButtonProps } from "app2/dts/Button/Button";
import { PrimaryProps } from "components/dts/components/Buttons";
import { InputProps } from "components/dts/components/Input";

const Button = dynamic<ButtonProps>(
  import("app2/Button") as DynamicOptions<ButtonProps>,
  {
    ssr: false,
  }
);

const ButtonPrimary = dynamic<PrimaryProps>(
  import("components/Button") as DynamicOptions<PrimaryProps>,
  {
    ssr: false,
  }
);
const Input = dynamic<InputProps>(
  import("components/Input") as DynamicOptions<InputProps>,
  {
    ssr: false,
  }
);

const Index = () => {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center pt-5 text-center">
        <h1 className="text-3xl text-purple-800">Micro Front-ends</h1>
      </div>
      <div className="flex space-x-2 h-[70px] mt-3 items-center">
        <div className="w-[90%]">
          <Input
            typeInput="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
            value={value}
          />
        </div>
        <ButtonPrimary onClick={() => console.log("Hello")}>
          <p className="py-[4px] text-white text-xs px-[4px]">Search</p>
        </ButtonPrimary>
      </div>
      <div className="w-[135px]">
        <Button>
          <p className="py-[4px] text-xs px-[4px]">
            This is component form port 3002
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Index;
