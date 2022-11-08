using Xunit;
using System;
using Employee.API.Helpers.Validation;
namespace Employee.API.Tests
{
    public class CPFValidationTest
    {
        [Fact]
        public void CPFValidation_With_Null_CPF_Return_IsValid_False()
        {
            var cpfValidation = new CPF();
            bool result = cpfValidation.IsValid(null);
            Assert.False(result);
        }

        [Fact]
        public void CPFValidation_With_Incorrect_CPF_Return_IsValid_False()
        {
            var cpfValidation = new CPF();
            bool result = cpfValidation.IsValid("");
            Assert.False(result);
        }

        [Fact]
        public void CPFValidation_With_Correct_CPF_Return_IsValid_True()
        {
            var cpfValidation = new CPF();
            bool result = cpfValidation.IsValid("85953547072");
            Assert.True(result);
        }
    }
}
