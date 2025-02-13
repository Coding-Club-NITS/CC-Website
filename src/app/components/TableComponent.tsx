"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

// Interfaces
interface Contest {
  id: string;
  event: string;
  start: string;
  end: string;
  duration: number;
  href: string;
}

interface TableComponentProps {
  contests: Contest[];
}

const TableComponent: React.FC<TableComponentProps> = ({ contests }) => {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Responsive logic
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Convert UTC to IST
  const convertToIST = (utcTime: string): string => {
    return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  };

  // Dummy data for debugging
  if (!contests || contests.length === 0) {
    contests = [
      {
        id: "1",
        event: "Debug Contest",
        start: "2025-02-13T12:00:00Z",
        end: "2025-02-13T14:00:00Z",
        duration: 120,
        href: "#",
      },
    ];
  }

  // Dynamic columns based on screen size
  const columns = isMobile
    ? ["Event", "Start", "Link"]
    : ["Event", "Start Time (IST)", "End Time (IST)", "Duration", "Link"];

  return (
    <div
      className={`w-full max-w-full rounded backdrop-blur-md bg-white/10 p-4 overflow-hidden md:p-1 sm:p-0.5 ${
        isMobile ? "pr-4" : ""
      }`}
    >
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
        <table
          className={`min-w-${
            isMobile ? "sm" : "full"
          } border-collapse text-sm`}
        >
          {/* Table Header */}
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="bg-transparent px-4 py-2 text-xs font-medium text-blue-gray-900 dark:text-gray-500 border-b dark:border-gray-300 border-black text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {contests.map((contest) => (
              <tr
                key={contest.id}
                className="hover:bg-white/10 transition duration-200"
              >
                <td className="px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                  {contest.event}
                </td>
                <td className="px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                  {convertToIST(contest.start)}
                </td>
                {!isMobile && (
                  <>
                    <td className="px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                      {convertToIST(contest.end)}
                    </td>
                    <td className="px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                      {`${Math.floor(contest.duration / 60)} mins`}
                    </td>
                  </>
                )}
                <td className="px-4 py-2 text-xs text-blue-500 hover:underline whitespace-nowrap">
                  <a
                    href={contest.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contest
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
