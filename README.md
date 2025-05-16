# 🛳️ Ship Maintenance Dashboard

A frontend-only dashboard built with **React 19**, **Vite**, and **Material UI**. The whole app simulates full persistence using just `localStorage`—no backend needed. It's dark-mode by default.

Manage ships, components, and their maintenance jobs in a clean UI.


## Overview

This application supports three roles: **Admin**, **Inspector**, and **Engineer**.

They can:

- **Login** (hard-coded users for now)
- **Add/Edit Ships** (includes name, flag, status, etc.)
- **Manage Components** (assign to ships, track serials & maintenance logs)
- **Handle Jobs** (create/update/assign jobs with priorities)
- **View Calendar** (quick glance at scheduled maintenance)
- **See Notifications** (job status updates, etc.)
- **Check KPIs** (summary of what's happening in the fleet)

All data is stored in our browser via `localStorage`. No API. No database.

---

## Technical Details

- `React JS` + Hooks  
- `Vite` for fast reloads  
- `Material UI ` for styling  
- `React Router ` for routes   
- `React-Calendar` for scheduling  
- `UUID` for generating IDs  


## How to Run This Application

### 1. Clone it and install dependencies

```bash
git clone [https://github.com/Utkarsh-git-hub/Ship-Maintenance-System]
npm install
```

### 2. Start the local server

```bash
npm run dev
```

Open up `http://localhost:5173` and then work around.



## Some Default Users

| Role      | Email                           | Password   |
| --------- | ------------------------------- | ---------- |
| Admin     | admin@gmail.com                 | admin123   |
| Inspector | inspector@gmail.com             | inspect123 |
| Engineer  | engineer@gmail.com              | engine123  |

These are just hard-coded— and 
heres the link for full mock JSON data [https://github.com/Utkarsh-git-hub/Ship-Maintenance-System/blob/main/src/mockData.json]


## Features

### Auth & Roles

- Basic login screen
- Route protection based on user role (Using `PrivateRoute`)

### Ships

- We can Add, edit and delete ships
- Each ship links to its components & the job history

### Components

- We can also manage ship components
- It also track install dates and maintenance dates

### Jobs

- Assign engineers to jobs
- Set priority/status
- Filterable by ship/status

### Calendar View & Notifications

- Monthly calendar is also added to make UI more interactive and, on clicking any date it will show scheduled work for that day.
- In-app alerts so that we see see messages for job particular job actions

### KPI Dashboard

- Cards showing all the data in the dashboard
- Charts for job status and overdue work


## Limitations

- Here as we are using local storage so data vanishes as soon as we clear the local storage
- There's no backend so there is no real data coming from backend to fronetend, i.e not a content driven UI


## Future Improvements

- We can add toggle feature between lighht and dark themes.
- We can add an Export buttons on Ships, Components, and Jobs pages which redirects to download current lists and reports.
- Role Based authorization could be handled in better way.
- Apart from in app notifications we can also add feature for email notifications for critical alerts.

