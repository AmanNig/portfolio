"use client";

import { useEffect, useState } from "react";
import { assets } from "@/constant/assets";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import styles from "./home.module.css";

export const tabs = [
  {
    name: "Project",
    image: assets.home.myLatestProject.suitcase,
    data: [
      {
        slug: "Uber Data Analysis",
        title: "Uber Data Analysis",
        image: assets.home.myLatestProject.projects.uber,
        repositoryUrl: "https://github.com/AmanNig/Uber",
        demoUrl: "https://github.com/AmanNig/Uber",
      },
      {
        slug: "Customer Feedback Analyzer",
        title: "Customer Feedback Analyzer",
        image: assets.home.myLatestProject.projects.textana,
        repositoryUrl: "https://github.com/AmanNig/Customer-feebcak-analyzer",
        demoUrl: "https://github.com/AmanNig/Customer-feebcak-analyzer",
      },
      {
        slug: "Data Science with R",
        title: "Data Science with R",
        image: assets.home.myLatestProject.projects.data,
        repositoryUrl: "https://amannigam.vercel.app/",
        demoUrl: "https://amannigam.vercel.app/",
      },

      {
        slug: "Cyberbullying Classification using NLP",
        title: "Cyberbullying Classification using NLP",
        image: assets.home.myLatestProject.projects.nlp,
        repositoryUrl: "https://github.com/AmanNig/Cyberbullying-Classification-NLP",
        demoUrl: "https://github.com/AmanNig/Cyberbullying-Classification-NLP",
      },

      {
        slug: "URL Shortner",
        title: "URL Shortner",
        image: assets.home.myLatestProject.projects.url,
        repositoryUrl: "https://github.com/AmanNig/url-shortner-go",
        demoUrl: "https://github.com/AmanNig/url-shortner-go",
      },
      // {
      //   slug: "Image-Steganography",
      //   title: "Image-Steganography",
      //   image: assets.home.myLatestProject.projects.is,
      //   repositoryUrl: "https://github.com/atanu16/Image-Steganography",
      //   demoUrl: "https://www.ijnrd.org/papers/IJNRD2311337.pdf",
      // },

      // {
      //   slug: "OCR-Application",
      //   title: "OCR-Application",
      //   image: assets.home.myLatestProject.projects.ocr,
      //   repositoryUrl: "https://github.com/atanu16/OCR-Application",
      //   demoUrl: "https://ocr-application.vercel.app/",
      // },
      // {
      //   slug: "CGPA Calculator",
      //   title: "CGPA Calculator",
      //   image: assets.home.myLatestProject.projects.cgpa,
      //   repositoryUrl: "https://github.com/atanu16/CGPA-Calculator",
      //   demoUrl: "https://cgpaa.vercel.app/",
      // },
      // {
      //   slug: "Stey-Productive",
      //   title: "Stey-Productive",
      //   image: assets.home.myLatestProject.projects.sp,
      //   repositoryUrl: "https://github.com/atanu16/Stey-Productive",
      //   demoUrl:
      //     "https://codeload.github.com/atanu16/Stey-Productive/zip/refs/heads/main",
      // },
      // {
      //   slug: "Blockchain-Enabled Secure MANETs [AODV]",
      //   title: "Blockchain-Enabled Secure MANETs [AODV]",
      //   image: assets.home.myLatestProject.projects.aodv,
      //   repositoryUrl:
      //     "https://github.com/atanu16/Blockchain-Enabled-AODV-Routing-Simulation-for-Secure-MANETs",
      //   demoUrl:
      //     "https://in.mathworks.com/matlabcentral/fileexchange/169428-blockchain-enabled-aodv-routing-simulation-for-secure-manets",
      // },

      // {
      //   slug: "Coming Soon",
      //   title: "Coming soon",
      //   image: assets.home.myLatestProject.projects.soon,
      //   repositoryUrl: "https://noticee.vercel.app/",
      //   demoUrl: "https://noticee.vercel.app/",
      // },
    ],
  },
  {
    name: "Design",
    image: assets.home.myLatestProject.figma,
    data: [
      {
        slug: "Coming Soon",
        title: "Coming soon",
        image: assets.home.myLatestProject.projects.figma,
        repositoryUrl: "https://www.figma.com/proto/ICk35Wd4rv4O5XbzWzJ9B6/keypar?page-id=0%3A1&type=design&node-id=1-2&viewport=263%2C324%2C0.27&t=qVVeA5EWBXJOqtZv-1&scaling=scale-down&starting-point-node-id=1%3A2",
        demoUrl: "https://www.figma.com/proto/ICk35Wd4rv4O5XbzWzJ9B6/keypar?page-id=0%3A1&type=design&node-id=1-2&viewport=263%2C324%2C0.27&t=qVVeA5EWBXJOqtZv-1&scaling=scale-down&starting-point-node-id=1%3A2",
      },
      // todo
    ],
  },
];

tabs.push({
  name: "All",
  image: assets.home.myLatestProject.rocket,
  data: [],
});

export default function SectionMyLatestProject() {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab) < tabs.length - 1) {
      setActiveTab(parseInt(tab));
    }
  }, [activeTab]);

  return (
    <section
      ref={ref}
      className={`safe-x-padding ${styles.sectionDistance}`}
      aria-label="My Latest Project Section"
    >
      <style jsx>{``}</style>

      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={`${styles.sectionTitle} pb-8`}
        >
          My Latest Project
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[706px] mx-auto`}
        >
          Take a look at something I&apos;ve worked on, such as a case study,
          real project, and more
        </motion.p>
      </div>
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          <div className="flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <motion.button
                key={index.toString()}
                className={`relative ${
                  activeTab === index ? "gradient-bg" : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  if (index === tabs.length - 1) {
                    router.push("/project");
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tab.image}
                  alt=""
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="overflow-hidden">
            <div
              id="style-3"
              className="bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto"
            >
              <div className=" grid grid-flow-row grid-cols-12 gap-[26px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <motion.div
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="col-span-6">
                            <motion.div
                              className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                            >
                              <Image
                                className="object-contain w-full h-auto"
                                src={item.image}
                                alt=""
                                width={441}
                                height={261}
                                priority
                              />
                            </motion.div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {item.repositoryUrl && (
                                  <Link
                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.repositoryUrl,
                                      query: {
                                        utm_source: "Atanu.my.id",
                                        utm_medium: "campaign",
                                        utm_campaign: "portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Repository"
                                  >
                                    {tabs[activeTab].name.toLowerCase() ===
                                    "project" ? (
                                      <BsGithub />
                                    ) : (
                                      <FiFigma />
                                    )}
                                  </Link>
                                )}
                                {item.demoUrl && (
                                  <Link
                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={{
                                      pathname: item.demoUrl,
                                      query: {
                                        utm_source: "Atanu.my.id",
                                        utm_medium: "campaign",
                                        utm_campaign: "portfolio",
                                      },
                                    }}
                                    target="_blank"
                                    title="Demo"
                                  >
                                    <IoMdOpen />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
