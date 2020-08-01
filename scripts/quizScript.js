var name
var surname
var isNameSaved

var points = 0
const correctAnswer = 2
var grade

function openQuizWindow(){
    if(document.getElementById("name").value.length != 0 && document.getElementById("surname").value.length != 0){
        document.getElementById('quizWindow').style.display =  'block' 
        document.getElementById('minimizedQuizWindow').style.display =  'block' 
    }
    else{
        alert("Please enter your user data first!")
    }
}

function getNames(){
    if(document.getElementById("name").value.length == 0 || document.getElementById("surname").value.length == 0){
       alert("Please enter a valid value") 
    }

    else{
        name = document.getElementById('name').value 
        surname = document.getElementById('surname').value 
        console.log(name)
        console.log(surname)
        alert("Name saved! Now you can start the quiz!")
    }

    if(document.getElementById("name").value.length != 0 && document.getElementById("surname").value.length != 0){
        document.getElementById("submitName").style.display = "none"
    }
}

function setHeader(){
    document.getElementById("quizHeader").innerHTML = "Hello "+name+" "+surname+", let's start the quiz!";
}

function startQuiz(){
    document.getElementById("quizForm").style.display = "block"
}

function endQuiz(){
    points = 0

    var q1a1 = {
        button: document.getElementById("q1a1") ,
        label: document.getElementById("q1a1_label")
    }
    var q1a2 ={
        button: document.getElementById("q1a2"),
        label: document.getElementById("q1a2_label")
    }
    var q1a3 = {
        button: document.getElementById("q1a3"),
        label: document.getElementById("q1a3_label")
    }
    var q1a4 = {
        button: document.getElementById("q1a4"),
        label: document.getElementById("q1a4_label")
    }

    var q2a1 = {
        button: document.getElementById("q2a1") ,
        label: document.getElementById("q2a1_label")
    }
    var q2a2 = {
        button: document.getElementById("q2a2") ,
        label: document.getElementById("q2a2_label")
    }
    var q2a3 = {
        button: document.getElementById("q2a3") ,
        label: document.getElementById("q2a3_label")
    }
    var q2a4 = {
        button: document.getElementById("q2a4") ,
        label: document.getElementById("q2a4_label")
    }

    var q3a1 = {
        button: document.getElementById("q3a1") ,
        label: document.getElementById("q3a1_label")
    }
    var q3a2 = {
        button: document.getElementById("q3a2") ,
        label: document.getElementById("q3a2_label")
    }
    var q3a3 = {
        button: document.getElementById("q3a3") ,
        label: document.getElementById("q3a3_label")
    }
    var q3a4 = {
        button: document.getElementById("q3a4") ,
        label: document.getElementById("q3a4_label")
    }

    var q4a1 = {
        button: document.getElementById("q4a1") ,
        label: document.getElementById("q4a1_label")
    }
    var q4a2 = {
        button: document.getElementById("q4a2") ,
        label: document.getElementById("q4a2_label")
    }
    var q4a3 = {
        button: document.getElementById("q4a3") ,
        label: document.getElementById("q4a3_label")
    }
    var q4a4 = {
        button: document.getElementById("q4a4") ,
        label: document.getElementById("q4a4_label")
    }

    var q5a1 = {
        button: document.getElementById("q5a1") ,
        label: document.getElementById("q5a1_label")
    }
    var q5a2 = {
        button: document.getElementById("q5a2") ,
        label: document.getElementById("q5a2_label")
    }

    var q6a1 = {
        button: document.getElementById("q6a1") ,
        label: document.getElementById("q6a1_label")
    }
    var q6a2 = {
        button: document.getElementById("q6a2") ,
        label: document.getElementById("q6a2_label")
    }
    var q6a3 = {
        button: document.getElementById("q6a3") ,
        label: document.getElementById("q6a3_label")
    }
    var q6a4 = {
        button: document.getElementById("q6a4") ,
        label: document.getElementById("q6a4_label")
    }

    var q7a1 = {
        button: document.getElementById("q7a1") ,
        label: document.getElementById("q7a1_label")
    }
    var q7a2 = {
        button: document.getElementById("q7a2") ,
        label: document.getElementById("q7a2_label")
    }
    var q7a3 = {
        button: document.getElementById("q7a3") ,
        label: document.getElementById("q7a3_label")
    }
    var q7a4 = {
        button: document.getElementById("q7a4") ,
        label: document.getElementById("q7a4_label")
    }

    var q8a1 = {
        button: document.getElementById("q8a1") ,
        label: document.getElementById("q8a1_label")
    }
    var q8a2 = {
        button: document.getElementById("q8a2") ,
        label: document.getElementById("q8a2_label")
    }
    var q8a3 = {
        button: document.getElementById("q8a3") ,
        label: document.getElementById("q8a3_label")
    }
    var q8a4 = {
        button: document.getElementById("q8a4") ,
        label: document.getElementById("q8a4_label")
    }

    var q9a1 = {
        button: document.getElementById("q9a1") ,
        label: document.getElementById("q9a1_label")
    }
    var q9a2 = {
        button: document.getElementById("q9a2") ,
        label: document.getElementById("q9a2_label")
    }
    var q9a3 = {
        button: document.getElementById("q9a3") ,
        label: document.getElementById("q9a3_label")
    }
    var q9a4 = {
        button: document.getElementById("q9a4") ,
        label: document.getElementById("q9a4_label")
    }

    var q10a1 = {
        button: document.getElementById("q10a1") ,
        label: document.getElementById("q10a1_label")
    }
    var q10a2 = {
        button: document.getElementById("q10a2") ,
        label: document.getElementById("q10a2_label")
    }
    var q10a3 = {
        button: document.getElementById("q10a3") ,
        label: document.getElementById("q10a3_label")
    }
    var q10a4 = {
        button: document.getElementById("q10a4") ,
        label: document.getElementById("q10a4_label")
    }

    var q11a1 = {
        button: document.getElementById("q11a1") ,
        label: document.getElementById("q11a1_label")
    }
    var q11a2 = {
        button: document.getElementById("q11a2") ,
        label: document.getElementById("q11a2_label")
    }
    var q11a3 = {
        button: document.getElementById("q11a3") ,
        label: document.getElementById("q11a3_label")
    }
    var q11a4 = {
        button: document.getElementById("q11a4") ,
        label: document.getElementById("q11a4_label")
    }

    
    var q12a1 = {
        button: document.getElementById("q12a1") ,
        label: document.getElementById("q12a1_label")
    }
    var q12a2 = {
        button: document.getElementById("q12a2") ,
        label: document.getElementById("q12a2_label")
    }
    var q12a3 = {
        button: document.getElementById("q12a3") ,
        label: document.getElementById("q12a3_label")
    }
    var q12a4 = {
        button: document.getElementById("q12a4") ,
        label: document.getElementById("q12a4_label")
    }

    var q13a1 = {
        button: document.getElementById("q13a1") ,
        label: document.getElementById("q13a1_label")
    }
    var q13a2 = {
        button: document.getElementById("q13a2") ,
        label: document.getElementById("q13a2_label")
    }
    var q13a3 = {
        button: document.getElementById("q13a3") ,
        label: document.getElementById("q13a3_label")
    }
    var q13a4 = {
        button: document.getElementById("q13a4") ,
        label: document.getElementById("q13a4_label")
    }
    
    var q14a1 = {
        button: document.getElementById("q14a1") ,
        label: document.getElementById("q14a1_label")
    }
    var q14a2 = {
        button: document.getElementById("q14a2") ,
        label: document.getElementById("q14a2_label")
    }
    var q14a3 = {
        button: document.getElementById("q14a3") ,
        label: document.getElementById("q14a3_label")
    }
    var q14a4 = {
        button: document.getElementById("q14a4") ,
        label: document.getElementById("q14a4_label")
    }
    
    var q15a1 = {
        button: document.getElementById("q15a1") ,
        label: document.getElementById("q15a1_label")
    }
    var q15a2 = {
        button: document.getElementById("q15a2") ,
        label: document.getElementById("q15a2_label")
    }

    var q15 = document.getElementById("que15").selectedIndex

    q1a1.label.style.color = "#ff0000"
    q1a2.label.style.color = "#ff0000"
    q1a3.label.style.color = "#00ff00"
    q1a4.label.style.color = "#ff0000"

    q2a1.label.style.color = "#ff0000"
    q2a2.label.style.color = "#00ff00"
    q2a3.label.style.color = "#ff0000"
    q2a4.label.style.color = "#ff0000"

    q3a1.label.style.color = "#ff0000"
    q3a2.label.style.color = "#ff0000"
    q3a3.label.style.color = "#00ff00"
    q3a4.label.style.color = "#ff0000"
    
    q4a1.label.style.color = "#ff0000"
    q4a2.label.style.color = "#ff0000"
    q4a3.label.style.color = "#ff0000"
    q4a4.label.style.color = "#00ff00"  

    q5a1.label.style.color = "#ff0000"
    q5a2.label.style.color = "#00ff00"
    
    q6a1.label.style.color = "#00ff00"
    q6a2.label.style.color = "#ff0000"
    q6a3.label.style.color = "#ff0000"
    q6a4.label.style.color = "#ff0000"

    q7a1.label.style.color = "#ff0000"
    q7a2.label.style.color = "#ff0000"
    q7a3.label.style.color = "#00ff00"
    q7a4.label.style.color = "#ff0000"

    q8a1.label.style.color = "#00ff00"
    q8a2.label.style.color = "#ff0000"
    q8a3.label.style.color = "#ff0000"
    q8a4.label.style.color = "#ff0000"
    
    q9a1.label.style.color = "#ff0000"
    q9a2.label.style.color = "#00ff00"
    q9a3.label.style.color = "#ff0000"
    q9a4.label.style.color = "#ff0000"

    q10a1.label.style.color = "#ff0000"
    q10a2.label.style.color = "#00ff00"
    q10a3.label.style.color = "#ff0000"
    q10a4.label.style.color = "#ff0000"

    q11a1.label.style.color = "#ff0000"
    q11a2.label.style.color = "#ff0000"
    q11a3.label.style.color = "#ff0000"
    q11a4.label.style.color = "#00ff00"
    
    q12a1.label.style.color = "#ff0000"
    q12a2.label.style.color = "#ff0000"
    q12a3.label.style.color = "#00ff00"
    q12a4.label.style.color = "#ff0000"

    q13a1.label.style.color = "#ff0000"
    q13a2.label.style.color = "#ff0000"
    q13a3.label.style.color = "#ff0000"
    q13a4.label.style.color = "#00ff00"
    
    q14a1.label.style.color = "#00ff00"
    q14a2.label.style.color = "#ff0000"
    q14a3.label.style.color = "#ff0000"
    q14a4.label.style.color = "#ff0000"

    if(q1a3.button.checked == true){
        points = points+correctAnswer
    }

    if(q2a2.button.checked == true){
        points = points+correctAnswer
    }
    
    if(q3a3.button.checked == true){
        points = points+correctAnswer
    }

    if(q4a4.button.checked ==true){
        points = points+correctAnswer
    }
    
    if(q5a2.button.checked == true){
        points = points+correctAnswer
    }

    if(q7a3.button.checked == true){
        points = points+correctAnswer
    }
    
    if(q8a1.button.checked == true){
        points = points+correctAnswer
    }

    if(q9a2.button.checked == true){
        points = points+correctAnswer
    }

    if(q10a2.button.checked == true){
        points = points+correctAnswer
    }
    
    if(q11a4.button.checked == true){
        points = points+correctAnswer
    }

    if(q12a3.button.checked == true){
        points = points+correctAnswer
    }

    if(q13a4.button.checked == true){
        points = points+correctAnswer
    }

    if(q14a1.button.checked == true){
        points = points+correctAnswer
    }

    if(q15 == 1){
        points = points+correctAnswer
    }

    console.log(points)

    document.getElementById("pointsResults").innerHTML = "Punkty: "+points

    var message

    if(points==30){
        grade = 6
        message = "Gratulacje, "
    }    
    else if(points>=27 && points<30){
        grade = 5
        message = "Bardzo ladnie, "
    }    
    else if(points>=23 && points<27){
        grade = 4
        message = "Calkiem dobrze, "
    }    
    else if(points>=18 && points<23){
        grade = 3
        message = "No tak srednio bym powiedzial, "
    }    
    else if(points>=12 && points<18){
        grade = 2
        message = "Przecietnie, "
    }
    else if(points<12){
        grade = 1
        message = "Bardzo mi przykro, "
    }

    document.getElementById("gradeResult").innerHTML = message+grade
}

