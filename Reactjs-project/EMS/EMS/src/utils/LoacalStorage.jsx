  const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare the weekly sales report.",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with client about project updates.",
        date: "2025-01-11",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update database",
        description: "Add new entries to system database.",
        date: "2025-01-12",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory check",
        description: "Verify stock and update inventory records.",
        date: "2025-01-09",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Attend the project planning meeting.",
        date: "2025-01-10",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login issue",
        description: "Resolve the reported login problem.",
        date: "2025-01-08",
        category: "Technical",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare presentation",
        description: "Create slides for quarterly review.",
        date: "2025-01-15",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Data cleanup",
        description: "Clean and organize customer database.",
        date: "2025-01-14",
        category: "Data",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "System backup",
        description: "Perform full backup of the company system.",
        date: "2025-01-13",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer support",
        description: "Handle customer support tickets.",
        date: "2025-01-07",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Website update",
        description: "Update the services page content.",
        date: "2025-01-06",
        category: "Web",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug testing",
        description: "Test new features for bugs.",
        date: "2025-01-05",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Social media post",
        description: "Create and publish social media content.",
        date: "2025-01-04",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Budget review",
        description: "Review and adjust department budget.",
        date: "2025-01-03",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Training session",
        description: "Attend leadership workshop.",
        date: "2025-01-02",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin = ([
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]);

export const setLocalstorage =()=>{
  localStorage.setItem("Employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalstorage =()=>{
const employees = JSON.parse(localStorage.getItem("Employees"));
const admin = JSON.parse(localStorage.getItem("admin"));
console.log(employees , admin)

}