# TypeBrew

A personal TypeScript playground for experimenting with basic logic, utility functions, and language features. This
repository serves as a hands-on space to build, refactor, and explore foundational programming concepts through small,
self-contained tasks.

---

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development Approach](#development-approach)
- [Links](#links)

---

## About

TypeBrew is a focused repository for practicing TypeScript syntax and programming patterns. Each file represents a small
task or utility function, often paired with a `.txt` file that explains the problem, requirements, or challenge
objective.

Whether it's string manipulation, math operations, or logic-based conditions, this project is built for iterating on
ideas and improving fluency with TypeScript.

---

## Technologies

- Language: TypeScript
- Tooling and Frameworks:
  - [Vite](https://vitejs.dev/)
  - [React](https://reactjs.org/)

---

## Folder Structure

```
type-brew/
│
├── src/
│ ├── tasks/ # Contains individual task implementations and descriptions
│ │ ├── task-name.ts # TypeScript implementation of a specific task
│ │ ├── task-name.txt # Description or notes for the task
│ │ └── ...
│ └── playground/ # Sandbox area for testing and quick experimentation
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Each task follows a simple format:

- `.ts` files for TypeScript logic.
- `.txt` files for task descriptions, goals, or notes.

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Friftycode/type-brew.git
cd TypeBrew
```

### 2. Install dependencies (optional):

Note: The project depends on several external packages including Vite, React, and TypeScript. Make sure to install
dependencies before running.

```bash
npm install
```

### 3. Run the project or tasks:

You can use ts-node or compile and run using tsc.

```bash
# Option 1: Run directly with ts-node (recommended)
npx ts-node src/tasks/your-task-file.ts

# Option 2: Compile then run
tsc src/tasks/your-task-file.ts
node src/tasks/your-task-file.js
```

---

## Usage

- Each file in the src/tasks/ folder is a standalone TypeScript task.
- Open any .txt file to read the task description.
- Open the corresponding .ts file to view or modify the solution.
- You can experiment, refactor, or expand on the logic as needed.

This structure is ideal for:

- Practicing coding interview-style questions.
- Revising language syntax and control structures.
- Testing logic and functional programming in TypeScript.

---

## Development Approach

1. Task-Oriented
   Each challenge is scoped narrowly to isolate learning objectives.
2. Text + Code Pairing
   Descriptions are written in `.txt` files to mirror real problem statements.
3. Iterative Practice
   Older tasks can be revisited and refactored.
   Emphasis on clarity, readability, and clean function structure.
4. Formatting Consistency
   Code is formatted consistently for readability and maintenance.

---

## Links

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
