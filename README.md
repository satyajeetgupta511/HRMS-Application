# HRMS-Application – Human Resource Management System

## Project Overview

HRMS Lite is a lightweight web-based Human Resource Management System that allows an admin to manage employee records and track daily attendance.

This application simulates a basic internal HR tool with simple and clean functionality for managing employees and attendance.

The system allows an administrator to:

- Add new employees
- View all employees
- Delete employees
- Mark daily attendance (Present / Absent)
- View attendance history for employees

The application is built as a full-stack project with a separate frontend and backend and is deployed publicly.

---

## Tech Stack Used

### Frontend
- React (Vite)
- JavaScript
- HTML / CSS
- Axios (for API calls)

### Backend
- Python
- Flask
- Flask-SQLAlchemy
- Flask-CORS

### Database
- SQLite

### Deployment
- Frontend: Vercel
- Backend: Render
- Version Control: Git & GitHub

---

## Features Implemented

### Employee Management

- Add employee
- View employee list
- Delete employee
- Unique employee ID validation
- Email format validation

### Attendance Management

- Mark attendance for employee
- Attendance status (Present / Absent)
- View attendance history by employee

### Error Handling

- Validation for required fields
- Duplicate employee handling
- Meaningful error responses
- Proper HTTP status codes

---

## Assumptions

- The system assumes only **one admin user** managing employees.
- Authentication and authorization are **not implemented**.
- Each employee is uniquely identified by **Employee ID**.
- Attendance is marked manually by the admin.

---

## Limitations

- No user authentication system
- No employee self-service portal
- No advanced HR features such as payroll or leave management
- SQLite database used for simplicity (not optimized for large-scale production)

---

## Deployment Links

Frontend:
https://hrms-app-chi.vercel.app

Backend:
https://hrms-application-backend.onrender.com

GitHub Repository:
https://github.com/satyajeetgupta511/HRMS-Application

---

## Author

Satyajeet Gupta
