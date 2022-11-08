using System;
using Xunit;
using Entities = Employee.Domain.Entities;
using Employee.Domain.Contracts;
using Employee.Service.Services;
using FakeItEasy;

namespace Employee.Service.Services.Tests
{
    public class EmployeeServiceTest
    {
        [Fact]
        public void Test_Get_All_Employees()
        {
            var employeeRepository = A.Fake<IEmployeeRepository>();
            var employee1 = new Entities.Employee { };
            var employee2 = new Entities.Employee { };

            A.CallTo(() => employeeRepository.GetAll()).Returns(new Entities.Employee[2] { employee1, employee2 });

            var employeeService = new EmployeeService(employeeRepository);

            Entities.Employee[] employees = employeeService.GetAll();

            A.CallTo(() => employeeRepository.GetAll()).MustHaveHappened();
            Assert.Equal(2, employees.Length);
        }

        [Fact]
        public void Test_Get_Employee_By_Id()
        {
            var employeeRepository = A.Fake<IEmployeeRepository>();
            var expectedEmployee = new Entities.Employee { };
            var id = 1;

            A.CallTo(() => employeeRepository.Get(id)).Returns(expectedEmployee);

            var employeeService = new EmployeeService(employeeRepository);

            Entities.Employee employee = employeeService.Get(id);

            A.CallTo(() => employeeRepository.Get(id)).MustHaveHappened();
            Assert.Equal(expectedEmployee, employee);
        }

        [Fact]
        public void Test_Create_Employee()
        {
            var employeeRepository = A.Fake<IEmployeeRepository>();
            var expectedEmployee = new Entities.Employee { };

            A.CallTo(() => employeeRepository.Create(expectedEmployee)).Returns(expectedEmployee);

            var employeeService = new EmployeeService(employeeRepository);

            Entities.Employee employee = employeeService.Create(expectedEmployee);

            A.CallTo(() => employeeRepository.Create(expectedEmployee)).MustHaveHappened();
            Assert.Equal(expectedEmployee, employee);
        }

        [Fact]
        public void Test_Update_Employee()
        {
            var employeeRepository = A.Fake<IEmployeeRepository>();
            var id = 1;
            var expectedEmployee = new Entities.Employee { Id = id };

            A.CallTo(() => employeeRepository.Update(id, expectedEmployee)).Returns(expectedEmployee);

            var employeeService = new EmployeeService(employeeRepository);

            Entities.Employee employee = employeeService.Update(id, expectedEmployee);

            A.CallTo(() => employeeRepository.Update(id, expectedEmployee)).MustHaveHappened();
            Assert.Equal(expectedEmployee, employee);
        }

        [Fact]
        public void Test_Delete_Employee()
        {
            var employeeRepository = A.Fake<IEmployeeRepository>();
            var id = 1;

            A.CallTo(() => employeeRepository.Delete(id)).DoesNothing();

            var employeeService = new EmployeeService(employeeRepository);

            employeeService.Delete(id);

            A.CallTo(() => employeeRepository.Delete(id)).MustHaveHappened();
        }
    }
}
