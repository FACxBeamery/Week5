document.getElementById("submitButton").addEventListener("click", event => {
    event.preventDefault();
    const topicValue = document.getElementById("topic").value;

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
            console.log(allResources);
            renderResources(allResources);
        })
        .catch(console.error);
    //API CALL**************
});

document.getElementById("testButton").addEventListener("click", event => {
    event.preventDefault();
    // const body = {
    //     topic: document.getElementById().value,
    //     dateAdded: new Date(Date.now()).toUTCString(),
    //     comment: document.getElementById().value,
    //     resourceUrl: document.getElementById().value,
    // };

    const body = {
        topic: "nodeTest",
        dateAdded: new Date(Date.now()).toUTCString(),
        comment: "commentTest",
        resourceUrl: "www.urltesting.com"
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
