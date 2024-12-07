async function fetchData() {
     const response =await fetch("invalid-url");
    const data = await response.json();
    console.log(data)
}
fetchData();
