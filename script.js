function Quizz(validate,answer,answer_place,correct_answer){
    let validate_n = document.getElementById(validate)
    let answer_n = document.getElementById(answer)
    let answer_place_n = document.getElementById(answer_place)
    if (validate_n){
        validate_n.addEventListener('click', function(){
        if (answer_n.value == correct_answer){
            answer_place_n.innerHTML = 'Bonne réponse!'
            answer_place_n.style.color = 'green'
        }
        else {
            answer_place_n.innerHTML = 'Faux!'
            answer_place_n.style.color = 'red'
        }
        
        })
    }
}



social_media_list = document.getElementsByClassName('social_media')
for(button of social_media_list){
    button.addEventListener('click',function(){
        alert("Ce raccourci n'est actuellement pas valide, veuillez nous excuser pour la gêne occasioné")
    })
}

Quizz('validate_1','solve_1','answer_1','if')
Quizz('validate_2','solve_2','answer_2','for')
Quizz('validate_3','solve_3','answer_3','let')
Quizz('validate_4','solve_4','answer_4','const')
Quizz('validate_5','solve_5','answer_5','while')

