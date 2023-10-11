const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const listEl = document.getElementById("ulist");
const deleteBtn = document.getElementById("delete-btn");
const savetabBtn = document.getElementById("savetab-btn");


// Get saved list from storage
let list = localStorage.getItem("myList");
if (list == null) {
    list = [];
}
else{
    list = JSON.parse(list);
    renderList(list);
}


inputBtn.addEventListener("click", function () {
    list.push( inputEl.value );
    inputEl.value = "";
    console.log(list);
    renderList(list);

    localStorage.setItem("myList", JSON.stringify(list));

})

deleteBtn.addEventListener("dblclick", function () {
    list = [];
    localStorage.clear();
    renderList(list);
});

savetabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {
        let url = tabs[0].url;
        list.push(url);
        renderList(list);
        
        localStorage.setItem("myList", JSON.stringify(list));

    })
});




function renderList(mylist){
    let listItems = "";

    for (let i=0; i < mylist.length; i++) {
        // old method
        // listEl.innerHTML += "<li>" + list[i] + "</li>"
        
        // better method
        // const li = document.createElement("li");
        // li.textContent = list[i];
        // listEl.append(li);
        

        // !! loop icinde sürekli renderHTML yapmak iyi değil

        // best method
        // listItems += "<li>" + list[i] + "</li>"
        
        listItems += `
                        <li>
                            <a target='_blank' href='${mylist[i]}'> 
                                ${mylist[i]} 
                            </a>        
                        </li>    
                    `;
            

    }

    listEl.innerHTML = listItems;
    
}




