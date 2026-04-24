import { createContext, useContext, useState, useEffect } from "react";

// Predefined modern color themes
export const THEMES = [
    { id: "default-gold", name: "Default Gold", color: "#EAB308", hsl: "45 93% 47%" },
    { id: "ocean-blue", name: "Ocean Blue", color: "#0EA5E9", hsl: "199 89% 48%" },
    { id: "rose-pink", name: "Rose Pink", color: "#F43F5E", hsl: "349 89% 60%" },
    { id: "emerald-green", name: "Emerald Green", color: "#10B981", hsl: "160 84% 39%" },
    { id: "royal-purple", name: "Royal Purple", color: "#A855F7", hsl: "271 91% 65%" },
    { id: "sunset-orange", name: "Sunset Orange", color: "#F97316", hsl: "24 95% 53%" },
    { id: "cyan-neon", name: "Cyan Neon", color: "#06B6D4", hsl: "189 94% 43%" },
    { id: "cherry-red", name: "Cherry Red", color: "#EF4444", hsl: "0 84% 60%" }
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [accentColor, setAccentColor] = useState(THEMES[0]);

    useEffect(() => {
        // Load from local storage on mount
        const saved = localStorage.getItem("portfolio-theme");
        if (saved) {
            try {
                setAccentColor(JSON.parse(saved));
            } catch (e) {
                // ignore
            }
        }
    }, []);

    useEffect(() => {
        // Set CSS variable
        document.documentElement.style.setProperty("--color-accent", accentColor.color);
        document.documentElement.style.setProperty("--color-accent-hsl", accentColor.hsl);
        localStorage.setItem("portfolio-theme", JSON.stringify(accentColor));
    }, [accentColor]);

    const changeTheme = (themeId) => {
        const theme = THEMES.find((t) => t.id === themeId);
        if (theme) setAccentColor(theme);
    };

    return (
        <ThemeContext.Provider value={{ accentColor, THEMES, changeTheme, setCustomAccent: setAccentColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
