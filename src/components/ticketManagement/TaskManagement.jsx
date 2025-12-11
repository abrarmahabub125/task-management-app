import TaskItem from "./TaskItem";
import TaskStatus from "./TaskStatus";
import ResolveTask from "./ResolveTask";

const TaskManagement = ({
  tasks,
  onSelectTask,
  pendingTasks,
  resolvedTasks,
  onDeleteResolved,
  onResolveTask
}) => {
  const closedTasksMenu = () => {
    const drawer = document.querySelector(".task-menu");
    drawer.classList.remove("left-0");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 my-32">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold text-neutral-600 mb-4">
          Customer Tickets ({tasks.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tasks.length === 0 ? (
            <p className="text-neutral-500 text-left font-medium text-lg">
              No tasks available.
            </p>
          ) : (
            tasks.map((task) => {
              const isResolved = resolvedTasks.some((t) => t.id === task.id);
              const isPending = pendingTasks.some((t) => t.id === task.id);
              const currentStatus = isResolved
                ? "Resolved"
                : isPending
                ? "Pending"
                : task.status || "Open";

              return (
                <TaskItem
                  onTaskSelect={onSelectTask}
                  key={task.id}
                  task={task}
                  currentStatus={currentStatus}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="task-menu fixed top-0 -left-96 bg-white h-screen w-72 p-4 transition-all duration-300 lg:static lg:left-0 lg:w-auto lg:h-auto lg:px-0 lg:py-0">
        <div className="flex justify-between items-center mb-8 lg:hidden">
          <h1 className="text-lg font-semibold text-neutral-900">
            CS — Ticket System
          </h1>
          <button
            onClick={closedTasksMenu}
            className="transition hover:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-neutral-600 mb-4">
            Task Status
          </h1>
          <div className="max-h-96 overflow-y-scroll flex flex-col gap-y-4">
            <TaskStatus
              pendingTasks={pendingTasks}
              onResolveTask={onResolveTask}
            />
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-xl font-semibold text-neutral-600 mb-4">
            Resolved Tasks
          </h1>
          <div className="max-h-96 overflow-y-scroll flex flex-col gap-y-4">
            <ResolveTask
              resolvedTasks={resolvedTasks}
              onDeleteResolved={onDeleteResolved}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
