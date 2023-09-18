﻿using CompanyX.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CompanyX.SqlServer
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
            Database.EnsureCreated();
        }
        
        public DbSet<Employee> Employees { get; set; }
    }
}