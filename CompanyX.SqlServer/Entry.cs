using System;
using CompanyX.Domain.Abstractions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CompanyX.SqlServer
{
    public static class Entry
    {
        public static IServiceCollection AddDatabase(this IServiceCollection services, string connectionString)
        {
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            return services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
        }
    }
}