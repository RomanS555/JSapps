const selection = document.createElement("select")
const choice = document.createElement("option")
const choice2 = document.createElement("option")
const textb = document.createElement("input")
const button = document.createElement("input")
textb.type = "text"
button.type = "button"
button.value = "Переименовать"
choice.value = "AAAA"
choice.text = "Дом1"
choice2.text = "яблоко"
selection.name = "AAA"
selection.appendChild(choice)
selection.appendChild(choice2)
button.addEventListener("click",RenameCh)

document.body.appendChild(selection)
document.body.appendChild(textb)
document.body.appendChild(button)
function isText(str){
    if(typeof str != "string"){
        return false
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            return true
        }
    }
    return false
}
function RenameCh(){
    let tex = textb.value
    if(!isText(tex)){
        textb.style.borderColor = "red"
    }else{
        let a = true;
        let tex2 = ""
        for(let i = 0; i < tex.length; i++){
            if(!(tex[i] == " " && a)){
                tex2 += tex[i]
            }
        }
        textb.value = tex2
        selection.selectedOptions[0].text = tex2
        textb.style.borderColor = "white"
    }
    
    
    
    
}