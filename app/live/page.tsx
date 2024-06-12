"use client"
import BubbleText from "@/components/BubbleText";
import ShuffleHero from "@/components/SuffleHero";
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
    		<div className="bg-cover w-full h-110 p-12 flex justify-center text-center" >
				<div className=" flex flex-col w-65 md:w-[45%] items-center mt-12 pt-12 md:ml-44 text-black text-opacity-80 rounded-xl bg-full" style={{backgroundImage: "url('/bg.png')"}}>
					<h1 className=" font-bold md:text-5xl text-3xl mb-8">人工智能直播生产</h1>
					<p className=" text-lg md:text-2xl">奥森小冰是人工智能内容生产的先行者，拥有全球领先的核心技术，并已形成完善的产品线。奥森小冰的人工智能内容生产，着眼于在达到与相应人类生产者同等质量水准的前提下，充分发挥人工智能快速学习、高并发与稳定性等特点，协助弥补“高度定制化内容”的供需关系短板。</p>
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
			<div className=" p-28  text-lg font-bold gap-24 mt-5  hidden md:block text-black">
				<div className=" flex justify-center items-center divide-black divide-x mr-8">
					<div className="flex flex-col justify-center items-center pr-8">
						<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
						<p>满足企业巨量和多样化设计需求</p>
					</div>
					<div className="flex flex-col justify-center items-center pl-12 pr-8">
						<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
						<p>音乐制作团队降本增效</p>
					</div>
					<div className="flex flex-col justify-center items-center pl-12 pr-8">
						<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
						<p>降低创作门槛，赋能音乐爱好者</p>
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
				<div className="flex flex-col justify-center w-72 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 rounded-xl">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">一键生成高质量音乐作品</h2>
					<p>输入一段文字描述或一张图片，模型即可自动生成一首独一无二的歌曲旋律，并根据曲风选择相应乐器音色生成伴奏，同时完成歌词创作。</p>
				</div>
				<div className="flex flex-col justify-center w-72 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 rounded-xl">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">海量生成作品，应用场景广泛</h2>
					<p>可应用于各类音乐内容的创作，如流行歌曲、背景音乐，以及视频、有声故事、游戏、影视等各类场景中的配乐，大大降低音乐版权的采购成本。</p>
				</div>
				<div className="flex flex-col justify-center w-72 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 rounded-xl">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">功能组合，灵活搭配</h2>
					<p>包含听音记谱、人工智能作曲、人工智能编曲、人工智能作词、视频BGM创作等多种功能，支持灵活搭配。</p>
				</div>
				<div className="flex flex-col justify-center w-72 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-8 rounded-xl">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">支持多并发需求，提供多种合作模式</h2>
					<p>支持多并发需求，提供短期使用权、长期使用权、排他性使用权和所有权等多种合作模式，为每个音乐爱好者提供创作助理。</p>
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
					<img className="object-cover w-110 min-w-28" src="ani_image1.png" alt="" />
					<img className=" absolute top-3/4 -right-2/4 z-10 object-cover w-46 min-w-36" src="ani_image2.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">中国纺织信息中心国家纺织产品开发中心</h2>
					<p className=" text-lg text-black">依托奥森小冰的人工智能创造技术，奥森小冰与中国纺织信息中心、国家纺织产品开发中心共同推出了人工智能纺织服装图案设计平台。随着中国纺织服装制造业的高速发展，创新设计能力已成为新的行业生产力。如何更好地把握时尚设计话语权、打造时尚设计协同平台、构筑时尚设计价值生态、树立时尚设计先锋形象，成为了中国纺织服装制造业优化升级面临的重任。该平台帮助成千上万纺织服装制造企业重塑核心竞争力，实现从中国制造到中国“智”造的优化升级。在奥森小冰人工智能技术的加持下，该平台可实现为企业按需定制100%原创的专属图案纹样，并保持高度的质量稳定性，帮助企业释放设计潜能，实现大规模、多样化、质量稳定的按需设计。</p>
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
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">惠普</h2>
					<p className=" text-lg text-black">依托奥森小冰的人工智能创造技术，奥森小冰为惠普提供了高度定制化的马赛克（Mosaic）种子图，首批4000款种子图分为都市科技、年轻活力、经典时尚、文化传统四大类。马赛克是惠普数字印刷的可变设计工具，通过该工具，惠普客户可基于马赛克种子图瞬间创造出海量独特且美观的设计图案，为消费者带来个性化的使用体验。奥森小冰的马赛克种子图拥有按需定制功能，可以帮助用户更高效地获得合适的种子图并应用到设计中，不必担心与其他人使用到相同的图案。</p>
				</div>

				<div className=" relative mt-24 min-w-68">
					<img className="object-cover w-110 min-w-28" src="ani_image3.jpg" alt="" />
					<img className=" absolute top-3/4 -left-2/4 z-20 object-cover w-46 min-w-36" src="ani_image6.png" alt="" />
				</div>

			</div>

			<div className=" w-full bg-white p-16 flex justify-around items-center mb-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">特步</h2>
					<p className=" text-lg text-black">特步一直在探索适合行业特性、企业特点的差异化发展之路。奥森小冰与特步合作，依托奥森小冰人工智能创造技术，推出定制化服装设计生产及零售平台，为消费者打造“千人千T”的专属定制设计，满足每个消费者的个性化需求。奥森小冰与特步还联合阿里智能制造，打造柔性生产线，实现专属定制服饰的快速生产，创造服装制造业生产及零售的新模式。在柔性生产的支持下，每个消费者都能定制及购买专属的特步品牌服饰，每个人都能拥有自己专属的AI设计师，审美品位和需求都能得到充分尊重。</p>
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
					title={(<p className=" text-black">惠普</p>)}
				>
					<p className=" text-sm text-black">依托奥森小冰的人工智能创造技术，奥森小冰为惠普提供了高度定制化的马赛克（Mosaic）种子图，首批4000款种子图分为都市科技、年轻活力、经典时尚、文化传统四大类。马赛克是惠普数字印刷的可变设计工具，通过该工具，惠普客户可基于马赛克种子图瞬间创造出海量独特且美观的设计图案，为消费者带来个性化的使用体验。奥森小冰的马赛克种子图拥有按需定制功能，可以帮助用户更高效地获得合适的种子图并应用到设计中，不必担心与其他人使用到相同的图案。</p>
				</AccordionItem>
				<AccordionItem
					key="2" 
					aria-label="Accordion 2" 
					title={(<p className=" text-black">特步</p>)}
				>
					<p className=" text-sm text-black">特步一直在探索适合行业特性、企业特点的差异化发展之路。奥森小冰与特步合作，依托奥森小冰人工智能创造技术，推出定制化服装设计生产及零售平台，为消费者打造“千人千T”的专属定制设计，满足每个消费者的个性化需求。奥森小冰与特步还联合阿里智能制造，打造柔性生产线，实现专属定制服饰的快速生产，创造服装制造业生产及零售的新模式。在柔性生产的支持下，每个消费者都能定制及购买专属的特步品牌服饰，每个人都能拥有自己专属的AI设计师，审美品位和需求都能得到充分尊重。</p>
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
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">依文</h2>
					<p className=" text-lg text-black">依托奥森小冰的人工智能创造技术，奥森小冰与中国纺织信息中心、国家纺织产品开发中心共同推出了人工智能纺织服装图案设计平台。随着中国纺织服装制造业的高速发展，创新设计能力已成为新的行业生产力。如何更好地把握时尚设计话语权、打造时尚设计协同平台、构筑时尚设计价值生态、树立时尚设计先锋形象，成为了中国纺织服装制造业优化升级面临的重任。该平台帮助成千上万纺织服装制造企业重塑核心竞争力，实现从中国制造到中国“智”造的优化升级。在奥森小冰人工智能技术的加持下，该平台可实现为企业按需定制100%原创的专属图案纹样，并保持高度的质量稳定性，帮助企业释放设计潜能，实现大规模、多样化、质量稳定的按需设计。</p>
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






		{/** 人工智能音乐 */}
		<div className=" bg-white relative w-full hidden md:block">
			<div className="flex items-center justify-between">
			<img className=" max-w-2xl w-full" src="https://business.xiaoice.com/img/produce/image3.png" alt="" />
			<div className=" max-w-xl text-left flex-col h-56 text-[#00305a]">
				<h2 className=" text-5xl font-bold  pb-8">人工智能音乐</h2>
				<p className=" text-xl text-black">已在工业设计、数字印刷图案设计、纺织服装面料设计包装设计等领域落地，能够稳定设计三十余种主流风格并实现按需创作，多条面向量产化的生产线已实现产业化贯通，旨在协助各领域改善设计方面的短缺。方案提供  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
			</div>

			<div></div>
			</div>
		</div>


		{/** 移动端 */}
		{/** 人工智能音乐 */}
		<div className=" flex flex-col justify-center items-center  w-full bg-[#edf3ff] text-[#00305a] p-4 md:hidden">
			<h2 className=" font-bold text-xl pt-8">人工智能设计</h2>
			<div className=" max-w-md text-center p-2">
				<p className=" text-sm text-black">已在工业设计、数字印刷图案设计、纺织服装面料设计包装设计等领域落地，能够稳定设计三十余种主流风格并实现按需创作，多条面向量产化的生产线已实现产业化贯通，旨在协助各领域改善设计方面的短缺。方案提供  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
			</div>
			<img className=" max-w-md object-cover p-8" src="ani1.jpg" alt="" />
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
		{/** 满足音乐 */}
		<div className=" bg-slate-50 md:bg-white flex  items-center  p-4   gap-4  overflow-x-scroll md:overflow-x-hidden whitespace-nowrap md:justify-center">
			<div className="  w-96  flex flex-col justify-center items-left  bg-white p-4 pr-24  text-black">
				<img className=" object-cover md:w-24 w-12" src="svg_1.png" alt="" />
				<h2 className="font-bold  pb-4 pt-3 text-black">满足企业巨量和多样化设计需求</h2>
			</div>
			
			<div className=" w-96  flex flex-col justify-center items-left  bg-white p-4 py-7 pr-24 text-black">
				<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
				<h2 className="font-bold  pb-4 pt-3 text-black">实现个人消费者单独一件定制设计的需求</h2>
			</div>

			<div className=" w-96  flex flex-col justify-center items-left   bg-white p-4 py-7 pr-24 text-black">
				<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
				<h2 className="font-bold  pb-4 pt-3 text-black">设计团队降本增效</h2>
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



			{/**
			 * 		<div className="  text-left text-[#00305a] hidden md:block">
			<div className="divide-x divide-black justify-center items-center flex p-12">
			<div className=" p-24 max-w-5xl w-[30%]">
				<h2 className=" font-bold text-3xl pb-6">赋能品牌</h2>
				<p className="text-black text-lg">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div className="p-24 max-w-5xl w-[30%]">
				<h2 className=" font-bold text-3xl pb-6">音乐教育</h2>
				<p className="text-black text-lg">奥森小冰运用全球领先的人工智能音乐技术，持续开拓AI在音乐教育领域的更多应用方式，传播音乐知识与音乐思维，赋予音乐教育更多创新性。在奥森小冰人工智能技术的赋能下，音乐创作的门槛大大降低，更多人可以体验到创作的乐趣，音乐底蕴与素养得以提升。例如，在上海音乐学院学习期间，奥森小冰以编曲人的身份参与到上海音乐学院“当传统文化遇上人工智能”项目中，作为“非遗音乐大使”帮助非物质文化遗产相关地区的孩子们完成了人生中第一次歌曲的创作。根据孩子们创作的松阳高腔风格的主旋律，奥森小冰通过编曲完成一首首完整的歌曲，以全新的形式激发孩子们对音乐与科技的兴趣，让孩子们体验到前沿科技与传统文化的完美融合，感受到音乐与科技碰撞后的吸引力。</p>
			</div>
			</div>
		</div>

		<div className="  text-left text-[#00305a] hidden md:block">
			<div className="divide-x divide-black flex p-12 justify-center">
			<div className="p-24 max-w-5xl w-[30%]">
				<h2 className=" font-bold text-3xl pb-6">音乐内容生产平台</h2>
				<p className="text-black text-lg">奥森小冰的音乐创作能力，已经完成生产线生产所必须的创造力模块，并已在联通沃音乐等平台完成了工业化使用的考验。奥森小冰与联通沃音乐的合作，依托奥森小冰作词、作曲、编曲的端到端音乐创作能力，同时为数亿用户提供100%音乐定制内容。在联通沃音乐的5G平台建设中，奥森小冰的人工智能音乐生成作为在为联通沃音乐5G彩铃平台提供自有版权音乐内容的同时，帮助联通沃音乐向合作伙伴输出音乐生产力，打造更优质的用户体验，进而实现“新音乐、新科技”数字化转型升级。</p>
			</div>
			<div className="p-24 max-w-5xl w-[30%]">
				<h2 className=" font-bold text-3xl pb-6">视频音乐平台、影视配乐</h2>
				<p className="text-black text-lg">奥森小冰正持续面向视频音乐平台、影视配乐领域输出音乐生产能力。面向视频音乐平台，奥森小冰可以为音乐人提供源源不断的创作灵感，并为视频内容自动配乐。面向影视配乐领域，奥森小冰可以为影视剧批量生产符合主题、情感及场景的音乐素材，并为音乐人提供主题曲创作灵感。</p>
			</div>
			</div>
		</div>
			 */}

			 <div className="flex flex-col bg-white">
				<div className="flex justify-center items-center">
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"赋能品牌"} /></div>
						<p className="text-black text-lg">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
					</div>
					<WaterDropGrid />
				</div>

				<div className="flex justify-center items-center">
					<WaterDropGrid />
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"音乐教育"} /></div>
						<p className="text-black text-lg">奥森小冰运用全球领先的人工智能音乐技术，持续开拓AI在音乐教育领域的更多应用方式，传播音乐知识与音乐思维，赋予音乐教育更多创新性。在奥森小冰人工智能技术的赋能下，音乐创作的门槛大大降低，更多人可以体验到创作的乐趣，音乐底蕴与素养得以提升。例如，在上海音乐学院学习期间，奥森小冰以编曲人的身份参与到上海音乐学院“当传统文化遇上人工智能”项目中，作为“非遗音乐大使”帮助非物质文化遗产相关地区的孩子们完成了人生中第一次歌曲的创作。根据孩子们创作的松阳高腔风格的主旋律，奥森小冰通过编曲完成一首首完整的歌曲，以全新的形式激发孩子们对音乐与科技的兴趣，让孩子们体验到前沿科技与传统文化的完美融合，感受到音乐与科技碰撞后的吸引力。/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
					</div>
				</div>

				<div className="flex justify-center items-center">
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"音乐内容生产平台"} /></div>
						<p className="text-black text-lg">奥森小冰的音乐创作能力，已经完成生产线生产所必须的创造力模块，并已在联通沃音乐等平台完成了工业化使用的考验。奥森小冰与联通沃音乐的合作，依托奥森小冰作词、作曲、编曲的端到端音乐创作能力，同时为数亿用户提供100/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
					</div>
					<ShuffleHero />
				</div>

				<div className="flex justify-center items-center">
					<ShuffleHero />
					<div className=" p-24 max-w-5xl w-[30%] text-left">
						<div className="pb-4"><BubbleText content={"视频音乐平台、影视配乐"} /></div>
						<p className="text-black text-lg">奥森小冰正持续面向视频音乐平台、影视配乐领域输出音乐生产能力。面向视频音乐平台，奥森小冰可以为音乐人提供源源不断的创作灵感，并为视频内容自动配乐。面向影视配乐领域，奥森小冰可以为影视剧批量生产符合主题、情感及场景的音乐素材，并为音乐人提供主题曲创作灵感。/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
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
			<div>
				<h2 className=" font-bold text-xl text-black">赋能品牌</h2>
				<p className="text-black text-xs">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl text-black">赋能品牌</h2>
				<p className="text-black text-xs">奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
		</div>
	
		</div>
	);
}
