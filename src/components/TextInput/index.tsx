import { InputHTMLAttributes, KeyboardEvent } from "react";

import pathIconArrow from "../../assets/images/icon-arrow.svg";
import { Spinner } from "../Spinner";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  asButton?: boolean;
  onClick?: () => void;
  loading?: boolean;
  onKeyDown?: (data: KeyboardEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  asButton,
  onClick,
  loading,
  onKeyDown,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center w-full max-w-96 ">
      <input
        {...props}
        type="text"
        className="w-full max-w-96 rounded-l-lg py-3 px-2 text-sm outline-none"
        onKeyDown={onKeyDown}
      />
      {asButton && (
        <button
          className="bg-black text-white py-3.5 px-4 rounded-r-lg disabled:bg-gray-700"
          onClick={onClick}
          disabled={loading}
        >
          {loading ? <Spinner /> : <img className="w-4" src={pathIconArrow} alt="icon-arrow" />}
        </button>
      )}
    </div>
  );
};
