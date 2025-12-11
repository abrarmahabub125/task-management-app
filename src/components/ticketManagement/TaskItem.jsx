const TaskItem = ({ task, onTaskSelect, currentStatus }) => {
  const statusSource =
    typeof currentStatus !== "undefined" && currentStatus !== null
      ? currentStatus
      : task.status;
  const statusRaw = (statusSource || "").toLowerCase();
  const statusKey =
    statusRaw.includes("in progress") || statusRaw.includes("pending")
      ? "pending"
      : statusRaw.includes("open")
      ? "open"
      : statusRaw.includes("resolved") || statusRaw.includes("resolve")
      ? "resolved"
      : statusRaw.includes("closed")
      ? "closed"
      : "default";

  const badgeClasses = {
    pending:
      "flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-sm font-medium",
    open: "flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium",
    resolved:
      "flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium",
    closed:
      "flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium",
    default:
      "flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-sm font-medium"
  };

  const dotClasses = {
    pending: "size-1.5 rounded-full bg-yellow-800",
    open: "size-1.5 rounded-full bg-blue-800",
    resolved: "size-1.5 rounded-full bg-green-800",
    closed: "size-1.5 rounded-full bg-gray-800",
    default: "size-1.5 rounded-full bg-yellow-800"
  };

  return (
    <div
      onClick={() => onTaskSelect(task)}
      className="p-6 border border-gray-200 rounded-md"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-neutral-900">{task.title}</h2>
        <button className={badgeClasses[statusKey]}>
          <div className={dotClasses[statusKey]}></div>
          <span>{statusSource}</span>
        </button>
      </div>
      <p className="my-4 text-neutral-600">{task.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 text-sm text-neutral-500">
          <span>#{task.id}</span>
          <span>{task.priority}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-500">{task.customerName}</span>
          <p className="flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 stroke-neutral-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </span>
            <span className="text-sm text-neutral-500">{task.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
