"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/ytcard";
import { TextHoverEffect } from "@/app/components/ui/pcd";
import ParticlesComponent from "@/app/components/particles";
import Link from "next/link";
import SmoothScrolling from "@/app/components/smoothScroll";
import SparklesPreview from "@/app/components/SparklesPreview";

type Video = {
  title: string;
  videoUrl: string;
  thumbnail: string;
  views: string;
  likes: string;
};

type VideosState = {
  leetcode: Video[];
  codeforces: Video[];
  codechef: Video[];
};

const PCD: React.FC = () => {
  const [videos, setVideos] = useState<VideosState>({
    leetcode: [],
    codeforces: [],
    codechef: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const SectionHeading = ({
    text,
    color,
    logoSrc,
  }: {
    text: string;
    color: string;
    logoSrc: string;
  }) => (
    <div className="w-full relative mb-10 flex flex-col items-center">
      <Image
        src={logoSrc}
        alt={`${text} logo`}
        width={60}
        height={60}
        className="mb-4"
      />
      <div className={`relative z-10 py-8 ${color}`}>
        <h2 className="text-4xl font-bold text-center tracking-wider">
          {text}
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-current to-transparent" />
      </div>
    </div>
  );

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const playlistId = "PLy3Zzb95xdWH68Ul7wnFQ4qloqBwwocRN";
      const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const leetcode: Video[] = [];
        const codeforces: Video[] = [];
        const codechef: Video[] = [];

        for (const item of data.items) {
          const title: string = item.snippet.title;
          const videoId: string = item.snippet.resourceId.videoId;
          const videoUrl: string = `https://www.youtube.com/watch?v=${videoId}`;
          const thumbnail: string = item.snippet.thumbnails?.medium?.url || "";

          // Fetch additional video details like views and likes
          const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;
          const videoDetailsResponse = await fetch(videoDetailsUrl);
          const videoDetailsData = await videoDetailsResponse.json();

          const views: string =
            videoDetailsData.items[0]?.statistics?.viewCount || "N/A";
          const likes: string =
            videoDetailsData.items[0]?.statistics?.likeCount || "N/A";

          const video = { title, videoUrl, thumbnail, views, likes };

          if (title.toLowerCase().includes("leetcode")) {
            leetcode.push(video);
          } else if (title.toLowerCase().includes("codeforces")) {
            codeforces.push(video);
          } else if (title.toLowerCase().includes("codechef")) {
            codechef.push(video);
          }
        }

        setVideos({ codeforces, codechef, leetcode });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching playlist videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const renderSkeletonCards = () => {
    const skeletonCards = Array.from({ length: 6 }, (_, index) => (
      <motion.div
        key={index}
        className="inter-var bg-yellow-800/10 border-white/10 backdrop-blur-lg w-auto sm:w-[20rem] rounded-xl p-5 m-1 border h-80"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="h-40 bg-gray-700/10 backdrop-blur-lg rounded-lg"></div>
          <div className="h-6 bg-gray-700/10 backdrop-blur-lg rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-gray-700/10 backdrop-blur-lg rounded w-1/2 mt-2"></div>
        </div>
      </motion.div>
    ));

    return skeletonCards;
  };

  const renderVideos = (section: keyof VideosState) => {
    if (isLoading) {
      return renderSkeletonCards();
    }

    return videos[section].map((video, index) => (
      <CardContainer key={index} className="inter-var">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-yellow-500/[0.1] bg-yellow-600/15 backdrop-blur-lg border-white/[0.1] w-auto sm:w-[20rem] rounded-xl p-5 m-1 border h-80">
          <CardItem translateZ="100" className="w-full">
            <Link href={video.videoUrl} passHref target="_blank">
              <Image
                src={video.thumbnail}
                height="1000"
                width="1000"
                className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={video.title}
              />
            </Link>
          </CardItem>
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {video.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            Views: {video.views} | Likes : {video.likes}
          </CardItem>
        </CardBody>
      </CardContainer>
    ));
  };

  return (
    <div>
      <div className="pt-20 bg-black/50 backdrop-blur-lg">
        <div className="absolute inset-0 z-0 opacity-40">
          <ParticlesComponent id="pcd" />
        </div>
        <div className="relative">
          <SparklesPreview />
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
            <TextHoverEffect text="PCD" />
          </div>
        </div>
        <div className="mt-20">
          <SmoothScrolling>
            <section className="flex flex-col items-center mb-20">
              <SectionHeading
                text="Codeforces"
                color="text-[#318CE7]"
                logoSrc="/Codeforces.png"
              />
              <div className="flex flex-wrap">
                <SmoothScrolling>{renderVideos("codeforces")}</SmoothScrolling>
              </div>
            </section>

            <section className="flex flex-col items-center mb-20">
              <SectionHeading
                text="CodeChef"
                color="text-[#9B4722]"
                logoSrc="/Codechef.png"
              />
              <div className="flex flex-wrap">
                <SmoothScrolling>{renderVideos("codechef")}</SmoothScrolling>
              </div>
            </section>

            <section className="flex flex-col items-center mb-20">
              <SectionHeading
                text="LeetCode"
                color="text-[#FFA116]"
                logoSrc="/Leetcode.png"
              />
              <div className="flex flex-wrap">
                <SmoothScrolling>{renderVideos("leetcode")}</SmoothScrolling>
              </div>
            </section>
          </SmoothScrolling>
        </div>
      </div>
    </div>
  );
};

export default PCD;
