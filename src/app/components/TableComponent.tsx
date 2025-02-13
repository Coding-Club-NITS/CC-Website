"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const convertToIST = (utcTime: string): string => {
    return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  };

  if (!contests || contests.length === 0) {
    return (
      <div className="text-center p-4 text-black dark:text-blue-gray-900">
        No upcoming contests
      </div>
    );
  }

  const columns = isMobile
    ? ["Event", "Start", "Link"]
    : ["Event", "Start Time (IST)", "End Time (IST)", "Duration", "Link"];

  return (
    <div className="w-full max-w-full rounded backdrop-blur-md bg-white/10 p-2 sm:p-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="bg-transparent px-2 sm:px-4 py-2 text-xs font-medium text-blue-gray-900 dark:text-gray-500 border-b dark:border-gray-300 border-black text-left"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contests.map((contest) => (
              <tr
                key={contest.id}
                className="hover:bg-white/10 transition duration-200"
              >
                <td className="px-2 sm:px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                  {contest.event}
                </td>
                <td className="px-2 sm:px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                  {convertToIST(contest.start)}
                </td>
                {!isMobile && (
                  <>
                    <td className="px-2 sm:px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                      {convertToIST(contest.end)}
                    </td>
                    <td className="px-2 sm:px-4 py-2 text-xs text-blue-gray-900 dark:text-gray-400 whitespace-nowrap">
                      {`${Math.floor(contest.duration / 60)} mins`}
                    </td>
                  </>
                )}
                <td className="px-2 sm:px-4 py-2 text-xs text-blue-500 hover:underline whitespace-nowrap">
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
