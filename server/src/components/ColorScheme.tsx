"use client";

import React from 'react';

interface ColorSchemeProps {
  colors: Record<string, string[]>;
}

export default function ColorScheme({ colors }: ColorSchemeProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(colors).map(([hex, tokens]) => (
          <div key={hex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div
                  className="w-20 h-20 rounded-lg shadow-inner"
                  style={{ backgroundColor: hex }}
                ></div>
                <div>
                  <div className="font-mono font-bold text-lg dark:text-white">{hex}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{tokens.length} tokens</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-1 text-sm">
                {tokens.map((token) => (
                  <li key={token} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {token}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
