import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuthSignup } from "../../hooks/auth.hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, type AuthEmailCredentialsType } from "../../schemas/auth.schemas";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
    const { mutate: signup, isPending } = useAuthSignup();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthEmailCredentialsType>({ resolver: zodResolver(UserSchema) });

    const onSubmit: SubmitHandler<AuthEmailCredentialsType> = (data) => {
        signup(data, {
            // No session means email confirmation is required, so the user
            // can't enter the app yet — send them to the login page instead
            onSuccess: (result) =>
                navigate(result.session ? "/" : "/login", { replace: true }),
        });
    };

    return (
        <div>
            <div>SignupPage</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="example@email.com" />
                {errors.email && <p role="alert">{errors.email.message}</p>}
                <input type="password" {...register("password")} placeholder="password123" />
                {errors.password && <p role="alert">{errors.password.message}</p>}
                <button type="submit" disabled={isPending}>
                    {isPending ? "SIGNING UP..." : "SIGN UP"}
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    );
}

export default SignupPage;
