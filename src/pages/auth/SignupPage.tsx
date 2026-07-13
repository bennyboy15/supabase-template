import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuthSignup } from "../../hooks/auth.hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, type AuthEmailCredentialsType } from "../../schemas/auth.schemas";

function SignupPage() {
    const { mutate: signup } = useAuthSignup();
    const { register, handleSubmit } = useForm<AuthEmailCredentialsType>({ resolver: zodResolver(UserSchema) });
    const onSubmit: SubmitHandler<AuthEmailCredentialsType> = (data) => {
        signup(data);
    };

    return (
        <div>
            <div>SignupPage</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="example@email.com" />
                <input type="password" {...register("password")} placeholder="password123" />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    );
}

export default SignupPage;
