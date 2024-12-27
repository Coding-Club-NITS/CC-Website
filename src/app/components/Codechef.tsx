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
    const fetchContests = async () => {
      try {
        const response = await axios.get(
          "https://clist.by:443/api/v4/contest/",
          {
            headers: {
              Authorization:
                "ApiKey Atreya45:32e91b8791ab25ad7d26d6645bc08f8bba5309f7",
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
          (contest: Contest) => ({
            id: contest.id,
            name: contest.name,
            url: contest.url,
            start: contest.start,
            end: contest.end,
            duration: contest.duration,
            event: contest.event || "", // Provide default values for required fields
            href: contest.href || contest.url || "", // Provide default values for required fields
          })
        );

        setContests(transformedContests);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contests:", error);
        setLoading(false);
      }
    };
    fetchContests();
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
        // as="h2"
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
