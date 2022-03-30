let db;
const request = indexedDB.open("budget_tracker", 1); // the database will be created if one doesn't already exist

// object stores hold data in an indexedDb database, similar to how tables hold data in SQL
// Object store can only be created when database is opened
request.onupgradeneeded = function (event) {
  // this event listener will fire if the structure of the database is changed
  db = event.target.result;
  db.createObjectStore("new_budget_item", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    uploadBudgetData();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  // open new connection to the database with readwrite permissions
  const transaction = db.transaction(["new_budget_item"], "readwrite");
  // access the object store for "new_budget"
  const budgetObjectStore = transaction.objectStore("new_budget_item");
  // add record to store
  budgetObjectStore.add(record);
}

// save record function already included in index.js

// Upload budget data when internet connectivity returns
function uploadBudgetData() {
  // open db transaction
  const transaction = db.transaction(["new_budget_item"], "readwrite");

  // access your object store
  const budgetObjectStore = transaction.objectStore("new_budget_item");

  // get all records from the store and set to a variable
  const getAll = budgetObjectStore.getAll(); // must attach this to an event handler

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      // if getAll object contains data, post it to the database
      fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((serverResponse) => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          const transaction = db.transaction(["new_budget_item"], "readwrite");
          const budgetObjectStore = transaction.objectStore("new_budget_item");
          budgetObjectStore.clear();
        })
        .catch((err) => console.log(err));
    }
  };
}

window.addEventListener("online", uploadBudgetData);
