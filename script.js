social_media_list = document.getElementsByClassName('social_media')
for(button of social_media_list){
    button.addEventListener('click',function(){
        alert("Ce raccourci n'est actuellement pas valide, veuillez nous excuser pour la gêne occasioné")
    })
}