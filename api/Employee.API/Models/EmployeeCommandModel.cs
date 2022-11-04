using System.ComponentModel.DataAnnotations;
using System;
using Employee.Domain.Entities.Enums;

namespace Employee.API.Models
{
    public class EmployeeCommandModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        [EnumDataType(typeof(Gender))]
        public Gender Gender { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Invalid e-mail format")]
        public string Email { get; set; }

        [Required]
        [StringLength(11, MinimumLength = 11, ErrorMessage = "CPF must have 11 numeric digits")]
        public string CPF { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [EnumDataType(typeof(Team))]
        public Team? Team { get; set; }
    }
}