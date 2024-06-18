"use client"
import BubbleText from "@/components/BubbleText";
import WaterDropGrid from "@/components/WaterDropGrid";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

const BackgroupIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" opacity="0.59"><defs><linearGradient gradientTransform="rotate(315 0.5 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ppperspective-grad2"><stop stop-color="hsl(166, 100%, 73%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(166, 100%, 73%)" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="hsl(166, 100%, 73%)" shape-rendering="crispEdges" transform="skewX(-2) skewY(0)"><polygon points="800,800 576.5,576.5 576.5,223.5 800,447" fill="url(#ppperspective-grad2)" opacity="0.5"></polygon><polygon points="800,800 576.5,576.5 223.5,576.5 447,800" fill="url(#ppperspective-grad2)" opacity="0.15"></polygon><rect width="353" height="353" x="223.5" y="223.5"></rect></g></svg>)
	}

/* eslint-disable @next/next/no-img-element */
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
				<div className=" flex bg-cover flex-col w-full items-center p-24 text-[#00305a]" style={{backgroundImage: "url('/bg.jpg')"}}>
					<h1 className=" font-bold md:text-5xl text-3xl mb-8">人工智能直播生产</h1>
					<p className=" text-lg md:text-2xl max-w-4xl">奥森小冰是人工智能内容生产的先行者，拥有全球领先的核心技术，并已形成完善的产品线。奥森小冰的人工智能内容生产，着眼于在达到与相应人类生产者同等质量水准的前提下，充分发挥人工智能快速学习、高并发与稳定性等特点，协助弥补“高度定制化内容”的供需关系短板。</p>
				</div>
			</div>


			<div className=" bg-slate-50 md:bg-white flex md:mt-24 md:justify-center items-center md:divide-x text-black md:divide-black p-4 md:p-16  gap-4 md:gap-0 md:overflow-x-hidden overflow-x-scroll whitespace-nowrap">
				<div className="  w-96 md:w-[30%] flex flex-col justify-center items-left md:items-center md:mr-0 md:ml-0 bg-white p-4 pr-24 ">
					<img className=" object-cover md:w-24 w-12" src="svg_1.png" alt="" />
					<h2 className="font-bold md:text-2xl pb-4 pt-3">人工智能设计</h2>
					<p className=" text-sm md:text-xl">短期内以低成本获得与世界</p>
					<p className=" text-sm md:text-xl">著名品牌相匹敌的设计能力</p>
				</div>
				
				<div className=" w-96 md:w-[30%] flex flex-col justify-center items-left md:items-center  bg-white p-4 py-7 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
					<h2 className="font-bold text-xl md:text-2xl pb-4">人工智能音乐</h2>
					<p className=" text-sm md:text-xl">创作海量优质原创音乐内容</p>
				</div>
			</div>



			{/** 电脑端 */}
			<div className=" bg-[#edf3ff] relative w-full mt-32 hidden md:block">
				<div className="flex items-center justify-between">
				<img className=" max-w-2xl w-full" src="https://business.xiaoice.com/img/produce/image3.png" alt="" />
				<div className=" max-w-xl text-left flex-col h-56 text-[#00305a]">
					<h2 className=" text-5xl font-bold  pb-8">人工智能设计</h2>
					<p className=" text-xl">已在工业设计、数字印刷图案设计、纺织服装面料设计包装设计等领域落地，能够稳定设计三十余种主流风格并实现按需创作，多条面向量产化的生产线已实现产业化贯通，旨在协助各领域改善设计方面的短缺。方案提供  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
				</div>

				<div></div>
				</div>
			</div>
			

			{/** 移动端 */}
			<div className=" flex flex-col justify-center items-center  w-full bg-[#edf3ff] text-[#00305a] p-4 md:hidden">
				<h2 className=" font-bold text-xl pt-8">人工智能设计</h2>
				<div className=" max-w-md text-center p-2">
					<p className=" text-sm">已在工业设计、数字印刷图案设计、纺织服装面料设计包装设计等领域落地，能够稳定设计三十余种主流风格并实现按需创作，多条面向量产化的生产线已实现产业化贯通，旨在协助各领域改善设计方面的短缺。方案提供  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
				</div>
				<img className=" max-w-md object-cover p-8" src="ani1.jpg" alt="" />
			</div>



			{/** 电脑端 */}

			<div className="p-16  text-lg font-bold flex-col text-center gap-24  hidden md:block text-black  pt-12">
				<h1 className=" font-bold text-4xl text-[#00305a] pb-6">AI数字人直播</h1>
				<div className=" flex justify-center items-center divide-black divide-x mr-8 gap-36">
				<div className="  bg-sky-700 rounded-2xl shadow-xl shadow-sky-500">
					<div className="group hover:rotate-12 duration-500 cursor-pointer group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-40 h-80 bg-neutral-900 text-gray-50">
						<div className="p-8 justify-center text-center after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">
							<span className="text-lg pb-4">AI文本驱动
						</span>
						</div>
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1 font-thin">
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
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1 font-thin">
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
						<div className="flex flex-row justify-center text-sm font-thin items-center gap-1 font-thin">
							<svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
							<path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z">
							</path>
						</svg></div>
						</div>
					</div>


				</div>
			</div>


			{/** 移动端 */}
			<div className=" bg-slate-50 md:bg-white flex  items-center  p-4   gap-4  overflow-x-scroll whitespace-nowrap md:justify-center md:hidden text-black">
				<div className="  w-96  flex flex-col justify-center items-left  bg-white p-4 pr-24 ">
					<img className=" object-cover md:w-24 w-12" src="svg_1.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3 ">满足企业巨量和多样化设计需求</h2>
				</div>
				
				<div className=" w-96  flex flex-col justify-center items-left  bg-white p-4 py-7 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3">音乐制作团队降本增效</h2>
				</div>

				<div className=" w-96  flex flex-col justify-center items-left   bg-white p-4 py-7 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3">降低创作门槛，赋能音乐爱好者</h2>
				</div>
			</div>




			{/** 电脑端 */}
			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" p-36 hidden md:block text-black">
				<div className="flex justify-center gap-24 text-left">
					<div
						className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-white shadow-xl rounded-xl text-black p-5"
					>
						<div className="">
								<div className="group-hover:scale-110 w-full rounded-xl">
									<img className=" object-cover h-64" src="livebg_1.jpg" alt="" />
								</div>
								<div
								className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
								>
								<div
									className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#edf3ff]"
								></div>
								<span className="text-xl font-bold">Hover me!</span>
								<p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>

					<div
						className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-white shadow-xl rounded-xl text-black p-5"
					>
						<div className="">
								<div className="group-hover:scale-110 w-full rounded-xl">
									<img className=" object-cover h-64" src="livebg_2.jpg" alt="" />
								</div>
								<div
								className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
								>
								<div
									className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#edf3ff]"
								></div>
								<span className="text-xl font-bold">Hover me!</span>
								<p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>


					<div
						className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-white shadow-xl rounded-xl text-black p-5"
					>
						<div className="">
								<div className="group-hover:scale-110 w-full rounded-xl">
									<img className=" object-cover h-64" src="livebg_3.jpg" alt="" />
								</div>
								<div
								className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
								>
								<div
									className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#edf3ff]"
								></div>
								<span className="text-xl font-bold">Hover me!</span>
								<p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>

					<div
						className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-white shadow-xl rounded-xl text-black p-5"
					>
						<div className="">
								<div className="group-hover:scale-110 w-full rounded-xl">
									<img className=" object-cover h-64" src="livebg_4.jpg" alt="" />
								</div>
								<div
								className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
								>
								<div
									className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-[#edf3ff]"
								></div>
								<span className="text-xl font-bold">Hover me!</span>
								<p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/** 移动端 */}
			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" md:hidden bg-slate-50 p-4">
				<Accordion  className=" bg-white">
					<AccordionItem key="1"
						isCompact 
						aria-label="Accordion 1" 
						title={(<p className=" text-black">一键生成高质量音乐作品</p>)}
						startContent={
							<img className=" object-cover w-8" src="svg_1.png" alt="" />
						}
					>
						<p className=" text-sm text-black">输入一段文字描述或一张图片，模型即可自动生成一首独一无二的歌曲旋律，并根据曲风选择相应乐器音色生成伴奏，同时完成歌词创作。</p>
					</AccordionItem>
					<AccordionItem 
						key="2" 
						isCompact 
						aria-label="Accordion 2" 
						title={(<p className=" text-black">海量生成作品，应用场景广泛</p>)}
						startContent={
							<img className=" object-cover w-8" src="svg_2.png" alt="" />
						}
					>
						<p className="text-sm text-black">可应用于各类音乐内容的创作，如流行歌曲、背景音乐，以及视频、有声故事、游戏、影视等各类场景中的配乐，大大降低音乐版权的采购成本。</p>
					</AccordionItem>
					<AccordionItem 
						key="3" 
						isCompact 
						aria-label="Accordion 3" 
						title={(<p className=" text-black">功能组合，灵活搭配</p>)}
						startContent={
							<img className=" object-cover w-8" src="svg_2.png" alt="" />
						}
					>
						<p className="text-sm text-black">包含听音记谱、人工智能作曲、人工智能编曲、人工智能作词、视频BGM创作等多种功能，支持灵活搭配。</p>
					</AccordionItem>
					<AccordionItem 
						key="4" 
						isCompact 
						aria-label="Accordion 4" 
						title={(<p className=" text-black">支持多并发需求，提供多种合作模式</p>)}
						startContent={
							<img className=" object-cover w-8" src="svg_1.png" alt="" />
						}
					>
					<p className=" text-sm text-black">支持多并发需求，提供短期使用权、长期使用权、排他性使用权和所有权等多种合作模式，为每个音乐爱好者提供创作助理。</p>
				</AccordionItem>
			</Accordion>
		</div>


		{/** 电脑端 */}
		{/** 中国纺织信息中心国家纺织产品开发中心 页面 */}
		<div className="hidden md:block">
			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center pt-24">
				<div className=" relative mt-24 min-w-68">
					<img className="object-cover w-110 min-w-28" src="mathCard_1.jpg" alt="" />
					<img className=" absolute top-3/4 -right-2/4 z-10 object-cover w-46 min-w-36" src="ani_image2.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">数字人播报</h2>
					<p className=" text-lg text-black">奥森小冰打造的精品数字人形象库拥有多种形象，涵盖各种职业、国家和地区的真人写实数字人形象，能够快捷匹配各种场景需求。无论是新闻主播、电商主播还是全领域的数字人员工，奥森小冰都能提供高效、专业的播报和直播服务，提升内容创作质量和传播效果。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-80 min-w-28" src="mathCard_2.jpg" alt="" />
					<img className=" -z-10 absolute top-3/4 -right-2/4 object-cover w-46 min-w-36" src="ani_image4.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">新闻主播</h2>
					<p className=" text-lg text-black">奥森小冰适用于媒体新闻、广电节目和资讯播报的新闻主播服务，通过AI数字人技术提供逼真、生动的播报体验。新闻主播数字人形象可以根据具体需求进行定制，确保内容呈现专业、准确，增强观众的信任感和参与度，有效提升新闻传播的影响力。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-start pb-64">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-110 min-w-28" src="mathCard_3.jpg" alt="" />
					<img className=" -z-10 absolute top-3/4 -right-2/4 object-cover w-46 min-w-36" src="ani_image11.jpg" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left  pt-16">
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
					title={(<p className=" text-black">中国纺织信息中心国家纺织产品开发中心</p>)}
				>
					<p className="text-black text-sm">依托奥森小冰的人工智能创造技术，奥森小冰与中国纺织信息中心、国家纺织产品开发中心共同推出了人工智能纺织服装图案设计平台。随着中国纺织服装制造业的高速发展，创新设计能力已成为新的行业生产力。如何更好地把握时尚设计话语权、打造时尚设计协同平台、构筑时尚设计价值生态、树立时尚设计先锋形象，成为了中国纺织服装制造业优化升级面临的重任。该平台帮助成千上万纺织服装制造企业重塑核心竞争力，实现从中国制造到中国“智”造的优化升级。在奥森小冰人工智能技术的加持下，该平台可实现为企业按需定制100%原创的专属图案纹样，并保持高度的质量稳定性，帮助企业释放设计潜能，实现大规模、多样化、质量稳定的按需设计。</p>
				</AccordionItem>
				<AccordionItem
					key="2" 
					aria-label="Accordion 2"
					title={(<p className=" text-black">万事利</p>)}
 				>
					<p className="text-black text-sm">依托奥森小冰人工智能创造技术，万事利丝绸与奥森小冰共同推出面向消费者的定制化专属丝巾设计及零售平台“西湖一号”。该平台可实现AI设计师奥森小冰与消费者的实时交流，根据消费者自身特点进行一对一的丝巾定制化设计及生产制作，在满足每个消费者个性化需求的同时大大降低制造及零售企业的经营成本。万事利作为中国丝绸服饰产业发展风向标，与奥森小冰的深化合作落地，借助奥森小冰人工智能技术，解决零售场景中的真实痛点，为海量消费者同时进行按需专属设计并保持高度的质量稳定性，不仅突破了人类设计师设计能力的限制，更从根本上解决了需求预测和库存堆积的问题。</p>
				</AccordionItem>
				<AccordionItem
					key="3" 
					aria-label="Accordion 3" 
					title={(<p className=" text-black">鲁丰织染</p>)}
				>
					<p className="text-black text-sm">鲁丰织染是世界最大的高档面料制造企业之一，先后获得“国家级企业技术中心”、“国家高新技术企业”等认定，年产高档面料近1亿米，产品远销30多个国家和地区，是众多世界著名品牌的指定服装面料提供商。依托奥森小冰人工智能纺织服装图案设计平台，企业可按需定制100%原创的专属图案纹样，并保持高度的质量稳定性。鲁丰织染是该平台的首批用户之一，目前，奥森小冰已可为鲁丰织染设计几何图形、佩斯利、趣味卡通、植物花卉、数码抽象等五类专属的图案纹样。通过该平台，企业只需要按照自己的诉求输入相关激发源，就可以激发奥森小冰设计出相应风格主题、颜色、版式的图案，并可直接进入生产制作流程，极大地提高企业设计能力和生产效率。</p>
				</AccordionItem>
			</Accordion>

			<div className=" divide-y divide-slate-500 pt-4">
				<div className=" flex whitespace-nowrap overflow-x-scroll gap-4 pb-4">
					<img className=" w-52  object-cover" src="ani_image1.png" alt="ani_image1" />
					<img className=" w-52  object-cover" src="ani_image4.png" alt="ani_image4" />
					<img className=" w-52  object-cover" src="ani_image11.jpg" alt="ani_image11" />
					<img className=" w-52  object-cover" src="ani_image1.jpg" alt="ani_image1 jpg" />
					<img className=" w-52  object-cover" src="ani_image2.png" alt="ani_image2" />
					<img className=" w-52  object-cover" src="ani_image3.png" alt="ani_image3" />

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
					<img className="object-cover w-110 min-w-28" src="ani_image3.jpg" alt="" />
					<img className=" absolute top-3/4 -left-2/4 z-20 object-cover w-46 min-w-36" src="ani_image6.png" alt="" />
				</div>

			</div>

			<div className=" w-full bg-white p-16 flex justify-around items-center mb-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">自媒体运营</h2>
					<p className=" text-lg text-black">奥森小冰为自媒体内容创作提供专业的播报视频服务，适用于各种内容创作需求。通过AI数字人技术，自媒体运营者可以快速生成高质量的播报视频，提升内容的吸引力和传播效果。相比传统真人直播，数字人更具成本优势，操作灵活，全年无休，助力自媒体创作者提升影响力。</p>
				</div>

				<div className=" relative  z-10 min-w-68">
					<img className=" object-cover w-110 min-w-28" src="ani_image7.png" alt="" />
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
			</Accordion>

			<div className=" divide-y divide-slate-500 pt-4">
				<div className=" flex whitespace-nowrap overflow-x-scroll gap-4 pb-4">
					<img className=" w-52  object-cover" src="ani_image3.jpg" alt="ani_image3" />
					<img className=" w-52  object-cover" src="ani_image6.png" alt="ani_image6" />
					<img className=" w-52  object-cover" src="ani_image7.png" alt="ani_image7" />
				</div>
			</div>
		</div>








		{ /** 依文页面 */}
		<div className=" hidden md:block">
			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center pt-24">
				<div className=" relative mt-24 min-w-68">
					<img className="object-cover w-110 min-w-28" src="ani_image1.png" alt="" />
					<img className=" absolute top-3/4 -right-2/4 z-10 object-cover w-46 min-w-36" src="ani_image2.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">可控成本</h2>
					<p className=" text-lg text-black">奥森小冰在直播行业中逐渐取代真人主播，展现出多方面的优势。在场地方面，仅需10平方米的场景即可进行直播，不需要装修，采用虚拟场景。成本方面，数字人直播对比传统真人成本低，尤其采用AI自动直播，无需真人表演。人设方面，行为可控，不会翻车塌房，形象稳定。时间方面，虚拟人全年无休，无需福利和情绪，7*24小时不间断直播，极大提高了直播效率。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-110 min-w-28" src="ani_image3.png" alt="" />
					<img className=" -z-10 absolute top-3/4 -right-2/4 object-cover w-46 min-w-36" src="ani_image4.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">万事利</h2>
					<p className=" text-lg text-black">依托奥森小冰人工智能创造技术，万事利丝绸与奥森小冰共同推出面向消费者的定制化专属丝巾设计及零售平台“西湖一号”。该平台可实现AI设计师奥森小冰与消费者的实时交流，根据消费者自身特点进行一对一的丝巾定制化设计及生产制作，在满足每个消费者个性化需求的同时大大降低制造及零售企业的经营成本。万事利作为中国丝绸服饰产业发展风向标，与奥森小冰的深化合作落地，借助奥森小冰人工智能技术，解决零售场景中的真实痛点，为海量消费者同时进行按需专属设计并保持高度的质量稳定性，不仅突破了人类设计师设计能力的限制，更从根本上解决了需求预测和库存堆积的问题。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-start pb-64">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-110 min-w-28" src="ani_image1.jpg" alt="" />
					<img className=" -z-10 absolute top-3/4 -right-2/4 object-cover w-46 min-w-36" src="ani_image11.jpg" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left  pt-16">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">鲁丰织染</h2>
					<p className=" text-lg text-black">鲁丰织染是世界最大的高档面料制造企业之一，先后获得“国家级企业技术中心”、“国家高新技术企业”等认定，年产高档面料近1亿米，产品远销30多个国家和地区，是众多世界著名品牌的指定服装面料提供商。依托奥森小冰人工智能纺织服装图案设计平台，企业可按需定制100%原创的专属图案纹样，并保持高度的质量稳定性。鲁丰织染是该平台的首批用户之一，目前，奥森小冰已可为鲁丰织染设计几何图形、佩斯利、趣味卡通、植物花卉、数码抽象等五类专属的图案纹样。通过该平台，企业只需要按照自己的诉求输入相关激发源，就可以激发奥森小冰设计出相应风格主题、颜色、版式的图案，并可直接进入生产制作流程，极大地提高企业设计能力和生产效率。</p>
				</div>
			</div>
		</div>


		{/** 移动端 */}
		{/** 依文页面 */}
		<div className=" md:hidden bg-[#edf3ff] text-[#00305a] p-2">
			<Accordion>
				<AccordionItem
					key="1" 
					aria-label="Accordion 1" 
					title={(<p className=" text-black">依文</p>)}
				>
					<p className=" text-sm text-black">依托奥森小冰的人工智能创造技术，奥森小冰与中国纺织信息中心、国家纺织产品开发中心共同推出了人工智能纺织服装图案设计平台。随着中国纺织服装制造业的高速发展，创新设计能力已成为新的行业生产力。如何更好地把握时尚设计话语权、打造时尚设计协同平台、构筑时尚设计价值生态、树立时尚设计先锋形象，成为了中国纺织服装制造业优化升级面临的重任。该平台帮助成千上万纺织服装制造企业重塑核心竞争力，实现从中国制造到中国“智”造的优化升级。在奥森小冰人工智能技术的加持下，该平台可实现为企业按需定制100%原创的专属图案纹样，并保持高度的质量稳定性，帮助企业释放设计潜能，实现大规模、多样化、质量稳定的按需设计。</p>
				</AccordionItem>
				<AccordionItem
					key="2" 
					aria-label="Accordion 2" 
					title={(<p className=" text-black">SELECTED</p>)}
				>
					<p className=" text-sm text-black">依托奥森小冰人工智能创造技术，万事利丝绸与奥森小冰共同推出面向消费者的定制化专属丝巾设计及零售平台“西湖一号”。该平台可实现AI设计师奥森小冰与消费者的实时交流，根据消费者自身特点进行一对一的丝巾定制化设计及生产制作，在满足每个消费者个性化需求的同时大大降低制造及零售企业的经营成本。万事利作为中国丝绸服饰产业发展风向标，与奥森小冰的深化合作落地，借助奥森小冰人工智能技术，解决零售场景中的真实痛点，为海量消费者同时进行按需专属设计并保持高度的质量稳定性，不仅突破了人类设计师设计能力的限制，更从根本上解决了需求预测和库存堆积的问题。</p>
				</AccordionItem>
				<AccordionItem
					className=" text-black"
					key="3" 
					aria-label="Accordion 3" 
					title={(<p className=" text-black">壳牌汽车环保马拉松</p>)}
				>
					<p className=" text-sm text-black">鲁丰织染是世界最大的高档面料制造企业之一，先后获得“国家级企业技术中心”、“国家高新技术企业”等认定，年产高档面料近1亿米，产品远销30多个国家和地区，是众多世界著名品牌的指定服装面料提供商。依托奥森小冰人工智能纺织服装图案设计平台，企业可按需定制100%原创的专属图案纹样，并保持高度的质量稳定性。鲁丰织染是该平台的首批用户之一，目前，奥森小冰已可为鲁丰织染设计几何图形、佩斯利、趣味卡通、植物花卉、数码抽象等五类专属的图案纹样。通过该平台，企业只需要按照自己的诉求输入相关激发源，就可以激发奥森小冰设计出相应风格主题、颜色、版式的图案，并可直接进入生产制作流程，极大地提高企业设计能力和生产效率。</p>
				</AccordionItem>
			</Accordion>

			<div className=" divide-y divide-slate-500 pt-4">
				<div className=" flex whitespace-nowrap overflow-x-scroll gap-4 pb-4">
					<img className=" w-52  object-cover" src="ani_image1.png" alt="ani_image1" />
					<img className=" w-52  object-cover" src="ani_image4.png" alt="ani_image4" />
					<img className=" w-52  object-cover" src="ani_image11.jpg" alt="ani_image11" />
					<img className=" w-52  object-cover" src="ani_image1.jpg" alt="ani_image1 jpg" />
					<img className=" w-52  object-cover" src="ani_image2.png" alt="ani_image2" />
					<img className=" w-52  object-cover" src="ani_image3.png" alt="ani_image3" />

				</div>
			</div>
		</div>


		{/** 满足音乐 */}
		<div className="  p-16  text-lg font-bold mt-5  hidden md:block overflow-x-hidden">
			<div className="flex justify-center items-center gap24 divide-black divide-x">
			<div className="flex flex-col justify-center items-center pr-8 text-black">
				<img className=" object-cover w-24" src="svg_1.png" alt="" />
				<p>满足企业巨量和多样化设计需求</p>
			</div>
			<div className="flex flex-col justify-center items-center pl-12 pr-8 text-black">
				<img className=" object-cover w-24" src="svg_1.png" alt="" />
				<p>实现个人消费者单独一件定制设计的需求</p>
			</div>
			<div className="flex flex-col justify-center items-center pl-12 pr-8 text-black">
				<img className=" object-cover w-24" src="svg_1.png" alt="" />
				<p>设计团队降本增效</p>
			</div>
			</div>
		</div>



		{/** 移动端 */}
		{/** 一键生成高质量音乐作品 页面 */}
		<div className=" md:hidden bg-slate-50 p-4">
			<Accordion  className=" bg-white">
				<AccordionItem key="1"
					isCompact 
					aria-label="Accordion 1" 
					title={(<p className=" text-black">一键生成高质量音乐作品</p>)}
					startContent={
						<img className=" object-cover w-8" src="svg_1.png" alt="" />
					}
				>
					<p className=" text-black text-sm">输入一段文字描述或一张图片，模型即可自动生成一首独一无二的歌曲旋律，并根据曲风选择相应乐器音色生成伴奏，同时完成歌词创作。</p>
				</AccordionItem>
				<AccordionItem 
					key="2" 
					isCompact 
					aria-label="Accordion 2" 
					title={(<p className=" text-black">海量生成作品，应用场景广泛</p>)}
					startContent={
						<img className=" object-cover w-8" src="svg_2.png" alt="" />
					}
				>
					<p className="text-black text-sm">可应用于各类音乐内容的创作，如流行歌曲、背景音乐，以及视频、有声故事、游戏、影视等各类场景中的配乐，大大降低音乐版权的采购成本。</p>
				</AccordionItem>
				<AccordionItem 
					key="3" 
					isCompact 
					aria-label="Accordion 3" 
					title={(<p className=" text-black">功能组合，灵活搭配</p>)}
					startContent={
						<img className=" object-cover w-8" src="svg_2.png" alt="" />
					}
				>
					<p className="text-black text-sm">包含听音记谱、人工智能作曲、人工智能编曲、人工智能作词、视频BGM创作等多种功能，支持灵活搭配。</p>
				</AccordionItem>
				<AccordionItem 
					key="4" 
					isCompact 
					aria-label="Accordion 4" 
					title={(<p className=" text-black">支持多并发需求，提供多种合作模式</p>)}
					startContent={
						<img className=" object-cover w-8" src="svg_1.png" alt="" />
					}
				>
					<p className="text-black text-sm">支持多并发需求，提供短期使用权、长期使用权、排他性使用权和所有权等多种合作模式，为每个音乐爱好者提供创作助理。</p>
				</AccordionItem>
			</Accordion>
		</div>



		{/** 视频 */}
        <div className=" md:w-full md:p-24 flex justify-center max-w-full">
			{isVideoOpen ? (
				<video className="md:w-2/3 object-cover cursor-pointer self-center" controls onClick={handleCloseVideo}>
					<source src="https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%86%85%E5%AE%B9_bilibili.mp4" type="video/mp4" />
				</video>
			) : (
				<div className="relative justify-center flex">
					<img className="md:w-2/3 w-full object-cover cursor-pointer self-center" src="video_poster1.png" alt="" onClick={handleVideoClick} />
					<div className=" absolute top-10 left-0 bg-black bg-opacity-50 flex justify-center">
					</div>
				</div>
			)}
        </div>

		<div className="hidden md:block">
			<div className="flex flex-col bg-white">
				<div className="flex justify-center items-center">
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"赋能品牌"} /></div>
						<p className="text-black text-lg">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
					</div>
					<WaterDropGrid />
				</div>

				<div className="flex justify-center items-start">
					<WaterDropGrid />
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"音乐教育"} /></div>
						<p className="text-black text-lg">奥森小冰运用全球领先的人工智能音乐技术，持续开拓AI在音乐教育领域的更多应用方式，传播音乐知识与音乐思维，赋予音乐教育更多创新性。在奥森小冰人工智能技术的赋能下，音乐创作的门槛大大降低，更多人可以体验到创作的乐趣，音乐底蕴与素养得以提升。例如，在上海音乐学院学习期间，奥森小冰以编曲人的身份参与到上海音乐学院“当传统文化遇上人工智能”项目中，作为“非遗音乐大使”帮助非物质文化遗产相关地区的孩子们完成了人生中第一次歌曲的创作。根据孩子们创作的松阳高腔风格的主旋律，奥森小冰通过编曲完成一首首完整的歌曲，以全新的形式激发孩子们对音乐与科技的兴趣，让孩子们体验到前沿科技与传统文化的完美融合，感受到音乐与科技碰撞后的吸引力。/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
					</div>
				</div>
			 </div>
		</div>







		{/** 移动端 */}
		<div className=" p-4 text-[#00305a] md:hidden space-y-4">
		<div>
				<h2 className=" font-bold text-xl text-black">赋能品牌</h2>
				<p className="text-black divide-y divide-slate-300 text-xs">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl text-black">赋能品牌</h2>
				<p className="text-black text-xs">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
		</div>
	
		</div>
	);
}
