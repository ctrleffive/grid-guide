import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const generateBlobs = () => {
	const count = 5;
	const colors = [
		"#F3E2C7", // beige
		"#E07A5F", // terracotta
		"#81B29A", // soft green
		"#3D405B", // deep slate
		"#F2CC8F", // warm sand
		"#A0C4E2", // light blue
		"#D96A6A", // muted red
		"#6A4C93", // bold purple
		"#FFB703", // golden yellow
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
				"opacity-50 bg-black/10"
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
