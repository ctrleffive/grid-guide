import {
	defineConfig,
	minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
	headLinkOptions: { preset: "2023" },
	config: false,
	preset: minimal2023Preset,
	images: ["logo.png"],
	manifestIconsEntry: false,
	overrideAssets: false,
});
