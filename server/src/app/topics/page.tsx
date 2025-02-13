import Topics from '../../components/Topics';

const sampleTopics = [
  {
    title: "Frontend Development",
    description: "Web development tasks and projects",
    color: "#3B82F6",
    slug: "frontend",
    tasks: [
      "Implement responsive design",
      "Optimize performance",
      "Add accessibility features",
      "Create UI components",
      "Setup state management"
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side implementation tasks",
    color: "#10B981",
    slug: "backend",
    tasks: [
      "Design API endpoints",
      "Implement authentication",
      "Setup database models",
      "Configure caching"
    ]
  },
  {
    title: "DevOps",
    description: "Infrastructure and deployment tasks",
    color: "#8B5CF6",
    slug: "devops",
    tasks: [
      "Configure CI/CD pipeline",
      "Setup monitoring",
      "Manage cloud resources",
      "Implement security measures"
    ]
  },
  {
    title: "Quality Assurance",
    description: "Testing and quality control",
    color: "#F59E0B",
    slug: "qa",
    tasks: [
      "Write test cases",
      "Perform integration testing",
      "Setup automated testing",
      "Performance testing"
    ]
  }
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Topics
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Browse and manage your project topics and associated tasks
            </p>
          </div>
          <Topics topics={sampleTopics} />
        </div>
      </div>
    </div>
  );
}