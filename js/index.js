// Modal elements
const modal = document.getElementById('myModal')
const filter = document.querySelector('.filter-button')
const close = document.querySelector('.close-modal')
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
filter.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

//Table pagination
const data = [
    {
    id: 1,
    name:"Order",
    category:"Order management",
    date: "30 Aug 2022"
    },
    {
        id: 2,
        name:"Shipping",
        category:"Shipping management",
        date: "30 Aug 2022"
    },
    {
    id: 3,
    name:"Payments",
    category:"Payment management",
    date: "30 Aug 2022"

    },
    {
        id: 1,
        name:"Users",
        category:"User management",
        date: "30 Aug 2022"
        },
        {
            id: 2,
            name:"Shipping",
            category:"Shipping management",
            date: "30 Aug 2022"
        },
        {
        id: 3,
        name:"Food",
        category:"Delivery management",
        date: "30 Aug 2022"
    
        },
        {
            id: 1,
            name:"Order",
            category:"Order management",
            date: "30 Aug 2022"
            },
            {
                id: 2,
                name:"Shipping",
                category:"Shipping management",
                date: "30 Aug 2022"
            },
            {
            id: 3,
            name:"Payments",
            category:"Payment management",
            date: "30 Aug 2022"
        
            },
            {
                id: 1,
                name:"Order",
                category:"Order management",
                date: "30 Aug 2022"
                },
                {
                    id: 2,
                    name:"Shipping",
                    category:"Shipping management",
                    date: "30 Aug 2022"
                },
                {
                id: 3,
                name:"Payments",
                category:"Payment management",
                date: "30 Aug 2022"
            
                },
                {
                    id: 1,
                    name:"Order",
                    category:"Order management",
                    date: "30 Aug 2022"
                    },
                    {
                        id: 2,
                        name:"Shipping",
                        category:"Shipping management",
                        date: "30 Aug 2022"
                    },
                    {
                    id: 3,
                    name:"Payments",
                    category:"Payment management",
                    date: "30 Aug 2022"
                
                    }
]
const table = document.getElementById("tableList");
const tbody = table.querySelector("tbody");
const listElement = document.getElementById('paginate-list');
const pagination = document.querySelector('#pagination')
let currentPage = 1;
let rows = 5;
function displayList(items, wrapper, rows_per_page,page){
  wrapper.innerHTML = "";
  page--;
  let start = rows_per_page * page 
  let end = start + rows_per_page
  let paginatedItems = items.slice(start, end)
  
  for(let i= 0; i < paginatedItems.length; i++){
    console.log(items[i])
    let item = items[i]
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
                <input type="checkbox" />
                </td>
       
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.date}</td>
        <td>
                                            <button>
                                                <a href="./html/table.html">View table</a>
                                            </button>
                                        </td>
`;
tbody.appendChild(row);
  }  
}
function setPagination(items, wrapper, rows_per_page){
wrapper.innerHTML =""
let page_count = Math.ceil(items.length/rows_per_page)
for(let i = 1; i < page_count + 1; i++){
    console.log('hello world')
    let btn = PaginationButton(i, items)
    const tableWrapper = document.querySelector('table-wrapper')
    pagination.appendChild(btn)
}
}
function PaginationButton(page, items ){
    console.log(page,'page')
    let button= document.createElement('button')
    button.innerText = page;
    if(currentPage == page){
        button.classList.add('active')

    }
    button.addEventListener('click', function (){
        currentPage = page
        console.log(currentPage)
        displayList(items, tbody,rows, currentPage);
        // let current_btn = document.querySelector('.page-numbers button .active')
        // current_btn.classList.remove('active')
        // button.classList.add('active')
    })
    return button
}
displayList(data, tbody, rows, currentPage)
setPagination(data,pagination,rows)