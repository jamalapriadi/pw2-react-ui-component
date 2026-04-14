import { useState } from "react";

interface InputPasswordProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  name,
  register,
  error,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          placeholder={label}
          className="border p-2 rounded-2xl focus:outline-red-800 w-full pr-10 px-3 py-2"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-sm"
        >
          {show ? "hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputPassword;
