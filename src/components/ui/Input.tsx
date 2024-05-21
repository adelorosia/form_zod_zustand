import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  register:UseFormRegisterReturn
}
const Input = ({ type, placeholder, error,register }: IInputProps) => {
  return (
    <div className="w-full bg-black rounded-lg ">
      <input
        className={`w-full bg-transparent py-3 px-2 outline-none focus:outline-none ${
          error && "border-2 border-red-500"
        }`}
        type={type}
        placeholder={error ? error.message : placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
