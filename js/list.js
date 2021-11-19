let btn = document.querySelector("#btn"); //stores the button in the variable btn
let PARA = document.querySelector("p");
const list_arr = [];
var q_value = document.querySelector("#l_value"); //stores the input in the variable q_value
btn.addEventListener("click", Dis_list);
var i = 0;
//this function checks if the input box is empty
function Dis_list() {
    if (q_value.value == 0) {
        alert("The input box is empty"); //displays when the input box is empty
    } else {
        list_arr.foreach(addDiv()); //displays the list box
    }
}
PARA.style.color = "#6699FF";

//This section is used to create a space between the form and output
var space_div = document.createElement("div");
document.body.appendChild(space_div);
space_div.style.cssText = " width:400px;height:50px;margin:auto;border:2px black;";


function addDiv() {
    let newdiv = document.createElement("div");
    document.body.appendChild(newdiv);

    newdiv.style.cssText =
        "width:400px;height:50px;border:2px solid white;margin:auto;background-color:white;display:flex;justify-content:space-between;align-items:center";
    let parag = document.createElement("p");
    newdiv.appendChild(parag);
    let del_btn = document.createElement("button");
    let btn_value = document.createTextNode("delete");
    newdiv.appendChild(del_btn);
    del_btn.appendChild(btn_value);
    del_btn.style.cssText = "width: 80px;height: 30px;border-radius: 20px;background-color: #bfbfff;color: white;";

    parag.innerHTML = q_value.value;
    del_btn.addEventListener("click", delList);
    del_btn.addEventListener("mouseover", () => {
        del_btn.style.backgroundColor = "red";
    });
    del_btn.addEventListener("mouseout", () => {
        del_btn.style.backgroundColor = "#bfbfff";
    });
    // this function deletes the list box
    function delList() {
        newdiv.remove();
    }
}