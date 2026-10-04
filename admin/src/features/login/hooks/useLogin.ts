
import { useMutation } from "@tanstack/react-query";
import { loginAdmin } from "../api/loginAdmins";

export function useLogin() {
    return useMutation({
        mutationFn: loginAdmin,
    });
}