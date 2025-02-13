import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';
import ColorScheme from '@/components/ColorScheme';
async function getColors() {
  const colorsPath = path.join(process.cwd(), 'colors-scheme.yml');
  const fileContents = await fs.readFile(colorsPath, 'utf8');
  const rawData = yaml.loadAll(fileContents, undefined, {
    json: true,
    onWarning: (e) => console.warn(e),
    schema: yaml.DEFAULT_SCHEMA
  }) as Record<string, string[]>[];
  
  const combinedData = rawData.reduce((acc, curr) => {
    Object.entries(curr).forEach(([key, values]) => {
      if (key in acc) {
        acc[key] = [...new Set([...acc[key], ...values])];
      } else {
        acc[key] = values;
      }
    });
    return acc;
  }, {} as Record<string, string[]>);
  
  return combinedData;
}

const featuredSections = [
  {
    title: "Project Management",
    description: "Organize and track your projects efficiently",
    color: "#3B82F6",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    href: "/topics"
  },
  {
    title: "Resources",
    description: "Access documentation and learning materials",
    color: "#10B981",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: "/resources"
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your team",
    color: "#8B5CF6",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: "/team"
  }
];

export default async function Home() {
  const colors = await getColors();
  return (
    <div className="min-h-screen">
      <ColorScheme colors={colors} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to Your Project Portal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Access all your resources and project management tools in one place
          </p>
          <Link href="/topics" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition duration-150">
            Get Started
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSections.map((section) => (
              <Link key={section.title} href={section.href}>
                <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: section.color }}>
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/topics" className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-lg font-medium text-gray-900 dark:text-white">Topics</span>
            </Link>
            <Link href="/projects" className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-lg font-medium text-gray-900 dark:text-white">Projects</span>
            </Link>
            <Link href="/resources" className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-lg font-medium text-gray-900 dark:text-white">Resources</span>
            </Link>
            <Link href="/team" className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="block text-lg font-medium text-gray-900 dark:text-white">Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
