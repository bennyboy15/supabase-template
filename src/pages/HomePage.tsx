import { useAuthLogout } from "@/hooks/auth.hooks";
import type { TestType } from "@/types/test.types";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

function HomePage() {

    const { mutate: logout, isPending } = useAuthLogout();
    const [tests, setTests] = useState<TestType[]>([]);

    useEffect(() => {
        async function getTestItems() {
            const { data: testItems } = await supabase.from('test').select();

            if (testItems) {
                setTests(testItems)
            }
        }

        getTestItems()
    }, [])

    return (
        <div>
            <div>HomePage</div>
            <button onClick={() => logout()} disabled={isPending}>
                {isPending ? "LOGGING OUT..." : "LOGOUT"}
            </button>
            <ul>
                {tests?.map((t: TestType) => (
                    <li key={t.id}>{t.name}</li>
                ))}
            </ul>
        </div>
    );

}

export default HomePage;
