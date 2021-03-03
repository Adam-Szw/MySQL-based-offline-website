function quiz(f){ 	
    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
    var counter=1;

    $.getJSON(f, function(data) {
        for(i=0;i<data.quizlist.length;i++){ 
            questionBank[i]=new Array;
            questionBank[i][0]=data.quizlist[i].question;
            questionBank[i][1]=data.quizlist[i].option1;
            questionBank[i][2]=data.quizlist[i].option2;
            questionBank[i][3]=data.quizlist[i].option3;
        }
        
        numberOfQuestions=questionBank.length; 
        displayQuestion();
    })//gtjson


    function displayQuestion(){
        var rnd=Math.random()*3;
        rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;
        if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
        if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
        if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}
        
        $(stage).append('<div id="tracker">'+(counter++)+'/'+numberOfQuestions+'<div>');
        $(stage).append('<div  class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="pix"><img src="img/'+q1+'"></div><div id="2" class="pix"><img src="img/'+q2+'"></div><div id="3" class="pix"><img src="img/'+q3+'"></div>');
        
        
        $('.pix').click(function(){
            if(questionLock==false){questionLock=true;	
                if(this.id==rnd){
                    $(stage).append('<div class="footer"><div class="feedback1">CORRECT</div></div>');
                    score++;
            }
            if(this.id!=rnd){
                $(stage).append('<div class="footer"><div class="feedback2">WRONG</div></div>');
            }
            setTimeout(function(){changeQuestion()},1000);
        }})
    }//display question
    function changeQuestion(){
        questionNumber++;

        if(stage=="#game1"){stage2="#game1";stage="#game2";}
        else{stage2="#game2";stage="#game1";}
        if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
        
        $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
        $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
    }//change question
    function displayFinalSlide(){
        $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Score: '+score+'/'+numberOfQuestions+'</div>');
        $(stage).append('<div class=footer><div class="playbtn">PLAY AGAIN</div></div>');
        $('.playbtn').click(function(){
            location.reload();
        })       
    }//display final slide
}

function menu(){
    document.getElementsByClassName("gameMenu");
    $('#pyBtn').click(function(){
        quiz('activity.json');
        $(".gameMenu").remove();

    })
    $('#javaBtn').click(function(){
        quiz('javaQ.json');
        $(".gameMenu").remove();

    })
}

menu();

// $(document).ready(function () {
//     menu();
          
// });//doc ready

