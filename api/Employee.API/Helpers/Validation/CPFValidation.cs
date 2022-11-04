using System.ComponentModel.DataAnnotations;
using DocumentValidator;

namespace Employee.API.Helpers.Validation
{
    public class CPF : ValidationAttribute
    {
        private static int Size { get; set; } = 11;

        public override bool IsValid(object value)
        {
            string stringValue = value as string;

            return CpfValidation.Validate(stringValue);
        }
    }
}