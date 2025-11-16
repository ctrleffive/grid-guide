import Clarity from "@microsoft/clarity";
import ReactGA from "react-ga4";
import { PWABadge } from "./components/PWABadge";
import { RandomBG } from "./components/RandomBG";
import { ThemeProvider } from "./components/ThemeProvider";
import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from "./constants";

if (location.hostname !== "localhost") {
	ReactGA.initialize(GA_MEASUREMENT_ID);
	Clarity.init(CLARITY_PROJECT_ID);
}

export const App = () => {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="app-theme">
				<RandomBG />
			</ThemeProvider>
			<PWABadge />
		</>
	);
};
