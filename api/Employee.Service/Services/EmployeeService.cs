using Entities = Employee.Domain.Entities;
using Employee.Domain.Contracts;

namespace Employee.Service.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
          => _employeeRepository = employeeRepository;

        public Entities.Employee[] GetAll()
          => _employeeRepository.GetAll();

        public Entities.Employee Get(int id)
          => _employeeRepository.Get(id);

        public Entities.Employee Create(Entities.Employee employee)
          => _employeeRepository.Create(employee);

        public Entities.Employee Update(int id, Entities.Employee employee)
          => _employeeRepository.Update(id, employee);

        public void Delete(int id)
          => _employeeRepository.Delete(id);
    }
}