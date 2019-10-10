//event listeners which trigger API calls and API calls trigger DOM manip

document
	.getElementById("find-topic-button")
	.addEventListener("click", event => {
		event.preventDefault();
		getResourcesAPI();
	});

document.getElementById("add-topic-button").addEventListener("click", event => {
	event.preventDefault();

	postResourcesAPI();
});
