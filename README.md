# password-generator

The purpose of this project was to create a randomized password generator based on user inputs that included uppercase, lowercase, numbers, and special characters based on a character amount between 8 and 128 input by the user.

By creating a for loop I was able to piece each piece of the password together taking into account the users input for length and what types of characters.

## Usage

This project can be used by simply responding to the prompts and confirms that pop up on the top of the page after the user has selected to generate a password.

## Conclusion

Over the course of the project my ideas for how to tackle it changed many times. Initially I had planned to use prompt() for all user input measures. However after delving more into the code and attempting to work through validation errors, I found that only needing a validation step for the length of the password as the optimum path.

By using confirm() statements for the uppercase, lowercase, special characters, and numbers, I was able to cut out confirmation almost entirely. Since confirm() has only two inputs - OK(true) or Cancel (False) I was able to cut down on uneeded lines of code. True would allow the chosen input and false would act as a no.

Finally once the verification was completed I was able to use a combination of math.floor and math.random to randomize the placement of characters by creating an overaching array with concat of the chosen user input arrays.

## Live Page Link


## License
See within

