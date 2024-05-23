import { useContext, useState, createContext, useEffect } from "react";
import { supabase } from "../components/supabaseClient";

const UserContext = createContext({ user: null, userSession: null });

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a AuthContextProvider.");
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSession, setUserSession] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const signUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
        });

        setIsAuthenticated(true);
        // setEmail("");
        // setPassword("");

        const { data } = await supabase.auth.updateUser({
            data: {
                name: "Nigga Chan",
            },
        });
    };

    const updateUser = async (messages) => {
        await supabase.auth.updateUser({
            data: {
                messages: messages,
            },
        });
    };

    const login = async () => {
        await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setIsAuthenticated(true);
        setEmail("");
        setPassword("");
    };

    const loginOAuth = async (provider) => {
        await supabase.auth.signInWithOAuth({
            provider,
        });

        setIsAuthenticated(true);
    };

    const logout = async () => {
        await supabase.auth.signOut();

        setIsAuthenticated(false);
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUserSession(session);
            setUser(session?.user ?? null);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log(`Supabase auth event: ${event}`);
                setUserSession(session);
                setUser(session?.user ?? null);
            }
        );

        return () => authListener.subscription.unsubscribe();
    }, []);

    const value = {
        email,
        setEmail,
        isAuthenticated,
        password,
        setPassword,
        user,
        userSession,
        loginOAuth,
        login,
        signUp,
        updateUser,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};