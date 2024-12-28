"use client"; // Add this line at the top
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";
import { Watch } from "react-loader-spinner";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface Contest {
  id: string; // Changed to string to match TableComponent
  event: string;
  href: string;
  start: string;
  end: string;
  duration: number;
}

const Leetcode: React.FC = () => {
  const [contests, setContests] = useState<Contest[]>(
    () => JSON.parse(localStorage.getItem("leetcodeContests") || "[]") // Retrieve from localStorage
  );
  const [loading, setLoading] = useState<boolean>(contests.length === 0); // Load only if contests are not available

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(
          "https://clist.by:443/api/v4/contest/",
          {
            headers: {
              Authorization: `ApiKey Atreya45:${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            params: {
              upcoming: true,
              resource: "leetcode.com",
              order_by: "start",
            },
          }
        );
        const fetchedContests = response.data.objects;
        setContests(fetchedContests);
        localStorage.setItem(
          "leetcodeContests",
          JSON.stringify(fetchedContests)
        ); // Store in localStorage
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contests:", error);
        setLoading(false);
      }
    };

    if (contests.length === 0) {
      fetchContests(); // Fetch only if data is not in localStorage
    }
  }, [contests]);

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
        Upcoming Leetcode Contests
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

export default Leetcode;
