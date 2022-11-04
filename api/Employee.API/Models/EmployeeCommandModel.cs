using System.ComponentModel.DataAnnotations;
using System;
using Employee.Domain.Entities.Enums;
using Employee.API.Helpers.Validation;

namespace Employee.API.Models
{
    public class EmployeeCommandModel
    {
        [Required]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "Name must have at least 3 characters and up to 100 characters")]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Date, ErrorMessage = "Birth date is required")]
        public DateTime? BirthDate { get; set; }

        [Required]
        [EnumDataType(typeof(Gender), ErrorMessage = "Gender is not a valid option")]
        public Gender Gender { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Invalid e-mail format")]
        [MaxLength(100, ErrorMessage = "E-mail can only have up to 100 characters")]
        public string Email { get; set; }

        [Required]
        [StringLength(11, MinimumLength = 11, ErrorMessage = "CPF must have 11 numeric digits")]
        [CPF(ErrorMessage = "CPF is not valid")]
        public string CPF { get; set; }

        [Required]
        [DataType(DataType.Date, ErrorMessage = "Start date is required")]
        public DateTime? StartDate { get; set; }

        [EnumDataType(typeof(Team), ErrorMessage = "Team is not a valid option")]
        public Team? Team { get; set; }
    }
}