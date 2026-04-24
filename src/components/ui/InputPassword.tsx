import { useState } from "react";

interface InputPasswordProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={label}>{label}</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(nama)}
          placeholder={label}
          className={`border p-2 w-full px-3 py-2 pr-10 rounded-md transition-all outline-none
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50"
                : "border-gray-300 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 bg-white"
            }
          `}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-sm"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
