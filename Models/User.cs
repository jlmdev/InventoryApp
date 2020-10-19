using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace InventoryApp.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Email { get; set; }
        [JsonIgnore]
        public string HashedPassword { get; set; }
        // Property for setting a password
        public string Password
        {
            // Only define the "set" aspect of the property
            set
            {
                // When setting, user the PasswordHasher to encrypt the password 
                // and store the result as HashedPassword
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }

        // Validation method for user's password
        public bool IsValidPassword(string password)
        {
            // Check if password matches hashed password
            var passwordVerification = new PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);

            // Return true if the verification was a success
            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}