"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Watch } from "react-loader-spinner";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Contest {
  id: string;
  event: string;
  href: string;
  start: string;
  end: string;
  duration: number;
}

const CodeForces: React.FC = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadContestsFromLocalStorage = () => {
      if (typeof window !== "undefined") {
        const storedContests = localStorage.getItem("codeforcesContests");
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
              resource: "codeforces.com",
              order_by: "start",
            },
          }
        );

        const transformedContests = response.data.objects.map(
          (contest: Contest) => ({
            id: contest.id.toString(),
            event: contest.event,
            href: contest.href,
            start: contest.start,
            end: contest.end,
            duration: contest.duration,
          })
        );

        setContests(transformedContests);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "codeforcesContests",
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
    fetchContests();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
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
        Upcoming Codeforces Contests
      </HoverBorderGradient>
      <div
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
            color="#B1B1B1"
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

export default CodeForces;
