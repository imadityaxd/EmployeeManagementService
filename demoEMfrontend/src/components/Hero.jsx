import React, {useEffect, useState} from 'react'
import {useNavigate}  from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
const Hero = () => {

  const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try{
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
          }
          catch(error){
            console.log(error);
          }
          setLoading(false)
        };
        fetchData();
    }, []);

    const deleteEmployee = (e,id) => {
      e.preventDefault();
      EmployeeService.deleteEmployeeById(id)
      .then(()=>  {
        if(employees){
          setEmployees((prevElement) => {
            return prevElement.filter((employee) => employee.id !==id);
          })
        }
      })
    };
    
    const editEmployee =(e, id) =>{
      e.preventDefault();
      navigate(`/editEmployee/${id}`)
    };

    const navigate = useNavigate();
  return (
  <div className="p-8">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">Employees</h2>
      <button
      onClick={() => navigate("/addEmployee")}
       className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition">
        Add Employee
      </button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Number</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        {!loading && (
        <tbody>
          {employees.map((employee) => (
          <tr key={employee.id}className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{employee.name}</td>
            <td className="px-4 py-2 border">{employee.phone}</td>
            <td className="px-4 py-2 border">{employee.email}</td>
            <td className="px-4 py-2 border flex gap-4">
              <a className="text-blue-600 hover:underline hover:cursor-pointer"
              onClick={(e, id) => editEmployee(e, employee.id)}
              >Edit</a>
              <a className="text-red-600 hover:underline hover:cursor-pointer"
              onClick={(e,id) => deleteEmployee(e,employee.id)}>Delete</a>
            </td>
          </tr>
          ))}
        </tbody>
        )}
      </table>
    </div>

  </div>
)

}

export default Hero
