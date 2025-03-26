"use client";

import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsDribbble, BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import Loader from "@/components/Loader";
import React, { useState, useEffect } from "react";

const categories = [
  {
    slug: "app",
    name: "App",
  },
  {
    slug: "design",
    name: "Design",
  },
];

const projectTypes = [
  {
    slug: "design",
    name: "Design",
  },
  {
    slug: "real-project",
    name: "Real Project",
  },
];

const initialProjects = [
  {
    slug: "Uber Data Analysis",
    title: "Uber Data Analysis",
    image: assets.home.myLatestProject.projects.uber,
    repositoryUrl: "https://github.com/AmanNig/Uber",
    demoUrl: "https://github.com/AmanNig/Uber",
    summary: '"Employed the dt.datetime.month function from the datetime library to extract the month component from the datetime column."',
    techStacks: [
      {
        name: "javascript",
        imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
        webUrl: "https://www.javascript.com/",
      },
      {
        name: "NPM",
        imageUrl: "https://img.icons8.com/color/48/npm.png",
        webUrl: "https://www.npmjs.com/",
      },
    ],
    projectType: projectTypes[1],
    category: categories[0],
  },
  {
    slug: "Customer Feedback Analyzer",
    title: "Customer Feedback Analyzer",
    image: assets.home.myLatestProject.projects.textana,
    repositoryUrl: "https://github.com/AmanNig/Customer-feebcak-analyzer",
    demoUrl: "https://github.com/AmanNig/Customer-feebcak-analyzer",
    summary: '"Developed an automated system to efficiently analyze customer feedback and accurately predict the domain of each feedback"',
    techStacks: [
      {
        name: "html",
        imageUrl: "https://img.icons8.com/color/48/html-5--v1.png",
        webUrl: "#",
      },
      {
        name: "CSS",
        imageUrl: "https://img.icons8.com/color/48/css3.png",
        webUrl: "#",
      },
      {
        name: "Java Script",
        imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
        webUrl: "#",
      },
      {
        name: "Java Script",
        imageUrl: "https://img.icons8.com/color/48/nodejs.png",
        webUrl: "#",
      },
    ],
    projectType: projectTypes[1],
    category: categories[0],
  },
  {
    slug: "Data Science with R",
    title: "Data Science with R",
    image: assets.home.myLatestProject.projects.data,
    repositoryUrl: "https://github.com/atanu16/Stegio",
    demoUrl: "https://github.com/atanu16/Stegio",
    summary:
      '"Studied theoretical concepts and practical applications of Data Science, becoming familiar with various standard libraries"',
    techStacks: [
      {
        name: "html",
        imageUrl: "https://img.icons8.com/color/48/html-5--v1.png",
        webUrl: "#",
      },
      {
        name: "CSS",
        imageUrl: "https://img.icons8.com/color/48/css3.png",
        webUrl: "#",
      },
      {
        name: "Java Script",
        imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
        webUrl: "#",
      },
      {
        name: "node js",
        imageUrl: "https://img.icons8.com/color/48/nodejs.png",
        webUrl: "#",
      },
    ],
    projectType: projectTypes[1],
    category: categories[0],
  },
  {
    slug: "Cyberbullying Classification using NLP",
    title: "Cyberbullying Classification using NLP",
    image: assets.home.myLatestProject.projects.nlp,
    repositoryUrl: "https://github.com/AmanNig/Cyberbullying-Classification-NLP",
    demoUrl: "https://github.com/AmanNig/Cyberbullying-Classification-NLP",
    summary:
      '"Developed an effective model to identify and classify instances of Cyberbullying on Twitter using advanced NLP techniques"',
    techStacks: [
      {
        name: "Ejs",
        imageUrl: "https://img.icons8.com/color/48/ejs.png",
        webUrl: "#",
      },
      {
        name: "CSS",
        imageUrl: "https://img.icons8.com/color/48/css3.png",
        webUrl: "#",
      },
      {
        name: "Java Script",
        imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
        webUrl: "#",
      },
      {
        name: "node js",
        imageUrl: "https://img.icons8.com/color/48/nodejs.png",
        webUrl: "#",
      },
    ],
    projectType: projectTypes[1],
    category: categories[0],
  },
  {
    slug: "URL Shortner",
    title: "URL Shortner",
    image: assets.home.myLatestProject.projects.aodv,
    repositoryUrl:
      "https://github.com/AmanNig/url-shortner-go",
    demoUrl:
      "https://github.com/AmanNig/url-shortner-go",
    summary: '"Shortify the URLs for Better Exposure Link Address to be Recognized"',
    techStacks: [
      {
        name: "matlab",
        imageUrl: "https://img.icons8.com/fluency/48/matlab.png",
        webUrl: "#",
      },
    ],
    projectType: projectTypes[1],
    category: categories[0],
  },
  
  // {
  //   slug: "Fiesta-WatchParty",
  //   title: "Fiesta-WatchParty",
  //   image: assets.home.myLatestProject.projects.fw,
  //   repositoryUrl: "https://github.com/atanu16/Fiesta-WatchParty",
  //   demoUrl: "https://fiesta-sepia.vercel.app/",
  //   summary: '"watch movies with your friends in realtime"',
  //   techStacks: [
  //     {
  //       name: "html",
  //       imageUrl: "https://img.icons8.com/color/48/html-5--v1.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "CSS",
  //       imageUrl: "https://img.icons8.com/color/48/css3.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "Java Script",
  //       imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "node js",
  //       imageUrl: "https://img.icons8.com/color/48/nodejs.png",
  //       webUrl: "#",
  //     },
  //   ],
  //   projectType: projectTypes[1],
  //   category: categories[0],
  // },
  // {
  //   slug: "OCR-Application",
  //   title: "OCR-Application",
  //   image: assets.home.myLatestProject.projects.ocr,
  //   repositoryUrl: "https://github.com/atanu16/OCR-Application",
  //   demoUrl: "https://ocr-application.vercel.app/",
  //   summary: '"Extract Text from image ( Ignore the UI )"',
  //   techStacks: [
  //     {
  //       name: "React js",
  //       imageUrl: "https://img.icons8.com/plasticine/100/react.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "CSS",
  //       imageUrl: "https://img.icons8.com/color/48/css3.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "node js",
  //       imageUrl: "https://img.icons8.com/color/48/nodejs.png",
  //       webUrl: "#",
  //     },
  //   ],
  //   projectType: projectTypes[1],
  //   category: categories[0],
  // },
  // {
  //   slug: "CGPA Calculator",
  //   title: "CGPA Calculator",
  //   image: assets.home.myLatestProject.projects.cgpa,
  //   repositoryUrl: "https://github.com/atanu16/CGPA-Calculator",
  //   demoUrl: "https://cgpaa.vercel.app/",
  //   summary: '"SGPA to CGPA calculator [On development]"',
  //   techStacks: [
  //     {
  //       name: "React js",
  //       imageUrl: "https://img.icons8.com/plasticine/100/react.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "CSS",
  //       imageUrl: "https://img.icons8.com/color/48/css3.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "node js",
  //       imageUrl: "https://img.icons8.com/color/48/nodejs.png",
  //       webUrl: "#",
  //     },
  //   ],
  //   projectType: projectTypes[1],
  //   category: categories[0],
  // },
  // {
  //   slug: "Image-Steganography",
  //   title: "Image-Steganography",
  //   image: assets.home.myLatestProject.projects.is,
  //   repositoryUrl: "https://github.com/atanu16/Image-Steganography",
  //   demoUrl: "https://www.ijnrd.org/papers/IJNRD2311337.pdf",
  //   summary:
  //     '"Secretly hiding messages inside pictures for private communication or security."',
  //   techStacks: [
  //     {
  //       name: "Python",
  //       imageUrl: "https://img.icons8.com/color/48/python--v1.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "PowerShell",
  //       imageUrl: "https://img.icons8.com/color/48/powershell.png",
  //       webUrl: "#",
  //     },
  //   ],
  //   projectType: projectTypes[1],
  //   category: categories[0],
  // },{
  //   slug: "Stey-Productive",
  //   title: "Stey-Productive",
  //   image: assets.home.myLatestProject.projects.sp,
  //   repositoryUrl: "https://github.com/atanu16/Stey-Productive",
  //   demoUrl:
  //     "https://codeload.github.com/atanu16/Stey-Productive/zip/refs/heads/main",

  //   summary: '" Extensions for Stey Productive in daily life"',
  //   techStacks: [
  //     {
  //       name: "html",
  //       imageUrl: "https://img.icons8.com/color/48/html-5--v1.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "CSS",
  //       imageUrl: "https://img.icons8.com/color/48/css3.png",
  //       webUrl: "#",
  //     },
  //     {
  //       name: "Java Script",
  //       imageUrl: "https://img.icons8.com/fluency/48/javascript.png",
  //       webUrl: "#",
  //     },
  //   ],
  //   projectType: projectTypes[1],
  //   category: categories[0],
  // },


  {
    slug: "Coming soon",
    title: "Coming Soon",
    image: assets.home.myLatestProject.projects.figma,
    repositoryUrl: "https://www.figma.com/proto/ICk35Wd4rv4O5XbzWzJ9B6/keypar?page-id=0%3A1&type=design&node-id=1-2&viewport=263%2C324%2C0.27&t=qVVeA5EWBXJOqtZv-1&scaling=scale-down&starting-point-node-id=1%3A2",
    demoUrl: "https://www.figma.com/proto/ICk35Wd4rv4O5XbzWzJ9B6/keypar?page-id=0%3A1&type=design&node-id=1-2&viewport=263%2C324%2C0.27&t=qVVeA5EWBXJOqtZv-1&scaling=scale-down&starting-point-node-id=1%3A2",
    summary: '"The projects will be added soon."',
    techStacks: [
      {
        name: "Figma",
        imageUrl: "https://img.icons8.com/color/48/figma--v1.png",
        webUrl: "https://www.figma.com/",
      },
    ],
    projectType: projectTypes[0],
    category: categories[1],
  },
];

