/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
"use client"
import React, { useRef, useState } from "react";
import { circOut, cubicBezier, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://aicplatform.blob.core.chinacloudapi.cn/business-home/video1.mp4"
        subheading="聚焦于关键岗位
        聚焦于关键岗位   关注穿透To B到To C的体验   强调人与人工智能的协同"
        heading="人工智能小冰商业解决方案"
        children
      >
      </TextParallaxContent>
      <ExampleContent />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children  }:  {imgUrl: string, subheading: string, heading: string, children: React.ReactNode}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl -m-4  bg-cover bg-center"
    >
      <div className="h-full w-full">
      <video autoPlay loop muted className="absolute top-0 left-0 object-cover h-full w-full"  src={imgUrl} controls={false}></video>
      </div>
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // [250, -250] 里面内容高度
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  // 透明度
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl md:mt-3 mt-3">
        {subheading}
      </p>
      <p className="mb-6 text-center text-xl md:mb-6 md:text-3xl md:mt-3 mt-3">
        招商热线：400-188-5609
      </p>

      <div className="relative space-y-8">
      <img width={800} src="/vhuman_card.png" alt="vhuman_card.png" />
      <div className="absolute top-2/4 left-1/3 transform -translate-x-1/3 -translate-y-1/2 text-center">
          <p className="text-white bg-opacity-50 text-lg pb-3 md:w-[100%]">
              为助力国内中小企业的数字化转型，小冰公司现推出“限时定制体验”活动，诚邀符合条件的中小企业、领域达人及个体经营者，创建自己的AI数字员工。
          </p>
          <p className="text-white text-lg bg-opacity-50 pb-5 md:w-[100%]">
              基于行业领先的大模型小样本技术，小冰公司为业界提供的AI数字员工定制服务，可支持高拟真、低门槛、低成本的形象及声音复刻。用户可通过便捷的线上自助服务，轻松畅享数字员工定制的全流程自动化服务。定制的数字员工，可广泛应用于视频内容生产及场景化交互服务。
          </p>
          <p className="text-white text-lg bg-[#476499] bg-opacity-50 md:w-[100%]">
              现在点击以下链接，即可享受智能化的业务升级之旅。特惠底价，额度有限，马上就来创建您的专属AI数字员工吧~~
          </p>

          <div className=" cursor-pointer mt-3">
            <img width={200} src="https://business.xiaoice.com/img/home/vhuman_btn.png?v=dR4GIst-GIV7cN2zEW8Gvy4ASZeG_K7G8ZU9Gbh-O9E" alt="" />

          </div>

      </div>
  </div>
    </motion.div>
  );
};

const cards = [
  {
    url: "https://business.xiaoice.com/img/home/video_poster1.png?v=7mlv8aSbkIzOgtcRbuavcTQp4NPwbQWzK98qqNxplio",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E4%B8%87%E5%BE%97%E8%B5%84%E8%AE%AF.mp4",
    id: 1,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster2.png?v=lK4_RwbyIq_-lAjjU-PfBxiCGeNPVe6Eb7G4naNYN_Q",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E5%9B%BD%E5%AE%B6%E7%BA%BA%E7%BB%87%E4%BA%A7%E5%93%81%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83.mp4",
    id: 2,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster3.png?v=3ktPj18I0w9ZVAi0gzN8VIZRXl1dqSGmZfETk56veOI",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E9%B2%81%E4%B8%B0%E7%BB%87%E6%9F%93.mp4",
    id: 3,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster4.png?v=shKDsbzakmxRf8EBUYfRI7PpVWC6G2WU71m0a3_zvkc",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E5%8D%8E%E4%BA%BA%E8%BF%90%E9%80%9A.mp4",
    id: 4,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster5.png?v=kn1QWDiaNe8ltKkv83ZW1fZr9wV8HngxOkb3NJ1sSEo",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E4%B8%8A%E9%9F%B3%E9%9F%B3%E5%B7%A5%E7%B3%BB.mp4",
    id: 5,
  },
];

