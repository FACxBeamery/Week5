const addResourcesToPage = resources => {
	resetResourcesContainer();
	const resourcesContainer = document.getElementById("resources-container");
	resourcesContainer.id = "resources-container";

	resources.forEach(resource => {
		resourcesContainer.appendChild(renderResources(resource));
		const displayForm = document.getElementById("section-form-add-topic");
		displayForm.style.display = "block";
	});
};

//render resources on page

// add resource search result to page

// add new resource to page

const renderResources = resource => {
	// const resourceForm = document.createElement("form");
	const resourceDiv = document.createElement("div");
	resourceDiv.setAttribute("id", "resource-result-div");

	const resourceURL = document.createElement("a");
	resourceURL.setAttribute("href", resource.resourceUrl);
	resourceURL.textContent = resource.resourceUrl;
	resourceURL.setAttribute("id", "resource-url");

	const resourceComment = document.createElement("p");
	resourceComment.textContent = `Comments: ${resource.comment}`;
	resourceComment.setAttribute("id", "resource-comment");

	const resourceTopic = document.createElement("p");
	resourceTopic.textContent = `Topic: ${resource.topic}`;
	resourceTopic.setAttribute("id", "resource-topic");
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

const noTopicOverLay = () => {
	const overlay = document.querySelector(".overlay");
	overlay.style.display = "block";
	const para = document.createElement("p");
	para.classList.add("no-topic-message");
	const node = document.createTextNode(
		"There are currently no resources for the topic you requested. Please do add some resources if you have them!"
	);
	para.appendChild(node);
	overlay.appendChild(para);
	const displayForm = document.getElementById("section-form-add-topic");
	displayForm.style.display = "block";
	setTimeout(() => {
		while (overlay.firstChild) {
			overlay.removeChild(overlay.firstChild);
		}
		overlay.style.display = "none";
	}, 1500);
};

const emptySearchOverlay = () => {
	const overlay = document.querySelector(".overlay");
	overlay.style.display = "block";
	const para = document.createElement("p");
	para.classList.add("no-search-message");
	const node = document.createTextNode("Please enter a topic to search by!");
	para.appendChild(node);
	overlay.appendChild(para);
	const displayForm = document.getElementById("section-form-add-topic");
	displayForm.style.display = "block";
	setTimeout(() => {
		while (overlay.firstChild) {
			overlay.removeChild(overlay.firstChild);
		}
		overlay.style.display = "none";
	}, 1500);
};

const resourceAddConfirmation = () => {
	const overlay = document.querySelector(".overlay");
	overlay.style.display = "block";
	const para = document.createElement("p");
	para.classList.add("post-success-message");
	const node = document.createTextNode(`Thank you for adding a resource!`);
	para.appendChild(node);
	overlay.appendChild(para);
	setTimeout(() => {
		while (overlay.firstChild) {
			overlay.removeChild(overlay.firstChild);
		}
		overlay.style.display = "none";
	}, 1500);
};
