import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Tooltip } from "@nextui-org/react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

const FixedButton: React.FC = () => {
	return (
	  <div className="fixed flex flex-col space-y-6 right-0 m-4 bottom-12" >
		<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
		  联系我们
		</button>


		<Tooltip
			placement="left"
			content="微信扫一扫"
			delay={0}
			closeDelay={0}
			motionProps={{
				variants: {
				exit: {
					opacity: 0,
					transition: {
					duration: 0.1,
					ease: "easeIn",
					}
				},
				enter: {
					opacity: 1,
					transition: {
					duration: 0.15,
					ease: "easeOut",
					}
				},
				},
			}}
			>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
		  微信咨询
		</button>
		</Tooltip>
	  </div>
	);
  };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased scrollbar-hide overflow-x-hidden",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="flex-grow">
							<div className="relative flex flex-col h-screen">
								{children} {/* 渲染每个页面的内容 */}
								<FixedButton /> {/* 固定在右下角的按钮 */}
							</div>
						</main>
						<footer className="w-full py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
