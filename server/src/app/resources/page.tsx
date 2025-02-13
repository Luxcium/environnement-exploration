export default function ResourcesPage() {
  const resources = [
    {
      category: "Documentation",
      items: [
        {
          title: "Getting Started Guide",
          description: "Learn the basics of the platform",
          icon: "📚",
          color: "#3B82F6"
        },
        {
          title: "API Reference",
          description: "Complete API documentation",
          icon: "🔧",
          color: "#10B981"
        }
      ]
    },
    {
      category: "Templates",
      items: [
        {
          title: "Project Templates",
          description: "Ready-to-use project structures",
          icon: "📋",
          color: "#8B5CF6"
        },
        {
          title: "Documentation Templates",
          description: "Standard documentation formats",
          icon: "📝",
          color: "#F59E0B"
        }
      ]
    },
    {
      category: "Learning",
      items: [
        {
          title: "Tutorial Videos",
          description: "Step-by-step video guides",
          icon: "🎥",
          color: "#EC4899"
        },
        {
          title: "Best Practices",
          description: "Coding standards and guidelines",
          icon: "✨",
          color: "#6366F1"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Access documentation, templates, and learning materials
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {section.category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}