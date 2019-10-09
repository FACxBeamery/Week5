document.getElementById("submitButton").addEventListener("click", event => {
    event.preventDefault();
    const topicValue = document.getElementById("topic").value;

    fetch(`/resources?topic=${topicValue}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(data => (allResources = data))
        .then(allResources => {
            console.log(allResources);
        })
        .catch(console.error);
});
