export type User = {
    email: string;
    firstName: string;
    lastName: string;
    gender: "male" | "female" | "other";
    error?: string;
    isAuthenticated: boolean;
    isLoading: boolean;
}