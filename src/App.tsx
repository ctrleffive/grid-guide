import Clarity from "@microsoft/clarity";
import ReactGA from "react-ga4";
import { PWABadge } from "./components/PWABadge";
import { RandomBG } from "./components/RandomBG";
import { ThemeProvider } from "./components/ThemeProvider";
import { APP_VERSION, CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from "./constants";
import { ChargingCalculator } from "./pages/ChargingCalculator";

if (location.hostname !== "localhost") {
	ReactGA.initialize(GA_MEASUREMENT_ID);
	Clarity.init(CLARITY_PROJECT_ID);
}

export const App = () => {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="app-theme">
				<RandomBG />
				<div className="flex flex-col items-center justify-center min-h-screen gap-6">
					<ChargingCalculator />
					<div className="text-center text-muted-foreground space-y-1 text-sm">
						<p>&copy; {new Date().getFullYear()} GridGuide. All rights reserved.</p>
						<p>
							Made by{" "}
							<a
								href="https://chandujs.com"
								target="_blank"
								rel="noreferrer noopener"
								className="text-foreground/80 hover:text-foreground"
							>
								@ctrleffive
							</a>{" "}
							with ❤️
						</p>
						<p className="mt-4 opacity-50 font-mono">{APP_VERSION}</p>
					</div>
				</div>
			</ThemeProvider>
			<PWABadge />
		</>
	);
};
