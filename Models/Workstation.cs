using System;
using System.ComponentModel.DataAnnotations;

namespace InventoryApp.Models
{
    public class Workstation
    {

        public int Id { get; set; }
        [Required(ErrorMessage = "Name cannot be blank")]
        public string Name { get; set; }
        public string Serial { get; set; }
        [Required(ErrorMessage = "Date is required")]
        public DateTime DateAcquired { get; set; }
        public string Description { get; set; }
        public string Processor { get; set; }
        public string OS { get; set; }
        [Required(ErrorMessage = "Date is required")]
        public DateTime LastUpdate { get; set; }
        public string Type { get; set; }
    }
}