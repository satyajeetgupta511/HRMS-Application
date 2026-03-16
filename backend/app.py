from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db
from models import Employee, Attendance
from validators import valid_email

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///hrms.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()


# -----------------------------
# Add Employee
# -----------------------------

@app.route("/employees", methods=["POST"])
def add_employee():

    data = request.json

    if not valid_email(data["email"]):
        return jsonify({"error": "Invalid email"}), 400

    if Employee.query.filter_by(employee_id=data["employee_id"]).first():
        return jsonify({"error": "Employee already exists"}), 400

    emp = Employee(
        employee_id=data["employee_id"],
        full_name=data["full_name"],
        email=data["email"],
        department=data["department"]
    )

    db.session.add(emp)
    db.session.commit()

    return jsonify({"message": "Employee created"}), 201


# -----------------------------
# Get Employees
# -----------------------------

@app.route("/employees", methods=["GET"])
def get_employees():

    employees = Employee.query.all()

    result = []

    for e in employees:
        result.append({
            "employee_id": e.employee_id,
            "full_name": e.full_name,
            "email": e.email,
            "department": e.department
        })

    return jsonify(result)


# -----------------------------
# Delete Employee
# -----------------------------

@app.route("/employees/<employee_id>", methods=["DELETE"])
def delete_employee(employee_id):

    emp = Employee.query.filter_by(employee_id=employee_id).first()

    if not emp:
        return jsonify({"error": "Employee not found"}), 404

    db.session.delete(emp)
    db.session.commit()

    return jsonify({"message": "Employee deleted"})


# -----------------------------
# Mark Attendance
# -----------------------------

@app.route("/attendance", methods=["POST"])
def mark_attendance():

    data = request.json

    emp = Employee.query.filter_by(employee_id=data["employee_id"]).first()

    if not emp:
        return jsonify({"error": "Employee not found"}), 404

    attendance = Attendance(
        employee_id=data["employee_id"],
        date=data["date"],
        status=data["status"]
    )

    db.session.add(attendance)
    db.session.commit()

    return jsonify({"message": "Attendance marked"})


# -----------------------------
# Get Attendance
# -----------------------------

@app.route("/attendance/<employee_id>", methods=["GET"])
def get_attendance(employee_id):

    records = Attendance.query.filter_by(employee_id=employee_id).all()

    result = []

    for r in records:
        result.append({
            "date": r.date,
            "status": r.status
        })

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)