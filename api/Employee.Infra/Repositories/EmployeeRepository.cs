using Dapper;
using System.Data;
using System.Linq;
using Entities = Employee.Domain.Entities;
using Employee.Domain.Contracts;

namespace Employee.Infra.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly IDbConnection _db;
        public EmployeeRepository(IDbConnection db)
            => _db = db;

        public Entities.Employee[] GetAll()
          => _db.Query<Entities.Employee>(@"
            SELECT
            id,
            name,
            birthdate,
            gender,
            email,
            CPF,
            startdate,
            team
            FROM employee")?.ToArray();

        public Entities.Employee Get(int id)
          => _db.QueryFirstOrDefault<Entities.Employee>(@"
            SELECT
            id,
            name,
            birthdate,
            gender,
            email,
            CPF,
            startdate,
            team
            FROM employee
            WHERE id = @Id", new { Id = id });

        public Entities.Employee Create(Entities.Employee employee)
        {
            int id = _db.QuerySingle<int>(@"
            INSERT INTO employee 
            (
                name,
                birthdate,
                gender,
                email,
                CPF,
                startdate,
                team
            )
            VALUES 
            (
                @Name,
                @BirthDate,
                @Gender,
                @Email,
                @CPF,
                @StartDate,
                @Team
            );
            SELECT LAST_INSERT_ID();", employee);

            employee.Id = id;

            return employee;
        }

        public Entities.Employee Update(int id, Entities.Employee employee)
        {
            employee.Id = id;

            int affectedRows = _db.Execute(@"
            UPDATE employee set 
                name = @Name,
                birthdate = @BirthDate,
                gender = @Gender,
                email = @Email,
                CPF = @CPF,
                startdate = @StartDate,
                team = @Team
            WHERE id = @Id", employee);

            if (affectedRows == 0) return null;

            return employee;
        }

        public void Delete(int id)
          => _db.Query(@"DELETE FROM employee WHERE id = @Id", new { Id = id });
    }
}