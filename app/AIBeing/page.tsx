/* eslint-disable @next/next/no-img-element */
"use client"
import { Chip, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { TiltCard } from "@/components/TiltCard";
import { url } from "inspector";

const BgIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 800 800"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
		<feGaussianBlur stdDeviation="69" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="148" ry="150" cx="499.62504016926164" cy="276.1115394126763" fill="hsl(37, 99%, 67%)"></ellipse><ellipse rx="148" ry="150" cx="552.2607175477885" cy="477.5444049320603" fill="hsla(179, 40%, 76%, 1.00)"></ellipse><ellipse rx="148" ry="150" cx="215.6923585103786" cy="493.0405874099364" fill="hsl(185, 100%, 57%)"></ellipse></g></svg>
	);
}

const BgIconB = () => {
	return (
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2600 2600"><g transform="matrix(1,0,0,1,0,0)"><circle r="53.5" cx="684" cy="684" stroke-width="4" stroke="#006fee" fill="none" opacity="0.1" transform="rotate(100, 400, 400)"></circle><circle r="61.541666666666664" cx="660.3333333333334" cy="660.3333333333334" stroke-width="5" stroke="#1f73ef" fill="none" opacity="0.175" transform="rotate(91.66666666666667, 400, 400)"></circle><circle r="69.58333333333333" cx="636.6666666666666" cy="636.6666666666666" stroke-width="6" stroke="#2c77f1" fill="none" opacity="0.25" transform="rotate(83.33333333333333, 400, 400)"></circle><circle r="77.625" cx="613" cy="613" stroke-width="7" stroke="#367af2" fill="none" opacity="0.32499999999999996" transform="rotate(75, 400, 400)"></circle><circle r="85.66666666666666" cx="589.3333333333334" cy="589.3333333333334" stroke-width="8" stroke="#3e7ef4" fill="none" opacity="0.4" transform="rotate(66.66666666666666, 400, 400)"></circle><circle r="93.70833333333333" cx="565.6666666666666" cy="565.6666666666666" stroke-width="9" stroke="#4581f5" fill="none" opacity="0.475" transform="rotate(58.33333333333333, 400, 400)"></circle><circle r="101.75" cx="542" cy="542" stroke-width="10" stroke="#4c85f7" fill="none" opacity="0.5499999999999999" transform="rotate(50, 400, 400)"></circle><circle r="109.79166666666666" cx="518.3333333333333" cy="518.3333333333333" stroke-width="11" stroke="#5288f8" fill="none" opacity="0.625" transform="rotate(41.666666666666664, 400, 400)"></circle><circle r="117.83333333333333" cx="494.66666666666663" cy="494.66666666666663" stroke-width="12" stroke="#578bf9" fill="none" opacity="0.7" transform="rotate(33.33333333333333, 400, 400)"></circle><circle r="125.875" cx="471" cy="471" stroke-width="13" stroke="#5d8efb" fill="none" opacity="0.7749999999999999" transform="rotate(25, 400, 400)"></circle><circle r="133.91666666666666" cx="447.3333333333333" cy="447.3333333333333" stroke-width="14" stroke="#6291fc" fill="none" opacity="0.85" transform="rotate(16.666666666666657, 400, 400)"></circle><circle r="141.95833333333331" cx="423.66666666666663" cy="423.66666666666663" stroke-width="15" stroke="#6694fe" fill="none" opacity="0.9249999999999999" transform="rotate(8.333333333333329, 400, 400)"></circle><circle r="150" cx="400" cy="400" stroke-width="16" stroke="#6b97ff" fill="none" opacity="0.9999999999999999" transform="rotate(0, 400, 400)"></circle></g></svg>
	);
}

