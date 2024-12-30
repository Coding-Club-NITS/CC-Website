// "use client";

// import React, { useState, useEffect } from "react";
// import moment from "moment-timezone";
// // import {
// //   Table,
// //   TableHeader,
// //   TableColumn,
// //   TableBody,
// //   TableRow,
// //   TableCell,
// // } from "@nextui-org/react";

// // Interfaces
// interface Contest {
//   id: string;
//   event: string;
//   start: string;
//   end: string;
//   duration: number;
//   href: string;
// }

// interface TableComponentProps {
//   contests: Contest[];
// }

// const TableComponent: React.FC<TableComponentProps> = ({ contests }) => {
//   // State to track screen size
//   const [isMobile, setIsMobile] = useState(false);

//   // Responsive logic
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Check on initial load
//     checkMobile();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkMobile);

//     // Cleanup listener
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Convert UTC to IST
//   const convertToIST = (utcTime: string): string => {
//     return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
//   };

//   // Handle empty contests
//   if (!contests || contests.length === 0) {
//     return (
//       <div className="text-center p-4 text-gray-500">No upcoming contests</div>
//     );
//   }

//   // Dynamic columns based on screen size
//   const columns = isMobile
//     ? [
//         { key: "event", label: "Event" },
//         { key: "start", label: "Start" },
//         { key: "link", label: "Link" },
//       ]
//     : [
//         { key: "event", label: "Event" },
//         { key: "start", label: "Start Time (IST)" },
//         { key: "end", label: "End Time (IST)" },
//         { key: "duration", label: "Duration" },
//         { key: "link", label: "Link" },
//       ];

//   // Prepare rows
//   const rows = contests.map((contest) => ({
//     key: contest.id,
//     event: contest.event,
//     start: convertToIST(contest.start),
//     end: convertToIST(contest.end),
//     duration: `${Math.floor(contest.duration / 60)} mins`,
//     link: (
//       <a
//         href={contest.href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 hover:underline text-xs"
//       >
//         Contest
//       </a>
//     ),
//   }));

//   return (
//     <div className="w-full max-w-full rounded-lg backdrop-blur-lg bg-white/10 p-4 overflow-hidden md:p-1 sm:p-0.5">
//       <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
//         <Table
//           aria-label="Upcoming Programming Contests"
//           className="min-w-full text-sm"
//         >
//           <TableHeader>
//             {columns.map((column) => (
//               <TableColumn
//                 key={column.key}
//                 className="bg-transparent px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-300"
//               >
//                 {column.label}
//               </TableColumn>
//             ))}
//           </TableHeader>
//           <TableBody items={rows}>
//             {(item) => (
//               <TableRow
//                 key={item.key}
//                 className="hover:bg-white/10 transition duration-200"
//               >
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.key}
//                     className="px-4 py-2 text-xs text-gray-400 whitespace-nowrap"
//                   >
//                     {item[column.key as keyof typeof item]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;

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

  // Handle empty contests
  if (!contests || contests.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">No upcoming contests</div>
    );
  }

  // Dynamic columns based on screen size
  const columns = isMobile
    ? ["Event", "Start", "Link"]
    : ["Event", "Start Time (IST)", "End Time (IST)", "Duration", "Link"];

  return (
    <div className="w-full max-w-full rounded backdrop-blur-md bg-white/10 p-4 overflow-hidden md:p-1 sm:p-0.5">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
        <table className="min-w-full border-collapse text-sm">
          {/* Table Header */}
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="bg-transparent px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-300 text-left"
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
                <td className="px-4 py-2 text-xs text-gray-400 whitespace-nowrap">
                  {contest.event}
                </td>
                <td className="px-4 py-2 text-xs text-gray-400 whitespace-nowrap">
                  {convertToIST(contest.start)}
                </td>
                {!isMobile && (
                  <>
                    <td className="px-4 py-2 text-xs text-gray-400 whitespace-nowrap">
                      {convertToIST(contest.end)}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-400 whitespace-nowrap">
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
