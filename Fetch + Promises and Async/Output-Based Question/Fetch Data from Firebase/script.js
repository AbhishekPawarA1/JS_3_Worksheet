url ="https://javascript3-3b528-default-rtdb.asia-southeast1.firebasedatabase.app/.json";
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
.catch((error)=>console.log("Error in fetching data",error))