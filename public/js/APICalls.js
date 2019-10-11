const getResourcesAPI = idOfTopicField => {
    const topicValue = document
        .getElementById(idOfTopicField)
        .value.toLowerCase();

    fetch(`/resources/${topicValue}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(data => (allResources = data))
        .then(allResources => {
            if (allResources.length > 0) {
                //console.log("last then", allResources);
                addResourcesToPage(allResources);
            } else {
                const overlay = document.querySelector(".overlay");
                overlay.style.display = "block";
                const para = document.createElement("p");
                para.classList.add("no-topic-message");
                const node = document.createTextNode(
                    "There are currently no resources for the topic you requested. Please do add some resources if you have them!"
                );
                para.appendChild(node);
                overlay.appendChild(para);
                const displayForm = document.getElementById(
                    "section-add-topic"
                );
                displayForm.style.display = "block";
                setTimeout(() => {
                    while (overlay.firstChild) {
                        overlay.removeChild(overlay.firstChild);
                    }
                    overlay.style.display = "none";
                }, 3000);
            }
        })
        .catch(console.error);
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
            console.log(allData);
            const overlay = document.querySelector(".overlay");
            overlay.style.display = "block";
            const para = document.createElement("p");
            para.classList.add("post-success-message");
            const node = document.createTextNode(
                `Thank you for adding a resorce! ${JSON.stringify(allData)}`
            );
            para.appendChild(node);
            overlay.appendChild(para);
            setTimeout(() => {
                while (overlay.firstChild) {
                    overlay.removeChild(overlay.firstChild);
                }
                overlay.style.display = "none";
            }, 3000);
        })
        .catch(console.error);
};
