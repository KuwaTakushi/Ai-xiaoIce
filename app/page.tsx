"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
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

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
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
      <img width={800} src="https://business.xiaoice.com/img/home/vhuman_card.png?v=jtts2T0wqaRuiWnm2yE2UBY6g3ctHo0p4b1DXtbCZho" alt="" />
    </motion.div>
  );
};




const cards = [
  {
    url: "https://business.xiaoice.com/img/home/video_poster1.png?v=7mlv8aSbkIzOgtcRbuavcTQp4NPwbQWzK98qqNxplio",
    id: 1,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster2.png?v=lK4_RwbyIq_-lAjjU-PfBxiCGeNPVe6Eb7G4naNYN_Q",
    id: 2,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster3.png?v=3ktPj18I0w9ZVAi0gzN8VIZRXl1dqSGmZfETk56veOI",
    id: 3,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster4.png?v=shKDsbzakmxRf8EBUYfRI7PpVWC6G2WU71m0a3_zvkc",
    id: 4,
  },
  {
    url: "https://business.xiaoice.com/img/home/video_poster5.png?v=kn1QWDiaNe8ltKkv83ZW1fZr9wV8HngxOkb3NJ1sSEo",
    id: 5,
  },
];

const Card = ({ card }: {card: any}) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[340px] md:w-[520px] h-[240px] w-[200px] rounded-3xl overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

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
    <div className="w-full  mt-8 md:mt-8 bg-white flex justify-between items-center ">
      <img width={500} className="" src="https://business.xiaoice.com/img/home/img1.png" alt="" />
      <img width={450} className=" ml-auto" src="https://business.xiaoice.com/img/circle1.png" alt="" />
    <div className=" text-[#00305a] text-center">
    </div>
  </div>
  <div className="w-full bg-[#edf3ff]">
    <img width={500} className="" src="https://business.xiaoice.com/img/home/img2.png" alt="" />

    <div className=" text-[#00305a] text-center">
    </div>
  </div>
  <div className="w-full  bg-white flex justify-end">
    <img width={500} className="" src="https://business.xiaoice.com/img/home/img3.png" alt="" />

    <div className=" text-[#00305a] text-center">
    </div>
  </div>
  <div className="w-full  bg-[#edf3ff] flex justify-end">
    <img width={500} className="" src="https://business.xiaoice.com/img/home/img4.png" alt="" />
    
    <div className=" text-[#00305a] text-center">
    </div>
  </div>


  <HorizontalScrollCarousel />

  </div>
);