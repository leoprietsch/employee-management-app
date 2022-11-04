using System;
using Employee.Domain.Entities.Enums;

namespace Employee.Domain.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public DateTime StartDate { get; set; }
        public Team? Team { get; set; }

        public Employee() { }
        public Employee(string name, DateTime birthDate, Gender gender, string email, string cpf, DateTime startDate, Team? team)
        {
            Name = name;
            BirthDate = birthDate;
            Gender = gender;
            Email = email;
            CPF = cpf;
            StartDate = startDate;
            Team = team;
        }
    }
}