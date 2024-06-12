"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

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
    		<div className="bg-cover w-full h-110 p-12 flex justify-center md:justify-center text-center" style={{backgroundImage: "url('/bg-2.png')"}}>
				<div className=" flex flex-col text-white w-65 md:w-[38%] mt-12 md:ml-44">
					<h1 className=" font-bold md:text-5xl text-3xl mb-8">数字名片</h1>
					<p className=" text-lg md:text-2xl">让座舱、家居中冷冰冰的中控系统，升级成为与用户一起出行、生活的虚拟好伙伴。在车载场景打造的车载智能助理，可实现全车级的语音控制，并可实时与用户进行自然而富有情感的互动，为用户带来可媲美人类的交流体验。在智能家居场景打造的智能语音助手，可实现系统级全覆盖的语音控制，在实现家居产品全方位联动的同时，主动学习用户的生活习惯和特点，打造有温度主动式的拟人陪伴。</p>
				</div>
			</div>


			<div className=" text-lg font-bold mt-5 hidden md:block bg-white ">
				<div className="flex justify-center items-center divide-x  p-28 divide-black gap-24">
				<div className="flex flex-col justify-center items-center">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<p className="text-black">从冷冰冰的中控系统，升级为与用户一起出行、生活的好伙伴</p>
				</div>
				<div className="flex flex-col justify-center items-center pl-12">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<p className="text-black">系统级全覆盖的语音控制，车载、家居产品全方位联动</p>
				</div>
				<div className="flex flex-col justify-center items-center pl-12">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<p className="text-black">自然而富有情感的声音与内容生成，可媲美人类的交互体验</p>
				</div>
				</div>
			</div>

			{/** 移动端 */}
			<div className=" bg-slate-50 md:bg-white flex  items-center  p-4   gap-4  overflow-x-scroll  md:overflow-x-hidden whitespace-nowrap md:justify-center">
				<div className=" mx-auto  flex flex-col justify-center items-left  bg-white p-4 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_1.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3 text-black">从冷冰冰的中控系统，升级为与用户一起出行、生活的好伙伴</h2>
				</div>
				
				<div className=" mx-auto  flex flex-col justify-center items-left  bg-white p-4 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3 text-black">系统级全覆盖的语音控制，车载、家居产品全方位联动</h2>
				</div>

				<div className=" mx-auto  flex flex-col justify-center items-left  bg-white p-4 pr-24">
					<img className=" object-cover md:w-24 w-12" src="svg_2.png" alt="" />
					<h2 className="font-bold  pb-4 pt-3 text-black">自然而富有情感的声音与内容生成，可媲美人类的交互体验</h2>
				</div>
			</div>



			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" text-left hidden md:block bg-white">
				<div className="p-36 flex justify-center gap-24">
				<div className="flex flex-col justify-center w-72 ">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl ">一键生成高质量音乐作品</h2>
					<p>输入一段文字描述或一张图片，模型即可自动生成一首独一无二的歌曲旋律，并根据曲风选择相应乐器音色生成伴奏，同时完成歌词创作。</p>
				</div>
				<div className="flex flex-col justify-center w-72">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">海量生成作品，应用场景广泛</h2>
					<p>可应用于各类音乐内容的创作，如流行歌曲、背景音乐，以及视频、有声故事、游戏、影视等各类场景中的配乐，大大降低音乐版权的采购成本。</p>
				</div>
				<div className="flex flex-col justify-center w-72">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">功能组合，灵活搭配</h2>
					<p>包含听音记谱、人工智能作曲、人工智能编曲、人工智能作词、视频BGM创作等多种功能，支持灵活搭配。</p>
				</div>
				<div className="flex flex-col justify-center w-72">
					<img className=" object-cover w-24 pb-4" src="svg_1.png" alt="" />
					<h2 className=" font-bold text-xl">支持多并发需求，提供多种合作模式</h2>
					<p>支持多并发需求，提供短期使用权、长期使用权、排他性使用权和所有权等多种合作模式，为每个音乐爱好者提供创作助理。</p>
				</div>
				</div>
			</div>

			{/** 移动端 */}
			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" md:hidden bg-slate-50 p-4">
				<Accordion  className=" bg-white ">
					<AccordionItem key="1"
						isCompact 
						aria-label="Accordion 1" 
						title="一键生成高质量音乐作品"
						startContent={
							<img className=" object-cover w-8" src="svg_1.png" alt="" />
						}
					>
						<p className="text-black text-sm">输入一段文字描述或一张图片，模型即可自动生成一首独一无二的歌曲旋律，并根据曲风选择相应乐器音色生成伴奏，同时完成歌词创作。</p>
					</AccordionItem>
					<AccordionItem 
						key="2" 
						isCompact 
						aria-label="Accordion 2" 
						title="海量生成作品，应用场景广泛"
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
						title="功能组合，灵活搭配"
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
						title="支持多并发需求，提供多种合作模式"
						startContent={
							<img className=" object-cover w-8" src="svg_1.png" alt="" />
						}
					>
					<p className="text-black text-sm">支持多并发需求，提供短期使用权、长期使用权、排他性使用权和所有权等多种合作模式，为每个音乐爱好者提供创作助理。</p>
				</AccordionItem>
			</Accordion>
		</div>








		{/** 中国纺织信息中心国家纺织产品开发中心 页面 */}
		<div className=" hidden md:block">
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
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">万事利</h2>
					<p className=" text-lg text-black">依托奥森小冰人工智能创造技术，万事利丝绸与奥森小冰共同推出面向消费者的定制化专属丝巾设计及零售平台“西湖一号”。该平台可实现AI设计师奥森小冰与消费者的实时交流，根据消费者自身特点进行一对一的丝巾定制化设计及生产制作，在满足每个消费者个性化需求的同时大大降低制造及零售企业的经营成本。万事利作为中国丝绸服饰产业发展风向标，与奥森小冰的深化合作落地，借助奥森小冰人工智能技术，解决零售场景中的真实痛点，为海量消费者同时进行按需专属设计并保持高度的质量稳定性，不仅突破了人类设计师设计能力的限制，更从根本上解决了需求预测和库存堆积的问题。</p>
				</div>
			</div>

		</div>



		{/** 移动端 */}
		<div className=" p-4 text-[#00305a] md:hidden space-y-4">
			<div>
				<h2 className=" font-bold text-xl">赋能品牌</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">音乐教育</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>

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

			<div className=" pt-4">
				<h2 className=" font-bold text-xl">音乐内容生产平台</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">视频音乐平台、影视配乐</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>

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



			<div className=" pt-4">
				<h2 className=" font-bold text-xl">音乐内容生产平台</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">视频音乐平台、影视配乐</h2>
				<p className=" text-xs text-black">奥森奥森小冰与众多世界著名品牌、广泛的文化机构团体以及各行各业影响力卓著的精彩盛会合作进行音乐创作，赋能合作伙伴开拓科技、音乐与行业融合的新方式，为用户带来丰富多元、更具科幻感的音乐体验。例如，奥森奥森小冰与著名唱作歌手、电子音乐制作人朱婧汐共同创作上海大剧院20/20演出季主题曲《HOPE》，帮助上海大剧院探索表演艺术、剧场舞台领域的破圈式举措。再如，奥森奥森小冰受邀与著名音乐人马伯骞联合为Burberry的新品系列创作推广单曲《Runway2.0》，赋能品牌实现数字化转型升级，共同为用户带来独特的品牌体验。又如，奥森奥森小冰为山东卫视创作2018春晚主题曲《幸福出发》，助力传统卫视树立新颖独特的形象。</p>
			</div>

			<div className=" divide-y divide-slate-500 pt-4 bg-white">
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

		{ /** 依文页面 */}
		<div className=" hidden md:block">
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
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">万事利</h2>
					<p className=" text-lg text-black">依托奥森小冰人工智能创造技术，万事利丝绸与奥森小冰共同推出面向消费者的定制化专属丝巾设计及零售平台“西湖一号”。该平台可实现AI设计师奥森小冰与消费者的实时交流，根据消费者自身特点进行一对一的丝巾定制化设计及生产制作，在满足每个消费者个性化需求的同时大大降低制造及零售企业的经营成本。万事利作为中国丝绸服饰产业发展风向标，与奥森小冰的深化合作落地，借助奥森小冰人工智能技术，解决零售场景中的真实痛点，为海量消费者同时进行按需专属设计并保持高度的质量稳定性，不仅突破了人类设计师设计能力的限制，更从根本上解决了需求预测和库存堆积的问题。</p>
				</div>
			</div>
		</div>

		</div>

	);
}
