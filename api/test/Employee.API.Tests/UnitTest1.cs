using System;
using Xunit;

namespace Employee.API.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void PassingTest()
        {
            var sum = 2 + 2;
            Assert.Equal(4, sum);
        }
    }
}
