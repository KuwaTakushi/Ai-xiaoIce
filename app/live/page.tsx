/* eslint-disable @next/next/no-img-element */

export default function Live() {

	const handleScroll = () => {
		const element = document.getElementById('details-section');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
			<div className=" relative">
				<img className=" w-full" src="https://business.xiaoice.com/img/produce/banner.png?v=Ts0-FYBzXb6-zvpqegf6S7UPvFRSxRW4dfHLt5yWbIk" alt="" />
				<div className=" absolute top-1/3 left-1/4 -translate-x-24 text-white">
				<div className=" flex flex-col w-[50%]">
					<h1 className=" font-bold text-5xl mb-6">人工智能直播生产</h1>
					<p className=" text-2xl">小冰是人工智能内容生产的先行者，拥有全球领先的核心技术，并已形成完善的产品线。小冰的人工智能内容生产，着眼于在达到与相应人类生产者同等质量水准的前提下，充分发挥人工智能快速学习、高并发与稳定性等特点，协助弥补“高度定制化内容”的供需关系短板。</p>
				</div>
			</div>
			</div>


			<div className="flex mt-24 justify-center items-center divide-x divide-black p-16">
				<div className="w-[30%] flex flex-col justify-center items-center">
					<h2 className="font-bold text-2xl mb-4">人工智能设计</h2>
					<p className=" text-xl">短期内以低成本获得与世界</p>
					<p className=" text-xl">著名品牌相匹敌的设计能力</p>
				</div>
				<div className="w-[30%] flex flex-col justify-center items-center">
					<h2 className="font-bold text-2xl mb-4">人工智能音乐</h2>
					<p className=" text-xl">创作海量优质原创音乐内容</p>
				</div>
			</div>

			<div className=" bg-[#edf3ff] w-full mt-32 flex items-center">
				<img width={680} src="https://business.xiaoice.com/img/produce/image3.png" alt="" />
				<div className=" ml-36 max-w-[450px] text-left flex-col space-y-6">
					<h2 className=" text-4xl font-bold text-[#00305a]">人工智能设计</h2>
					<p>已在工业设计、数字印刷图案设计、纺织服装面料设计包装设计等领域落地，能够稳定设计三十余种主流风格并实现按需创作，多条面向量产化的生产线已实现产业化贯通，旨在协助各领域改善设计方面的短缺。方案提供  “一键生成”  艺术图案纹样设计能力，帮助企业在短期内、以低成本获得与世界著名品牌相匹敌的设计能力提升产品单价，降本增效，满足消费者日益增长的多样化设计美学需求，升级企业竞争力实现企业数字化转型。</p>
				</div>
			</div>


			<div className=" flex flex-col justify-center items-center mt-12">
				<h1 className=" font-bold text-4xl mb-12">客户案例</h1>

				<div className=" flex bg-[#edf3ff] w-full justify-center gap-24 items-start p-20">
					<div className="w-[580px] h-[400px]">
						<img width={580} src="https://business.xiaoice.com/img/vhuman/ani_image111.png?v=Q90qX5Q42LQhmegIhnMlqNEX87074phtiCQrRJLYp_A" alt="" />
					</div>

					<div className=" flex flex-col text-left max-w-[550px] mt-4">
						<h2 className=" text-[#00305a] pb-4 text-4xl font-bold">招商局集团 - 招小影，数字员工</h2>
						<p className="text-[#00305a] text-xl">2022年10月26日，招商局集团正式宣布首位数字员工“招小影”入职，她诞生于招商局金融科技有限公司与小冰公司，联合研发的招商局集团首个数字人平台——“招商如影”。招小影身怀“绝技”，是常伴每个招商人左右的小帮手。未来，招小影也将活跃在招商地产、招商物流、招商证券、招商公路、招商蛇口等具体业务场景中，直接为民众服务。</p>
					</div>
				</div>


				<div className=" flex bg-[#edf3ff] w-full justify-center gap-24 items-start p-20">
					<div className=" flex flex-col text-left max-w-[550px] mt-4">
						<h2 className=" text-[#00305a] pb-4 text-4xl font-bold">万科集团 – 崔筱盼，财务部催收专员，数字员工</h2>
						<p className="text-[#00305a] text-xl">2021年2月，崔筱盼在万科集团财务部入职。基于流程和数据建模，结合小冰框架的整体能力，由她催办的预付应收逾期单据核销率达到91.44%。由于业绩突出，万科集团董事会主席郁亮在2021年底，颁给她“万科集团总部2021年度优秀新人奖”，并对小冰的神经网络渲染等技术给予了肯定。</p>
					</div>

					<div className="w-[580px] h-[400px]">
						<img width={580} src="https://business.xiaoice.com/img/vhuman/ani_image1.png?v=1ImfCyyeRH7BMmKoqg0tYq-RjNIxUQJimkmKcNTzg7Y" alt="" />
					</div>
				</div>


				<div className=" flex bg-white w-full justify-center gap-24 items-start p-20">
					<div className="w-[580px] h-[400px]">
						<img width={580} src="https://business.xiaoice.com/img/vhuman/video_poster1.png?v=0IJp3HYJN5s9zog-SMmp3ZSOQ0l5ZIFAPs2cxUY2BDg" alt="" />
					</div>

					<div className=" flex flex-col text-left max-w-[550px] mt-4">
						<h2 className=" text-[#00305a] pb-4 text-4xl font-bold">国家体育总局冬运中心 – 观君，冬奥AI裁判与教练，数字专家</h2>
						<p className="text-[#00305a] text-xl">2019年起，小冰团队着手为国家体育总局冬运中心秘密研发人工智能裁判与教练系统——观君。这是AI技术首次全程参与国家队备战冬奥训练，并成为辅助运动员在此全球顶级赛事中取得两金一银战绩的首个案例。小冰团队也因此得到了国家体育总局冬运中心的正式表彰。中国首枚冬奥会女子空中技巧金牌获得者徐梦桃，在接受中国国际广播电台采访时表示：“本次备战北京冬奥会的明显变化是，训练中有人工智能小冰的技术分析，可以看技术录像，评测打分，这些都是科技助力。”除了参与到队伍的日常训练外，观君还在2021年北京冬奥测试赛空中技巧项目中，担任了唯一竞赛裁判，其执裁结果也获得了国际雪联、冬奥组委、国家体育总局冬运中心等一致认可。</p>
					</div>
				</div>


				<div className=" flex bg-white w-full justify-center gap-24 items-start p-20">
					<div className=" flex flex-col text-left max-w-[550px] mt-4">
						<h2 className=" text-[#00305a] pb-4 text-4xl font-bold">每日经济新闻 – N小黑与N小白，7x24小时主播，数字专家</h2>
						<p className="text-[#00305a] text-xl">2021年，每经与小冰共同打造的数字主播N小黑、N小白，与“AI电视”一同正式上线。每经“AI电视”是全球首个由人工智能技术驱动的视频直播电视栏目，采编播全流程均由AI自动完成，可7x24小时不间断播报全球财经资讯，极大提高了信息传播及时度和覆盖广度。小冰的数字人，协助传统财经媒体实现业务创新，加速向新型智慧媒体的转型。</p>
					</div>

					<div className="w-[580px] h-[400px]">
						<img width={580} src="https://business.xiaoice.com/img/vhuman/video_poster2.png?v=ldCL21HLdgmheNURw6Rtt1CeFK9YJK-3s2_5xsPlegQ" alt="" />
					</div>
				</div>

			</div>
		</div>

	);
}
