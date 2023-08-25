let myLeads = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

//getting data from local storage
let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromStorage)

//creating condition truthy false condition for fetching data for local storage
if (leadsFromStorage) {
    myLeads = leadsFromStorage
    //calling renderLeads function here
    reader(myLeads)
}

//creating a function to save current tabs on in browser onclicking on SAVE TAB btn
tabBtn.addEventListener("click", function () {
    [
        //intracting with chrome tab api
        chrome.tabs.query({ active: true, currentWindow: true },function (tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            reader()

        })
    ]
})


//passing parameters for reusebility of function
//creating function to create listItems
function reader(leads) {
    let listItems = ""
    for (let x = 0; x < leads.length; x++) {
        //using templete string for write html in java script eg."(``)"
        listItems += `
    <li>
      <a target='blank' href="${leads[x]}">
      ${leads[x]}
      </a>
    </li>`
    }
    ulEl.innerHTML = listItems
}

//creating delete btn for clearing out the local storage
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    reader(myLeads)
})


//creating function using event liostener for pushing data from input to myLeads array
buttonEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    //clearing input text
    inputEl.value = ""
    //storing data into local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //calling renderLeadsd function on button click
    reader(myLeads)
})



