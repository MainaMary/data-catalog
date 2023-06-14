const itemsPerPage = 10; 
let currentPage = 1; 

function displayTabledata(data) {
  const table = document.getElementById("myTable");
  const tbody = table.querySelector("tbody");
  

  
  tbody.innerHTML = "";
  data.forEach(function (item) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
          <input type="checkbox" />
        </td>
<td>${item.id}</td>
<td>${item.title.slice(0,30)}</td>
<td>${item.body.slice(0,90)}</td>
<td>
                      <button>Edit</button>
                      <button>Delete</button>
                  </td>

`;
    tbody.appendChild(row);
  });
}
function fetchTableMetadata() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((metadata) => {
      console.log(metadata.slice(0, 10));
      displayTabledata(metadata.slice(0, 10));
    })
    .catch((error) => {
      console.error("Error fetching table metadata:", error);
    });
}
fetchTableMetadata();
function setupPagination() {
  const tableDataLength = tableData.length;
  const totalPages = Math.ceil(tableDataLength / itemsPerPage);
  const paginationControls =
    document.getElementById("paginationControls");
  paginationControls.innerHTML = "";

  // Generate pagination links
  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;
    link.addEventListener("click", function () {
      currentPage = i;
      displayTableData();
      setupPagination();
    });
    paginationControls.appendChild(link);
  }
}
