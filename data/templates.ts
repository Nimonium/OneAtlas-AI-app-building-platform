import { TemplateDefinition } from "@/types/app";

export const templates: TemplateDefinition[] = [
  {
    id: "template-crm",
    slug: "crm-workspace",
    name: "CRM Workspace",
    category: "CRM & Sales",
    complexity: "Moderate",
    description: "A complete CRM solution for managing leads, tracking deals in a pipeline, and logging activity.",
    tags: ["crm", "customer", "leads", "contacts", "sales", "pipeline", "deals", "outreach", "revenue"],
    schemaDefaults: {
      version: 1,
      components: [
        {
          id: "comp-contacts-table",
          type: "table",
          name: "Contacts Table",
          fields: [
            { id: "f-name", name: "Name", type: "text", required: true },
            { id: "f-email", name: "Email", type: "email", required: true },
            { id: "f-phone", name: "Phone", type: "text" },
            { id: "f-company", name: "Company", type: "text" },
            { id: "f-status", name: "Status", type: "select", options: ["New", "Contacted", "Qualified", "Lost"] },
          ],
        },
        {
          id: "comp-deals-kanban",
          type: "kanban",
          name: "Deals Kanban",
          fields: [
            { id: "f-title", name: "Title", type: "text", required: true },
            { id: "f-value", name: "Value", type: "number" },
            { id: "f-stage", name: "Stage", type: "select", options: ["Lead", "Meeting", "Proposal", "Closed Won", "Closed Lost"] },
            { id: "f-owner", name: "Owner", type: "text" },
          ],
        },
        {
          id: "comp-activity-log",
          type: "table",
          name: "Activity Log Table",
          fields: [
            { id: "f-date", name: "Date", type: "date", required: true },
            { id: "f-type", name: "Type", type: "select", options: ["Call", "Email", "Meeting", "Note"] },
            { id: "f-description", name: "Description", type: "text" },
          ],
        }
      ],
      dataModel: {
        tables: [
          {
            name: "Contacts",
            fields: [
              { id: "f-name", name: "Name", type: "text", required: true },
              { id: "f-email", name: "Email", type: "email", required: true },
              { id: "f-phone", name: "Phone", type: "text" },
              { id: "f-company", name: "Company", type: "text" },
              { id: "f-status", name: "Status", type: "select" },
            ]
          },
          {
            name: "Deals",
            fields: [
              { id: "f-title", name: "Title", type: "text", required: true },
              { id: "f-value", name: "Value", type: "number" },
              { id: "f-stage", name: "Stage", type: "select" },
              { id: "f-owner", name: "Owner", type: "text" },
            ]
          }
        ]
      }
    }
  },
  {
    id: "template-hr",
    slug: "hr-dashboard",
    name: "HR Dashboard",
    category: "HR & People",
    complexity: "Moderate",
    description: "Manage employees, track leave requests, and oversee recruitment pipelines.",
    tags: ["hr", "employees", "hiring", "recruitment", "people", "team", "onboarding", "payroll", "leave"],
    schemaDefaults: {
      version: 1,
      components: [
        {
          id: "comp-employees-table",
          type: "table",
          name: "Employees Table",
          fields: [
            { id: "f-emp-name", name: "Name", type: "text", required: true },
            { id: "f-emp-role", name: "Role", type: "text" },
            { id: "f-emp-dept", name: "Department", type: "text" },
            { id: "f-emp-status", name: "Status", type: "select", options: ["Active", "On Leave", "Terminated"] },
            { id: "f-emp-join", name: "Join Date", type: "date" },
          ],
        },
        {
          id: "comp-recruitment-kanban",
          type: "kanban",
          name: "Recruitment Kanban",
          fields: [
            { id: "f-app-name", name: "Applicant Name", type: "text", required: true },
            { id: "f-app-role", name: "Role Applied For", type: "text" },
            { id: "f-app-stage", name: "Stage", type: "select", options: ["Screening", "Interview", "Offer", "Hired", "Rejected"] },
          ],
        },
        {
          id: "comp-leave-tracker",
          type: "table",
          name: "Leave Tracker",
          fields: [
            { id: "f-leave-emp", name: "Employee", type: "text", required: true },
            { id: "f-leave-type", name: "Leave Type", type: "select", options: ["Sick", "Vacation", "Personal"] },
            { id: "f-leave-start", name: "Start Date", type: "date" },
            { id: "f-leave-end", name: "End Date", type: "date" },
          ],
        }
      ],
      dataModel: {
        tables: [
          {
            name: "Employees",
            fields: [
              { id: "f-emp-name", name: "Name", type: "text", required: true },
              { id: "f-emp-role", name: "Role", type: "text" },
              { id: "f-emp-dept", name: "Department", type: "text" },
              { id: "f-emp-status", name: "Status", type: "select" },
              { id: "f-emp-join", name: "Join Date", type: "date" },
            ]
          },
          {
            name: "Applications",
            fields: [
              { id: "f-app-name", name: "Applicant Name", type: "text", required: true },
              { id: "f-app-role", name: "Role Applied For", type: "text" },
              { id: "f-app-stage", name: "Stage", type: "select" },
            ]
          }
        ]
      }
    }
  },
  {
    id: "template-admin",
    slug: "admin-panel",
    name: "Admin Panel",
    category: "Admin & Operations",
    complexity: "Simple",
    description: "Core administration tools for managing users, settings, and system overview.",
    tags: ["admin", "panel", "management", "users", "settings", "operations", "dashboard", "control", "system"],
    schemaDefaults: {
      version: 1,
      components: [
        {
          id: "comp-users-table",
          type: "table",
          name: "Users Table",
          fields: [
            { id: "f-usr-name", name: "Name", type: "text", required: true },
            { id: "f-usr-email", name: "Email", type: "email", required: true },
            { id: "f-usr-role", name: "Role", type: "select", options: ["Admin", "Editor", "Viewer"] },
            { id: "f-usr-status", name: "Status", type: "select", options: ["Active", "Suspended"] },
            { id: "f-usr-created", name: "Created At", type: "date" },
          ],
        },
        {
          id: "comp-stats",
          type: "stats",
          name: "Stats Summary",
          fields: [
            { id: "f-stat-total", name: "Total Users", type: "number" },
            { id: "f-stat-active", name: "Active Today", type: "number" },
            { id: "f-stat-rev", name: "Revenue", type: "number" },
          ],
        },
        {
          id: "comp-settings-form",
          type: "form",
          name: "Settings Form",
          fields: [
            { id: "f-set-site", name: "Site Name", type: "text" },
            { id: "f-set-maintenance", name: "Maintenance Mode", type: "boolean" },
            { id: "f-set-contact", name: "Support Email", type: "email" },
          ],
        }
      ],
      dataModel: {
        tables: [
          {
            name: "Users",
            fields: [
              { id: "f-usr-name", name: "Name", type: "text", required: true },
              { id: "f-usr-email", name: "Email", type: "email", required: true },
              { id: "f-usr-role", name: "Role", type: "select" },
              { id: "f-usr-status", name: "Status", type: "select" },
              { id: "f-usr-created", name: "Created At", type: "date" },
            ]
          },
          {
            name: "Settings",
            fields: [
              { id: "f-set-key", name: "Key", type: "text", required: true },
              { id: "f-set-value", name: "Value", type: "text" },
            ]
          }
        ]
      }
    }
  },
  {
    id: "template-analytics",
    slug: "analytics-dashboard",
    name: "Analytics Dashboard",
    category: "Analytics",
    complexity: "Advanced",
    description: "Deep dive into data with charts, metrics, and report generation.",
    tags: ["analytics", "metrics", "data", "charts", "revenue", "traffic", "performance", "kpi", "reports", "insights"],
    schemaDefaults: {
      version: 1,
      components: [
        {
          id: "comp-rev-chart",
          type: "chart",
          name: "Revenue Line Chart",
          fields: [
            { id: "f-rev-date", name: "Date", type: "date" },
            { id: "f-rev-amount", name: "Amount", type: "number" },
          ],
        },
        {
          id: "comp-traffic-chart",
          type: "chart",
          name: "Traffic Bar Chart",
          fields: [
            { id: "f-traf-source", name: "Source", type: "text" },
            { id: "f-traf-visits", name: "Visits", type: "number" },
          ],
        },
        {
          id: "comp-kpi-stats",
          type: "stats",
          name: "KPI Stats Row",
          fields: [
            { id: "f-kpi-sessions", name: "Sessions", type: "number" },
            { id: "f-kpi-conv", name: "Conversions", type: "number" },
            { id: "f-kpi-rev", name: "Revenue", type: "number" },
            { id: "f-kpi-churn", name: "Churn Rate", type: "number" },
          ],
        },
        {
          id: "comp-events-table",
          type: "table",
          name: "Events Table",
          fields: [
            { id: "f-evt-name", name: "Event Name", type: "text" },
            { id: "f-evt-user", name: "User", type: "text" },
            { id: "f-evt-time", name: "Timestamp", type: "date" },
          ],
        }
      ],
      dataModel: {
        tables: [
          {
            name: "Events",
            fields: [
              { id: "f-evt-name", name: "Event Name", type: "text" },
              { id: "f-evt-user", name: "User", type: "text" },
              { id: "f-evt-time", name: "Timestamp", type: "date" },
            ]
          },
          {
            name: "Metrics",
            fields: [
              { id: "f-met-date", name: "Date", type: "date" },
              { id: "f-met-sessions", name: "Sessions", type: "number" },
              { id: "f-met-revenue", name: "Revenue", type: "number" },
            ]
          }
        ]
      }
    }
  },
  {
    id: "template-inventory",
    slug: "inventory-system",
    name: "Inventory System",
    category: "Inventory",
    complexity: "Moderate",
    description: "Manage product catalogs, track stock levels, and monitor purchase orders.",
    tags: ["inventory", "stock", "products", "warehouse", "sku", "supply", "orders", "items", "catalog"],
    schemaDefaults: {
      version: 1,
      components: [
        {
          id: "comp-products-table",
          type: "table",
          name: "Products Table",
          fields: [
            { id: "f-prod-name", name: "Name", type: "text", required: true },
            { id: "f-prod-sku", name: "SKU", type: "text", required: true },
            { id: "f-prod-qty", name: "Quantity", type: "number" },
            { id: "f-prod-price", name: "Price", type: "number" },
            { id: "f-prod-cat", name: "Category", type: "text" },
            { id: "f-prod-status", name: "Status", type: "select", options: ["In Stock", "Low Stock", "Out of Stock"] },
          ],
        },
        {
          id: "comp-low-stock-stats",
          type: "stats",
          name: "Low Stock Alert Stats",
          fields: [
            { id: "f-alert-count", name: "Items Low", type: "number" },
            { id: "f-alert-out", name: "Items Out", type: "number" },
          ],
        },
        {
          id: "comp-orders-table",
          type: "table",
          name: "Purchase Orders Table",
          fields: [
            { id: "f-ord-id", name: "Order ID", type: "text", required: true },
            { id: "f-ord-supplier", name: "Supplier", type: "text" },
            { id: "f-ord-date", name: "Date", type: "date" },
            { id: "f-ord-status", name: "Status", type: "select", options: ["Pending", "Received", "Cancelled"] },
          ],
        }
      ],
      dataModel: {
        tables: [
          {
            name: "Products",
            fields: [
              { id: "f-prod-name", name: "Name", type: "text", required: true },
              { id: "f-prod-sku", name: "SKU", type: "text", required: true },
              { id: "f-prod-qty", name: "Quantity", type: "number" },
              { id: "f-prod-price", name: "Price", type: "number" },
              { id: "f-prod-cat", name: "Category", type: "text" },
              { id: "f-prod-status", name: "Status", type: "select" },
            ]
          },
          {
            name: "PurchaseOrders",
            fields: [
              { id: "f-ord-id", name: "Order ID", type: "text", required: true },
              { id: "f-ord-supplier", name: "Supplier", type: "text" },
              { id: "f-ord-date", name: "Date", type: "date" },
              { id: "f-ord-status", name: "Status", type: "select" },
            ]
          }
        ]
      }
    }
  }
];
