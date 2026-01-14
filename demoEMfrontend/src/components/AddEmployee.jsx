import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id:"",
    name:"",
    phone:"",
    email:"",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee,[e.target.name]: value})
  }

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
        id:"",
        name:"",
        phone:"",
        email:"",

    })
  }

  const saveEmployee = (e)=>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((response) => {
      console.log("Saved, ",response);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      
      <h2 className="text-lg font-semibold mb-4">Add Employee</h2>

      <form className="flex flex-col gap-4">
        
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={(e) => handleChange(e)}
            placeholder="name"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Number */}
        <div className="flex flex-col">
          <label htmlFor="number" className="text-sm font-medium mb-1">
            Number
          </label>
          <input
            type="number"
            name="phone"
            value={employee.number}
            onChange={(e) => handleChange(e)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          
          {/* Save */}
          <button
            type="submit"
            onClick={saveEmployee}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Save
          </button>

          {/* Clear */}
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Clear
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>

        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
