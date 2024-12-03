import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Taska",
	description: "One Task At A Time",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<ReactLenis root>
				<body className={inter.className}>{children}</body>
			</ReactLenis>
		</html>
	);
}
