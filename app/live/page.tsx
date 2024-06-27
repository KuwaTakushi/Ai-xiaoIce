"use client";
import BubbleText from "@/components/BubbleText";
import { Carousel } from "@material-tailwind/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";
import Image from 'next/image';

export default function Live() {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleVideoClick = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };


	const handleScroll = () => {
		const element = document.getElementById('details-section');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
    		<div className="bg-cover w-full h-110 flex justify-center text-center" >
				<div className=" flex bg-cover flex-col w-full items-center p-24 text-[#00305a]" style={{backgroundImage: "url('live_bg.webp')"}}>
					<h1 className=" font-bold md:text-5xl text-3xl mb-8">奥森小冰引领AI数字人直播</h1>
					<p className=" text-lg md:text-2xl max-w-4xl">AI数字人直播是指通过人工智能技术打造的虚拟人物，通过直播平台与观众实时互动。这些AI数字人除了具备逼真的外貌和声音，更重要的是具备了人类智能和情感。他们可以自动理解观众的问题，并给出相应的回答和建议，让互动更加自然流畅。</p>
				</div>
			</div>


			<div className=" bg-slate-50 md:bg-white flex md:mt-24 md:justify-center items-center md:divide-x text-black md:divide-black p-4 md:p-16  gap-4 md:gap-0 md:overflow-x-hidden overflow-x-scroll whitespace-nowrap">
				<div className="  w-96 md:w-[30%] flex flex-col justify-center items-left md:items-center md:mr-0 md:ml-0 bg-white p-4 pr-24 ">
					<Image className=" object-cover md:w-60 w-24" src="/icon_desc_1.webp" alt="" width={250} height={250} />
					<h2 className="font-bold md:text-2xl pb-4 pt-3">实时响应互动</h2>
					<p className=" text-sm md:text-xl">实时驱动数字人响应</p>
					<p className=" text-sm md:text-xl">像真人一样完成直播互动对话</p>
				</div>
				
				<div className=" w-96 md:w-[30%] flex flex-col justify-center items-left md:items-center  bg-white p-4 py-7 pr-24">
					<Image className=" object-cover md:w-60 w-24" src="/icon_desc_2.webp" alt="" width={250} height={250} />
					<h2 className="font-bold text-xl md:text-2xl pb-4">形象丰富</h2>
					<p className=" text-sm md:text-xl">支持不同的数字人直播场景和形象</p>
				</div>
			</div>



			{/** 电脑端 */}
			<div className=" bg-[#edf3ff] relative w-full mt-32 hidden md:block">
				<div className="flex items-center justify-between">
				<Image className=" max-w-2xl w-full" src="/image3.png" alt="" width={350} height={350} />
				<div className=" max-w-xl text-left flex-col h-56 text-[#00305a]">
					<h2 className=" text-5xl font-bold  pb-8">先进的AI人工智能技术</h2>
					<p className=" text-xl">AI数字人直播基于先进的人工智能技术，通过对话模型和图像识别技术，将一段预先录制的视频进行实时生成和呈现。这些数字人以逼真的形象、流利的语言、灵活的互动形式，与用户进行互动交流。用户可以通过文字、语音或者视频方式与数字人进行沟通，从而获得自定义的、智能的服务。  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
				</div>

				<div></div>
				</div>
			</div>
			

			{/** 移动端 */}
			<div className=" flex flex-col justify-center items-center  w-full bg-[#edf3ff] text-[#00305a] p-4 md:hidden">
				<h2 className=" font-bold text-xl pt-8">先进的AI人工智能技术</h2>
				<div className=" max-w-md text-center p-2">
					<p className=" text-sm"> AI数字人直播基于先进的人工智能技术，通过对话模型和图像识别技术，将一段预先录制的视频进行实时生成和呈现。这些数字人以逼真的形象、流利的语言、灵活的互动形式，与用户进行互动交流。用户可以通过文字、语音或者视频方式与数字人进行沟通，从而获得自定义的、智能的服务。</p>
				</div>
				<Image className=" max-w-md object-cover p-8" src="/ani1.webp" alt=""  width={420} height={250}/>
			</div>



			{/** 电脑端 */}

			<div className="p-16  text-lg font-bold flex-col text-center gap-24  hidden md:block text-black  pt-12">
				<h1 className=" font-bold text-4xl text-[#00305a] pb-6">AI数字人直播</h1>

				<div className=" flex justify-center items-center divide-black divide-x mr-8 gap-36">
				<div className="  bg-sky-700 rounded-2xl shadow-xl shadow-sky-500">
					<div className=" group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">AI文本驱动</span>
						</div>
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


					<div className="bg-sky-700 rounded-2xl shadow-xl shadow-sky-500">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">数字人实时在线互动
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


					<div className="bg-sky-700 rounded-2xl shadow-xl shadow-sky-500">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">极高的直播效率
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm items-center gap-1 font-thin">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


				</div>
			</div>



			{/** 移动端 */}
			<div className="md:hidden p-4 bg-[#edf3ff] text-center overflow-y-hidden">
				<h1 className=" font-bold text-4xl text-[#00305a] pb-6">AI数字人直播</h1>

				<Carousel transition={{ duration: 1 }} className=" overflow-y-hidden">
				<div className="flex justify-center bg-[#edf3ff]">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">AI文本驱动
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


					<div className="flex justify-center bg-[#edf3ff]">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">数字人实时在线互动
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm items-center gap-1 font-thin">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


					<div className="flex justify-center bg-[#edf3ff]">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">极高的直播效率
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm items-center gap-1 font-thin">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>
				</Carousel>
			</div>


			{/** 移动端 */}
			<div className=" bg-slate-50 md:bg-white flex  items-center  p-4   gap-4  overflow-x-scroll whitespace-nowrap md:justify-center md:hidden text-black">
				<div className="  w-96  flex flex-col justify-center items-left  bg-white p-4 pr-24 ">
					<Image className=" object-cover md:w-24 w-16" src="/live_icon_2.webp" alt="" width={150} height={150} />
					<h2 className="font-bold  pb-4 pt-3 ">实现7*24小时不间断直播</h2>
				</div>
				
				<div className=" w-96  flex flex-col justify-center items-left  bg-white p-4 py-7 pr-24">
					<Image className=" object-cover md:w-24 w-16" src="/live_icon_1.webp" alt="" width={150} height={150}/>
					<h2 className="font-bold  pb-4 pt-3">定制虚拟主播形象</h2>
				</div>

				<div className=" w-96  flex flex-col justify-center items-left   bg-white p-4 py-7 pr-24">
					<Image className=" object-cover md:w-24 w-16" src="/live_icon_3.webp" alt="" width={150} height={150}/>
					<h2 className="font-bold  pb-4 pt-3">实时分析参与观众互动</h2>
				</div>
			</div>




			{/** 电脑端 */}
			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" p-36 hidden md:block text-black">
				<div className="flex justify-center gap-24 text-left">

				</div>
			</div>

		{/** 电脑端 */}
		{/** 中国纺织信息中心国家纺织产品开发中心 页面 */}
		<div className="hidden md:block">
			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center pt-24">
				<div className=" relative mt-24 min-w-68">
					<Image className="object-cover max-w-xl min-w-28" src="/mathCard_1.webp" alt="" width={450} height={150} />
					<Image className=" absolute top-3/4 -right-2/4 z-10 object-cover max-w-xl min-w-36" src="/ani_image1.webp" alt="" width={450} height={150} />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">数字人播报</h2>
					<p className=" text-lg text-black">奥森小冰打造的精品数字人形象库拥有多种形象，涵盖各种职业、国家和地区的真人写实数字人形象，能够快捷匹配各种场景需求。无论是新闻主播、电商主播还是全领域的数字人员工，奥森小冰都能提供高效、专业的播报和直播服务，提升内容创作质量和传播效果。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center">
				<div className=" relative  z-20 min-w-68">
					<Image className=" z-40 object-cover max-w-xl" src="/mathCard_2.webp" alt="" width={450} height={150}  />
					<Image className=" -z-10 absolute top-3/4 -right-2/4 object-cover max-w-xl min-w-36" src="/ani_image4.webp" alt="" width={450} height={150}  />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">新闻主播</h2>
					<p className=" text-lg text-black">奥森小冰适用于媒体新闻、广电节目和资讯播报的新闻主播服务，通过AI数字人技术提供逼真、生动的播报体验。新闻主播数字人形象可以根据具体需求进行定制，确保内容呈现专业、准确，增强观众的信任感和参与度，有效提升新闻传播的影响力。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-start pb-64">
				<div className=" relative  z-20 min-w-68">
					<Image className=" z-40 object-cover w-110 min-w-28" src="/mathCard_3.webp" alt="" width={150} height={150}  />
					<Image className=" -z-10 absolute top-3/4 -right-2/4 object-cover max-w-xl min-w-36" src="/ani_image11_1.webp" alt="" width={450} height={150} />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left  pt-16 pb-24">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">电商主播</h2>
					<p className=" text-lg text-black">奥森小冰为电商平台提供专业的电商主播服务，适用于产品讲解、优惠发放和带货直播。通过AI技术，电商主播可以精准传达产品信息，吸引更多用户关注和购买。相比真人主播，数字电商主播具备成本低、操作灵活和全年无休的优势，有助于企业提升销售业绩。</p>
				</div>
			</div>
		</div>


		{/** 移动端 */}
		{/** 中国纺织信息中心国家纺织产品开发中心 页面 */}
		<div className=" md:hidden bg-[#edf3ff] text-[#00305a] p-2">
			<Accordion>
				<AccordionItem
					key="1" 
					aria-label="Accordion 1"
					title={(<p className=" text-black">数字人播报</p>)}
				>
					<p className="text-black text-sm">奥森小冰打造的精品数字人形象库拥有多种形象，涵盖各种职业、国家和地区的真人写实数字人形象，能够快捷匹配各种场景需求。无论是新闻主播、电商主播还是全领域的数字人员工，奥森小冰都能提供高效、专业的播报和直播服务，提升内容创作质量和传播效果。</p>
				</AccordionItem>
				<AccordionItem
					key="2" 
					aria-label="Accordion 2"
					title={(<p className=" text-black">新闻主播</p>)}
 				>
					<p className="text-black text-sm">奥森小冰适用于媒体新闻、广电节目和资讯播报的新闻主播服务，通过AI数字人技术提供逼真、生动的播报体验。新闻主播数字人形象可以根据具体需求进行定制，确保内容呈现专业、准确，增强观众的信任感和参与度，有效提升新闻传播的影响力。</p>
				</AccordionItem>
				<AccordionItem
					key="3" 
					aria-label="Accordion 3" 
					title={(<p className=" text-black">电商主播</p>)}
				>
					<p className="text-black text-sm">奥森小冰为电商平台提供专业的电商主播服务，适用于产品讲解、优惠发放和带货直播。通过AI技术，电商主播可以精准传达产品信息，吸引更多用户关注和购买。相比真人主播，数字电商主播具备成本低、操作灵活和全年无休的优势，有助于企业提升销售业绩。</p>
				</AccordionItem>
			</Accordion>

			<div className=" divide-y divide-slate-500 pt-4">
				<div className=" flex whitespace-nowrap overflow-x-scroll gap-4 pb-4">
					<Image className=" w-52  object-cover" src="/mathCard_1.webp" alt="ani_image1"  width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image4.webp" alt="ani_image4" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image11_1.webp" alt="ani_image11" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image1.webp" alt="ani_image1 jpg" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/mathCard_3.webp" alt="ani_image2" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/mathCard_2.webp" alt="ani_image3" width={150} height={150} />

				</div>
			</div>
		</div>



		{ /** 惠普页面 */}
		<div className=" hidden md:block">
			<div className=" w-full bg-white p-16 flex justify-around items-center pt-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">数字人员工</h2>
					<p className=" text-lg text-black">奥森小冰适用于全领域播报与直播服务的数字人员工，通过AI数字人技术实现高效、专业的工作表现。无论是企业内部培训、客户支持还是市场推广，数字人员工都能提供持续稳定的服务，节约企业成本，提升运营效率，打造创新的工作环境。</p>
				</div>

				<div className=" relative mt-24 min-w-68">
					<Image className="object-cover w-110 min-w-28" src="/ani_image3.webp" alt="" width={150} height={150}  />
					<Image className=" absolute top-3/4 -left-2/4 z-20 object-cover max-w-xl min-w-36" src="/ani_image6.webp" alt="" width={450} height={150}  />
				</div>

			</div>

			<div className=" w-full bg-white p-16 flex justify-around items-center mb-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">自媒体运营</h2>
					<p className=" text-lg text-black">奥森小冰为自媒体内容创作提供专业的播报视频服务，适用于各种内容创作需求。通过AI数字人技术，自媒体运营者可以快速生成高质量的播报视频，提升内容的吸引力和传播效果。相比传统真人直播，数字人更具成本优势，操作灵活，全年无休，助力自媒体创作者提升影响力。</p>
				</div>


				<div className=" relative  z-10 min-w-68">
					<Image className=" object-cover w-110 min-w-28" src="/ani_image7.webp" alt="" width={150} height={150}  />
				</div>
			</div>


			<div className=" w-full bg-white p-16 flex justify-around items-center mb-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">可控成本</h2>
					<p className=" text-lg text-black">奥森小冰在直播行业中逐渐取代真人主播，展现出多方面的优势。在场地方面，仅需10平方米的场景即可进行直播，不需要装修，采用虚拟场景。成本方面，数字人直播对比传统真人成本低，尤其采用AI自动直播，无需真人表演。人设方面，行为可控，不会翻车塌房，形象稳定。时间方面，虚拟人全年无休，无需福利和情绪，7</p>
				</div>
				
				<div className=" relative  min-w-68">
					<Image className="object-cover w-110 min-w-28" src="/ani_image13_1.webp" alt="" width={150} height={150}  />
					<Image className=" absolute bottom-3/4 -translate-y-10 -left-2/4 z-20 object-cover max-w-xl min-w-36" src="/ani_image12_1.webp" alt="" width={450} height={150} />
				</div>
			</div>

		</div>



		{/** 移动端 */}
		{/** 惠普页面 */}
		<div className=" md:hidden bg-white text-[#00305a] p-2 mb-4">
			<Accordion>
				<AccordionItem
					key="1" 
					aria-label="Accordion 1" 
					title={(<p className=" text-black">数字人员工</p>)}
				>
					<p className=" text-sm text-black">奥森小冰适用于全领域播报与直播服务的数字人员工，通过AI数字人技术实现高效、专业的工作表现。无论是企业内部培训、客户支持还是市场推广，数字人员工都能提供持续稳定的服务，节约企业成本，提升运营效率，打造创新的工作环境。</p>
				</AccordionItem>
				<AccordionItem
					key="2" 
					aria-label="Accordion 2" 
					title={(<p className=" text-black">自媒体运营</p>)}
				>
					<p className=" text-sm text-black">奥森小冰为自媒体内容创作提供专业的播报视频服务，适用于各种内容创作需求。通过AI数字人技术，自媒体运营者可以快速生成高质量的播报视频，提升内容的吸引力和传播效果。相比传统真人直播，数字人更具成本优势，操作灵活，全年无休，助力自媒体创作者提升影响力。</p>
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Accordion 3" 
					title={(<p className=" text-black">可控成本</p>)}
				>
					<p className=" text-sm text-black">奥森小冰在直播行业中逐渐取代真人主播，展现出多方面的优势。在场地方面，仅需10平方米的场景即可进行直播，不需要装修，采用虚拟场景。成本方面，数字人直播对比传统真人成本低，尤其采用AI自动直播，无需真人表演。人设方面，行为可控，不会翻车塌房，形象稳定。时间方面，虚拟人全年无休，无需福利和情绪，7</p>
				</AccordionItem>
			</Accordion>

			<div className=" divide-y divide-slate-500 pt-4">
				<div className=" flex whitespace-nowrap overflow-x-scroll gap-4 pb-4">
					<Image className=" w-52  object-cover" src="/ani_image3 .webp" alt="ani_image3" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image6.webp" alt="ani_image6" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image7.webp" alt="ani_image7" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image13_1.webp" alt="ani_image13" width={150} height={150}  />
					<Image className=" w-52  object-cover" src="/ani_image12_1.webp" alt="ani_image12" width={150} height={150}  />
				</div>
			</div>
		</div>


		{/** 满足音乐 */}
		<div className="  p-16  text-lg font-bold mt-5  hidden md:block overflow-x-hidden">
			<div className="flex justify-center items-center gap24 divide-black divide-x">
			<div className="flex flex-col justify-center items-center pr-8 text-black">
				<Image className=" object-cover w-36" src="/live_icon_2.webp" alt="" width={150} height={150}/>
				<p>实现7*24小时不间断直播</p>
			</div>
			<div className="flex flex-col justify-center items-center pl-12 pr-8 text-black">
			<Image className=" object-cover w-36" src="/live_icon_1.webp" alt="" width={150} height={150}/>
				<p>定制虚拟主播形象</p>
			</div>
			<div className="flex flex-col justify-center items-center pl-12 pr-8 text-black">
			<Image className=" object-cover w-36" src="/live_icon_3.webp" alt="" width={150} height={150} />
				<p>实时分析参与观众互动</p>
			</div>
			</div>
		</div>

		{/** 视频 */}
        <div className=" md:w-full md:p-24 flex justify-center max-w-full">
			{isVideoOpen ? (
				<video className="max-w-7xl md:w-2/3 w-full object-cover cursor-pointer self-center" controls onClick={handleCloseVideo}>
					<source src="https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%86%85%E5%AE%B9_bilibili.mp4" type="video/mp4" />
				</video>
			) : (
				<div className="relative justify-center flex">
					<Image className=" max-w-7xl w-full object-cover cursor-pointer self-center" src="/video_poster1.webp" alt="" onClick={handleVideoClick} width={1680} height={150}/>
					<div className=" absolute top-10 left-0 bg-black bg-opacity-50 flex justify-center">
					</div>
				</div>
			)}
        </div>

		<div className="hidden md:block">
			<div className="flex flex-col bg-white">
				<div className="flex justify-center items-center">
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"奥森小冰引领AI数字人直播：科技与艺术的完美结合"} /></div>
						<p className="text-black text-lg">随着数字技术的快速发展，人工智能（AI）正在融入我们的生活。作为AI领域的先行者，奥森小冰引领的AI数字人直播项目将先进的AI技术与艺术结合，带来了全新的互动体验。在这场直播秀中，观众可以通过智能手机、电脑等设备与奥森小冰实时互动。观众提出的问题、参与的讨论和建议，都能根据需求和意见做出实时反馈和表演。这不仅让观众更好地理解思考方式和艺术表达，还能将观众的创意融入表演中，实现真正的互动和共创。奥森小冰的AI数字人直播通过丰富多样的表演形式和虚拟场景，打破了传统艺术表演的限制，为观众带来了全新的视听体验。</p>
					</div>
					<Image className=" max-w-2xl object-cover" src="ai_bg_1.webp" alt="" width={550} height={450}/>
				</div>

				<div className="flex justify-center items-start">
					<Image className=" max-w-2xl object-cover" src="ai_bg_2.webp" alt="" width={550} height={450}/>
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"奥森小冰实现AI数字人直播革命：颠覆传统直播方式"} /></div>
						<p className="text-black text-lg">作为人工智能内容生产的先行者，奥森小冰正在利用AI技术和数字人技术实现一种全新的直播方式。AI数字人直播在传媒业中具有革命性的突破，打破了传统直播对真实主播的依赖。通过虚拟主播形象，不仅节省了人力资源成本，还具备更高的灵活性和可扩展性。直播可以24小时不间断进行，满足不同用户的需求，实现更个性化的直播服务。此外，还能通过大数据分析用户的喜好和观看习惯，优化直播内容，提高用户体验。奥森小冰的AI数字人直播正在颠覆传统直播方式，带来更加丰富和多样化的体验。</p>
					</div>
				</div>
			 </div>
		</div>

		{/** 移动端 */}
		<div className=" p-4 text-[#00305a] md:hidden space-y-4">
			<div>
				<h2 className=" font-bold text-xl text-black">奥森小冰引领AI数字人直播：科技与直播的完美结合</h2>
				<p className="text-black divide-y divide-slate-300 text-xs">随着数字技术的快速发展，人工智能（AI）正在融入我们的生活。作为AI领域的先行者，奥森小冰引领的AI数字人直播项目将先进的AI技术与艺术结合，带来了全新的互动体验。在这场直播秀中，观众可以通过智能手机、电脑等设备与奥森小冰实时互动。观众提出的问题、参与的讨论和建议，都能根据需求和意见做出实时反馈和表演。这不仅让观众更好地理解思考方式和艺术表达，还能将观众的创意融入我的表演中，实现真正的互动和共创。奥森小冰的AI数字人直播通过丰富多样的表演形式和虚拟场景，打破了传统艺术表演的限制，为观众带来了全新的视听体验。</p>
			</div>
			<Image className=" max-w-sm object-cover" src="ai_bg_1.webp" alt="" width={550} height={450}/>

			<div>
				<h2 className=" font-bold text-xl text-black">奥森小冰实现AI数字人直播革命：颠覆传统直播方式</h2>
				<p className="text-black text-xs">作为人工智能内容生产的先行者，奥森小冰正在利用AI技术和数字人技术实现一种全新的直播方式。AI数字人直播在传媒业中具有革命性的突破，打破了传统直播对真实主播的依赖。通过虚拟主播形象，不仅节省了人力资源成本，还具备更高的灵活性和可扩展性。直播可以24小时不间断进行，满足不同用户的需求，实现更个性化的直播服务。通过大数据分析用户的喜好和观看习惯，优化直播内容，提高用户体验。奥森小冰的AI数字人直播正在颠覆传统直播方式，带来更加丰富和多样化的体验。</p>
			</div>
			<Image className=" max-w-sm object-cover" src="ai_bg_2.webp" alt="" width={550} height={450}/>

		</div>
	
		</div>
	);
}
