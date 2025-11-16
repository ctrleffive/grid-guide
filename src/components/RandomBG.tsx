import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const generateBlobs = () => {
	const count = 5;
	const colors = [
		"#006B5A", // deep teal
		"#008B72", // forest green
		"#00A884", // spring green
		"#00C4A7", // mint green
		"#00D1C1", // turquoise
		"#00D9D5", // aqua
		"#00B4D8", // sky blue
		"#0096C7", // blue
		"#007B6", // cobalt blue
		"#023E8A", // navy blue
	];
	const topStart = 35;
	return Array.from({ length: count }).map((_, index) => ({
		id: index,
		top: Math.floor(Math.random() * (100 - topStart + 1)) + topStart,
		left: Math.random() * 100,
		size: 200 + Math.random() * 200,
		color: colors[Math.floor(Math.random() * colors.length)],
		blur: 80 + Math.random() * 40,
	}));
};

export const RandomBG = () => {
	const [blobs, setBlobs] = useState(() => generateBlobs());

	useEffect(() => {
		const interval = setInterval(() => setBlobs(generateBlobs()), 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={cn(
				"fixed top-0 left-0 overflow-hidden -z-10 w-full h-full dark:bg-transparent transition-opacity duration-1000",
				"opacity-50 bg-black/10",
			)}
		>
			{blobs.map((blob) => (
				<div
					key={blob.id}
					className="absolute transition-all ease-in-out will-change-transform"
					style={{
						top: `${blob.top}%`,
						left: `${blob.left}%`,
						width: `${blob.size}px`,
						height: `${blob.size}px`,
						transitionDuration: "5s",
						backgroundColor: blob.color,
						borderRadius: "50% 60% 70% 60% / 60% 70% 60% 50%",
						filter: `blur(${blob.blur}px)`,
						transform: "translate3d(-50%, -50%, 0)",
					}}
				/>
			))}
		</div>
	);
};
