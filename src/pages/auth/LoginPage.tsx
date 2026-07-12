import { useAuthLogin } from "../../hooks/auth.hooks"
import type { AuthEmailCredentialsType } from "../../types/auth.types";
import { useForm, type SubmitHandler } from "react-hook-form";

function LoginPage() {
    const { mutate: login } = useAuthLogin();
    const { register, handleSubmit, } = useForm<AuthEmailCredentialsType>()
    const onSubmit: SubmitHandler<AuthEmailCredentialsType> = (data) => {
        login(data);
    }

    return (
        <div>
            <div>LoginPage</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="example@email.com" />
                <input type="password" {...register("password")} placeholder="password123" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default LoginPage