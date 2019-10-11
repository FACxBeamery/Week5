const getResourcesAPI = idOfTopicField => {
	const topicValue = document
		.getElementById(idOfTopicField)
		.value.toLowerCase();
	if (!topicValue) {
		emptySearchOverlay();
	} else {
		fetch(`/resources/${topicValue}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(data => (allResources = data))
			.then(allResources => {
				if (allResources.length > 0) {
					addResourcesToPage(allResources);
				} else {
					noTopicOverLay();
				}
			})
			.catch(console.error);
	}
};

const postResourcesAPI = () => {
	const body = {
		topic: document.getElementById("topictoAdd").value.toLowerCase(),
		dateAdded: Date.now(),
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
		.then(allData => {
			resourceAddConfirmation();
		})
		.catch(console.error);
};
