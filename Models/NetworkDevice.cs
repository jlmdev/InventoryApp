using System;
using System.ComponentModel.DataAnnotations;

namespace InventoryApp.Models
{
    public class NetworkDevice
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        public string Serial { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        [Required(ErrorMessage = "Date is required")]
        public DateTime DateAcquired { get; set; }
        [Required(ErrorMessage = "Date is required")]
        public DateTime LastUpdated { get; set; }
        public string IP { get; set; }
        public string Subnet { get; set; }
        public string Gateway { get; set; }
    }
}