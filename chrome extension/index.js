const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const listEl = document.getElementById("ulist");

// Get saved list from storage
let list = localStorage.getItem("myList");
if (list == null) {
    list = [];
}
else{
    list = JSON.parse(list);
    renderList();
}


inputBtn.addEventListener("click", function () {
    list.push( inputEl.value );
    inputEl.value = "";
    console.log(list);
    renderList();

    localStorage.setItem("myList", JSON.stringify(list));

})



function renderList(){
    let listItems = "";

    for (let i=0; i < list.length; i++) {
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
                            <a target='_blank' href='${list[i]}'> 
                                ${list[i]} 
                            </a>        
                        </li>    
                    `;
            

    }

    listEl.innerHTML = listItems;
    
}



