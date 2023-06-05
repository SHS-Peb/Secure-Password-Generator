// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt for password criteria
  var length = prompt("What length would you like? (between 8 and 128 characters)");
  var numbers = confirm("Would you like to include numbers?");
  var uppercase = confirm("Shall I include uppercase letters in the password?");
  var lowercase = confirm("How do we feel about adding lowercase letters in the password?");
  var symbols = confirm("Do we want to add special characters in the password?");

  // Validate the input
  if (length < 8 || length > 128) {
    alert("Invalid password length! Please enter a length between 8 and 128 characters.");
    return;
  }

  if (!numbers && !uppercase && !lowercase && !symbols) {
    alert("You must select at least one character type!");
    return;
  }

  // Generate the password
  var password = generatePassword(length, numbers, uppercase, lowercase, symbols);

  // Display the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate a random password
function generatePassword(length, numbers, uppercase, lowercase, symbols) {
  var characters = '';

  if (numbers) {
    characters += '0123456789';
  }

  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (symbols) {
    characters += '!@#$%^&*';
  }

  var password = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
