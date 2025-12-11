# CS — Ticket System: Project Documentation

## Project Overview

**Application Name:** CS — Ticket System (Customer Support Ticket Management System)
**Purpose:** A React-based web application for managing customer support tickets with status tracking (Open, Pending, Resolved, Closed)

---

## 📁 Component Hierarchy & File Structure

```
src/
├── main.jsx                           (Entry point: Renders App to DOM)
├── App.jsx                            (Root component: Layout container)
├── index.css                          (Global styles + Tailwind CSS)
├── components/
│   ├── Header.jsx                     (Navigation bar with mobile menu)
│   ├── footer.jsx                     (Footer with links and copyright)
│   ├── Body.jsx                       (State management hub for ticket data)
│   └── ticketManagement/
│       ├── TaskManagement.jsx         (Main ticket list layout container)
│       ├── TaskItem.jsx               (Individual ticket card component)
│       ├── TaskStatus.jsx             (Pending tasks list with Complete button)
│       ├── ResolveTask.jsx            (Resolved tasks list with delete button)
│       ├── ProgressCounter.jsx        (Yellow counter card showing pending count)
│       └── ResolveCounter.jsx         (Green counter card showing resolved count)
└── assets/
    ├── react.svg                      (React logo SVG)
    └── myImage.jpg                    (Project image asset)
```

---

## 🔄 Data Flow & Component Props

### **1. main.jsx**

**Function:** `createRoot()`, `render()`

- Mounts the React app to `#root` DOM element
- No props involved (entry point)

---

### **2. App.jsx**

**Component Function:** `App()`
**Purpose:** Root layout container

**Renders:**

- `<Header />` → Navigation
- `<Body />` → Ticket management (state hub)
- `<Footer />` → Footer links

**Props:** None (no props received)

---

### **3. Header.jsx**

**Component Function:** `Header()`
**Purpose:** Top navigation bar with mobile menu toggle

**Internal Functions:**

- `showMenu()` → Toggles menu visibility (class toggle)
- `hideMenu()` → Closes menu (class removal)
- `showTaskMenu()` → Toggles task panel on mobile

**Props:** None

**Elements:**

- Button with "T" → Opens task menu (mobile)
- Menu button → Opens navigation menu (mobile)
- Navigation links: Home, FAQ, Changelog, Blog, Download, Contact
- "New Ticket" button

---

### **4. footer.jsx**

**Component Function:** `footer()`
**Purpose:** Footer with company info and links

**Sections:**

- About CS — Ticket System
- Company links (About Us, Our Mission, Contact Sales)
- Services (Products & Services, Customer Stories, Download Apps)
- Information (Privacy Policy, Terms & Conditions, Join Us)
- Social Links (Facebook, Twitter, LinkedIn, Email)

**Props:** None

---

### **5. Body.jsx** ⭐ **[STATE HUB]**

**Component Function:** `Body()`
**Purpose:** Central state management for all ticket data

**State Variables:**

```javascript
const [tasks] = useState([...])           // Array of 10 ticket objects
const [pendingTasks, setPendingTasks] = useState([])
const [resolvedTasks, setResolvedTasks] = useState([])
```

**Ticket Object Structure:**

```javascript
{
  id: number,              // Unique ID (1004-1013)
  title: string,           // Ticket title/subject
  status: string,          // "Open" (original status)
  description: string,     // Full ticket description
  priority: string,        // "LOW", "MEDIUM", "HIGH"
  customerName: string,    // Customer name
  date: string            // Date (YYYY-MM-DD format)
}
```

**State Handlers (Callback Functions):**

| Function Name                | Purpose              | Action                                                         |
| ---------------------------- | -------------------- | -------------------------------------------------------------- |
| `handleSelectTask(task)`     | Add task to pending  | Moves task from `tasks` → `pendingTasks` (prevents duplicates) |
| `handleResolve(task)`        | Mark task complete   | Moves task from `pendingTasks` → `resolvedTasks`               |
| `handleDeleteResolved(task)` | Remove resolved task | Removes task from `resolvedTasks`                              |

