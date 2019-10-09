document.getElementById("submitButton").addEventListener("click", () => {
    let xhrGet = new XMLHttpRequest();
    const topicValue = document.getElementById("topic").value;
    console.log("1", topicValue);

    xhrGet.addEventListener("readystatechange", () => {
        if (xhrGet.readyState === 4 && xhrGet.status === 200) {
            console.log("inside");

            let outputResources = JSON.parse(xhrGet.responseText);

            renderResources(outputResources[0]);
            console.log(outputResources);
        } else if (xhrGet.readyState === 4 && xhrGet.status !== 200) {
            //error handling for unsuccessful GET request
        }
    });

    xhrGet.open("GET", `/resources?topic=${topicValue}`, true);
    xhrGet.send();
});
