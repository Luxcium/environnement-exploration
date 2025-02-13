"use client";

import React from 'react';
import Link from 'next/link';

interface Topic {
  title: string;
  description: string;
  color: string;
  tasks: string[];
  slug: string;
}

interface TopicsProps {
  topics: Topic[];
}

export default function Topics({ topics }: TopicsProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <Link href={`/topic/${topic.slug}`} key={topic.slug}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-20 h-20 rounded-lg shadow-inner flex items-center justify-center"
                    style={{ backgroundColor: topic.color }}
                  >
                    <span className="text-3xl text-white">{topic.title[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg dark:text-white">{topic.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{topic.tasks.length} tasks</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-2">{topic.description}</p>
                <ul className="space-y-1 text-sm">
                  {topic.tasks.slice(0, 3).map((task) => (
                    <li key={task} className="text-gray-700 dark:text-gray-300">
                      • {task}
                    </li>
                  ))}
                  {topic.tasks.length > 3 && (
                    <li className="text-blue-600 dark:text-blue-400">
                      +{topic.tasks.length - 3} more tasks...
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}