**Props Passed to Children:**

| Component            | Props Passed                                                                                                                                                                                   | Purpose                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `<InProgress />`     | `pendingTasks`                                                                                                                                                                                 | Display count of pending tasks             |
| `<Resolves />`       | `resolvedTasks`                                                                                                                                                                                | Display count of resolved tasks            |
| `<TaskManagement />` | `tasks`, `pendingTasks`, `setPendingTasks`, `resolvedTasks`, `setResolvedTasks`, `onSelectTask={handleSelectTask}`, `onResolveTask={handleResolve}`, `onDeleteResolved={handleDeleteResolved}` | Full data + handlers for ticket management |

---

### **6. ProgressCounter.jsx** (Imported as `InProgress`)

**Component Function:** `ProgressCounter()`
**Purpose:** Display counter card for pending tasks

**Props:**

- `pendingTasks` (array) → Array of pending ticket objects

**Renders:**

- Yellow card with "In-Progress" label
- Displays: `pendingTasks.length` (count of pending tasks)
- Images: Vector graphics from CDN

---

### **7. ResolveCounter.jsx** (Imported as `Resolves`)

**Component Function:** `ResolveCounter()`
**Purpose:** Display counter card for resolved tasks

**Props:**

- `resolvedTasks` (array) → Array of resolved ticket objects

**Renders:**

- Green card with "Resolved" label
- Displays: `resolvedTasks.length` (count of resolved tasks)
- Images: Vector graphics from CDN

---

### **8. TaskManagement.jsx** 🔑 **[ORCHESTRATOR]**

**Component Function:** `TaskManagement()`
**Purpose:** Container for task list and status panels

**Props Received:**

```javascript
{
  tasks, // All available tickets
    onSelectTask, // Function: add to pending
    pendingTasks, // Current pending tickets
    resolvedTasks, // Current resolved tickets
    onDeleteResolved, // Function: delete from resolved
    onResolveTask; // Function: move to resolved
}
```

**Internal Functions:**

- `closedTasksMenu()` → Closes task menu drawer on mobile (DOM query)

**Computed Data:**

- For each task: determines `currentStatus` (Resolved/Pending/Open)
  - Uses: `isResolved = resolvedTasks.some(t => t.id === task.id)`
  - Uses: `isPending = pendingTasks.some(t => t.id === task.id)`

**Props Passed to Children:**

| Component               | Props                                          | Data                                      |
| ----------------------- | ---------------------------------------------- | ----------------------------------------- |
| `<TaskItem />` (mapped) | `task`, `currentStatus`, `onTaskSelect`, `key` | Each ticket + live status + click handler |
| `<TaskStatus />`        | `pendingTasks`, `onResolveTask`                | Pending tasks + resolve handler           |
| `<ResolveTask />`       | `resolvedTasks`, `onDeleteResolved`            | Resolved tasks + delete handler           |

---

### **9. TaskItem.jsx** (Individual Task Card)

**Component Function:** `TaskItem()`
**Purpose:** Display single ticket card with dynamic status badge

**Props:**

```javascript
{
  task, // Ticket object
    onTaskSelect, // Function to call on click
    currentStatus; // Live status string (Pending/Resolved/Open)
}
```

**Internal Logic:**

```javascript
// Determine badge color based on status
const statusSource = currentStatus !== undefined ? currentStatus : task.status;
const statusRaw = statusSource.toLowerCase();

// Map status to badge style
const statusKey = statusRaw.includes("pending")
  ? "pending"
  : statusRaw.includes("open")
  ? "open"
  : statusRaw.includes("resolved")
  ? "resolved"
  : statusRaw.includes("closed")
  ? "closed"
  : "default";
```

