using System;
using System.ComponentModel.DataAnnotations;

namespace InventoryApp.Models
{
    public class Server
    {
        public int Id { get; set }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set }
        public string Serial { get; set }
        [Required(ErrorMessage = "Date is required")]
        public DateTime DateAcquired { get; set; }
        public string Description { get; set; }
        public string Processor { get; set; }
        public string OS { get; set; }
        [Required(ErrorMessage = "Date is required")]
        public DateTime LastUpdate { get; set; }
        public string IP { get; set; }
        public string Subnet { get; set; }
        public string Gateway { get; set; }
    }
}