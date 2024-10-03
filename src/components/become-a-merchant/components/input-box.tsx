import React, { InputHTMLAttributes } from "react";

interface MerchantInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MerchantInput: React.FC<MerchantInputProps> = ({ ...props }) => {
  return (
    <div className="w-full">
      <input
        {...props}
        className="w-full bg-white p-2.5 text-sm font-[300] rounded-md"
      />
    </div>
  );
};

export default MerchantInput;
