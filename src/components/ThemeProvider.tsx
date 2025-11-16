import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

interface Props extends PropsWithChildren {
	defaultTheme: Theme;
	storageKey: string;
}

export const ThemeProvider = (props: Props) => {
	const [theme, setTheme] = useState<Theme>(
		() =>
			(localStorage.getItem(props.storageKey) as Theme) || props.defaultTheme,
	);

	useEffect(() => {
		const root = window.document.documentElement;
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const applyTheme = (currentTheme: Theme) => {
			root.classList.remove("light", "dark");

			if (currentTheme === "system") {
				root.classList.add(mediaQuery.matches ? "dark" : "light");
			} else {
				root.classList.add(currentTheme);
			}

			const themeColorMeta = document.querySelector('meta[name="theme-color"]');
			if (themeColorMeta) {
				themeColorMeta.setAttribute(
					"content",
					root.classList.contains("dark") ? "#000000" : "#ffffff",
				);
			}
		};

		applyTheme(theme);

		// Handle system theme changes only when theme is 'system'
		if (theme === "system") {
			const handleChange = () => applyTheme("system");
			mediaQuery.addEventListener("change", handleChange);

			return () => {
				mediaQuery.removeEventListener("change", handleChange);
			};
		}
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(props.storageKey, theme);
			setTheme(theme);
		},
	};

	// @ts-ignore
	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{props.children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
