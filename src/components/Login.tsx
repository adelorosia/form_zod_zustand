import useApp from "../hooks/useApp";
import Input from "./ui/Input";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";


const formSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6, { message: "invalid password" }).max(30),
  });
const Login = () => {
    const { setIsLoginFormActive, isLoading, setIsLoading } = useApp();

    const {
      handleSubmit,
      reset,
      register,
      formState: { errors },
    } = useForm<zod.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const onSubmit = (values: zod.infer<typeof formSchema>) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      reset();
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#212826] h-fit w-full max-w-96 px-5 py-6 text-white flex flex-col items-center justify-center rounded-lg gap-3">
      <h3 className="text-xl font-bold">Sing In</h3>
      <p>Login to your account</p>
      <Input type="email" placeholder="Email" register={register("email")} error={errors.email}/>
      <Input type="password" placeholder="Password" register={register("password")} error={errors.password}/>
      <button className="w-full bg-indigo-500 py-2 rounded-lg">  {isLoading ? <Loader2 className=" animate-spin mx-auto "/> : "Sign In"}</button>
      <p className=" text-center">
        <span>Dont have an account yet?</span>
        <button className="ml-2 text-indigo-500" onClick={()=>setIsLoginFormActive(false)}>Sing Up</button>
        <button className="text-indigo-500">Forget Password</button>
      </p>
    </form>
  );
};

export default Login;
