//~ global variables 
var inputName = document.getElementById("inputName");
var inputUrl = document.getElementById("inputUrl");
let rulesData = document.getElementById("rules");
var dataInputList = [];
if (localStorage.getItem("list") != null) {
    dataInputList = JSON.parse(localStorage.getItem("list"));
    display();
}
//! function to create book mark 
function createBookMark() {
    
    if(valdiationInput(inputName , "nameMasg") && valdiationInput(inputUrl , "urlMasg")){
        singileInput = {
            name: inputName.value,
            url: inputUrl.value,
        }
        dataInputList.push(singileInput);
        localStorage.setItem("list", JSON.stringify(dataInputList));
        display();
        clearInput();
        rulesData.classList.remove("d-block");
        rulesData.classList.add("d-none");
    }else{
        rulesData.classList.add("d-block");
        rulesData.classList.remove("d-none");
    }
// console.log(valdiationInput(inputName , "nameMasg"), valdiationInput(inputUrl , "urlMasg"));
}
//^ function to display book mark 
function display() {
    var input = ''
    for (var i = 0; i < dataInputList.length; i++) {
        input += `
                                <tr>
                            <td>${i + 1}</td>
                            <td>${dataInputList[i].name}</td>
                            <td>
                                <a  href="${dataInputList[i].url}" target="_blank" class="btn">
                                    <i class="fa-solid fa-eye"></i> 
                                    <span>visit</span>
                                </a>
                            </td>
                            <td>
                                <button onclick="deleteInput(${i})" class="btn">
                                    <i class="fa-solid fa-trash"></i> 
                                    <span>delete</span>
                                </button>
                            </td>
                        </tr>
        `
    }
    document.getElementById('tableBodyData').innerHTML = input
}
//? function to delete book mark 
function deleteInput(index) {
    dataInputList.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(dataInputList));
    display();
}
//~ function to clear input
function clearInput() {
    inputName.value = "";
    inputUrl.value = "";
    inputName.classList.remove("is-valid","is-invalid")
    inputUrl.classList.remove("is-valid","is-invalid")
}
//! function to check valdition 
function valdiationInput(element , massageId) {
    let regex = {
        inputName:/^[A-Za-z0-9 _]{3,15}$/,
        inputUrl:/^([a-zA-Z0-9.-]+)\.com(\/\S*)?$/
    }
    let text = element.value;
    let massage = document.getElementById(massageId);
    if (regex[element.id].test(text)) {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        massage.classList.remove("d-none");
        massage.classList.add("d-none");
        return true
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        massage.classList.remove("d-none");
        return false
    }

}
//! function to close the rules
function dNone() {
    rulesData.classList.add("d-none");
}