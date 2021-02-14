async function getGameUrl() {

	try {
		const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
		const jsonResult = await response.json();
        console.log(jsonResult.results); 

        setTimeout(function () {
            document.querySelector('img').classList.add('hide');
        }, 1000);

    for (let i = 0; i < jsonResult.results.length; i++) {
        document.querySelector('.cardsContainer').innerHTML += `
        <div class="card">
        <h2>${jsonResult.results[i].name}</h2>
        <p>Rating: ${jsonResult.results[i].rating}</p>
        <p>Number of tags: ${jsonResult.results[i].tags.length}</p>
        </div>
        `;

        if (i === 7) {
            break;
        };
    };

} catch (error) {
    document.querySelector('.alert').innerHTML += showAlertToUser(
        'An error has occurred',
        'danger'
      );
      console.log(error);
} finally {
    setTimeout(() => {
        document.querySelector('.alert').innerHTML = '';
    }, 2000);
}
};

getGameUrl();