**Badge Styling:**
| Status | Background | Text Color | Dot Color |
|---|---|---|---|
| Pending | `bg-yellow-100` | `text-yellow-800` | `bg-yellow-800` |
| Open | `bg-blue-100` | `text-blue-800` | `bg-blue-800` |
| Resolved | `bg-green-100` | `text-green-800` | `bg-green-800` |
| Closed | `bg-gray-100` | `text-gray-800` | `bg-gray-800` |

**Renders:**

- Task title (heading)
- Status badge (colored pill with dot)
- Description
- Task ID, Priority, Customer name, Date
- Calendar icon with date

**Events:**

- `onClick={() => onTaskSelect(task)}` → Adds task to pending list

---

### **10. TaskStatus.jsx** (Pending Tasks Panel)

**Component Function:** `TaskStatus()`
**Purpose:** Display list of pending/in-progress tasks

**Props:**

```javascript
{
  pendingTasks, // Array of pending ticket objects
    onResolveTask; // Function to call when task is complete
}
```

**Renders:**

- "No pending task available" message if empty
- For each pending task:
  - Task title (heading)
  - "Complete" button (green)

**Events:**

- Complete button: `onClick={() => onResolveTask(task)}`
  - Calls `Body`'s `handleResolve()` → moves to resolved

---

### **11. ResolveTask.jsx** (Resolved Tasks Panel)

**Component Function:** `ResolveTask()`
**Purpose:** Display list of resolved tasks with delete option

**Props:**

```javascript
{
  resolvedTasks, // Array of resolved ticket objects
    onDeleteResolved; // Function to call when deleting
}
```

**Renders:**

- "No resolve task available" message if empty
- For each resolved task:
  - Task title (heading)
  - "Complete" button (light green, disabled/no action)
  - Delete button (red trash icon)

**Events:**

- Delete button: `onClick={() => onDeleteResolved(task)}`
  - Calls `Body`'s `handleDeleteResolved()` → removes from resolved

---

## 📊 State Management Diagram

```
┌─────────────────────────────────────────┐
│            Body Component               │
│  (Central State Management Hub)          │
├─────────────────────────────────────────┤
│ State:                                  │
│  • tasks[] = [10 tickets]               │
│  • pendingTasks[] = []                  │
│  • resolvedTasks[] = []                 │
└─────────────────────────────────────────┘
          ↓           ↓           ↓
    ┌─────────────────────────────────────────────┐
    │                                             │
    ↓                    ↓                        ↓
┌──────────────┐  ┌─────────────────┐   ┌────────────────┐
│ ProgressCtr  │  │  TaskManagement │   │ ResolveCounter │
│ (Count: 🟡)  │  │ (List + Panels) │   │ (Count: 🟢)    │
└──────────────┘  └─────────────────┘   └────────────────┘
                         ↓
           ┌─────────────────────────────┐
           │      TaskManagement         │
           │   (Orchestrator)            │
           └─────────────────────────────┘
      ↓              ↓              ↓
┌──────────┐  ┌────────────┐  ┌──────────────┐
│ TaskItem │  │TaskStatus  │  │ ResolveTask  │
│ (Cards)  │  │ (Pending)  │  │ (Resolved)   │
└──────────┘  └────────────┘  └──────────────┘
```

---

## 🔄 User Interaction Flow

### Scenario 1: Select Task → Add to Pending

```
User clicks TaskItem Card
  ↓
TaskItem: onClick → onTaskSelect(task)
  ↓
Body: handleSelectTask(task)
  ↓
Body: setPendingTasks([...prev, task])
  ↓
TaskManagement re-renders: currentStatus = "Pending"
  ↓
TaskItem: badge color changes to yellow
  ↓
TaskStatus: task appears in pending list with "Complete" button
```

### Scenario 2: Complete Task → Move to Resolved

```
User clicks "Complete" in TaskStatus
  ↓
TaskStatus: onClick → onResolveTask(task)
  ↓
Body: handleResolve(task)
  ↓
Body: setResolvedTasks([...prev, task])
  ↓
Body: setPendingTasks(prev.filter(t => t !== task))
  ↓
Task removed from pending list
  ↓
Task added to resolved list
  ↓
TaskItem: badge changes to green "Resolved"
  ↓
ResolveTask: task appears with delete button
```

