using Xunit;
using System;
using Entities = Employee.Domain.Entities;
using Employee.Domain.Entities.Enums;
namespace Employee.API.Tests
{
    public class EmployeeTest
    {
        [Fact]
        public void Employee_With_Correct_Values_Create_New_Instance_Correctly()
        {
            var expectedEmployee = new Entities.Employee()
            {
                Name = "Leonardo Prietsch Oliveira",
                BirthDate = new DateTime(2000, 01, 01),
                Gender = Gender.Male,
                Email = "leonardo@example.com",
                CPF = "35145634030",
                StartDate = new DateTime(2022, 12, 05),
                Team = Team.BackEnd
            };

            var employee = new Entities.Employee(
                "Leonardo Prietsch Oliveira",
                new DateTime(2000, 01, 01),
                Gender.Male,
                "leonardo@example.com",
                "35145634030",
                new DateTime(2022, 12, 05),
                Team.BackEnd);

            Assert.Equivalent(expectedEmployee, employee);
        }

        [Fact]
        public void Employee_With_Correct_Values_And_Null_Team_Create_New_Instance_Correctly()
        {
            var expectedEmployee = new Entities.Employee
            {
                Name = "Leonardo Prietsch Oliveira",
                BirthDate = new DateTime(2000, 01, 01),
                Gender = Gender.Male,
                Email = "leonardo@example.com",
                CPF = "35145634030",
                StartDate = new DateTime(2022, 12, 05),
                Team = null
            };

            var employee = new Entities.Employee(
                "Leonardo Prietsch Oliveira",
                new DateTime(2000, 01, 01),
                Gender.Male,
                "leonardo@example.com",
                "35145634030",
                new DateTime(2022, 12, 05),
                null);

            Assert.Equivalent(expectedEmployee, employee);
        }

        [Fact]
        public void Employee_With_Empty_Constructor_Return_Default_Values()
        {
            var expectedEmployee = new Entities.Employee { };

            var employee = new Entities.Employee();

            Assert.Equivalent(expectedEmployee, employee);
        }
    }
}
