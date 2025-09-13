"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../websiteComponents/Sidebar";

export default function ComponentsPage() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div className="px-8 py-32">
			{/* Theme toggle */}
			<button
				className="absolute top-6 right-8 px-3 py-2 rounded-lg bg-muted text-primary-foreground shadow hover:bg-primary/20 transition"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? "🌙" : "☀️"} Theme
			</button>
			
			<div className="max-w-4xl">
				<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
					Components
				</h1>
				<p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
					Explore ready-to-use, community-driven mobile UI components for SwiftUI,
					Jetpack Compose, and React Native.
				</p>
				{/* Gallery area for the selected component */}
				<div className="mt-8 w-full max-w-2xl">
					{/* Example: show active component name */}
					<div className="rounded-xl border border-border bg-card/80 p-8 shadow-lg">
						<h2 className="text-2xl font-bold mb-4 text-primary">
							Component Gallery
						</h2>
						<p className="text-muted-foreground mb-2">Select a component from the sidebar to view its demo and documentation.</p>
					</div>
				</div>
			</div>
		</div>
	);
}