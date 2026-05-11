interface InputTextProps {
  label: string;
  nama: string;
  error?: string;
  register: any;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  nama,
  error,
  register,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        {...register(nama)}
        placeholder={label}
        className={`border p-2 rounded-md transition-all outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50"
              : "border-gray-300 focus:border-blue-200 focus:ring-2 focus:ring-blue-200 bg-white"
          }
        `}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
