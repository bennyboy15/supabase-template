import { useAuthLogout } from "../hooks/auth.hooks";

function HomePage() {
    const { mutate: logout } = useAuthLogout();
    return (
        <div>
            <div>HomePage</div>
            <button onClick={() => logout()}>LOGOUT</button>
        </div>
    );
}

export default HomePage;
