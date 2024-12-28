"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Watch } from "react-loader-spinner";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Contest {
  id: string;
  event: string;
  name: string;
  url: string;
  href: string;
  start: string;
  end: string;
  duration: number;
}

const Codechef: React.FC = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadContestsFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const storedContests = localStorage.getItem("codechefContests");
        if (storedContests) {
          setContests(JSON.parse(storedContests));
          setLoading(false);
        }
      }
    };

    const fetchContests = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://clist.by:443/api/v4/contest/",
          {
            headers: {
              Authorization: `ApiKey Atreya45:${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            params: {
              upcoming: true,
              resource: "codechef.com",
              order_by: "start",
            },
          }
        );

        // Transform the API response to match the Contest interface
        const transformedContests: Contest[] = response.data.objects.map(
          (contest: any) => ({
            id: contest.id.toString(),
            name: contest.event || "",
            url: contest.url || "",
            start: contest.start,
            end: contest.end,
            duration: contest.duration,
            event: contest.event || "",
            href: contest.href || contest.url || "",
          })
        );

        setContests(transformedContests);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "codechefContests",
            JSON.stringify(transformedContests)
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contests:", error);
        setLoading(false);
      }
    };

    loadContestsFromLocalStorage();

    const intervalId = setInterval(fetchContests, 2 * 60 * 1000); // Fetch every 2 minutes
    fetchContests(); // Fetch initially

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <section
      id="codechef"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "transparent",
      }}
    >
      <HoverBorderGradient
        duration={1.5}
        clockwise={true}
        containerClassName="text-center"
        className="bg-transparent"
        style={{ backgroundColor: "transparent" }}
      >
        Upcoming Codechef Contests
      </HoverBorderGradient>
      <div
        id="code"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {loading ? (
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <TableComponent contests={contests} />
        )}
      </div>
    </section>
  );
};

export default Codechef;
