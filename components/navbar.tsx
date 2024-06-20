/* eslint-disable @next/next/no-img-element */
"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from 'next/link';
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";

export const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClose = () => {
	  setIsMenuOpen(false); 
	};

	const handleOpenNewPage = () => {
		window.open('', '_blank'); // 替换'/new-page'为您要打开的页面路径
	  };

	return (
		<NextUINavbar maxWidth="lg" position="static" className=" text-white p-2 bg-none rounded-sm bg-[#2e3242]" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<img className=" object-cover w-64 mr-12" src="logo.png" alt="png" />
			<NavbarContent className="basis-1/5 sm:basis-full" justify="center">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-8 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium text-xl text-white"
								)}
								color="foreground"
								href={item.href}
								>
									<div className="relative inline-block">
									<span className=" relative z-10">{item.label}</span>
								</div>
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full "
				justify="end"
			>
				<NavbarItem className="hidden md:flex">
					<Link href="http://t1.ink/f/h9ulpg">
						<button className='relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
							<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
							<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
								联系我们
							</span>
						</button>
					</Link>
				</NavbarItem>
			</NavbarContent>



			<NavbarContent className="sm:hidden basis-1 pl-4 " justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="bg-[#2e3242]">
				<div className="mx-4 mt-8 flex flex-col gap-2 space-y-4 divide-y divide-y-reverse bg-[#2e3242] divide-white divide-opacity-20">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} >
							<Link
								className=" text-white divide-y"
								href={item.href}
							>
							{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
