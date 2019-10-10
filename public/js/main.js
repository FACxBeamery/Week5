
document.getElementById("findTopicButton").addEventListener("click", event => {
    event.preventDefault();
    const topicValue = document.getElementById("topicToFind").value;

	// //API CALL. CALL FUNCTION ON READY**************
	// fetch(`/resources?topic=${topicValue}`, {
	//     method: "GET",
	//     headers: { "Content-Type": "application/json" }
	// })
	//     .then(res => res.json())
	//     .then(data => (allResources = data))
	//     .then(allResources => {
	//         console.log(allResources);
	//         renderResources(allResources);
	//     })
	//     .catch(console.error);
	// //API CALL**************

	//API CALL. CALL FUNCTION ON READY**************
	fetch(`/resources/${topicValue}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	})
		.then(res => res.json())
		.then(data => (allResources = data))
		.then(allResources => {
			//console.log(allResources);
			addResourcesToPage(allResources);
		})
		.catch(console.error);
	//API CALL**************
});

document.getElementById("addTopicButton").addEventListener("click", event => {
    event.preventDefault();
    const body = {
        topic: document.getElementById("topictoAdd").value,
        dateAdded: new Date(Date.now()).toUTCString(),
        comment: document.getElementById("commentToAdd").value,
        resourceUrl: document.getElementById("urlToAdd").value
    };


	fetch("/resources", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})
		.then(res => res.json())
		.then(data => (allData = data))
		.then(allData => console.log(allData))
		.catch(console.error);
});
