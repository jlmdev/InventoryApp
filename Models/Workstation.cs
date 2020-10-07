using System;

namespace InventoryApp.Models
{
    public class Workstation
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Serial { get; set; }
        public DateTime DateAcquired { get; set; }
        public string Description { get; set; }
        public string Processor { get; set; }
        public string OS { get; set; }
        public bool Active { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Type { get; set; }
    }
}