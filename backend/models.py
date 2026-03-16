from database import db

class Employee(db.Model):
    __tablename__ = "employees"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.String(50), unique=True, nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    department = db.Column(db.String(100), nullable=False)


class Attendance(db.Model):
    __tablename__ = "attendance"

    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.String(50), db.ForeignKey('employees.employee_id'))
    date = db.Column(db.String(20))
    status = db.Column(db.String(20))