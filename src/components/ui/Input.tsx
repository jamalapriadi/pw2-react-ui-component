interface InputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, name, register, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        {...register(name)}
        placeholder={label}
        className="border p-2 rounded-2xl focus:outline-red-800"
      />

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