export default function Project() {
  const [projects, setProjects] = useState(initialProjects);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          ref={ref}
          className="safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.2 }}
              className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text"
            >
              Explore Aman&apos;s Project
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto"
            >
              Take a look at something I&apos;ve worked on, such as Design, real
              project, and more.
            </motion.p>
          </div>
          <div className="my-[50px] h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out"
                >
                  <Link
                    className="w-full h-full bg-white"
                    href={`${project.demoUrl}`}
                    target="_blank"
                  >
                    <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                      <div className="relative">
                        <Image
                          className="object-cover"
                          src={project.image}
                          alt={`${project.title} thumbnail`}
                        />
                        <div className="absolute top-0 right-0 p-2 bg-black z-[1] text-white rounded-bl-2xl text-sm hover:opacity-0 transition-all duration-500 ease-in-out">
                          {project.projectType.name}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 px-6 py-3">
                        <div className="flex flex-row flex-wrap gap-x-4">
                          {project.techStacks.map((techStack, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={inView ? { opacity: 1 } : {}}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                            >
                              <Image
                                src={techStack.imageUrl}
                                alt={`${techStack.name} icon`}
                                loader={({ src }) => src}
                                width={36}
                                height={36}
                                title={techStack.name}
                                unoptimized
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 py-4">
                      <h5 className="mb-2 text-base font-bold line-clamp-1">
                        {project.title}
                      </h5>
                      <p className="text-sm font-normal line-clamp-2">
                        {project.summary}
                      </p>
                      <div className="grid grid-flow-col gap-4 mt-4">
                        {project.demoUrl && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                project.demoUrl,
                                "_blank",
                                "utm_source=atanu.my.id&utm_medium=campaign&utm_campaign=portfolio"
                              );
                            }}
                            className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                          >
                            <span>
                              {project.category.slug === "design"
                                ? "See Prototype"
                                : "Visit Demo"}
                            </span>
                            <IoMdOpen />
                          </button>
                        )}

                        {project.repositoryUrl && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(
                                project.repositoryUrl,
                                "_blank",
                                "utm_source=atanu.my.id&utm_medium=campaign&utm_campaign=portfolio"
                              );
                            }}
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                          >
                            {project.category.slug === "design" ? (
                              <>
                                <span>Dribble</span>
                                <BsDribbble />
                              </>
                            ) : (
                              <>
                                <span>Github</span>
                                <BsGithub />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
