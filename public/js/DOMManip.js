const addResourcesToPage = resources => {
	resetResourcesContainer();
	const resourcesContainer = document.getElementById("resources-container");
	resourcesContainer.id = "resources-container";
	resources.forEach(resource => {
		resourcesContainer.appendChild(renderResources(resource));
	});
};

//render resources on page

// add resource search result to page

// add new resource to page

const renderResources = resource => {
	// const resourceForm = document.createElement("form");
	const resourceDiv = document.createElement("div");

	const resourceURL = document.createElement("a");
	resourceURL.setAttribute("href", resource.resourceUrl);
	resourceURL.textContent = resource.resourceUrl;

	const resourceComment = document.createElement("p");
	resourceComment.textContent = resource.comment;

	const resourceTopic = document.createElement("p");
	resourceTopic.textContent = resource.topic;
	//resourceDiv.setAttribute("id", )

	// add URL, topic, comment from search here?

	//const editButton = document.createElement("button");
	//editButton.textContent = "edit";
	//event listener for clicking edit button
	//add class to edit button?
	resourceDiv.appendChild(resourceURL);
	resourceDiv.appendChild(resourceComment);
	resourceDiv.appendChild(resourceTopic);

	//resourceDiv.appendChild(editButton);

	// add classes for styling if needed
	return resourceDiv;
};

const resetResourcesContainer = () => {
	const resourcesContainer = document.getElementById("resources-container");
	while (resourcesContainer.firstChild) {
		resourcesContainer.removeChild(resourcesContainer.firstChild);
	}
};
