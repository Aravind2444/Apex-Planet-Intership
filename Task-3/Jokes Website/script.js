const fetchJokeButton = document.getElementById("fetchJokeButton");
const jokeElement = document.getElementById("joke");

// Function to fetch a joke from the API
async function fetchJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any";
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if it's a two-part joke or a single joke
    if (data.type === "twopart") {
      jokeElement.textContent = `${data.setup} - ${data.delivery}`;
    } else {
      jokeElement.textContent = data.joke;
    }
  } catch (error) {
    jokeElement.textContent = "Oops! Failed to fetch a joke.";
    console.error("Error fetching joke:", error);
  }
}

// Add an event listener to the button
fetchJokeButton.addEventListener("click", fetchJoke);
