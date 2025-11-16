/** biome-ignore-all lint/a11y/noLabelWithoutControl: <> */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ChargingCalculator = () => {
	const [currentCharge, setCurrentCharge] = useState(20);
	const [targetCharge, setTargetCharge] = useState(80);
	const [batteryCapacity, setBatteryCapacity] = useState(60);
	const [costPerKwh, setCostPerKwh] = useState(0.15);
	const [results, setResults] = useState<{
		cost: number;
	} | null>(null);

	const handleCalculate = () => {
		const kWhNeeded = batteryCapacity * ((targetCharge - currentCharge) / 100);
		const totalCost = kWhNeeded * costPerKwh;

		setResults({
			cost: totalCost,
		});
	};

	const handleTargetChargeChange = (value: number) => {
		if (value >= currentCharge) {
			setTargetCharge(value);
		}
	};

	return (
		<Card className="w-full max-w-sm bg-card/80 border border-border shadow-2xl">
			<div className="p-6 md:p-8 space-y-6">
				{/* Header with icon */}
				<div className="flex items-center gap-4">
					<img src="/pwa-192x192.png" alt="" className="h-20 -ml-4" />
					<div className="space-y-2 -ml-2">
						<div className="flex items-center gap-3">
							<h1 className="text-3xl md:text-4xl font-bold text-foreground">
								GridGuide
							</h1>
						</div>
						<p className="text-muted-foreground text-sm">
							Calculate your EV charging costs
						</p>
					</div>
				</div>

				{/* Inputs Section */}
				<div className="grid grid-cols-2 gap-4">
					{/* Current Battery Charge */}
					<div className="space-y-2">
						<label className="text-sm font-medium text-foreground">
							Current Battery %
						</label>
						<div className="flex items-center gap-2">
							<Input
								type="number"
								value={currentCharge}
								onChange={(e) =>
									setCurrentCharge(
										Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)),
									)
								}
								min={0}
								max={100}
								className="bg-input border-border text-foreground placeholder:text-muted-foreground w-full"
							/>
						</div>
					</div>

					{/* Target Battery Charge */}
					<div className="space-y-2">
						<label className="text-sm font-medium text-foreground">
							Target Battery %
						</label>
						<div className="flex items-center gap-2">
							<Input
								type="number"
								value={targetCharge}
								onChange={(e) =>
									handleTargetChargeChange(
										Math.max(
											currentCharge,
											Math.min(
												100,
												parseFloat(e.target.value) || currentCharge,
											),
										),
									)
								}
								min={currentCharge}
								max={100}
								className="bg-input border-border text-foreground placeholder:text-muted-foreground w-full"
							/>
						</div>
					</div>

					{/* Battery Capacity */}
					<div className="space-y-2">
						<label className="text-sm font-medium text-foreground">
							Battery Capacity
						</label>
						<div className="flex items-center gap-2 relative">
							<Input
								type="number"
								value={batteryCapacity}
								onChange={(e) =>
									setBatteryCapacity(parseFloat(e.target.value) || 0)
								}
								min={0}
								step={1}
								className="bg-input border-border text-foreground placeholder:text-muted-foreground w-full"
							/>
							<span className="text-muted-foreground text-sm font-medium absolute right-3">
								kWh
							</span>
						</div>
					</div>

					{/* Charging Cost */}
					<div className="space-y-2">
						<label className="text-sm font-medium text-foreground">
							Cost per kWh
						</label>
						<div className="flex items-center gap-2">
							<Input
								type="number"
								value={costPerKwh}
								onChange={(e) => setCostPerKwh(parseFloat(e.target.value) || 0)}
								min={0}
								step={0.01}
								className="bg-input border-border text-foreground placeholder:text-muted-foreground w-full"
							/>
						</div>
					</div>
				</div>

				{/* Results Display */}
				{results && (
					<div className="space-y-3">
						{/* Estimated Cost */}
						<div className="bg-muted/30 rounded-lg p-4 space-y-1 border border-primary/10">
							<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Estimated Cost
							</p>
							<p className="text-2xl font-bold text-primary">
								INR {results.cost.toFixed(2)}
							</p>
						</div>
					</div>
				)}

				{/* Calculate Button */}
				<Button onClick={handleCalculate} size="lg" className="w-full">
					Calculate Cost
				</Button>
			</div>
		</Card>
	);
};
