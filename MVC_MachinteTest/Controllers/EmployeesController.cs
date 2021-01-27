using MVC_MachinteTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_MachinteTest.Controllers
{
    public class EmployeesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        
        public JsonResult SaveEmployee(Employee emp)
        {
            using (var db = new MachineTestEntities())
            {
                db.Employees.Add(emp);
                db.SaveChanges();
                return Json(new { success = true, message = "Saved Successfully", JsonRequestBehavior.AllowGet });
            }
        }
    }
}