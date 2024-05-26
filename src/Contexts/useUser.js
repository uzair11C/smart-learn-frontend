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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSession, setUserSession] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const signUp = async () => {
        console.log("useUser() signup: ", name, email);
        await supabase.auth.signUp({
            email,
            password,
        });

        setIsAuthenticated(true);

        const { data } = await supabase.auth.updateUser({
            data: {
                name: name,
                messages: [],
            },
        });
    };

    const storeMessages = async (messages) => {
        console.log("in store message line 39: ", messages);
        const { res } = await supabase.auth.updateUser({
            data: {
                messages: messages,
            },
        });
    };

    const loginOAuth = async (provider) => {
        await supabase.auth.signInWithOAuth({
            provider,
        });

        const { data } = await supabase.auth.updateUser({
            data: {
                messages: [],
            },
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
        name,
        setName,
        email,
        setEmail,
        isAuthenticated,
        password,
        setPassword,
        user,
        userSession,
        loginOAuth,
        signUp,
        storeMessages,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
