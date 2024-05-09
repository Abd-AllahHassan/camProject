// First Let select the buttons

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Lets add a event listener to the sign up buttton  to add a classlist

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Lets add the event listeners to the sign in button to remove the classlist

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});