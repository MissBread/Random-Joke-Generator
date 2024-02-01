const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10";


let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check if jokes array is present and not empty
            if (data.jokes && data.jokes.length > 0) {
                jokeContainer.textContent = data.jokes[0].joke;
                jokeContainer.classList.add("fade");
            } else {
                console.error('No jokes found in the response:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

btn.addEventListener('click', getJoke);
getJoke();