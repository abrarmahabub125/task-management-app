import InProgress from "./ticketManagement/ProgressCounter";
import Resolves from "./ticketManagement/ResolveCounter";
import TaskManagement from "./ticketManagement/TaskManagement";
import { useState } from "react";

const Body = () => {
  const [tasks] = useState([
    {
      id: 1004,
      title: "Delayed Shipping Update",
      status: "Open",
      description:
        "Customer has not received tracking information even though the product was shipped 3 days ago.",
      priority: "LOW",
      customerName: "Emily Johnson",
      date: "2025-01-19"
    },
    {
      id: 1005,
      title: "Payment Verification Pending",
      status: "Open",
      description:
        "Customer's payment is showing as pending for over 24 hours.",
      priority: "MEDIUM",
      customerName: "Ryan Lee",
      date: "2025-01-20"
    },
    {
      id: 1006,
      title: "Product Color Mismatch",
      status: "Open",
      description:
        "Customer received a different color than what they ordered.",
      priority: "HIGH",
      customerName: "Sofia Martinez",
      date: "2025-01-18"
    },
    {
      id: 1007,
      title: "Refund Request",
      status: "Open",
      description: "Customer requested a refund due to late delivery.",
      priority: "LOW",
      customerName: "James Carter",
      date: "2025-01-17"
    },
    {
      id: 1008,
      title: "Address Change Request",
      status: "Open",
      description: "Customer requested an address update before shipment.",
      priority: "LOW",
      customerName: "Ava Thompson",
      date: "2025-01-16"
    },
    {
      id: 1009,
      title: "Damaged Product Received",
      status: "Open",
      description: "Customer reported receiving a damaged package.",
      priority: "HIGH",
      customerName: "Noah Wilson",
      date: "2025-01-21"
    },
    {
      id: 1010,
      title: "Order Cancellation",
      status: "Open",
      description:
        "Order was canceled before shipment as per customer's request.",
      priority: "MEDIUM",
      customerName: "Liam Brown",
      date: "2025-01-15"
    },
    {
      id: 1011,
      title: "Missing Item in Package",
      status: "Open",
      description: "Customer reported that one of the items was missing.",
      priority: "HIGH",
      customerName: "Mia Anderson",
      date: "2025-01-19"
    },
    {
      id: 1012,
      title: "Login Issues on Website",
      status: "Open",
      description:
        "Customer unable to log into their account after multiple attempts.",
      priority: "MEDIUM",
      customerName: "William Scott",
      date: "2025-01-20"
    },
    {
      id: 1013,
      title: "Warranty Claim Request",
      status: "Open",
      description:
        "Customer requested warranty support for a malfunctioning product.",
      priority: "LOW",
      customerName: "Olivia Green",
      date: "2025-01-18"
    }
  ]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleSelectTask = (task) => {
    // Prevent adding duplicates to pending
    if (!pendingTasks.includes(task) && !resolvedTasks.includes(task)) {
      setPendingTasks((prev) => [...prev, task]);
    }
  };

  const handleResolve = (task) => {
    setResolvedTasks((prev) => [...prev, task]);
    setPendingTasks((prev) => prev.filter((t) => t !== task));
  };

  const handleDeleteResolved = (task) => {
    setResolvedTasks((prev) => prev.filter((t) => t !== task));
  };

  return (
    <div className="px-4 my-20 flex justify-center">
      <div className="w-full xl:max-w-[1200px]">
        <div className="w-full flex flex-col md:flex-row gap-4 ">
          <InProgress pendingTasks={pendingTasks} />
          <Resolves resolvedTasks={resolvedTasks} />
        </div>

        <div>
          <TaskManagement
            tasks={tasks}
            pendingTasks={pendingTasks}
            setPendingTasks={setPendingTasks}
            resolvedTasks={resolvedTasks}
            setResolvedTasks={setResolvedTasks}
            onSelectTask={handleSelectTask}
            onResolveTask={handleResolve}
            onDeleteResolved={handleDeleteResolved}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
