"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDisclosure, Radio, RadioGroup, Tab, Tabs, CardFooter, Card as NextUiCard, ModalContent, ModalBody, Link, Modal } from "@nextui-org/react";
import { FloatingPhone } from "@/components/FloatingPhone";
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image';

const Image_PADDING = 12;
const BackgroundIconA = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" ><path fill="url(&quot;#SvgjsLinearGradient1223&quot;)" fillRule="evenodd" d="M100 100s12.5-33.474 12.5-57.143C112.5 19.187 106.904 0 100 0S87.5 19.188 87.5 42.857C87.5 66.527 100 100 100 100Zm0 0s14.831 32.508 31.567 49.245c16.737 16.737 34.262 26.347 39.144 21.466 4.881-4.882-4.729-22.407-21.466-39.144C132.508 114.831 100 100 100 100Zm0 0s33.474-12.5 57.143-12.5C180.812 87.5 200 93.096 200 100s-19.188 12.5-42.857 12.5S100 100 100 100Zm0 0s-32.508 14.831-49.245 31.567c-16.737 16.737-26.347 34.262-21.466 39.144 4.882 4.881 22.407-4.729 39.144-21.466C85.169 132.508 100 100 100 100Zm0 0c.028.074 12.5 33.5 12.5 57.143 0 23.669-5.596 42.857-12.5 42.857s-12.5-19.188-12.5-42.857S100 100 100 100Zm0 0S66.526 87.5 42.857 87.5C19.187 87.5 0 93.096 0 100s19.188 12.5 42.857 12.5C66.527 112.5 100 100 100 100Zm0 0s32.508-14.83 49.245-31.567c16.737-16.737 26.347-34.262 21.466-39.144-4.882-4.881-22.407 4.73-39.144 21.466C114.831 67.492 100 100 100 100ZM68.433 50.755C85.169 67.492 100 100 100 100S67.492 85.17 50.755 68.433C34.018 51.696 24.408 34.17 29.29 29.289c4.882-4.881 22.407 4.73 39.144 21.466Z" clipRule="evenodd"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1223"><stop stopOpacity=" 1" stopColor="rgba(105, 234, 203)" offset="0"></stop><stop stopOpacity=" 1" stopColor="rgba(234, 204, 248)" offset="0.48"></stop><stop stopOpacity=" 1" stopColor="rgba(118, 104, 226)" offset="1"></stop></linearGradient></defs></svg>
  );
}

