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

export default async function Page() {
  const colors = await getColors();
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <section className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Color Scheme Explorer
          </h1>
          <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
            A visual guide to our design system's color tokens and their applications.
          </p>
        </section>
      </div>
      
      <section className="py-12">
        <ColorScheme colors={colors} />
      </section>
      
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        Built with Next.js and Tailwind CSS
      </footer>
    </main>
  );
}
