"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

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
    		<div className="bg-cover w-full h-110 p-12 flex justify-center md:justify-center text-center" style={{backgroundImage: "url('mathCard-bg.jpg')"}}>
				<div className=" flex flex-col text-white w-65 md:w-[38%] mt-12 md:ml-44">
					<h1 className=" font-bold md:text-5xl text-3xl mb-8">数字名片</h1>
					<p className=" text-lg md:text-2xl">数字名片是传统纸质名片的数字化升级，它以更便捷、更智能的方式展现您的个人信息和联系方式。告别纸质名片的浪费和繁琐，数字名片让您只需轻轻一扫，就能将所有信息传递给对方。您可以定制专属的数字名片，设计独特的风格，展现您的个人魅力。许多平台还提供数据分析功能，帮助您了解名片的传播效果和用户行为。无论是商务社交还是个人推广，数字名片都将成为您不可或缺的工具。</p>
				</div>
			</div>
			
			

			{/** 一键生成高质量音乐作品 页面 */}
			<div className=" text-center hidden md:block bg-white">
				<div className="p-36 flex justify-center gap-24">
				<div className="flex flex-col justify-center items-center w-72 shadow-md p-6 rounded-xl text-black">
					<img className=" object-cover w-24 pb-4" src="icon_1.png" alt="" />
					<h2 className=" font-bold text-xl ">便捷高效</h2>
					<p>用户可以通过手机扫描二维码或链接访问数字名片，获取联系方式、社交链接、个人简介等信息，省去了传统名片交换的繁琐步骤。</p>
				</div>
				<div className="flex flex-col justify-center items-center w-72 shadow-md p-6 rounded-xl text-black">
					<img className=" object-cover w-24 pb-4" src="icon_2.png" alt="" />
					<h2 className=" font-bold text-xl">个性化定制</h2>
					<p>奥森小冰支持用户根据自身需求和品牌形象定制数字名片，设计独特的风格和版面，展现个性魅力。</p>
				</div>
				<div className="flex flex-col justify-center items-center w-72 shadow-md p-6 rounded-xl text-black">
					<img className=" object-cover w-24 pb-4" src="icon_3.png" alt="" />
					<h2 className=" font-bold text-xl">环保节能</h2>
					<p>减少纸质名片的浪费，符合环保理念。</p>
				</div>
				<div className="flex flex-col justify-center items-center w-72 shadow-md p-6 rounded-xl text-black">
					<img className=" object-cover w-24 pb-4" src="icon_4.png" alt="" />
					<h2 className=" font-bold text-xl">基于需求定制化的数字名片</h2>
					<p>用户可以创建自己的数字名片网站，将个人信息、作品展示、联系方式等整合在一起，方便用户访问和了解。</p>
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
						title="便捷高效"
						startContent={
							<img className=" object-cover w-8" src="icon_1.png" alt="" />
						}
					>
						<p className="text-black text-sm">用户可以通过手机扫描二维码或链接访问数字名片，获取联系方式、社交链接、个人简介等信息，省去了传统名片交换的繁琐步骤。</p>
					</AccordionItem>
					<AccordionItem 
						key="2" 
						isCompact 
						aria-label="Accordion 2" 
						title="个性化定制"
						startContent={
							<img className=" object-cover w-8" src="icon_2.png" alt="" />
						}
					>
						<p className="text-black text-sm">奥森小冰支持用户根据自身需求和品牌形象定制数字名片，设计独特的风格和版面，展现个性魅力。</p>
					</AccordionItem>
					<AccordionItem 
						key="3" 
						isCompact 
						aria-label="Accordion 3" 
						title="环保节能"
						startContent={
							<img className=" object-cover w-8" src="icon_3.png" alt="" />
						}
					>
						<p className="text-black text-sm">减少纸质名片的浪费，符合环保理念。</p>
					</AccordionItem>
					<AccordionItem
						key="4" 
						isCompact 
						aria-label="Accordion 4" 
						title="基于需求定制化的数字名片"
						startContent={
							<img className=" object-cover w-8" src="icon_4.png" alt="" />
						}
					>
					<p className="text-black text-sm">用户可以创建自己的数字名片网站，将个人信息、作品展示、联系方式等整合在一起，方便用户访问和了解。</p>
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
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">培训会议</h2>
					<p className=" text-lg text-black">在各类企业培训、行业会议和研讨会上，奥森小冰利用AI数字名片快速分享与会者的资料、公司信息和会议内容。确保所有参会者能够及时获取最新资料，并能够通过数字名片实现互动与沟通。结合数据分析，了解参会者的兴趣和需求，奥森小冰为后续的培训和会议内容优化提供数据支持。提升会议效果和参会者满意度，促进知识分享和行业交流。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-110 min-w-28" src="ani_image3.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">客户支持</h2>
					<p className=" text-lg text-black">在客户支持和售后服务场景中，奥森小冰通过AI数字名片快速提供产品信息、操作指南和服务流程。确保客户在需要帮助时能够迅速获取所需信息，提高客户支持的响应速度和解决效率。通过智能分析客户的反馈和需求，奥森小冰优化产品和服务，提升客户满意度和忠诚度。实现从售前咨询到售后服务的全方位支持，奥森小冰增强客户体验和企业口碑。</p>
				</div>
			</div>

		</div>



		{/** 移动端 */}
		<div className=" p-4 text-[#00305a] md:hidden space-y-4">
			<div>
				<h2 className=" font-bold text-xl">培训会议</h2>
				<p className=" text-xs text-black">在各类企业培训、行业会议和研讨会上，奥森小冰利用AI数字名片快速分享与会者的资料、公司信息和会议内容。确保所有参会者能够及时获取最新资料，并能够通过数字名片实现互动与沟通。结合数据分析，了解参会者的兴趣和需求，奥森小冰为后续的培训和会议内容优化提供数据支持。提升会议效果和参会者满意度，促进知识分享和行业交流。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">客户支持</h2>
				<p className=" text-xs text-black">在客户支持和售后服务场景中，奥森小冰通过AI数字名片快速提供产品信息、操作指南和服务流程。确保客户在需要帮助时能够迅速获取所需信息，提高客户支持的响应速度和解决效率。通过智能分析客户的反馈和需求，奥森小冰优化产品和服务，提升客户满意度和忠诚度。实现从售前咨询到售后服务的全方位支持，奥森小冰增强客户体验和企业口碑。</p>
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
				<h2 className=" font-bold text-xl">会议展厅</h2>
				<p className=" text-xs text-black">针对展览会、沙龙等线下销售推广场景，奥森小冰全面打通物料触客、信息采集和客户跟进等业务流程。通过AI数字名片和智能分析工具，奥森小冰实时获取访客信息，提供个性化的接待服务。有效整合资源，优化流程，既能节约推广成本，又能提升推广效率。实现从客户初次接触到最终成交的全生命周期管理，奥森小冰打造先进的销售体验，提升企业竞争力和客户满意度。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">人脉社交</h2>
				<p className=" text-xs text-black">在社交媒体环境中，加推的企业销售工具帮助外部销售人员携带企业的销售物料，如PPT、官网、企业新闻、成功案例等内容。一键分享至朋友圈和微信群，即可智能获取访客的电话号码和其他联系方式。借助AI数字名片，奥森小冰实现更高效的客户管理和互动，助力企业通过社交网络进行客户转介绍，扩大客户资源，增强品牌影响力和市场覆盖率。</p>
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
				<h2 className=" font-bold text-xl">线上推广</h2>
				<p className=" text-xs text-black">通过官网、公众号、朋友圈等线上渠道，奥森小冰为销售人员、经销商、推荐官等角色提供量身定制的推广内容中心，旨在实现匿名流量的识别与转化，完成潜在客户信息的收集。利用AI技术和数据分析，奥森小冰精准推送符合用户需求的内容，提高用户互动率和转化率。通过智能化营销手段，提升品牌知名度和用户粘性，促进交易达成，有效助力企业业绩增长和市场拓展。</p>
			</div>
			<div>
				<h2 className=" font-bold text-xl">商务会见</h2>
				<p className=" text-xs text-black">在商务宴请、办公室会谈、咖啡厅洽谈等各种商务场景中，奥森小冰高效传递个人、公司和商品信息，展示专业形象。借助AI数字名片，奥森小冰实现快速分享和同步更新，确保信息传递的准确性和及时性。通过详细的数据分析，了解客户需求和兴趣点，奥森小冰制定更有针对性的沟通策略。提高商务会见的效率和效果，增强客户信任感和合作意愿，推动业务发展。</p>
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
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">会议展厅</h2>
					<p className=" text-lg text-black">针对展览会、沙龙等线下销售推广场景，奥森小冰全面打通物料触客、信息采集和客户跟进等业务流程。通过AI数字名片和智能分析工具，奥森小冰实时获取访客信息，提供个性化的接待服务。有效整合资源，优化流程，既能节约推广成本，又能提升推广效率。实现从客户初次接触到最终成交的全生命周期管理，奥森小冰打造先进的销售体验，提升企业竞争力和客户满意度。</p>
				</div>

				<div className=" relative mt-24 min-w-68">
					<img className="object-cover w-110 min-w-28" src="ani_image3.jpg" alt="" />
					<img className=" absolute top-3/4 -left-2/4 z-20 object-cover w-46 min-w-36" src="ani_image6.png" alt="" />
				</div>

			</div>

			<div className=" w-full bg-white p-16 flex justify-around items-center mb-24">
				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">人脉社交</h2>
					<p className=" text-lg text-black">在社交媒体环境中，加推的企业销售工具帮助外部销售人员携带企业的销售物料，如PPT、官网、企业新闻、成功案例等内容。一键分享至朋友圈和微信群，即可智能获取访客的电话号码和其他联系方式。借助AI数字名片，奥森小冰实现更高效的客户管理和互动，助力企业通过社交网络进行客户转介绍，扩大客户资源，增强品牌影响力和市场覆盖率。</p>
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
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">线上推广</h2>
					<p className=" text-lg text-black">通过官网、公众号、朋友圈等线上渠道，奥森小冰为销售人员、经销商、推荐官等角色提供量身定制的推广内容中心，旨在实现匿名流量的识别与转化，完成潜在客户信息的收集。利用AI技术和数据分析，奥森小冰精准推送符合用户需求的内容，提高用户互动率和转化率。通过智能化营销手段，提升品牌知名度和用户粘性，促进交易达成，有效助力企业业绩增长和市场拓展。</p>
				</div>
			</div>

			<div className=" w-full bg-[#edf3ff] p-16 flex justify-around items-center">
				<div className=" relative  z-20 min-w-68">
					<img className=" z-40 object-cover w-110 min-w-28" src="ani_image3.png" alt="" />
				</div>

				<div className=" flex flex-col w-110 min-w-64 text-left">
					<h2 className=" text-3xl text-[#00305a] font-bold pb-4">商务会见</h2>
					<p className=" text-lg text-black">在商务宴请、办公室会谈、咖啡厅洽谈等各种商务场景中，奥森小冰高效传递个人、公司和商品信息，展示专业形象。借助AI数字名片，奥森小冰实现快速分享和同步更新，确保信息传递的准确性和及时性。通过详细的数据分析，了解客户需求和兴趣点，奥森小冰制定更有针对性的沟通策略。提高商务会见的效率和效果，增强客户信任感和合作意愿，推动业务发展。</p>
				</div>
			</div>
		</div>

		</div>

	);
}