const Card = ({ card }: { card: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <div
      key={card.id}
      className="group relative sm:h-[100px] sm:w-[180px] lg:h-[340px] lg:w-[480px] md:h-[240px] md:w-[200px] rounded-3xl overflow-hidden bg-neutral-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300"
      ></div>


      {isHovered && (
        <>
          <div className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer" onClick={onOpen}>
            <img width={70} src="https://business.xiaoice.com/img/play.png?v=-LoFVWmB1Rt5l_fg-Axds3laxN-pMqxY7OMyjckygbM" alt="" />
          </div>

          <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange} size="5xl" className=" bg-black p-4">
            <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <video controls>
                    <source src={card.videoUrl} type="video/mp4"/>
                  </video>
                </ModalBody>
              </>
            )}
          </ModalContent>
      </Modal>        
        </>

      )}



    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-30%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] text-center">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden -mt-36">
        <motion.div style={{ x }} className="flex gap-8 gap">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ExampleContent = () => (
  <div>

    <div className="w-full  mt-8 md:mt-8 bg-[#edf3ff] flex justify-between ">
      <img width={600} className="" src="https://business.xiaoice.com/img/home/img1.png" alt="" />
      <div className="relative flex items-center justify-center ml-auto">
        <img width={600} src="https://business.xiaoice.com/img/circle1.png" alt="" />
        <div className="absolute top-1/3  -left-3/4 max-w-4xl  w-[450px] text-[#00305a] text-xl">
          <h2 className=" font-bold text-[#00305a] mb-4 text-4xl">AI数字员工</h2>
          <p>
            2019年，小冰率先提出了数字人（AI Being）理念，并基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线。小冰的数字人具有不同的性格特征、态度观点、生物学特征、创造力、知识和技能，兼具情感交互能力、专业能力和内容生产能力，已被大众熟知，并应用在多个行业场景。随着数字人多样性（Diversity of AI Being）趋势的来临，每个人的日常工作和生活，将由更加丰富多彩的AI Beings所陪伴和环绕。
          </p>
        </div>
      </div>
    </div>




    <div className="w-full bg-white flex justify-between">
      <img width={600} className="" src="https://business.xiaoice.com/img/home/img2.png" alt="" />
      <div className="relative flex items-start justify-center ml-auto ">
        <img width={600} src="https://business.xiaoice.com/img/circle2.png" alt="" />
        <div className="absolute top-1/3  -left-3/4 max-w-4xl  w-[450px] text-[#00305a] text-xl">
          <h2 className=" font-bold text-[#00305a] mb-4 text-4xl">内容生产</h2>
          <p>
            小冰是人工智能内容生产的先行者，拥有全球领先的核心技术并已形成完善的产品线。小冰的人工智能内容生产，着眼于在达到与相应人类生产者同等质量水准的前提下，充分发挥人工智能快速学习、高并发与稳定性等特点，协助弥补 “ 高度定制化内容 ” 的供需关系短板。          </p>
        </div>
      </div>
    </div>


    <div className="w-full  mt-8 md:mt-8 bg-[#edf3ff] flex justify-between ">
      <div className="relative flex justify-center mr-auto">
        <img width={600} className="scale-x-[-1]" src="https://business.xiaoice.com/img/circle1.png" alt="" />
        <div className="absolute top-1/3  -right-3/4 max-w-4xl  w-[450px] text-[#00305a] text-xl">
          <h2 className=" font-bold text-[#00305a] mb-4 text-4xl">AI数字员工</h2>
          <p>
            2019年，小冰率先提出了数字人（AI Being）理念，并基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线。小冰的数字人具有不同的性格特征、态度观点、生物学特征、创造力、知识和技能，兼具情感交互能力、专业能力和内容生产能力，已被大众熟知，并应用在多个行业场景。随着数字人多样性（Diversity of AI Being）趋势的来临，每个人的日常工作和生活，将由更加丰富多彩的AI Beings所陪伴和环绕。
          </p>
        </div>
      </div>

      <img width={600} className="" src="https://business.xiaoice.com/img/home/img3.png" alt="" />
    </div>


    <div className="w-full bg-white flex justify-between ">
      <div className="relative flex justify-center mr-auto">
        <img width={600} className="scale-x-[-1]" src="https://business.xiaoice.com/img/circle2.png" alt="" />
        <div className="absolute top-1/3  -right-3/4 max-w-4xl  w-[450px] text-[#00305a] text-xl">
          <h2 className=" font-bold text-[#00305a] mb-4 text-4xl">AI数字员工</h2>
          <p>
            2019年，小冰率先提出了数字人（AI Being）理念，并基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线。小冰的数字人具有不同的性格特征、态度观点、生物学特征、创造力、知识和技能，兼具情感交互能力、专业能力和内容生产能力，已被大众熟知，并应用在多个行业场景。随着数字人多样性（Diversity of AI Being）趋势的来临，每个人的日常工作和生活，将由更加丰富多彩的AI Beings所陪伴和环绕。
          </p>
        </div>
      </div>

      <img width={600} className="" src="https://business.xiaoice.com/img/home/img4.png" alt="" />
    </div>

  <div className="flex justify-center items-end h-24">
    <h1 className=" text-[#00305a] font-bold text-5xl -mb-24">客户寄语</h1>
  </div>
  <HorizontalScrollCarousel />

  <div className=" flex flex-col items-center justify-center -mt-36">
    <h1 className=" text-[#00305a] font-bold text-5xl mb-24">生态合作伙伴</h1>
    <img width={1200} src="https://business.xiaoice.com/img/home/logo.png?v=-pfdMEKlplfktfXxOaO1zLgAIhghlr_GVuexryn6fAE" alt="" />
  </div>
  </div>
);