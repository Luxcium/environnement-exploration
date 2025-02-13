"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';

// This would typically come from an API or database
const topicsData = {
  frontend: {
    title: "Frontend Development",
    description: "Web development tasks and projects",
    color: "#3B82F6",
    tasks: [
      {
        id: 1,
        name: "Implement responsive design",
        status: "in-progress",
        description: "Ensure the application works well on all device sizes",
      },
      {
        id: 2,
        name: "Optimize performance",
        status: "todo",
        description: "Improve loading times and runtime performance",
      },
      // Add more tasks here
    ]
  },
  // Add more topics here
};

export default function TopicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const topic = topicsData[slug as keyof typeof topicsData];

  if (!topic) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Topic not found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to topics
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div
              className="w-24 h-24 rounded-lg shadow-inner flex items-center justify-center"
              style={{ backgroundColor: topic.color }}
            >
              <span className="text-4xl text-white">{topic.title[0]}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{topic.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{topic.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {topic.tasks.map((task) => (
              <div
                key={task.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {task.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}