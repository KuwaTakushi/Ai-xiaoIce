"use client"
import { Card, Chip, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';

const cards = [
	{
	  url: "/ani_image111.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E6%8B%9B%E5%B0%8F%E5%BD%B1%E5%A4%96%E5%AE%A3_Final_1026%E6%97%A0%E5%B0%81%E9%9D%A2_%E4%BD%8E%E7%A0%81%E7%8E%87_39MB.mp4",
	  id: 1,
	},
	{
	  url: "/video_poster4.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%5B%E4%BB%8A%E6%97%A5%E7%8E%AF%E7%90%83%5D%E9%87%91%E7%89%8C%E8%83%8C%E5%90%8E%EF%BC%9A%E2%80%9CAI%E5%8A%A9%E7%90%86%E6%95%99%E7%BB%83%E2%80%9D%E5%8A%A9%E5%8A%9B%E4%B8%AD%E5%9B%BD%E9%9B%AA%E4%B8%8A%E9%A1%B9%E7%9B%AE%E8%AE%AD%E7%BB%83%5B%E4%B8%8B%E8%BD%BD%E7%89%88%5D_batch.m4v",
	  id: 2,
	},
	{
	  url: "/video_poster7.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E6%AF%8F%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%96%B0%E9%97%BB%E8%A7%86%E9%A2%911.mp4",
	  id: 3,
	},
	{
	  url: "/video_poster5.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.m4v",
	  id: 4,
	},
	{
	  url: "/video_poster3.png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E9%83%8E%E5%92%B8%E5%B9%B3%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E8%99%9A%E6%8B%9F%E4%BA%BA.mp4",
	  id: 5,
	},
	{
	  url: "/video_poster4 .png",
	  videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%93%9D%E8%89%B2%E5%85%89%E6%A0%87%E8%91%A3%E4%BA%8B%E9%95%BF%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E8%99%9A%E6%8B%9F%E4%BA%BA.mp4",
	  id: 6,
	},
	{
	  url: "/huaxizi_poster.png",
      videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E8%8A%B1%E8%A5%BF%E5%AD%90-%E8%9C%9C%E7%B2%89demo.mp4",
	  id: 7,
	},
];

export default function ChannelPartners() {

	const [isHovered, setIsHovered] = useState(0);
	const [isHoveredA, setIsHoveredA] = useState(false);
	const [isHoveredB, setIsHoveredB] = useState(false);
	const [isHoveredC, setIsHoveredC] = useState(false);
	const [isHoveredD, setIsHoveredD] = useState(false);
	const [isHoveredE, setIsHoveredE] = useState(false);


	const [customerIndex, setCustomerIndex] = useState(0);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");

	const {isOpen, onOpen, onOpenChange} = useDisclosure();


	const [hoveredIndex, setActiveIndex] = useState<number | null>(null);

	useEffect(() => {
		setCurrentVideoUrl(cards[customerIndex].videoUrl);
	}, [customerIndex]);

	return (
		<div className=" w-full">
			<div className=" relative">
				<Image className=" object-cover h-110 md:h-auto w-full" src="/banner2.png" alt="banner2" width={1500} height={750} />
				<div className=" flex flex-col md:items-start items-center absolute md:top-1/5 md:left-64 left-24 top-12 right-1/3 -translate-x-12 md:-translate-x-0 text-white">
					<div className=" md:text-2xl text-left md:pt-4 text-base max-w-2xl">
						<h1 className=" md:text-5xl text-base pb-4">招商加盟</h1>
						<p>过去十五年，属于移动互联网。</p>
						<p>未来十五年，属于AI Being和AIGC。</p>
						<p>与奥森小冰一起，共赢万亿蓝海市场，创造属于我们的时代。</p>

						<p className="pt-16 pb-4">招商热线：13025507200</p>
						<Link href="http://t1.ink/f/h9ulpg">
							<button className='relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
								<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
								<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
									联系我们
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>


			<div className=" hidden md:block">
				<div className=" flex justify-center w-full flex-col">

					<div className=" bg-[#e9f1fc]">
						<h1 className=" text-5xl mt-16">应用场景</h1>
					</div>

					<div style={{backgroundImage: `url("https://i.p-i.vip/20/20240621-6674794212d78.png")`}} className=" justify-center bg-cover bg-no-repeat w-full  text-base text-gray-700 flex items-center px-28 leading-10 overflow-hidden h-120 p-12">
						<div className=" gap-6 flex ml-24">
							{/** item_big */}
							<div className=" transition-all  duration-700 h-full -skew-x-12">
								<div 
									onMouseEnter={() => {setIsHoveredA(true); setIsHovered(0)}} 
									onMouseLeave={() => {setIsHoveredA(false); setIsHovered(1)}} 
									className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
									style={{backgroundImage: `url("human_product_three1.png")`}}
								>
									<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
										<div className=" relative flex gap-4 p-4 justify-center items-center">
											<h2 className=" text-4xl">星怡</h2>
											{isHoveredA && (
												<Chip
													variant="shadow"
													classNames={{
														base: "absolute top-6 left-24 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
														content: "drop-shadow shadow-black text-white",
													}}
													>
													跨境电商主播
												</Chip>
											)}
										</div>
										{!isHoveredA ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">跨境电商主播</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">支持直播推流，轻松满足电商带货、赛事解说、资讯播报等场景。</p></div>)}
									</div>
								</div>
							</div>




						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredB(true); setIsHovered(2)}} 
								onMouseLeave={() => {setIsHoveredB(false); setIsHovered(3)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human2.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">招小影</h2>
										{isHoveredB && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												企业数字员工
											</Chip>
										)}
									</div>
									{!isHoveredB ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">企业数字员工</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">从皮囊到灵魂均可定制，完美契合品牌调性。不仅是品牌代言人，更是每位员工的数字助理。</p></div>)}
								</div>
							</div>
						</div>


						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredC(true); setIsHovered(4)}} 
								onMouseLeave={() => {setIsHoveredC(false); setIsHovered(5)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human3.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">TORBY</h2>
										{isHoveredC && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												线下导购迎宾
											</Chip>
										)}
									</div>
									{!isHoveredC ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">线下导购迎宾</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">线下门店智能迎宾与导购，不仅能推荐全品类SKU，更能实时回答常见问题，显著节约人工。</p></div>)}
								</div>
							</div>
						</div>


						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredD(true); setIsHovered(6)}} 
								onMouseLeave={() => {setIsHoveredD(false); setIsHovered(7)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human4.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">听枫</h2>
										{isHoveredD && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-24 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												文旅宣传大使
											</Chip>
										)}
									</div>
									{!isHoveredD ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">文旅宣传大使</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">基于城市与景区特色，定制有文化内核的数字人，为品宣片、文博馆、景区App增色，文化输出新玩法。</p></div>)}
								</div>
							</div>
						</div>



						{/** item_big */}
						<div className=" transition-all  duration-700 h-full -skew-x-12">
							<div 
								onMouseEnter={() => {setIsHoveredE(true); setIsHovered(8)}} 
								onMouseLeave={() => {setIsHoveredE(false); setIsHovered(9)}} 
								className=" skew-x-6 bg-right-5.2 bg-no-repeat  relative h-[800px] bg-cover transition-all duration-700 ease-in-out transform overflow-hidden w-56 hover:w-100" 
								style={{backgroundImage: `url("human5.png")`}}
							>
								<div className=" flex flex-col justify-center items-start absolute bottom-0 left-0 text-white bg-black w-full bg-opacity-30 p-2 backdrop-blur-sm h-40 backdrop-filter">
									<div className=" flex gap-4 p-4 justify-center items-center">
										<h2 className=" text-4xl">刘建宏</h2>
										{isHoveredE && (
											<Chip
												variant="shadow"
												classNames={{
													base: "absolute top-14 left-36 bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
													content: "drop-shadow shadow-black text-white",
												}}
												>
												名人数字分身
											</Chip>
										)}
									</div>
									{!isHoveredE ? (<p className="transition-all duration-700 ease-in-out transform absolute top-1/2 left-6 text-base translate-y-6">名人数字分身</p>) : (<div className=" p-2"><p className=" translate-y-6 absolute top-1/2 left-6 text-base  transition-opacity duration-1000 ease-in-out">已定制多位名人的数字分身，帮助他们显著节约视频内容制作精力，扩大IP影响力，提升IP价值。</p></div>)}
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>				
			</div>



			{/** 移动端 */}
			<div className=" md:hidden text-black p-4 bg-cover bg-center" style={{backgroundImage: `url("https://business.xiaoice.com/Image/vhuman/advantage_intro_bg.png")`}}>
			<div className=" flex overflow-x-scroll whitespace-nowrap mt-3">
					<div className=" relative">
						<Image className=" min-w-96" src="/human_product_three1.png" alt="" width={500} height={300} loading="lazy"/>
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col justify-center">
								<div className="flex gap-8">
									<h2 className=" text-2xl">星怡</h2>
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
								<div className="w-24"><p className=" text-xs">支持直播推流，轻松满足电商带货、赛事解说、</p></div>
								<div className="w-24 mr-36"><p className=" text-xs">资讯播报等场景。</p></div>
							</div>
						</div>
					</div>





					<div className=" relative">
						<Image className="min-w-96" src="/human2.png" alt="" width={500} height={800} loading="lazy"/>
						<div className=" p-4 absolute bottom-0 pr-16  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center">
								<div className="flex gap-8">
									<h2 className=" text-2xl">招小影</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										企业数字员工
									</Chip>
								</div>
								<div className="w-24"><p className=" text-xs">从皮囊到灵魂均可定制，完美契合品牌调性。</p></div>
								<div className="w-24"><p className=" text-xs">不仅是品牌代言人，更是每位员工的数字助理。</p></div>
							</div>
						</div>
					</div>


					
					<div className="relative">
						<Image className="min-w-96" src="/human3.png" alt="" width={500} height={800} loading="lazy"/>
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center text-left ml-6">
								<div className="flex gap-8">
									<h2 className="text-2xl">TORBY</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										线下导购迎宾
									</Chip>
								</div>
								<div className=""><p className=" text-xs">线下门店智能迎宾与导购，不仅能推荐全品类SKU，</p></div>
								<div className=""><p className=" text-xs">更能实时回答常见问题，显著节约人工。</p></div>
							</div>
						</div>
					</div>


					<div className=" relative">
						<Image className="min-w-96" src="/human4.png" alt="" width={500} height={800} loading="lazy"/>
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
						<div className=" flex flex-col justify-center ml-4 text-left">
								<div className="flex gap-8">
									<h2 className=" text-2xl">听枫</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										文旅宣传大使
									</Chip>
								</div>
								<div className=""><p className=" text-xs">基于城市与景区特色，定制有文化内核的数字人，</p></div>
								<div className=""><p className=" text-xs">为品宣片、文博馆、景区App增色，文化输出新玩法。</p></div>
							</div>
						</div>
					</div>


					<div className=" relative">
						<Image className="min-w-96" src="/human5.png" alt="" width={500} height={800} loading="lazy"/>
						<div className=" p-4 absolute bottom-0  -skew-x-12 left-4 w-72 h-24 bg-black text-white bg-opacity-35 flex justify-center">
							<div className=" flex flex-col text-left ml-2">
								<div className="flex gap-8">
									<h2 className=" text-2xl">刘建宏</h2>
									<Chip
										variant="shadow"
										classNames={{
											base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
											content: "drop-shadow shadow-black text-white",
										}}
										>
										名人数字分身
									</Chip>
								</div>
								<div className=""><p className=" text-xs">已定制多位名人的数字分身，帮助他们显著节约视</p></div>
								<div className=""><p className=" text-xs">内容制作精力，扩大IP影响力，提升IP价值。</p></div>
							</div>
						</div>
					</div>

				</div>
			</div>





			<div className=" flex flex-col justify-center items-center md:mt-12 bg-white">
				<h1 className=" font-bold text-4xl mb-12 hidden md:block text-black">客户案例</h1>
				<Modal
					className="bg-[#403d3d] w-96 md:w-full md:max-w-6xl max-w-4xl md:p-2"
					placement="center"
					shouldBlockScroll={true}
					isOpen={isOpen} 
					onOpenChange={onOpenChange}
				>
					<ModalContent>
						{(onClose) => (
							<ModalBody>
							<video 
								src={currentVideoUrl}
								playsInline={true}
								autoPlay={true}
								controls={true}
							/>
							</ModalBody>
						)}
					</ModalContent>
				</Modal>



				<div className="flex bg-[#edf3ff] w-full flex-col justify-center gap-12 md:gap-24 items-center p-4 md:p-20 flex-wrap  md:flex-nowrap">
					<div className=" flex md:gap-16 justify-center flex-col md:flex-row">
						<div className=" max-w-lg mb-20 flex justify-around items-center">
							<div className=" flex flex-col text-left max-w-lg mt-4 flex-wrap">
								<h2 className=" text-[#00305a] pb-4 pt-8 md:pt-0 text-2xl md:text-4xl font-bold">花西子 - 美妆带货直播间</h2>
								<p className="text-[#00305a] text-sm md:text-xl">作为美妆直播Top品牌，花西子在真人直播之外，采用小冰电商直播平台，打造了7X24小时不间断的数字人直播间。美妆直播间具有品类SKU多、峰值人流多、观众问题多的特点，永不疲倦的小冰数字人直播可随时搭建、随时待播、随时插播， 轻松满足花西子的品牌自播需求。</p>
							</div>
						</div>
						<Card
						    key={cards[6].id}
							isFooterBlurred
							radius="sm"
							className=" bg-[#edf3ff] bg-opacity-0  max-w-md relative flex"
							onMouseEnter={() => setActiveIndex(cards[6].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<Image
								alt=""
								className="object-cover max-w-sm w-110"
								src={cards[6].url}
								width={350} height={300}
							/>
							{hoveredIndex === cards[6].id && (
							<div
								onClick={() => {onOpen(); setCustomerIndex(6)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<Image width={70} src="/play.png" alt=""  height={70}/>
							</div>
							)}
						</Card>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:gap-24 items-start p-4 md:p-20 flex-wrap-reverse">	
					<div
						className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row"
					>
						<Card
						 	key={cards[0].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-xl relative"
							onMouseEnter={() => setActiveIndex(cards[0].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<Image
								alt=""
								className="object-cover"
								src={cards[0].url}
								width={550} height={300}
							/>
            				{hoveredIndex === cards[0].id && (
							<div 
								onClick={() => {onOpen(); setCustomerIndex(0)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<Image width={70} src="/play.png" alt=""  height={70}/>
							</div>
							)}
						</Card>
					</div>







					<div className=" flex flex-col text-left max-w-xl md:mt-4 flex-wrap gap-4 md:gap-10">
						<h2 className=" text-[#00305a]  text-2xl md:text-4xl font-bold md:mt-0 mt-12">招商局集团 - 招小影，数字员工</h2>
						<p className="text-[#00305a] md:text-xl text-base">2022年10月26日，招商局集团正式宣布首位数字员工“招小影”入职，她诞生于招商局金融科技有限公司与奥森小冰公司，联合研发的招商局集团首个数字人平台——“招商如影”。招小影身怀“绝技”，是常伴每个招商人左右的小帮手。未来，招小影也将活跃在招商地产、招商物流、招商证券、招商公路、招商蛇口等具体业务场景中，直接为民众服务。</p>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-2 md:mt-0 mt-8 md:gap-24 items-center p-4 md:p-20 flex-wrap">
					<div className=" flex flex-col text-left max-w-lg md:mt-4">
						<h2 className=" text-[#00305a] pb-4 text-2xl md:text-4xl font-bold">国家体育总局冬运中心 – 观君，冬奥AI裁判与教练，数字专家</h2>
						<p className="text-[#00305a] md:text-xl text-base">2019年起，奥森小冰团队着手为国家体育总局冬运中心秘密研发人工智能裁判与教练系统——观君。这是AI技术首次全程参与国家队备战冬奥训练，并成为辅助运动员在此全球顶级赛事中取得两金一银战绩的首个案例。奥森小冰团队也因此得到了国家体育总局冬运中心的正式表彰。中国首枚冬奥会女子空中技巧金牌获得者徐梦桃，在接受中国国际广播电台采访时表示：“本次备战北京冬奥会的明显变化是，训练中有人工智能奥森小冰的技术分析，可以看技术录像，评测打分，这些都是科技助力。”除了参与到队伍的日常训练外，观君还在2021年北京冬奥测试赛空中技巧项目中，担任了唯一竞赛裁判，其执裁结果也获得了国际雪联、冬奥组委、国家体育总局冬运中心等一致认可。</p>
					</div>

					<div
						className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row"
					>
						<Card
							key={cards[2].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-xl relative"
							onMouseEnter={() => setActiveIndex(cards[2].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<Image
								alt=""
								className="object-cover"
								src={cards[2].url}
								width={550} height={300}
							/>
            				{hoveredIndex === cards[2].id && (
							<div 
								onClick={() => {onOpen(); setCustomerIndex(2)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<Image width={70} src="/play.png" alt=""  height={70}/>
							</div>
							)}
						</Card>
					</div>
				</div>



				<div className="flex bg-[#edf3ff] w-full flex-col justify-center gap-12 md:gap-24 items-center p-4 md:p-20 flex-wrap  md:flex-nowrap">
					<div className=" flex md:gap-16 justify-center flex-col-reverse md:flex-row items-center">
						<Card
						    key={cards[3].id}
							isFooterBlurred
							radius="sm"
							className="border-none rounded-lg max-w-md relative"
							onMouseEnter={() => setActiveIndex(cards[3].id)}
							onMouseLeave={() => setActiveIndex(null)}
						>
							<Image
								alt=""
								className="object-cover"
								src={cards[3].url}
								width={450} height={300}
							/>
							{hoveredIndex === cards[3].id && (
							<div
								onClick={() => {onOpen(); setCustomerIndex(3)}}
								className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
							>
								<Image width={70} src="/play.png" alt=""  height={70}/>
							</div>
							)}
						</Card>
						<div className=" max-w-lg mb-20 flex justify-around">
							<div className=" flex flex-col text-left max-w-lg mt-4 flex-wrap">
								<h2 className=" text-[#00305a] pb-4 pt-8 md:pt-0 text-2xl md:text-4xl font-bold">红杉资本 – Hóng，分析师，数字员工</h2>
								<p className="text-[#00305a] text-sm md:text-xl">2022年7月11日，红杉中国首位数字员工Hóng正式亮相，她是奥森小冰团队为红杉资本量身定制的数字人，基于深度神经网络渲染技术小样本学习，经过一周的训练期即诞生。结合奥森小冰框架的全域能力，Hóng将不断成长，并在红杉资本各个业务流程中承担重要职责。</p>
							</div>
						</div>
					</div>
				</div>

			</div>


			<div className=" w-full flex justify-center items-center p-8 flex-col mb-24">
				<h1 className=" text-5xl pb-14 text-[#333333]">加盟合作保障</h1>
				<div className="flex flex-col md:flex-row flex-wrap justify-between text-[#00305a] gap-8 md:max-w-5xl max-w-96 pt-8">
					<div className="  flex flex-col justify-center items-center space-y-2">
						<Image className=" object-cover md:w-36 w-24" src="/partners1.png" alt="" width={250} height={250} />
						<h2 className=" font-bold text-3xl">多元化市场支持</h2>
						<p className=" text-sm">全域市场营销玩法，协助区域伙伴获得市场优势</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2">
					<Image className=" object-cover md:w-36 w-24" src="/partners2.png" alt="" width={250} height={250} />
						<h2 className=" font-bold text-3xl">全方位技术支持</h2>
						<p className=" text-sm">专业售前团队项目支持，强大的售后团队支撑</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2">
					<Image className=" object-cover md:w-36 w-24" src="/partners3.png" alt="" width={250} height={250} />
						<h2 className=" font-bold text-3xl">成熟的方案支持</h2>
						<p className=" text-sm">众多合作案例，引领伙伴区域市场拓展</p>
					</div>

					<div className=" flex flex-col justify-center items-center space-y-2 pt-8">
					<Image className=" object-cover md:w-36 w-24" src="/partners4.png" alt="" width={250} height={250} />
						<h2 className=" font-bold text-3xl">顾问式伙伴扶持</h2>
						<p className=" text-sm">协助伙伴进行销售、运营团队搭建与管理；协助进行当地市场拓展与业务规划</p>
					</div>


					<div className=" flex flex-col justify-center items-center space-y-2 pt-8">
					<Image className=" object-cover md:w-36 w-24" src="/partners5.png" alt="" width={250} height={250} />
						<h2 className=" font-bold text-3xl">扁平化渠道政策</h2>
						<p className=" text-sm">低门槛、高返利、不压货，线下市场区域保护，真诚、平等、无套路</p>
					</div>

				</div>
			</div>


		</div>
	);
}
