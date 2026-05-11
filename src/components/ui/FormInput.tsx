import type React from "react";

interface FormInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  type?: string;
  placeholder: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  register,
  error,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`p-2 border rounded ${error ? "bg-red-200" : "bg-white"}`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