export default function AIBeing() {
	const [isHovered, setIsHovered] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (index: number) => {
		setActiveIndex(index);
	};


	const data = [
	  { title: '直播', description: '支持直播推流，轻松满足电商带货、赛事解说、新闻资讯、娱乐播报等场景。' },
	  { title: '企业', description: '定制完美形象，融合企业基因，打造品牌代言人、形象代言人、数字员工、数字专家等，可用于企业内外宣物料制作、营销Campaign创新、RPA数字人化等。' },
	  { title: '陪伴', description: '拥有EQ和不同人设的数字人可以胜任生活助理、智能座舱助理、陪护师等需要情感交互的工作。' },
	  { title: '创作', description: '拥有创造力的数字人可以辅助人类进行绘画、音乐、设计、诗歌等创作，如音乐制作人、服装设计师、插画师等。' },
	];

	const titles: { [key: number]: string} = {
		0: "形象定制",
		2: "一站式生成",
		4: "内容生成",
		6: "交互响应",
	};

	const contexts: { [key: number]: string} = {
		0: "全新升级第三代神经网络渲染模型，仅需20分钟的有效数据，即可生成栩栩如生的数字人形象。支持多服装，多表情，多动作，让数字人更灵动。",
		2: "可通过手动输入文本生成视频，也可由AI全自动生成。云端实时渲染，快速输出视频画面。支持自定义场景，4K分辨率，多镜头角度，在线剪辑等。",
		4: "基于奥森小冰框架的人工智能创造能力（AIGC），数字人可实现对业务数据的快速学习，获得相应技能，稳定输出高质量文本，图片，音频，视频等内容。",
		6: "拥有情感对话能力和多模态交互能力。可人声定制，支持多语种，多方言，7X24小时与用户进行实时交互。",
	}

	const handleMouseEnter = (value: number) => {
		setIsHovered(value);
	  };
	
	  const handleMouseLeave = (value: number) => {
		setIsHovered(value);
	  };

	return (
		<div>
			<div className=" hidden md:block text-left bg-[#000887]">
				{/** 电脑端 */}
				<div className="flex justify-between">
				<div className="flex  items-left justify-center p-24 pl-48 flex-col relative text-white">
					<h1 className="md:pb-8 font-bold text-2xl pb-3 md:text-8xl">AI数字员工</h1>
					<p className="md:text-2xl max-w-4xl">奥森小冰基于全球领先的完备人工智能奥森小冰框架，推出了数字专家和数字员工等完整产品线，从数据采集、训练到上线，最快仅需10小时。支持创建拥有情感交互能力、专业技能和内容生产能力的数字人，目前已被应用于多个工作和生活场景中。</p>
				</div>
				<img className=" bg-cover max-w-2xl" src="banner-2.jpg" alt="human" />
				</div>
			</div>




			{/** title 移动端 */}
			<div className="flex flex-col md:hidden bg-[#11172c] p-4">
				<div className=" relative">
					<img className="object-cover" src="img5.png" alt="" />
					<div className=" absolute top-12 left-9 flex flex-col justify-center text-start text-white mb-5">
						<h1 className="font-bold text-2xl pb-3">AI数字员工</h1>
						<p className=" text-sm">奥森小冰基于全球领先的完备人工智能奥森小冰框架，推出了数字专家和数字员工等完整产品线，从数据采集、训练到上线，最快仅需10小时。支持创建拥有情感交互能力、专业技能和内容生产能力的数字人，目前已被应用于多个工作和生活场景中。</p>
					</div>
				</div>
			</div>

			<div className=" hidden">
			<div className=" flex flex-col justify-center items-center bg-[#000887] text-white p-8">
			 	<h1 className=" font-bold text-3xl">应用场景</h1>
				<div className="flex justify-center pt-8">
					<div className="flex w-full flex-col gap-8 justify-center items-center">
						<Tabs aria-label="Options" color="primary" variant="bordered">
							<Tab
							key="photos"
							title={
								<div className="flex items-center space-x-2 justify-center md:w-24 w-16">
									<span>直播</span>
								</div>
							}
							>
								<div className=" bg-[#edf3ff] shadow-2xl flex rounded-xl p-6 mt-12 justify-center items-center mb-8">
								<div className="flex flex-col pr-4">
										<p className=" font-bold text-3xl text-[#000887]">01</p>
										<span className=" w-24 bg-[#000887] h-4 bg-opacity-50"> </span>
										<p className=" text-black font-bold">支持直播推流，轻松满足电商带货、赛事解说、新闻资讯、娱乐播报等场景。</p>
									</div>
									<img className="bg-cover max-w-xl" src="https://business.xiaoice.com/img/vhuman/direct1.png" alt="" />
								</div>
							</Tab>
							<Tab
							key="b"
							title={
								<div className="flex items-center space-x-2 justify-center md:w-24 w-16">
									<span>陪伴</span>
								</div>
							}
							>
								<div className=" bg-[#edf3ff] shadow-2xl flex rounded-xl p-6 mt-12 justify-center items-center mb-8">
									<div className="flex flex-col pr-4">
										<p className=" font-bold text-3xl text-[#000887]">02</p>
										<span className=" w-24 bg-[#2db2e2] h-4 bg-opacity-50"> </span>
										<p className=" text-black font-bold max-w-xl">定制完美形象，融合企业基因，打造品牌代言人、形象代言人、数字员工、数字专家等，可用于企业内外宣物料制作、营销Campaign创新、RPA数字人化等。</p>
									</div>
									<img className="bg-cover max-w-xl" src="https://business.xiaoice.com/img/vhuman/direct2.png" alt="" />
								</div>
							</Tab>
							<Tab
							key="a"
							title={
								<div className="flex items-center space-x-2 justify-center md:w-24 w-16">
									<span>直播</span>
								</div>
							}
							>
								<div className=" bg-[#edf3ff] shadow-2xl flex rounded-xl p-6 mt-12 justify-center items-center mb-8">
								<div className="flex flex-col pr-4">
										<p className=" font-bold text-3xl text-[#000887]">03</p>
										<span className=" w-24 bg-[#3af8bf] h-4 bg-opacity-50"> </span>
										<p className=" text-black font-bold">支持直播推流，轻松满足电商带货、赛事解说、新闻资讯、娱乐播报等场景。</p>
									</div>
									<img className="bg-cover max-w-xl" src="https://business.xiaoice.com/img/vhuman/direct3.png" alt="" />
								</div>
							</Tab>

							<Tab
							key="f"
							title={
								<div className="flex items-center space-x-2 justify-center md:w-24 w-16">
									<span>创业</span>
								</div>
							}
							>
								<div className=" bg-[#edf3ff] shadow-2xl flex rounded-xl p-6 mt-12 justify-center items-center mb-8">
								<div className="flex flex-col pr-4">
										<p className=" font-bold text-3xl text-[#000887]">04</p>
										<span className=" w-24 bg-[#3af8bf] h-4 bg-opacity-50"> </span>
										<p className=" text-black font-bold">支持直播推流，轻松满足电商带货、赛事解说、新闻资讯、娱乐播报等场景。</p>
									</div>
									<img className="bg-cover max-w-xl" src="https://business.xiaoice.com/img/vhuman/direct3.png" alt="" />
								</div>
							</Tab>
						</Tabs>
					</div> 
				</div>
			</div>	
			</div>

		
			{/** advantage_intro 电脑端 */}
			<div className="hidden">
			<div className="bg-[#000887] md:block justify-center bg-cover bg-no-repeat  text-base text-gray-700 flex items-center px-28 leading-10 overflow-hidden h-1/2 p-12">
				{/** products */}
				<div className="flex w-full gap-8 justify-center items-center -skew-x-14">
					<div className="w-1/3 flex text-left flex-col transition-all skew-x-12 text-white">
						<h2 className=" text-5xl pt-14 pb-24 mb-16">产品优势</h2>
						<div className={`transition-all transform duration-1000 ${(isHovered % 2 !== 0) ? ' translate-y-28 opacity-0' : ' translate-y-14 opacity-100'}`}>
							<h2 className=" text-2xl text-white font-bold">{titles[(isHovered)]}</h2>
							<p className=" text-xl text-white">{contexts[isHovered]}</p>
						</div>
					</div>

					<div className=" gap-6 flex ml-24">
						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => setIsHovered(0)} 
								onMouseLeave={() => setIsHovered(1)} 
								className=" skew-x-20 bg-right-5.2 bg-no-repeat  relative h-[780px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/product_one1.png")`}}
							>
								<div className=" flex flex-col justify-center items-center absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">Rita</h2>
										{isHovered == 0 && (
											<Chip
												variant="shadow"
												classNames={{
													base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												跨境电商主播
											</Chip>
										)}
									</div>
									{isHovered == 1 ? (<p className="text-base">跨境电商主播</p>) : (<div className=" p-2"><p className=" text-base">在TikTok上用英语介绍活性炭控油去屑洗发水</p></div>)}
								</div>
							</div>
						</div>

						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => setIsHovered(2)} 
								onMouseLeave={() => setIsHovered(3)} 
								className=" skew-x-20 bg-right-5.2 bg-no-repeat  relative h-[780px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/product_two1.png")`}}
							>
								<div className=" flex flex-col justify-center items-center absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">晓玲</h2>
										{isHovered == 2 && (
											<Chip
												variant="shadow"
												classNames={{
													base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												展馆导览
											</Chip>
										)}
									</div>
									{isHovered == 3 ? (<p className="text-base">展馆导览</p>) : (<div className=" p-2"><p className=" text-base">在城市博物馆，为游客介绍这座城市发展历史及建设成就</p></div>)}
								</div>
							</div>
						</div>

						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => setIsHovered(4)} 
								onMouseLeave={() => setIsHovered(5)} 
								className=" skew-x-20 bg-right-5.2 bg-no-repeat  relative h-[780px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/product_three1.png")`}}
							>
								<div className=" flex flex-col justify-center items-center absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">星怡</h2>
										{isHovered == 4 && (
											<Chip
												variant="shadow"
												classNames={{
													base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												知识种草
											</Chip>
										)}
									</div>
									{isHovered == 5 ? (<p className="text-base">知识种草</p>) : (<div className=" p-2"><p className=" text-base">在抖音对出版社的图书进行带货</p></div>)}
								</div>
							</div>
						</div>

						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => setIsHovered(6)} 
								onMouseLeave={() => setIsHovered(7)} 
								className=" skew-x-20 bg-right-5.2 bg-no-repeat  relative h-[780px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/product_four1.png")`}}
							>
								<div className=" flex flex-col justify-center items-center absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">俊晨</h2>
										{isHovered == 6 && (
											<Chip
												variant="shadow"
												classNames={{
													base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												地产经理
											</Chip>
										)}
									</div>
									{isHovered == 7 ? (<p className="text-base">地产经理</p>) : (<div className=" p-2"><p className=" text-base">在地产销售大厅介绍楼盘的项目概况</p></div>)}
								</div>
							</div>
						</div>


					</div>


				</div>
			</div>
			</div>



				
			{/** 移动端 */}
			<div className=" md:hidden text-black p-4 bg-cover bg-center" style={{backgroundImage: `url("https://business.xiaoice.com/img/vhuman/advantage_intro_bg.png")`}}>
				<div className=" m-4 space-y-2">
					<h2 className=" text-2xl pb-4">产品优势</h2>
					<h2 className=" text-xl">形象定制</h2>
					<p className=" text-sm">全新升级第三代神经网络渲染模型，仅需20分钟的有效数据，即可生成栩栩如生的数字人形象。支持多服装，多表情，多动作，让数字人更灵动。</p>
				</div>

				<div className=" flex overflow-x-auto whitespace-nowrap mt-3">
					<div className=" relative">
						<img className=" min-w-96" src="https://business.xiaoice.com/img/vhuman/product_one1.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col">
								<div className="flex gap-8">
									<h2 className=" text-2xl">Rita</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										跨境电商主播
									</Chip>
								</div>
								<div><p className=" text-xs">在TikTok上用英语介绍活性炭控油去屑洗发水</p></div>
							</div>
						</div>
					</div>





					<div className=" relative">
						<img className="min-w-96" src="https://business.xiaoice.com/img/vhuman/product_two1.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col">
								<div className="flex gap-8">
									<h2 className=" text-2xl">Rita</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										跨境电商主播
									</Chip>
								</div>
								<div><p className=" text-xs">在TikTok上用英语介绍活性炭控油去屑洗发水</p></div>
							</div>
						</div>
					</div>


					
					<div className="relative">
						<img className="min-w-96" src="https://business.xiaoice.com/img/vhuman/product_three1.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col">
								<div className="flex gap-8">
									<h2 className=" text-2xl">Rita</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										跨境电商主播
									</Chip>
								</div>
								<div><p className=" text-xs">在TikTok上用英语介绍活性炭控油去屑洗发水</p></div>
							</div>
						</div>
					</div>




					<div className=" relative">
						<img className="min-w-96" src="https://business.xiaoice.com/img/vhuman/product_four1.png" alt="" />
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col">
								<div className="flex gap-8">
									<h2 className=" text-2xl">Rita</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										跨境电商主播
									</Chip>
								</div>
								<div><p className=" text-xs">在TikTok上用英语介绍活性炭控油去屑洗发水</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>





			{/** 电脑端 */}
			{/**
			 * <div className=" relative hidden md:block">
				{activeIndex !== -1 && (
					<img className="max-w-full object-cover transition duration-1000" src={`direct1${activeIndex + 1}.png`} alt="" />
				)}						
				<div className=" flex flex-col max-w-screen-md p-4 space-y-4 text-start absolute top-0 left-0 translate-y-1/4 transform md:translate-x-1/4 hover: text-white">
					<h2 className="text-4xl font-bold pb-4">应用场景</h2>
					<div className="space-y-8">
						{data.map((item, index) => (
							<div key={index} className={`bg-gradient-to-r from-transparent to-transparent pt-5 cursor-pointer ${activeIndex === index ? 'bg-slate-500 bg-opacity-50 p-4 rounded-xl' : ''}`} onClick={() => handleClick(index)}>
							<h2 className="text-3xl">{item.title}</h2>
							<p className="text-xl">{item.description}</p>
							</div>
						))}
					</div>
				</div>

			</div>

			 */}				
	
			

			{/** 移动端 */}
			<div className=" md:hidden w-full">
				<Carousel
					navigation={({ setActiveIndex, activeIndex, length }) => (
						<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{new Array(length).fill("").map((_, i) => (
							<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
							}`}
							onClick={() => setActiveIndex(i)}
							/>
						))}
						</div>
					)}
				>
					<div className=" relative bg-white">
						<img className=" object-cover h-110 w-full" src="direct4.jpg" alt="" />
						<div className=" absolute top-8 left-8 text-white w-72">
							<h1 className=" pb-8 text-2xl font-bold">应用场景</h1>
							<h2 className=" text-xl">直播</h2>
							<p className=" text-sm">支持直播推流，轻松满足电商带货、赛事解说、新闻资讯、娱乐播报等场景。</p>
						</div>
					</div>

					<div className=" relative">
						<img className=" object-cover h-110 w-full" src="direct2.jpg" alt="" />
						<div className=" absolute top-8 left-8 text-white w-72">
							<h1 className=" pb-8 text-2xl font-bold">应用场景</h1>
							<h2 className=" text-xl">企业</h2>
							<p className=" text-sm">定制完美形象，融合企业基因，打造品牌代言人、形象代言人、数字员工、数字专家等，可用于企业内外宣物料制作、营销Campaign创新、RPA数字人化等。</p>
						</div>
					</div>

					<div className=" relative">
						<img className=" object-cover h-110 w-full" src="direct3.jpg" alt="" />
						<div className=" absolute top-8 left-8 text-white w-72">
							<h1 className=" pb-8 text-2xl font-bold">应用场景</h1>
							<h2 className=" text-xl">陪伴</h2>
							<p className=" text-sm">拥有EQ和不同人设的数字人可以胜任生活助理、智能座舱助理、陪护师等需要情感交互的工作。</p>
						</div>
					</div>

					<div className=" relative">
						<img className=" object-cover h-110 w-full" src="direct1.jpg" alt="" />
						<div className=" absolute top-8 left-8 text-white w-72">
							<h1 className=" pb-8 text-2xl font-bold">应用场景</h1>
							<h2 className=" text-xl">创作</h2>
							<p className=" text-sm">拥有创造力的数字人可以辅助人类进行绘画、音乐、设计、诗歌等创作，如音乐制作人、服装设计师、插画师等。</p>
						</div>
					</div>
				</Carousel>
			</div>



			<div className=" flex flex-col justify-center items-center md:mt-12 bg-white">
				<h1 className=" font-bold text-4xl mb-12 hidden md:block text-black">客户案例</h1>

				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:gap-24 items-start p-4 md:p-20 flex-wrap-reverse">
					<div className="md:w-[580px] md:h-[350px] pb-12 md:p-0">
						<img width={580} src="https://business.xiaoice.com/img/vhuman/ani_image111.png?v=Q90qX5Q42LQhmegIhnMlqNEX87074phtiCQrRJLYp_A" alt="" />
					</div>

					<div className=" flex flex-col text-left max-w-[550px] md:mt-4 flex-wrap gap-4 md:gap-24">
						<h2 className=" text-[#00305a] md:pb-4 text-2xl md:text-4xl font-bold md:mt-0 mt-12">招商局集团 - 招小影，数字员工</h2>
						<p className="text-[#00305a] md:text-xl text-base">2022年10月26日，招商局集团正式宣布首位数字员工“招小影”入职，她诞生于招商局金融科技有限公司与奥森小冰公司，联合研发的招商局集团首个数字人平台——“招商如影”。招小影身怀“绝技”，是常伴每个招商人左右的小帮手。未来，招小影也将活跃在招商地产、招商物流、招商证券、招商公路、招商蛇口等具体业务场景中，直接为民众服务。</p>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:gap-24 items-start p-4 md:p-20 flex-wrap">
					<div className=" flex flex-col text-left max-w-[550px] md:mt-4">
						<h2 className=" text-[#00305a] md:pb-4 text-2xl md:text-4xl font-bold">万科集团 – 崔筱盼，财务部催收专员，数字员工</h2>
						<p className="text-[#00305a] md:text-xl text-base pt-2 md:pt-0">2021年2月，崔筱盼在万科集团财务部入职。基于流程和数据建模，结合奥森小冰框架的整体能力，由她催办的预付应收逾期单据核销率达到91.44%。由于业绩突出，万科集团董事会主席郁亮在2021年底，颁给她“万科集团总部2021年度优秀新人奖”，并对奥森小冰的神经网络渲染等技术给予了肯定。</p>
					</div>

					<div>
						<img className="object-cover md:max-w-xl" src="https://business.xiaoice.com/img/vhuman/ani_image1.png?v=1ImfCyyeRH7BMmKoqg0tYq-RjNIxUQJimkmKcNTzg7Y" alt="" />
					</div>
				</div>


				<div className=" flex bg-white w-full justify-center gap-12 md:gap-12 items-start p-4 md:p-20 flex-wrap-reverse md:flex-nowrap ">
					<div className="-mt-8 md:-mt-0">
						<img className="object-cover  md:max-w-xl" src="https://business.xiaoice.com/img/vhuman/video_poster1.png?v=0IJp3HYJN5s9zog-SMmp3ZSOQ0l5ZIFAPs2cxUY2BDg" alt="" />
					</div>

					<div className=" flex flex-col text-left md:mt-0 mt-8 flex-wrap max-w-xl md:ml-8">
						<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold ">国家体育总局冬运中心 – 观君，冬奥AI裁判与教练，数字专家</h2>
						<p className="text-[#00305a] md:text-xl text-base">2019年起，奥森小冰团队着手为国家体育总局冬运中心秘密研发人工智能裁判与教练系统——观君。这是AI技术首次全程参与国家队备战冬奥训练，并成为辅助运动员在此全球顶级赛事中取得两金一银战绩的首个案例。奥森小冰团队也因此得到了国家体育总局冬运中心的正式表彰。中国首枚冬奥会女子空中技巧金牌获得者徐梦桃，在接受中国国际广播电台采访时表示：“本次备战北京冬奥会的明显变化是，训练中有人工智能奥森小冰的技术分析，可以看技术录像，评测打分，这些都是科技助力。”除了参与到队伍的日常训练外，观君还在2021年北京冬奥测试赛空中技巧项目中，担任了唯一竞赛裁判，其执裁结果也获得了国际雪联、冬奥组委、国家体育总局冬运中心等一致认可。</p>
					</div>
				</div>

				<div className=" flex bg-white w-full justify-center gap-2 md:mt-0 mt-8 md:gap-24 items-start p-4 md:p-20 flex-wrap">
					<div className=" flex flex-col text-left max-w-lg md:mt-4">
						<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold">每日经济新闻 – N小黑与N小白，7x24小时主播，数字专家</h2>
						<p className="text-[#00305a] md:text-xl text-base">2021年，每经与奥森小冰共同打造的数字主播N小黑、N小白，与“AI电视”一同正式上线。每经“AI电视”是全球首个由人工智能技术驱动的视频直播电视栏目，采编播全流程均由AI自动完成，可7x24小时不间断播报全球财经资讯，极大提高了信息传播及时度和覆盖广度。奥森小冰的数字人，协助传统财经媒体实现业务创新，加速向新型智慧媒体的转型。</p>
					</div>

					<div className="md:w-[580px] md:h-[400px]">
						<img className=" max-w-1/3 md:min-w-[300px]" src="https://business.xiaoice.com/img/vhuman/video_poster2.png?v=ldCL21HLdgmheNURw6Rtt1CeFK9YJK-3s2_5xsPlegQ" alt="" />
					</div>
				</div>



				<div className=" flex bg-[#edf3ff] w-full flex-col justify-center gap-12 md:gap-24 items-center p-4 md:p-20 flex-wrap  md:flex-nowrap">
					<div className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row">
						<img className="max-w-xl object-cover h-110 p-2 -mt-16 md:-mt-0" src="video_poster5.png" alt="" />
						<div className=" max-w-lg mb-20 flex items-center justify-around">
							<div className=" flex flex-col text-left max-w-lg md:mt-4 flex-wrap md:p-0">
								<h2 className=" text-[#00305a] pb-4 pt-8 md:pt-0 text-2xl md:text-4xl font-bold">红杉资本 – Hóng，分析师，数字员工</h2>
								<p className="text-[#00305a] text-sm md:text-xl">2022年7月11日，红杉中国首位数字员工Hóng正式亮相，她是奥森小冰团队为红杉资本量身定制的数字人，基于深度神经网络渲染技术小样本学习，经过一周的训练期即诞生。结合奥森小冰框架的全域能力，Hóng将不断成长，并在红杉资本各个业务流程中承担重要职责。</p>
							</div>
						</div>
					</div>

					<div className=" flex gap-16 flex-col md:flex-row">
						<div className=" md:mb-20 flex items-center justify-around">
							<div className=" flex flex-col text-left max-w-lg mt-4 flex-wrap">
								<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold ">经济学家郎咸平 – 数字孪生郎咸平，财经大咖，数字专家</h2>
								<p className="text-[#00305a] text-sm md:text-xl">奥森小冰团队为著名经济学家郎咸平先生量身定制了数字孪生，将形象呈现与内容生产解耦，再经专业团队高效生产优质内容，即可在全球社交网络和媒体平台持续、稳定的输出观点与解读，以扩展所覆盖的用户层级与类型，从而大幅提升流量、IP影响力及商业收益。</p>
							</div>
						</div>

						<img className="max-w-full object-cover md:h-110 -mt-8 md:-mt-0" src="video_poster3.png" alt="" />

					</div>
				</div>


				<div className=" flex bg-white w-full justify-center items-center gap-12 md:gap-24 p-4 md:p-20 flex-wrap-reverse md:flex-nowrap">
						<div className="w-[580px] h-[400px]">
							<img className="max-w-full object-cover" src="https://business.xiaoice.com/img/vhuman/video_poster1.png?v=0IJp3HYJN5s9zog-SMmp3ZSOQ0l5ZIFAPs2cxUY2BDg" alt="" />
						</div>

						<div className=" flex flex-col text-left max-w-[550px] flex-wrap ">
							<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold ">蓝色光标 – 数字孪生赵文权，企业高管，数字专家</h2>
							<p className="text-[#00305a] text-sm md:text-xl">奥森小冰团队与亚洲最大的营销科技公司蓝色光标，共同打造“分身有术”数字人平台，携手探索AI数字员工在广告、数字营销领域的前沿应用，并在该平台上创建了蓝标董事长赵文权先生的数字分身——帮企业一号位实现了“分身有术” 。赵文权先生通过其数字分身，在2022年除夕，向客户和全体员工送上新年祝福，宣贯企业价值观与发展目标。</p>
						</div>
					</div>


			</div>


		</div>
	);
}