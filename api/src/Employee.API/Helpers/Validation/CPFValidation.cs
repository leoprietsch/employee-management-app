using System.ComponentModel.DataAnnotations;
using DocumentValidator;

namespace Employee.API.Helpers.Validation
{
    public class CPF : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string stringValue = value as string;

            return stringValue != null && CpfValidation.Validate(stringValue);
        }
    }
}