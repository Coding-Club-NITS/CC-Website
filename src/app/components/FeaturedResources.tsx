"use client";
import Link from "next/link";
import courseData from "@/data/coding_resources.json";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"; // Importing an icon
import { motion } from "framer-motion"; // Importing framer-motion

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
}

function FeaturedResources() {
  const FeaturedResources = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      {/* Header */}
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED RESOURCES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn From the best resources
          </p>
        </div>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FeaturedResources.map((course: Course, index) => (
            <motion.div
              key={course.id}
              className="flex justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                start: "top 80%",
                delay: index * 0.2,
              }}
            >
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-black overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`${course.slug}`}
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-400 font-medium mt-4"
                  >
                    Click Here
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </Link>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedResources;
