//render resources on page

// add resource search result to page

// add new resource to page

const renderResources = resource => {
    const resourceForm = document.createElement("form");
    const resourceDiv = document.createElement("div");
    //resourceDiv.setAttribute("id", )
    const resourceResult = document.createElement("p");
    resourceResult.type = "text";

    // add URL, topic, comment from search here?

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    //event listener for clicking edit button
    //add class to edit button?

    resourceDiv.appendChild(resourceResult);
    resourceDiv.appendChild(editButton);

    // add classes for styling if needed
    return resourceForm;
};
