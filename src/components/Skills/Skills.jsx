import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className="flex justify-between mt-10 mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            HTML
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            85%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-5/6"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            CSS
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            70%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Javascript
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            80%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-4/5"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            React
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            75%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Tailwind
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            60%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Git and GitHub
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            85%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-7">
          <div className="bg-blue-600 h-2.5 rounded-full w-5/6"></div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700 dark:text-white">
            Backend Development
          </span>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            40%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;