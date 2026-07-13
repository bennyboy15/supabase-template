import { useAuthLogout } from "@/hooks/auth.hooks";
import { useTestItems } from "@/hooks/test.hooks";

function HomePage() {

    const { mutate: logout, isPending } = useAuthLogout();
    const { data: tests, isLoading, error } = useTestItems();

    return (
        <div>
            <div>HomePage</div>
            <button onClick={() => logout()} disabled={isPending}>
                {isPending ? "LOGGING OUT..." : "LOGOUT"}
            </button>
            {isLoading && <p>Loading test items...</p>}
            {error && <p role="alert">Failed to load test items: {error.message}</p>}
            <ul>
                {tests?.map((t) => (
                    <li key={t.id}>{t.name}</li>
                ))}
            </ul>
        </div>
    );

}

export default HomePage;
