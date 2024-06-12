/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { Button, Link, Popover, PopoverContent, PopoverTrigger, Tooltip } from "@nextui-org/react";
import { ChatCompound } from "@/components/chat";

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





const FixedButton = () => {
	const WechatIcon = () => {
		return (
			<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.8953 8.67099C15.7899 7.54323 15.391 6.58969 14.7404 5.74012C12.939 3.38815 9.60982 2.4011 6.64744 3.36875C4.47705 4.07778 2.87973 5.43794 2.22929 7.68071C1.52624 10.1051 2.46568 12.4599 4.69435 14.0333C5.04146 14.2788 5.09398 14.4884 4.98058 14.8652C4.82638 15.3778 4.73928 15.9108 4.60471 16.5195C5.33812 16.061 5.95689 15.6498 6.60235 15.2856C6.79681 15.1759 7.06924 15.1484 7.2988 15.1678C7.96351 15.2237 8.62446 15.3226 9.35012 15.4126M11.8088 7.05902C11.3508 7.06746 10.9637 7.45766 10.9718 7.90277C10.9802 8.36421 11.3599 8.7252 11.8309 8.7196C12.3031 8.71385 12.6613 8.3491 12.6568 7.87785C12.6529 7.41534 12.2749 7.05051 11.8088 7.05902ZM7.35079 7.91557C7.36789 7.47215 6.98367 7.07275 6.52729 7.05933C6.06003 7.04561 5.67572 7.40269 5.66207 7.8632C5.64827 8.32985 6.0052 8.70373 6.47584 8.71569C6.94241 8.72757 7.33354 8.36996 7.35079 7.91557ZM17.6884 12.3843C17.3253 12.3818 17.0167 12.6791 17.0019 13.046C16.9861 13.4383 17.2912 13.7605 17.6794 13.7615C18.055 13.7627 18.3517 13.4787 18.3655 13.105C18.38 12.7117 18.0749 12.387 17.6884 12.3843ZM13.3745 13.7662C13.7489 13.7666 14.057 13.4737 14.0711 13.1041C14.0861 12.7127 13.7713 12.3845 13.3795 12.3828C12.9915 12.381 12.6664 12.714 12.6799 13.0994C12.6927 13.4678 13.003 13.7658 13.3745 13.7662ZM20.0664 20.2452C19.4785 19.9835 18.9392 19.5907 18.3652 19.5308C17.7932 19.471 17.1919 19.801 16.5936 19.8622C14.771 20.0486 13.138 19.5407 11.7916 18.2956C9.23081 15.927 9.59671 12.2954 12.5594 10.3543C15.1925 8.62927 19.0542 9.20435 20.9107 11.598C22.5307 13.6866 22.3403 16.4592 20.3626 18.2139C19.7903 18.7217 19.5843 19.1397 19.9515 19.809C20.0193 19.9326 20.027 20.0891 20.0664 20.2452Z" stroke="#000000" strokeLinejoin="round"/>
			</svg>
		);
	};

	const CustomerServiceIcon = () => {
		return (
			<svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
					viewBox="0 0 490 490" xmlSpace="preserve">
				<g>
					<g>
						<g>
							<path d="M467.031,229.688h-30.625v-15.312c0-4.228-3.428-7.656-7.656-7.656h-15.313v-38.282C413.437,75.561,337.877,0,245,0
								S76.563,75.561,76.563,168.437v38.282H61.25c-4.228,0-7.656,3.428-7.656,7.656v15.312H22.969c-4.228,0-7.656,3.428-7.656,7.656
								v99.531c0,4.228,3.428,7.656,7.656,7.656h30.625v15.312c0,4.228,3.428,7.656,7.656,7.656h45.938c4.229,0,7.656-3.428,7.656-7.656
								V214.375c0-4.228-3.428-7.656-7.656-7.656H91.875v-38.282c0-84.433,68.691-153.125,153.125-153.125
								s153.125,68.692,153.125,153.125v38.282h-15.312c-4.228,0-7.656,3.428-7.656,7.656v145.469c0,4.228,3.428,7.656,7.656,7.656
								h15.312v30.625c0,21.108-17.173,38.282-38.281,38.282h-77.213c-3.657-21.698-22.566-38.282-45.287-38.282
								c-25.33,0-45.938,20.607-45.938,45.938c0,25.33,20.607,45.937,45.938,45.937c22.721,0,41.63-16.584,45.287-38.281h77.213
								c29.552,0,53.593-24.042,53.593-53.594V367.5h15.313c4.228,0,7.656-3.428,7.656-7.656v-15.312h30.625
								c4.228,0,7.656-3.428,7.656-7.656v-99.531C474.687,233.115,471.259,229.688,467.031,229.688z M53.593,329.219H30.625V245h22.968
								V329.219z M99.531,222.031v130.157H68.906V222.031H99.531z M237.344,474.688c-16.887,0-30.625-13.738-30.625-30.625
								c0-16.887,13.738-30.626,30.625-30.626c16.886,0,30.625,13.739,30.625,30.626S254.23,474.688,237.344,474.688z M421.094,352.188
								h-30.625V222.031h30.625V352.188z M459.375,329.219h-22.969V245h22.969V329.219z"/>
							<path d="M245,365.924v-53.593c0-4.228-3.428-7.656-7.656-7.656c-4.228,0-7.656,3.428-7.656,7.656v53.593
								c0,4.229,3.428,7.656,7.656,7.656C241.572,373.581,245,370.153,245,365.924z"/>
							<path d="M271.79,382.813c2.646,0,5.219-1.373,6.637-3.829l26.797-46.413c2.114-3.662,0.859-8.344-2.802-10.458
								s-8.344-0.858-10.458,2.802l-26.797,46.413c-2.114,3.662-0.859,8.344,2.802,10.458
								C269.174,382.483,270.491,382.813,271.79,382.813z"/>
							<path d="M202.898,382.813c1.299,0,2.616-0.331,3.821-1.027c3.662-2.114,4.917-6.797,2.802-10.458l-26.797-46.413
								c-2.114-3.664-6.799-4.917-10.459-2.802c-3.662,2.114-4.917,6.797-2.802,10.458l26.797,46.413
								C197.678,381.441,200.251,382.813,202.898,382.813z"/>
						</g>
					</g>
				</g>
				</svg>
		);
	}

	const ContactIcon = () => {
		return (
			<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
			</svg>
		)
	};

	const ChatIcon = () => {
		return (
			<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="0.5" d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z" fill="#1C274C"/>
				<path d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z" fill="#1C274C"/>
				<path d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z" fill="#1C274C"/>
				<path d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="#1C274C"/>
			</svg>
		);
	};
	
	return (
		<>
			<div className="fixed right-8 m-0 bottom-12 md:block hidden" >
				<div className=" border-white border-x-5 shadow-2xl bg-[#f9fafb] p-2 flex flex-col rounded-xl space-y-8 justify-center items-center max-w-12">
					<Popover placement="left" className=" bg-opacity-0">
						<PopoverTrigger>
							<Button className=" bg-opacity-0">
								<ChatIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="bg-white">
							<div className="  md:h-[600px] bg-white p-1 max-w-2xl">
								<ChatCompound />
							</div>
						</PopoverContent>
					</Popover>


					<Tooltip
						placement="left-start"
						content={
							<div className=" flex flex-col p-6 justify-center items-center rounded-xl ">
							<img width={100} src="http://business.xiaoice.com/img/layout/qrcode.png?v=OSuFknDfrpycsL6rd1tJ3atFvkFiNPI_ChXUbcr-9jw" alt="" />
							<p className=" mt-4 text-lg">
								微信扫码, 添加客服
							</p>
						</div>
						}
					>
						<Button className=" bg-opacity-0">
							<CustomerServiceIcon />
						</Button>
					</Tooltip>

					<Tooltip
						placement="left-start"
						content={<div className=" p-2 text-xl">立即联系</div>}
					>
						<Link href="http://t1.ink/f/h9ulpg">
							<Button className=" bg-opacity-0">
								<ContactIcon />
							</Button>							
						</Link>
					</Tooltip>

					<Tooltip
						placement="left-start"
						content={
							<div className=" flex flex-col p-6 justify-center items-center rounded-xl ">
							<img width={100} src="http://business.xiaoice.com/img/layout/qrcode.png?v=OSuFknDfrpycsL6rd1tJ3atFvkFiNPI_ChXUbcr-9jw" alt="" />
							<p className=" mt-4 text-lg">
								扫一扫 添加好友
							</p>
						</div>
						}
					>
						<Button className=" bg-opacity-0">
							<WechatIcon />
						</Button>
					</Tooltip>
				</div>
			</div>


			<div className="z-20 fixed md:hidden bottom-0 bg-[#00305a] flex justify-center max-w-full w-full h-14 items-center">
				<p className=" text-white mr-6">想要了解更多吗？</p>
				<Button className=" bg-slate-800 text-white mr-5">
					联系我们
				</Button>
				
				<Popover shouldBlockScroll={true} triggerScaleOnOpen={false} placement="top">
				<PopoverTrigger>
					<Button className=" bg-slate-800 text-white mr-5">
						微信咨询
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className=" flex flex-col p-4 justify-center items-center">
						<img width={100} src="http://business.xiaoice.com/img/layout/qrcode.png?v=OSuFknDfrpycsL6rd1tJ3atFvkFiNPI_ChXUbcr-9jw" alt="" />
						<p className=" mt-4 text-lg">
							扫一扫 添加好友
						</p>
					</div>

				</PopoverContent>
				</Popover>
			</div>
		</>
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
						<main className="flex-grow">
							<Navbar />
							<div className="relative flex flex-col justify-center bg-white">
								{children} {/* 渲染每个页面的内容 */}
								<FixedButton /> {/* 固定在右下角的按钮 */}
							</div>
						</main>
						<footer className="bg-[#09090b] text-xs md:text-sm w-full pb-16 p-4 md:p-10  flex flex-wrap justify-center items-center text-white gap-3">
							<div className=" relative w-full overflow-hidden flex md:flex-row flex-col justify-center items-center md:gap-36">

								<div className="flex justify-center flex-col items-center text-left">
									<img className=" object-cover w-64 pb-4" src="logo.png" alt="logo" />
									<p className=" font-bold md:text-3xl text-lg"> 奥森小冰</p>
								</div>


								<div className="flex md:gap-48 md:ml-0">
										<div className=" space-y-4 pt-6 md:text-base pr-10">
											<p>法律声明</p>
											<p>意见反馈</p>
											<p>联系我们</p>
											<p>隐私声明</p>
										</div>

										<div className=" space-y-4 pt-6 md:text-base pr-10">
											<p> 京ICP备 2020040356号-2 </p>
											<p> 京ICP证 B2-20220705</p>
											<p> 京公网安备 11010802034035号 </p>
											<p>前往⽇本⼩冰りんな站 </p>
											<p>网站地图  XML地图</p>	
										</div>
								</div>


						
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