const BackgroundIconB = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 24 24" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="SvgjsPath1072" d="M12 9.25a2.751 2.751 0 0 0 0 5.5 2.751 2.751 0 0 0 0-5.5zm0 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm.376-9.497a.749.749 0 0 0-.752 0 3.748 3.748 0 0 0 0 6.494.749.749 0 0 0 .752 0 3.748 3.748 0 0 0 0-6.494zM12 2.824c.46.412.75 1.01.75 1.676s-.29 1.264-.75 1.676c-.46-.412-.75-1.01-.75-1.676s.29-1.264.75-1.676zm-7.799.797a.747.747 0 0 0-.531.531 3.748 3.748 0 0 0 4.592 4.592.75.75 0 0 0 .531-.531 3.748 3.748 0 0 0-4.592-4.592zm.845 1.376a2.248 2.248 0 0 1 2.371 2.371 2.248 2.248 0 0 1-2.371-2.371zm-3.744 6.578a.749.749 0 0 0 0 .752 3.748 3.748 0 0 0 6.494 0 .749.749 0 0 0 0-.752 3.748 3.748 0 0 0-6.494 0zm1.571.376c.412-.46 1.01-.75 1.676-.75s1.264.29 1.676.75c-.412.46-1.01.75-1.676.75s-1.264-.29-1.676-.75zm.797 7.799a.748.748 0 0 0 .531.531 3.748 3.748 0 0 0 4.592-4.592.75.75 0 0 0-.531-.531A3.748 3.748 0 0 0 3.67 19.75zm1.376-.845a2.248 2.248 0 0 1 2.371-2.371 2.248 2.248 0 0 1-2.371 2.371zm7.33-2.75a.749.749 0 0 0-.752 0 3.748 3.748 0 0 0 0 6.494.749.749 0 0 0 .752 0 3.75 3.75 0 0 0 0-6.494zM12 17.726c.46.412.75 1.01.75 1.676s-.29 1.264-.75 1.676c-.46-.412-.75-1.01-.75-1.676s.29-1.264.75-1.676zm3.738-2.568a.75.75 0 0 0-.531.531 3.748 3.748 0 0 0 4.592 4.592.748.748 0 0 0 .531-.531 3.748 3.748 0 0 0-4.592-4.592zm.845 1.376a2.248 2.248 0 0 1 2.371 2.371 2.248 2.248 0 0 1-2.371-2.371zm-.379-4.959a.749.749 0 0 0 0 .752 3.748 3.748 0 0 0 6.494 0 .749.749 0 0 0 0-.752 3.748 3.748 0 0 0-6.494 0zm1.571.376c.412-.46 1.01-.75 1.676-.75s1.264.29 1.676.75c-.412.46-1.01.75-1.676.75s-1.264-.29-1.676-.75zm-2.568-3.738a.75.75 0 0 0 .531.531 3.748 3.748 0 0 0 4.592-4.592.747.747 0 0 0-.531-.531 3.748 3.748 0 0 0-4.592 4.592zm1.376-.845a2.248 2.248 0 0 1 2.371-2.371 2.248 2.248 0 0 1-2.371 2.371z" fill="url(&quot;#SvgjsLinearGradient1073&quot;)"></path><defs><linearGradient gradientTransform="rotate(0 0.5 0.5)" id="SvgjsLinearGradient1073"><stop stopOpacity=" 1" stopColor="rgba(105, 234, 203)" offset="0"></stop><stop stopOpacity=" 1" stopColor="rgba(234, 204, 248)" offset="0.48"></stop><stop stopOpacity=" 1" stopColor="rgba(102, 84, 241)" offset="1"></stop></linearGradient></defs></svg>
  );
}

const BackgroundIconC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 200 200"><path fill="url(#paint0_linear_104_116)" fillRule="evenodd" d="M103.143 0a4 4 0 0 1 4 4v38.675c0 4.396 6.062 5.575 7.709 1.498l14.487-35.858a4 4 0 0 1 5.208-2.21l5.828 2.354a4 4 0 0 1 2.21 5.207L127.14 51.895c-1.633 4.04 3.455 7.408 6.537 4.327l29.154-29.155a4 4 0 0 1 5.657 0l4.445 4.445a4 4 0 0 1 0 5.656L146.752 63.35c-3.125 3.126.38 8.264 4.43 6.494L185.11 55.02a4 4 0 0 1 5.267 2.063l2.517 5.76a4 4 0 0 1-2.064 5.267l-39.096 17.082c-3.972 1.735-2.733 7.665 1.601 7.665H196a4 4 0 0 1 4 4v6.286a4 4 0 0 1-4 4h-42.664c-4.335 0-5.573 5.93-1.602 7.665l39.096 17.082a4 4 0 0 1 2.064 5.266l-2.517 5.76a3.999 3.999 0 0 1-5.267 2.064l-33.928-14.823c-4.05-1.77-7.555 3.368-4.43 6.494l26.181 26.18a4 4 0 0 1 0 5.657l-4.445 4.445a4 4 0 0 1-5.657 0l-29.154-29.155c-3.082-3.081-8.17.287-6.537 4.327l15.445 38.229a4 4 0 0 1-2.21 5.207l-5.828 2.355a4.001 4.001 0 0 1-5.208-2.211l-14.487-35.858c-1.647-4.077-7.709-2.898-7.709 1.498V196a4 4 0 0 1-4 4h-6.286a4 4 0 0 1-4-4v-38.675c0-4.396-6.062-5.575-7.709-1.498l-14.487 35.858a4 4 0 0 1-5.208 2.211l-5.828-2.355a4 4 0 0 1-2.21-5.207l15.446-38.229c1.632-4.04-3.456-7.408-6.538-4.327L37.17 172.933a4 4 0 0 1-5.657 0l-4.445-4.445a4 4 0 0 1 0-5.657l26.18-26.181c3.126-3.125-.379-8.263-4.429-6.493L14.89 144.98a3.999 3.999 0 0 1-5.267-2.064l-2.517-5.76a3.999 3.999 0 0 1 2.064-5.266l39.096-17.082c3.971-1.735 2.733-7.665-1.602-7.665H4a4 4 0 0 1-4-4v-6.286a4 4 0 0 1 4-4h42.664c4.335 0 5.574-5.93 1.602-7.665L9.17 68.11a4 4 0 0 1-2.064-5.267l2.517-5.76a4 4 0 0 1 5.267-2.063l33.928 14.823c4.05 1.77 7.555-3.368 4.43-6.494L27.067 37.17a4 4 0 0 1 0-5.657l4.445-4.445a4 4 0 0 1 5.657 0l29.154 29.155c3.082 3.081 8.17-.287 6.538-4.327l-15.446-38.23a4 4 0 0 1 2.21-5.207l5.828-2.355a4 4 0 0 1 5.207 2.21l14.488 35.86c1.647 4.076 7.71 2.897 7.71-1.5V4a4 4 0 0 1 4-4h6.285ZM100 142.857c23.669 0 42.857-19.188 42.857-42.857 0-23.67-19.188-42.857-42.857-42.857-23.67 0-42.857 19.188-42.857 42.857S76.33 142.857 100 142.857Z" clipRule="evenodd"></path><defs><linearGradient id="paint0_linear_104_116" x1="20.5" x2="100" y1="16" y2="200" gradientUnits="userSpaceOnUse"><stop stopColor="#ACAAFF"></stop><stop offset="1" stopColor="#C0E8FF"></stop></linearGradient></defs></svg>
  );
}

