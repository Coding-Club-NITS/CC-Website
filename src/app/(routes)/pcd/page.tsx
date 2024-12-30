"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/ytcard";
import { TextHoverEffect } from "../../components/ui/pcd";
import ParticlesComponent from "../../components/particles";
import Link from "next/link";

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
      <CardContainer
        key={index}
        className="inter-var animate-pulse bg-gray-800 border-gray-700 w-auto sm:w-[20rem] rounded-xl p-5 m-1 border h-80"
      >
        <CardBody className="h-full flex flex-col justify-between">
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-6 bg-gray-700 rounded w-3/4 mt-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2 mt-2"></div>
        </CardBody>
      </CardContainer>
    ));
    return skeletonCards;
  };

  const renderVideos = (section: keyof VideosState) => {
    if (isLoading) {
      return renderSkeletonCards();
    }

    return videos[section].map((video, index) => (
      <CardContainer key={index} className="inter-var">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-yellow-500/[0.1] bg-gray-900 border-white/[0.1] w-auto sm:w-[20rem] rounded-xl p-5 m-1 border h-80">
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
      <ParticlesComponent id="pcd" />
      <h1 className="text-4xl font-bold text-center mt-10">
        POST CONTEST DISCUSSION
      </h1>
      <div className="pt-20">
        <TextHoverEffect text="PCD" />

        <section className="flex flex-col items-center">
          <div className="w-full bg-white/10 backdrop-blur-md py-4">
            <h2 className="text-white text-3xl font-bold italic text-center">
              Codeforces
            </h2>
          </div>

          <div className="flex flex-wrap">{renderVideos("codeforces")}</div>
        </section>

        <section className="flex flex-col items-center">
          <div className="w-full bg-white/10 backdrop-blur-md py-4">
            <h2 className="text-white text-3xl font-bold italic text-center">
              CodeChef
            </h2>
          </div>
          <div className="flex flex-wrap">{renderVideos("codechef")}</div>
        </section>

        <section className="flex flex-col items-center">
          <div className="w-full bg-white/10 backdrop-blur-md py-4">
            <h2 className="text-white text-3xl font-bold italic text-center">
              LeetCode
            </h2>
          </div>
          <div className="flex flex-wrap">{renderVideos("leetcode")}</div>
        </section>
      </div>
    </div>
  );
};

export default PCD;
