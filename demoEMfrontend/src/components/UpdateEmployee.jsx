import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
const UpdateEmployee = () => {

const {id} = useParams();
  const [employee, setEmployee] = useState({
    id:id,
    name:"",
    phone:"",
    email:"",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee,[e.target.name]: value})
  }

  useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
  }, []);

  const updateEmployee = (e)=>{
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
    .then((response) => {
      console.log("Updated , ",response);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      
      <h2 className="text-lg font-semibold mb-4">Update Employee</h2>

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
          
          {/* Update */}
          <button
            type="submit"
            onClick={updateEmployee}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Update
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

export default UpdateEmployee;
