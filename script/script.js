window.addEventListener("DOMContentLoaded",function(){
    const languageList = document.querySelector(".language");
    const englishLanguage = document.querySelector(".siteEnglish");
    const russishLanguage = document.querySelector(".siteRussish");
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
})