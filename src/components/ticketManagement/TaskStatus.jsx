const TaskStatus = ({ pendingTasks, onResolveTask }) => {
  return (
    <>
      {pendingTasks.length === 0 ? (
        <p>No pending task available</p>
      ) : (
        pendingTasks.map((task) => {
          return (
            <div
              key={task.id}
              className="bg-white shadow border border-gray-200 rounded-md p-4"
            >
              <h1 className="text-base font-semibold text-neutral-900">
                {task.title}
              </h1>
              <button
                onClick={() => onResolveTask && onResolveTask(task)}
                className="w-full py-2 flex justify-center bg-green-600 rounded-md mt-4 text-white font-medium"
              >
                Complete
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default TaskStatus;
