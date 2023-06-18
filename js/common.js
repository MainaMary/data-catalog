const optionMenu = document.querySelector('.select-menu')
const selectBtn = optionMenu.querySelector('.select-btn')
const options = optionMenu.querySelectorAll('.option')
const buttonText =  optionMenu.querySelector('.sBtn-text')

selectBtn.addEventListener('click', () => optionMenu.classList.toggle("active-option"))
options.forEach(option =>{
    option.addEventListener('click',( () =>{
        let selectedOption = option.querySelector('.option-text').innerText;
        buttonText.innerText = selectedOption;
        optionMenu.classList.remove("active-option")
       
    }))
})