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
                    document.getElementById("topic-to-find").value = "";
                }
            })
            .catch(error => {
                if (error) {
                    serverErrorOverlay();
                }
            });
    }
};

const postResourcesAPI = () => {
    const body = {
        topic: document.getElementById("topic-to-add").value.toLowerCase(),
        dateAdded: Date.now(),
        comment: document.getElementById("comment-to-add").value,
        resourceUrl: document.getElementById("url-to-add").value
    };
    if (!(body.topic && body.comment && body.resourceUrl)) {
        emptyAddOverlay();
    } else {
        fetch("/resources", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Edit query invalid");
                } else {
                    return res.json();
                }
            })
            .then(data => (allData = data))
            .then(allData => {
                resourceAddOverlay();
            })
            .then(getResourcesAPI("topic-to-find"))
            .catch(failJoiOverlay());
    }
};
