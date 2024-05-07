/* eslint-disable @next/next/no-img-element */
"use client"
import { useProgress } from "@nextui-org/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const ParallelogramImage = () => {
	return (
	  <motion.div
		style={{
		  height: 800,
		  width: 200,
		  skewX: 12,
		  overflow: 'hidden',
		  position: 'relative',
		  
		}}
		whileHover={{ width: 650 }}
		transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
		className="transform -skew-x-12"
	  >
		<img
		  src="https://business.xiaoice.com/img/vhuman/product_one1.png"
		  alt="Parallelogram Image"
		  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
		/>
	  </motion.div>
	);
  };
  

export default function DocsPage() {
    return (
		<div className="flex w-full justify-center items-center mt-24 gap-6">
			<ParallelogramImage />
			<ParallelogramImage />

		</div>
    );

}


	{/**	return (
		<section>
			<div className="bg-[#11172c]">
				<div className="flex">
					<div className="h-full relative">
						<img width={2200} className=" min-w-[1500px]" src="https://business.xiaoice.com/img/vhuman/banner.png?v=oQDolZ86wCVkUNI8PO9c-08ZbpwRUmUhOHJ_XPdRH04" alt="" />
					</div>

					<div className="text-white absolute top-1/4 -translate-y-1/3 left-1/4 transform -translate-x-1/3 p-8 flex flex-col justify-center md:w-[850px] min-w-[500px] text-start">
						<h1 className=" font-bold text-4xl pb-3">AI数字员工</h1>
						<p className=" text-xl">小冰基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线，从数据采集、训练到上线，最快仅需10小时。支持创建拥有情感交互能力、专业技能和内容生产能力的数字人，目前已被应用于多个工作和生活场景中。</p>
					</div>				
				</div>
			</div>


		
		<ParallelogramAnimation />
		</section>

	); */}