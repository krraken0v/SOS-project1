window.addEventListener("DOMContentLoaded",function(){
    const languageList = document.querySelector(".language"),
    englishLanguage = document.querySelector(".siteEnglish"),
    russishLanguage = document.querySelector(".siteRussish"),
    slides = document.querySelectorAll(".about_slides img"),
    buttonSwitchSlides = document.querySelector(".about_slides_switch"),
    featuresItems = document.querySelectorAll(".features_container_item"),
    featuresItemsText = document.querySelectorAll(".features_container_item_text"),
    mainForm = document.querySelector(".form_text_container_input"),
    buttonForm = document.querySelector(".form_text_container_button"),
    modalBlock = document.querySelector(".modal_container"),
    modalText = document.querySelector(".modal_container_item_text"),
    modalExitButton = document.querySelector(".modal_container_item_exit");
    languageList.addEventListener("change",function(){
        if(this.value=="value2"){
            this.value == "value2";
            russishLanguage.classList.remove("hide");
            russishLanguage.classList.add("show");
            englishLanguage.classList.remove("show");
            englishLanguage.classList.add("hide");
        } else {
            russishLanguage.classList.remove("show");
            russishLanguage.classList.add("hide");
            englishLanguage.classList.remove("hide");
            englishLanguage.classList.add("show");
        }
    })
    let current =0;
    function showSlides(){
        for(let i=0;i<slides.length;i++){
            slides[i].classList.add("hide");
            slides[i].classList.remove("show");
        }
        slides[current].classList.remove("hide");
        slides[current].classList.add("show");
    }
    showSlides();
    buttonSwitchSlides.addEventListener("click",function(){
        if(current==slides.length-1){
            current=0;
        } else{
            current++;
        }
        showSlides();
    })
    featuresItems.forEach(item=>{
        item.classList.add("modified");
    })

    featuresItemsText.forEach(item=>item.classList.add("hide"));
    featuresItems.forEach((item,index)=>{
        item.addEventListener("click",function(e){
            e.preventDefault();
            if(e.target==item){
              featuresItemsText[index].classList.toggle("hide");
              featuresItems[index].classList.toggle("modified");
              featuresItems[index].classList.toggle("modifiedcheck")
              featuresItems[index].classList.toggle("show");
            } 
        })
    })
    buttonForm.addEventListener("click",function(e){
        e.preventDefault();
        modalBlock.style.display ="block";
        modalText.innerText = `Thank you for subscribtion!,
        We will send you new updates to your e-mail address:
        ${mainForm.value}
        `
    })
    modalExitButton.addEventListener("click",function(e){
        e.preventDefault();
        modalBlock.style.display = "none";
    })
    function poster(input){
        input.addEventListener("submit",function(e){
            e.preventDefault();
            const request = new XMLHttpRequest();
            request.open("POST","server.php");
            const newForm = new FormData(input);
            request.send(newForm);
            request.addEventListener("load",()=>{
               console.log(request);
            })
            
        })
    }
    poster(mainForm);
})