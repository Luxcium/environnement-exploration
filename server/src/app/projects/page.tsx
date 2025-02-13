export default function ProjectsPage() {
  const projects = [
    {
      name: "Project Alpha",
      status: "In Progress",
      progress: 65,
      color: "#3B82F6"
    },
    {
      name: "Project Beta",
      status: "Planning",
      progress: 25,
      color: "#10B981"
    },
    {
      name: "Project Gamma",
      status: "Review",
      progress: 90,
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Overview
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track and manage your ongoing projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${project.progress}%`,
                      backgroundColor: project.color
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-sm rounded-full" style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color
                }}>
                  {project.status}
                </span>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}