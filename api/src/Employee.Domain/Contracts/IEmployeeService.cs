namespace Employee.Domain.Contracts
{
    public interface IEmployeeService
    {
        Entities.Employee[] GetAll();
        Entities.Employee Get(int id);
        Entities.Employee Create(Entities.Employee employee);
        Entities.Employee Update(int id, Entities.Employee employee);
        void Delete(int id);
    }
}