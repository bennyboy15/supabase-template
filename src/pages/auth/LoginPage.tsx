import { useAuthLogin } from "../../hooks/auth.hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import { UserSchema, type AuthEmailCredentialsType } from "../../schemas/auth.schemas";
import toast from "react-hot-toast";

function LoginPage() {
    const { mutate: login } = useAuthLogin();
    const { register, handleSubmit } = useForm<AuthEmailCredentialsType>({ resolver: zodResolver(UserSchema) });
    const onSubmit: SubmitHandler<AuthEmailCredentialsType> = (data) => {
        login(data);
    };
    const onInvalid: SubmitErrorHandler<AuthEmailCredentialsType> = (errors) => {
        Object.values(errors).forEach((error) => {
            if (error?.message) toast.error(error.message);
        });
    };

    return (
        <div>
            <div>LoginPage</div>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <input type="email" {...register("email")} placeholder="example@email.com" />
                <input type="password" {...register("password")} placeholder="password123" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default LoginPage;
