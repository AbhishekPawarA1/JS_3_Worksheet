function fetchData() {
    setTimeout(() => console.log("Task 1"), 0);
    console.log("Task 2");
    Promise.resolve()
        .then(() => console.log("Task 3"))
        .then(()=>setTimeout(()=>console.log("Completed"),0))
    
}
fetchData();
