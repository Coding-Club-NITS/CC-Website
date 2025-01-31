import { LensDemo } from "@/app/components/lensCard";
const Header = () => {
  return (
    <div className="flex backdrop-blur-lg bg-white/10 dark:bg-black">
      <div className="max-w-4xl relative py-10 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          <div className="flex flex-row backdrop-blur-lg">
            <img src="/CC-logo.png" alt="Logo" width={200} height={200} />
            <div>
              <div className="text-indigo-800 dark:text-red-800 ">
                Coding Club
              </div>
              <div className="text-red-500 dark:text-yellow-500">
                NIT Silchar
              </div>
            </div>
          </div>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 pl-10 text-gray-900 dark:text-neutral-200">
          The Coding Club at NIT Silchar fosters a vibrant community for
          programming enthusiasts. It offers workshops and coding contests,
          encouraging students to enhance their coding skills, collaboration,
          teamwork, and stay updated with the latest technology trends.
        </p>
      </div>
      <LensDemo url="https://i.sstatic.net/rlNuN.png" />
    </div>
  );
};

export default Header;
