document
    .getElementById("find-topic-button")
    .addEventListener("click", event => {
        event.preventDefault();
        getResourcesAPI("topic-to-find");
    });

document.getElementById("add-topic-button").addEventListener("click", event => {
    event.preventDefault();

    postResourcesAPI();
});
