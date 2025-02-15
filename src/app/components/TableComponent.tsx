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
      <div className="w-full max-w-full ">
        <div className="text-center ">No contests found</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full rounded backdrop-blur-md bg-white/10 p-2 sm:p-4">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-500 border-b text-left">
                Event
              </th>
              <th className="px-2 sm:px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-500 border-b text-left">
                Start Time (IST)
              </th>
              {!isMobile && (
                <th className="px-2 sm:px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-500 border-b text-left">
                  End Time (IST)
                </th>
              )}
              {!isMobile && (
                <th className="px-2 sm:px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-500 border-b text-left">
                  Duration
                </th>
              )}
              <th className="px-2 sm:px-4 py-2 text-xs font-medium text-gray-900 dark:text-gray-500 border-b text-left">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest) => (
              <tr
                key={contest.id}
                className="hover:bg-white/10 transition duration-200"
              >
                <td className="px-2 sm:px-4 py-2 text-xs text-gray-900 dark:text-gray-400 break-words whitespace-normal">
                  {contest.event}
                </td>
                <td className="px-2 sm:px-4 py-2 text-xs text-gray-900 dark:text-gray-400">
                  {convertToIST(contest.start)}
                </td>
                {!isMobile && (
                  <td className="px-2 sm:px-4 py-2 text-xs text-gray-900 dark:text-gray-400">
                    {convertToIST(contest.end)}
                  </td>
                )}
                {!isMobile && (
                  <td className="px-2 sm:px-4 py-2 text-xs text-gray-900 dark:text-gray-400">
                    {`${Math.floor(contest.duration / 60)} mins`}
                  </td>
                )}
                <td className="px-2 sm:px-4 py-2 text-xs text-blue-500 hover:underline">
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
