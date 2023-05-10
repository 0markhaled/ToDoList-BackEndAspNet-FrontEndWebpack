
//not the api itself, the thing that will call the api


export default {
    baseUrl: `https://localhost:7042/api/todoitems`,

    getTodoItems: function (callback) {
        let url = this.baseUrl;
        let fetchPromise = fetch(url); // sends fetch request
        let jsonPromise = fetchPromise.then(response => response.json()); // takes fetch respose, asks to ==> json
        jsonPromise.then(json => { callback(json) }); // when json'd send to callback function
    },

    addTodoItem: function (description, callback) {
        let url = this.baseUrl;
        let payload = {
            "task": description,
            "isComplete": false
        };

        //stringify payload
        //\{ "task": "description", "isComplete": false \}
        let fetchPromise = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)

        });
        let jsonPromise = fetchPromise.then(response => response.json()); // takes fetch respose, asks to ==> json
        jsonPromise.then(json => { callback(json) }); // when json'd send to callback function

    },

    //lab 3
    deleteToDoItem: function (id, callback) {
        let url = this.baseUrl + `/${id}`;

        let fetchPromise = fetch(url, {
            method: "DELETE",

        });
        fetchPromise.then(response => callback(response)); //wait until the fetch resolves, then call the callback function


    },


    setTodoItemCompleteStatus: function (id, complete, callback) {
        let url = this.baseUrl + `/${id}/${complete}`;
        //https://localhost:7042/api/todoitems/1/true

        let payload = {
            "isComplete": complete,
            "id": id
        };


        let fetchPromise = fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(payload)
        });

        let jsonPromise = fetchPromise.then(response => response.json()); // takes fetch respose, asks to ==> json
        jsonPromise.then(json => { callback(json) }); // when json'd send to callback function
    }

}