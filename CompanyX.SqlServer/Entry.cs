using System;
using CompanyX.Domain.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CompanyX.SqlServer
{
    /// <summary>
    /// Entry class for database
    /// </summary>
    public static class Entry
    {
        /// <summary>
        /// Registers DbContext and EmployeeRepository
        /// </summary>
        /// <param name="services">Services to add to</param>
        /// <param name="connectionString">Connection string for db</param>
        /// <returns>The same service collection</returns>
        public static IServiceCollection AddDatabase(this IServiceCollection services, string connectionString)
        {
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            return services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
        }
    }
}