### Scenario 3: Delete Resolved Task

```
User clicks delete (trash icon) in ResolveTask
  ↓
ResolveTask: onClick → onDeleteResolved(task)
  ↓
Body: handleDeleteResolved(task)
  ↓
Body: setResolvedTasks(prev.filter(t => t !== task))
  ↓
Task removed from resolved list
  ↓
ResolveTask: task disappears
  ↓
TaskItem: badge reverts to original status "Open"
```

---

## 🎨 Styling Summary

### Framework

- **Tailwind CSS** v4.1.17 (utility-first CSS)
- **Font:** Arimo (Google Fonts)

### Color Palette

| Status   | Primary                                  | Secondary                      | Tertiary                     |
| -------- | ---------------------------------------- | ------------------------------ | ---------------------------- |
| Pending  | Violet (`from-violet-500 to-violet-400`) | Yellow badge (`bg-yellow-100`) | Yellow dot (`bg-yellow-800`) |
| Open     | Blue                                     | Blue badge (`bg-blue-100`)     | Blue dot (`bg-blue-800`)     |
| Resolved | Green                                    | Green badge (`bg-green-100`)   | Green dot (`bg-green-800`)   |
| Closed   | Gray                                     | Gray badge (`bg-gray-100`)     | Gray dot (`bg-gray-800`)     |

---

## 🛠️ Tech Stack

| Technology        | Version | Purpose          |
| ----------------- | ------- | ---------------- |
| React             | 19.2.0  | UI library       |
| React-DOM         | 19.2.0  | DOM rendering    |
| Tailwind CSS      | 4.1.17  | Styling          |
| @tailwindcss/vite | 4.1.17  | Vite integration |
| Vite              | 7.2.4   | Build tool       |
| ESLint            | 9.39.1  | Code linting     |

---

## 📝 File-by-File Summary Table

| File                  | Type           | Purpose           | Key Props In           | Key Props Out   | State         |
| --------------------- | -------------- | ----------------- | ---------------------- | --------------- | ------------- |
| `main.jsx`            | Entry          | Render app to DOM | —                      | —               | —             |
| `App.jsx`             | Container      | Root layout       | —                      | —               | No            |
| `Header.jsx`          | Presentational | Navigation + menu | —                      | —               | No            |
| `footer.jsx`          | Presentational | Footer + links    | —                      | —               | No            |
| `Body.jsx`            | Container      | State hub         | —                      | tasks, handlers | **Yes**       |
| `TaskManagement.jsx`  | Container      | Ticket layout     | tasks, handlers        | —               | Computed only |
| `TaskItem.jsx`        | Presentational | Ticket card       | task, status, handler  | —               | No            |
| `TaskStatus.jsx`      | Presentational | Pending list      | pendingTasks, handler  | —               | No            |
| `ResolveTask.jsx`     | Presentational | Resolved list     | resolvedTasks, handler | —               | No            |
| `ProgressCounter.jsx` | Presentational | Pending count     | pendingTasks           | —               | No            |
| `ResolveCounter.jsx`  | Presentational | Resolved count    | resolvedTasks          | —               | No            |

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm build

# Run linter
npm lint

# Preview production build
npm preview
```

---

## 📌 Key Takeaways

1. **Body.jsx** is the source of truth (state management)
2. **TaskManagement.jsx** orchestrates the ticket list and panels
3. **TaskItem.jsx** renders individual cards with dynamic status badges
4. **TaskStatus.jsx** and **ResolveTask.jsx** display pending and resolved tasks
5. **ProgressCounter.jsx** and **ResolveCounter.jsx** show counts
6. All data flows down via props; events flow up via callbacks
7. Status changes trigger re-renders automatically due to React's reactive system
