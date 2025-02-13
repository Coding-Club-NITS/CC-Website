// components/Profile.tsx
import { FC, useState } from "react";
import styles from "../(routes)/aboutus/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Profile: FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "About the Coding Club",
      content:
        "Welcome to the Coding Club! We focus on enhancing our skills in Competitive Programming (CP) and Data Structures and Algorithms (DSA). The club offers a platform to solve complex problems, participate in coding contests, and sharpen our problem-solving abilities. Join us to take on challenges, collaborate, and grow as a programmer!",
    },
    {
      title: "Skills We Focus On",
      content: `• Programming Languages: C++, Java, Python
• Data Structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, Tries
• Algorithms: Sorting, Searching, Dynamic Programming, Greedy, Backtracking, Divide and Conquer, Graph Algorithms
• Problem Solving: Codeforces, LeetCode, AtCoder, HackerRank, GeeksforGeeks
• Time and Space Complexity: Mastering Big-O, space optimization, and efficient algorithm design`,
    },
    {
      title: "Why Join Us?",
      content: `• Participate in internal and external coding contests (e.g., Codeforces, Codechef)
• Learn and master important algorithms and data structures
• Enhance your problem-solving and time-management skills
• Prepare for coding interviews with real-world challenges
• Collaborate with peers to solve complex problems and share knowledge
• Improve your competitive ranking and earn recognition`,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div
          className={`${styles.containers} col-lg-6 col-md-6 scale-50 md:scale-100`}
        >
          {/* Google Maps Embed */}
          <div className={styles.pic}>
            <div
              style={{
                transform: "rotate(-45deg)",
                width: "150%",
                height: "150%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2154.312780717407!2d92.78906863329303!3d24.757493153858746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x81efa836714a289b!2sNIT+Silchar!5e0!3m2!1sen!2sin!4v1437902296859"
                width="150%"
                height="150%"
                style={{ border: 0, transform: "translate(-25%, -25%)" }}
              ></iframe>
            </div>
          </div>
          {/* Decorative Boxes */}
          <div className={styles.box1}>
            <a
              href="https://www.youtube.com/@nitscodingclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className={styles.box2}>
            <a
              href="https://cc-website-teal.vercel.app/game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Coding Club Banner.jpg"
                alt="Tilted Image"
                className={styles.tiltedImage}
              />
            </a>
          </div>
          {/* Social Media Icons */}
          <div className={styles.social1}>
            <a
              href="https://www.facebook.com/codingclubnits?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className={styles.social2}>
            <a
              href="https://www.instagram.com/coding_club_nits?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className={styles.social3}>
            <a
              href="https://www.linkedin.com/company/coding-club-nit-silchar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className={`${styles.content} col-md-offset-6 col-lg-offset-6`}>
          <div className={styles.centerAlign}>
            <h1 className={styles.contentHead}>FAQ</h1>
          </div>

          <div className={styles.accordionContainer}>
            {accordionData.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${
                    openAccordion === index ? styles.active : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className={styles.accordionIcon}>
                    {openAccordion === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    openAccordion === index ? styles.open : ""
                  }`}
                >
                  <div className={styles.accordionText}>
                    {item.content.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footer}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
