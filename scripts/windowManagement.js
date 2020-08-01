var isUserOpened = false;
var isReadMeOpened = false;

function closeUserWindow(){
    document.getElementById('userWindow').style.display =  'none' 
    document.getElementById('minimizedUserWindow').style.display =  'none' 
}

function openUserWindow(){
    document.getElementById('userWindow').style.display =  'block' 
    document.getElementById('minimizedUserWindow').style.display =  'block' 
}

function openReadmeWindow(){
    document.getElementById('readmeWindow').style.display =  'block' 
    document.getElementById('minimizedReadmeWindow').style.display =  'block'
}

function closeReadmeWindow(){
    document.getElementById('readmeWindow').style.display =  'none' 
    document.getElementById('minimizedReadmeWindow').style.display =  'none' 
}

function closeQuizWindow(){
    var isExitAccepted = confirm("Are you sure you want to end your quiz?")
    if(isExitAccepted==true){
        document.getElementById('quizWindow').style.display =  'none' 
        document.getElementById('minimizedQuizWindow').style.display =  'none' 
    }
}



