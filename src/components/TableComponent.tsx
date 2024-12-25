"use client";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

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
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Convert UTC to IST
  const convertToIST = (utcTime: string): string => {
    return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  };

  // Handle empty contests
  if (!contests || contests.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        No upcoming contests
      </div>
    );
  }

  // Dynamic columns based on screen size
  const columns = isMobile 
    ? [
        { key: "event", label: "Event" },
        { key: "start", label: "Start" },
        { key: "link", label: "Link" }
      ]
    : [
        { key: "event", label: "Event" },
        { key: "start", label: "Start Time (IST)" },
        { key: "end", label: "End Time (IST)" },
        { key: "duration", label: "Duration" },
        { key: "link", label: "Link" },
      ];

  // Prepare rows
  const rows = contests.map((contest) => ({
    key: contest.id,
    event: contest.event,
    start: convertToIST(contest.start),
    end: convertToIST(contest.end),
    duration: `${Math.floor(contest.duration / 60)} mins`,
    link: (
      <a
        href={contest.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-xs"
      >
        Contest
      </a>
    ),
  }));

  return (
    <div 
      className="w-full max-w-full overflow-x-auto blurred-table-container"
      style={{ 
        overflowX: 'auto', 
        WebkitOverflowScrolling: 'touch' 
      }}
    >
      <Table
        aria-label="Upcoming Programming Contests"
        className="min-w-full"
        classNames={{
          wrapper: "min-w-full",
          table: "min-w-full",
          th: "bg-transparent text-default-500 border-b border-divider/40 text-xs",
          td: "text-default-400 text-xs",
        }}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              className="bg-transparent px-2 py-2 text-xs font-medium text-default-500"
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key} className="hover:bg-white/5">
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className="px-2 py-2 text-xs whitespace-nowrap"
                >
                  {item[column.key as keyof typeof item]}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;