export default function Home() {
  const [hoveredIndex, setActiveIndex] = useState<number | null>(null);
  const [customerIndex, setCustomerIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");


	const {isOpen, onOpen, onOpenChange} = useDisclosure();


  useEffect(() => {
    setCurrentVideoUrl(cards[customerIndex].videoUrl);
  }, [customerIndex]);

  return (
    <div className="bg-white overflow-x-hidden text-black">
      <TextParallaxContent />

      <div className="pt-16 pb-8 mt-28 w-full flex-col flex justify-center items-center relative bg-[#edf3ff]">
        <div className=" absolute z-0 top-6 opacity-50 left-1/2 -translate-x-12"><BackgroundIconA /></div>
        <h1 className="z-10 font-bold text-4xl text-[#00305a]  pb-16">专业AI数字人形象</h1>
        <h2 className=" text-slate-500 pt-4 pb-8 text-xl">多行业直播场景适配，助力AI数字人直播</h2>

        <div className="md:block hidden">
          <div className="  flex gap-24 bg-gradient-to-bl from-indigo-600 via-purple-700 to-pink-800 w-full justify-center max-w-7xl rounded-full">
            <FloatingPhone context="智能场景互动" backgroundImage="https://i.p-i.vip/20/20240621-667475869d07d.png" isEnablePreserve={true} />
            <FloatingPhone context="实时AI" backgroundImage="https://i.p-i.vip/20/20240622-66769425bdbfb.jpg" isEnablePreserve={true} />
            <FloatingPhone context="适配各行业场景" backgroundImage="https://i.p-i.vip/20/20240622-66769424965b0.jpg" isEnablePreserve={true} />
          </div>
        </div>
        
        <div className="md:hidden">
        <Carousel transition={{ duration: 1 }}>
          <div className="  flex gap-24 bg-gradient-to-bl  w-full justify-center bg-opacity-0">
            <FloatingPhone context="智能场景互动" backgroundImage="https://i.p-i.vip/20/20240621-667475869d07d.png" isEnablePreserve={false} />
          </div>
          <div className="  flex gap-24 bg-gradient-to-bl  w-full justify-center bg-opacity-0">
            <FloatingPhone context="实时AI" backgroundImage="https://i.p-i.vip/20/20240622-66769425bdbfb.jpg" isEnablePreserve={false} />
          </div>
          <div className="  flex gap-24 bg-gradient-to-bl  w-full justify-center bg-opacity-0">
            <FloatingPhone context="适配各行业场景" backgroundImage="https://i.p-i.vip/20/20240622-66769424965b0.jpg"  isEnablePreserve={false} />
          </div>
        </Carousel>
        </div>
      </div>

      <div className=" mt-28 w-full flex-col flex justify-center items-center relative">
        <div className=" absolute z-0 -top-6 opacity-50 left-1/2 -translate-x-12"><BackgroundIconA /></div>
        <h1 className="z-10 font-bold text-4xl text-[#00305a] pb-8">数字功能</h1>
        <Tabs 
          aria-label="Options" 
          color="primary" 
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: " h-1 round-2xl w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600 via-fuchsia-400 to-fuchsia-200",
            tab: "max-w-4xl px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#000887]"
          }}
        >
          <Tab
            key="AI数字员工"
            title={
              <div className="flex items-center space-x-2 md:w-64 w-20 font-bold md:text-2xl justify-center">
                <span>AI数字员工</span>
              </div>
            }
          >

            <div className=" flex justify-between items-center md:gap-24 p-8 flex-wrap md:flex-nowrap">
              <div className=" flex flex-col justify-start items-start min-h-48 text-[#00305a]">
                <p className=" text-3xl font-bold pb-4">AI数字员工</p>
                <p className=" max-w-lg text-lg">奥森小冰率先提出了数字人（AI Being）理念，并基于全球领先的完备人工智能奥森小冰框架，推出了数字专家和数字员工等完整产品线。奥森小冰的数字人具有不同的性格特征、态度观点、生物学特征、创造力、知识和技能，兼具情感交互能力、专业能力和内容生产能力，已被大众熟知，并应用在多个行业场景。随着数字人多样性（Diversity of AI Being）趋势的来临，每个人的日常工作和生活，将由更加丰富多彩的AI Beings所陪伴和环绕。</p>
              </div>

              <div className="md:max-w-lg max-w-sm flex justify-center">
              <Image className=" max-w-lg md:max-w-2xl object-cover" src="/main_bg_2.png" alt="" width={600} height={550} />
              </div>
            </div>

          </Tab>
          <Tab
            key="内容生产"
            title={
              <div className="flex items-center space-x-2 md:w-64 w-20 font-bold md:text-2xl justify-center">
                <span>内容生产</span>
              </div>
            }
          >
            <div className=" flex justify-between items-center md:gap-24 p-4 flex-wrap md:flex-nowrap">
              <div className=" flex flex-col justify-start items-start min-h-48 text-[#00305a]">
                <p className=" text-3xl font-bold  pb-4">内容生产</p>
                <p className=" max-w-lg text-lg">奥森小冰是人工智能内容生产的先行者，拥有全球领先的核心技术并已形成完善的产品线。奥森小冰的人工智能内容生产，着眼于在达到与相应人类生产者同等质量水准的前提下，充分发挥人工智能快速学习、高并发与稳定性等特点，协助弥补 “ 高度定制化内容 ” 的供需关系短板</p>
              </div>
              <div className="md:max-w-lg max-w-sm flex justify-center">
              <Image className=" max-w-xl object-cover" src="/main_bg_3.png" alt="" width={600} height={550} />
              </div>
            </div>
          </Tab>
          <Tab
            key="直播"
            title={
              <div className="flex items-center space-x-2 md:w-64 w-20 font-bold md:text-2xl justify-center">
                <span>数字直播</span>
              </div>
            }
          >
            <div className=" flex justify-between items-center md:gap-24 p-4 flex-wrap md:flex-nowrap">
              <div className=" flex flex-col justify-start items-start min-h-48 text-[#00305a]">
                <p className=" text-3xl font-bold pb-4">数字直播</p>
                <p className=" max-w-lg text-lg">AI数字人直播是指通过人工智能技术打造的虚拟人物，通过直播平台与观众实时互动。这些AI数字人除了具备逼真的外貌和声音，更重要的是具备了人类智能和情感。他们可以自动理解观众的问题，并给出相应的回答和建议，让互动更加自然流畅。</p>
              </div>
              <div className="md:max-w-lg max-w-sm flex justify-center">
                <Image className=" max-w-2xl object-cover" src="https://i.p-i.vip/20/20240622-6676935594942.png" alt="" width={600} height={550} />
              </div>
            </div>
          </Tab>
          <Tab
            key="数字名片"
            title={
              <div className="flex items-center space-x-2 md:w-64 w-20 font-bold md:text-2xl justify-center">
                <span>数字名片</span>
              </div>
            }
          >
            <div className=" flex justify-between items-center md:gap-24 p-4 flex-wrap md:flex-nowrap">
              <div className=" flex flex-col justify-start items-start min-h-48 text-[#00305a]">
                <p className=" text-3xl font-bold pb-4">数字名片</p>
                <p className=" max-w-lg text-lg">数字名片是传统纸质名片的数字化升级，它以更便捷、更智能的方式展现您的个人信息和联系方式。告别纸质名片的浪费和繁琐，数字名片让您只需轻轻一扫，就能将所有信息传递给对方。您可以定制专属的数字名片，设计独特的风格，展现您的个人魅力。许多平台还提供数据分析功能，帮助您了解名片的传播效果和用户行为。无论是商务社交还是个人推广，数字名片都将成为您不可或缺的工具。</p>
              </div>
              <div className="md:max-w-lg max-w-sm flex justify-center">
                <Image className="max-w-xl object-cover rounded-xl" src="/mian_bg_4.png" alt="" width={600} height={550} />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div> 



      <div className=" bg-[#edf3ff] pt-8 mt-28 w-full flex-col flex justify-center items-center relative">
        <div className=" absolute z-0 top-0 opacity-50 left-1/2 -translate-x-12"><BackgroundIconB /></div>
        <h1 className="z-10 font-bold text-4xl text-[#00305a] pb-8">客户寄语</h1>

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

        <div className=" md:grid md:grid-cols-3 flex flex-wrap justify-center items-center gap-12 max-w-full p-8">
          <NextUiCard
            key={cards[0].id}
            isFooterBlurred
            radius="sm"
            className="border-none rounded-lg max-w-7xl w-110 relative"
            onMouseEnter={() => setActiveIndex(cards[0].id)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={cards[0].url}
              width={300}
              height={200}
              
            />
            {hoveredIndex === cards[0].id && (
              <div
                className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() => {onOpen(); setCustomerIndex(0)}}
            >
              <Image width={70} src="/play.png" alt=""  height={70} />
              </div>
            )}

            <CardFooter className="justify-center gap-12 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-[#00305a] font-bold">{`客户寄语 0${cards[0].id}`}</p>
            </CardFooter>
          </NextUiCard>

          <NextUiCard
            key={cards[1].id}
            isFooterBlurred
            radius="sm"
            className="border-none rounded-lg max-w-7xl w-110 relative"
            onMouseEnter={() => setActiveIndex(cards[1].id)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={cards[1].url}
              width={300}
              height={200}
                            
            />
            {hoveredIndex === cards[1].id && (
              <div 
                className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() => {onOpen(); setCustomerIndex(1)}}
              >
              <Image width={70} src="/play.png" alt=""  height={70} />
              </div>
            )}

            <CardFooter className="justify-center gap-12 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-[#00305a] font-bold">{`客户寄语 0${cards[1].id}`}</p>
            </CardFooter>
          </NextUiCard>


          <NextUiCard
            key={cards[2].id}
            isFooterBlurred
            radius="sm"
            className="border-none rounded-lg max-w-7xl w-110 relative"
            onMouseEnter={() => setActiveIndex(cards[2].id)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={cards[2].url}
              width={300}
              height={200}
                    
            />
            {hoveredIndex === cards[2].id && (
              <div 
                className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() => {onOpen(); setCustomerIndex(2)}}
              >
              <Image width={70} src="/play.png" alt=""  height={70} />
              </div>
            )}

            <CardFooter className="justify-center gap-12 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-[#00305a] font-bold">{`客户寄语 0${cards[2].id}`}</p>
            </CardFooter>
          </NextUiCard>

          <NextUiCard
            key={cards[3].id}
            isFooterBlurred
            radius="sm"
            className="border-none rounded-lg max-w-7xl w-110 relative"
            onMouseEnter={() => setActiveIndex(cards[3].id)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={cards[3].url}
              width={300}
              height={200}
                            
            />
            {hoveredIndex === cards[3].id && (
              <div 
                className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
                onClick={() => {onOpen(); setCustomerIndex(3)}}
              >
              <Image width={70} src="/play.png" alt=""  height={70} />
              </div>
            )}

            <CardFooter className="justify-center gap-12 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-[#00305a] font-bold">{`客户寄语 0${cards[3].id}`}</p>
            </CardFooter>
          </NextUiCard>


          <NextUiCard
            key={cards[4].id}
            isFooterBlurred
            radius="sm"
            className="border-none rounded-lg max-w-7xl w-110 relative"
            onMouseEnter={() => setActiveIndex(cards[4].id)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full"
              src={cards[4].url}
              width={300}
              height={200}
               
            />
            {hoveredIndex === cards[4].id && (
              <div 
                onClick={() => {onOpen(); setCustomerIndex(4)}}
                className="absolute inset-0 z-10 bg-black opacity-30 flex justify-center items-center cursor-pointer"
              >
              <Image width={70} src="/play.png" alt=""  height={70} />
              </div>
            )}

            <CardFooter className="justify-center gap-12 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-2xl text-[#00305a] font-bold">{`客户寄语 0${cards[4].id}`}</p>
            </CardFooter>
          </NextUiCard>
        

          

        </div>
        
      </div>

      <div className=" mt-28 w-full flex-col flex justify-center items-center relative bg-cover">
        <div className=" absolute z-0 -top-6 opacity-50 left-1/2 -translate-x-12"><BackgroundIconC /></div>
        <h1 className="z-10 font-bold text-4xl text-[#00305a] pb-8">生态合作伙伴</h1>
        <Image className=" md:max-w-7xl w-full object-cover" src="https://i.p-i.vip/20/20240622-667694ae1c226.png" alt="" width={1200} height={800} />
      </div>



      <div className="md:p-12 md:mb-0 mb-4 flex justify-center items-center mt-24">
        <div className="rounded-xl  flex justify-center flex-col space-y-3 items-center p-16 max-w-7xl w-full bg-[#edf3ff]" style={{ backgroundImage: `url(bg-bottom.png)`}}>
          <h1 className="text-white font-bold text-3xl">奥森小冰</h1>
          <h1 className="text-white font-bold text-3xl text-center">探索AI虚拟数字人之旅</h1>
        </div>
      </div>
    </div>
  );
};


const TextParallaxContent = () => {
  return (
    <div
      style={{
        paddingLeft: Image_PADDING,
        paddingRight: Image_PADDING,
      }}
    >
      <div className="relative h-[100vh] -mt-14">
        <OverlayCopy />
      </div>
    </div>
  );
};

const StickyImage = ({ ImageUrl, videoIndex }: { ImageUrl: string[], videoIndex: number }) => {
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${Image_PADDING * 2}px)`,
        top: Image_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl -m-4  bg-cover bg-center"
    >
      <div className="h-full w-full">
      <video autoPlay loop muted className="absolute top-0 left-0 object-cover h-full w-full"  src={ImageUrl[videoIndex]} controls={false}></video>
      </div>
    </motion.div>
  );
};

const OverlayCopy = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const headers = [
    "聚焦于关键岗位",
    "关注穿透To B到To C的体验",
    "强调人与人工智能的协同"
  ]
  

  const subHeaders = [
    "依托人工智能承担行业关键岗位，并加大关键岗位之间的协同，实现人类团队无法实现的差异化效能。",
    "帮助B端客户穿透用户群体到达C端场景，实现解决方案的升级换代、用户体验升级跃迁。",
    "人工智能技术的应用并非为了取代人类团队，而是强调人和人工智能之间的协同关系，创造人工智能和人类团队新的合作方式。"
  ]

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]); // [250, -250] 里面内容高度
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);   // 透明度

  const [selectedVideo, setSelectedVideo] = useState(0);
  const handleRadioChange = (value: string) => {
    setSelectedVideo(Number(value));
  };

  return (
    <><StickyImage ImageUrl={["video.mp4", "video-2.mp4", "video-3.mp4"]} videoIndex={selectedVideo} /><motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white pt-4 md:pt-24"
    >
      <p className="text-center text-2xl font-bold md:text-7xl">{headers[selectedVideo]}</p>
      <p className="mb-2 text-center text-lg md:mb-4 md:text-3xl md:mt-3 mt-3">
        {subHeaders[selectedVideo]}
      </p>
      <p className="mb-6 text-center text-xl md:mb-6 md:text-3xl md:mt-3 mt-3">
        招商热线：13025507200
      </p>

      {/* 点 */}
      <div>
        <RadioGroup
          onValueChange={handleRadioChange}
          size="sm"
          orientation="horizontal"
        >
          <Radio value="0"></Radio>
          <Radio value="1"></Radio>
          <Radio value="2"></Radio>
        </RadioGroup>
      </div>

      <div className="relative space-y-8 flex justify-center md:w-1/2 p-0 md:p-8">
        {/** 定制体验图片 */}
        <Image className=" md:min-w-[500px] lg:min-w-[500px]   max-w-full h-[400px] md:h-full md: w-full" src="https://i.p-i.vip/20/20240622-6676950aef4d0.png" alt="vhuman_card.png" width={500} height={450} />

        <div className=" text-left -translate-y-1/4 top-1/4 p-6 md:p-0 absolute md:top-2/4 md:left-1/3 transform md:-translate-x-1/4 md:-translate-y-1/2  flex flex-col space-y-6">
          <p className="text-white bg-opacity-50 md:text-lg  text-xs">
            为助力国内中小企业的数字化转型，奥森小冰公司现推出“限时定制体验”活动，诚邀符合条件的中小企业、领域达人及个体经营者，创建自己的AI数字员工。
          </p>
          <p className="text-white md:text-lg bg-opacity-50 text-xs">
            基于行业领先的大模型小样本技术，奥森小冰公司为业界提供的AI数字员工定制服务，可支持高拟真、低门槛、低成本的形象及声音复刻。用户可通过便捷的线上自助服务，轻松畅享数字员工定制的全流程自动化服务。定制的数字员工，可广泛应用于视频内容生产及场景化交互服务。
          </p>
          <p className="text-white md:text-lg bg-[#476499] bg-opacity-50 text-xs">
            现在点击以下链接，即可享受智能化的业务升级之旅。特惠底价，额度有限，马上就来创建您的专属AI数字员工吧~~
          </p>

          <Link href="http://t1.ink/f/h9ulpg">
            <div className=" cursor-pointer mt-3 self-center md:self-start">
              <Image className=" w-36 md:w-60 md: ml-5" src="https://i.p-i.vip/20/20240621-667475b6e98e5.png" quality={100} alt="" width={36} height={40} />
            </div>
          </Link>

        </div>
      </div>
    </motion.div></>
  );
};

const cards = [
  {
    url: "customer1.webp",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E4%B8%87%E5%BE%97%E8%B5%84%E8%AE%AF.mp4",
    id: 1,
  },
  {
    url: "customer2.webp",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E5%9B%BD%E5%AE%B6%E7%BA%BA%E7%BB%87%E4%BA%A7%E5%93%81%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83.mp4",
    id: 2,
  },
  {
    url: "customer3.webp",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E9%B2%81%E4%B8%B0%E7%BB%87%E6%9F%93.mp4",
    id: 3,
  },
  {
    url: "customer4.webp",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E5%8D%8E%E4%BA%BA%E8%BF%90%E9%80%9A.mp4",
    id: 4,
  },
  {
    url: "customer5.webp",
    videoUrl: "https://aicplatform.blob.core.chinacloudapi.cn/business-home/%E5%AF%84%E8%AF%AD_%E4%B8%8A%E9%9F%B3%E9%9F%B3%E5%B7%A5%E7%B3%BB.mp4",
    id: 5,
  },
];