// Login
export const loginSuccess = 'You are successfully logged in!';
export const loginNoAccount = "Don't have an account? Sign up";

// Signup
export const signupSuccess = 'You have created a new account successfully!';
export const signupExistingAccount = 'Already have an account? Log in';

// Signout
export const signoutSuccess = 'You are successfully logged out.';
export const signoutError = 'There was a server error, you are not logged out.';

// Add player
export const addPlayerSuccess = (playerName) => `Player ${playerName} added successfully`;

// Server error
export const serverError = 'There was a server error or you entered incorrect data. Please try again.';

// Player
export const defaultPlayerImage = 'https://xn--80aadc3bb0afph5eue.xn--p1ai/images/no_photo.png';

// Footer
export const footerText = 'VolleyBase ©2021 Created by Radosław Szymański';

// Validation messages
export const validationMessages = {
  email: {
    required: 'Email is required',
    min: 'Email is too short!',
    max: 'Email is too long!'
  },
  password: {
    required: 'Password is required',
    min: 'Password is too short!',
    max: 'Password is too long!'
  },
  name: {
    required: 'Name is required',
    min: 'Name is too short!',
    max: 'Name is too long!'
  },
  nationality: {
    required: 'Nationality is required',
    min: 'Nationality is too short!',
    max: 'Nationality is too long!'
  },
  position: {
    required: 'Position is required',
    min: 'Position is too short!',
    max: 'Position is too long!'
  },
  age: {
    required: 'Age is required',
    min: 'Age is too low!',
    max: 'Age is too high!'
  },
  club: {
    required: 'Club is required',
    min: 'Club is too short!',
    max: 'Club is too long!'
  },
  playerImage: {
    min: 'Link is too short!',
    max: 'Link is too long!'
  }
};
