import { useQuery } from "@tanstack/react-query";
import { getTestItems } from "@/utils/supabase";

export function useTestItems() {
    return useQuery({
        queryKey: ["test"],
        queryFn: getTestItems,
    });
}
