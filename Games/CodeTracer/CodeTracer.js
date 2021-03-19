/*Stores the Python Questions*/
var pythonQuestions = [
    ["Which program outputs the greeting?","name_correct.png","name_space.png","name_var.png"],
    ["Which code finds the sum of the array?","sumArray_correct.png","sumArray_one.png","sumArray_print.png"],
    ["Which code has an error?","found_correct.png","found_for.png","found_while.png"],
    ["Which code correctly outputs the fibonacci sequence?","fibo-correct.png","fibo-0.png","fibo-1.png"],
    ["Which code does not return the name and age?","person-correct.png","person-normal.png","person-n.png"],
    ["Outputs the logo of the car?","carlogo-correct.png","carlogo-colour.png","carlogo-self.png"],
    ["Which code outputs 8 as the answer?","eight-correct.png","eight-zero.png","eight-six.png"],
    ["Which program outputs Berries?","fruit-correct.png","fruit-append.png","fruit-pop.png"],
    ["Which code will print 24?","xy-correct.png","xy-y.png","xy-plus.png"],
    ["Which code will accept Programming!55 as a password?","passwordC-correct.png","passwordC-lower.png","passwordC-num.png"]
    ["Which line will store the first character?","firstChar-correct.png","firstChar-sub.png","firstChar-subnum.png"],
    ["Given the file dog_breeds.txt what is the correct way to open the file for reading?","fileReader-correct.png","fileReader-rb.png","fileReader-w.png"],
    ["Which code snippet will output the all items and a done?","while-correct.png","while-done.png","while-list.png"],
    ["Which of the following codes output 3 items?","threei-correct.png","threei-pull.png","threei-push.png"],
    ["Which of the following codes outpts 3foo3bar1foo1bar?","soutput-correct.png","soutput-pop.png","soutput-equal.png"]
    ];
    
    /*Stores the Java Questions*/
    var javaQuestions = [
    ["Which program does not output Hello World?","java/helloWorld-correct.png","java/helloWorld-println.png","java/helloWorld-format.png"],
    ["Which program outputs the 10th number in the fibonacci sequence","java/fibcalc-correct.png","java/fibcalc-nothing.png","java/fibocalc-loop.png"],
    ["Which program checks for a prime number correctly","java/primenumchecker-correct.png","java/primenumchecker-decrement.png","java/primenumchecker-i.png"],
    ["Which code will reverse the string?","java/reverseString-correct.png","java/reverseString-char.png","java/reverseString-incre.png"],
    ["Select the code that sorts the list using bubble sort correctly?","java/bubbleSort-correct.png","java/bubbleSort-ij.png","java/bubbleSort-temp.png"],
    ["Which code outputs [1,1,3,2]?","java/linkhash-correct.png","java/linkhash-3.png","java/linkhash-order.png"],
    ["Which code outputs A","java/charC-correct.png","java/charC-k.png","java/charC-str.png"],
    ["Which code will print abcabc?","java/stringadd-correct.png","java/stringadd-concat.png","java/stringadd-add.png"],
    ["Which code snippet returns false?","java/strequal-correct.png","java/strequal-3equal.png","java/strequal-isEqual.png"],
    ["Which code does not run?","java/x-correct.png","java/x-0.png","java/x-180.png"]
    ];
    
    /*List to store the randomly selected Python questions*/
    var randomPython = [];
    
    /*List to store the randomly selected Java questions*/
    var randomJava = [];
    
    /*
    Function to select the random questions
    Selects 10 random questions
    Takes 2 parameters:
    -The list of all questions
    -The list for the randomly selected questions
    */
    function randQ(f,c) {
        while(c.length < 10){
            var rand = f[Math.floor(Math.random() * f.length)];
            var ch = checkQ(c,rand);
            if(ch == false){
                c.push(rand);
    
            }
           
        }
    
    }
    
    /*
    Function to check if the randomly selected questionis already in the list or not
    Takes 2 parameters:
    -Current list of the randomly selected questions
    -The random question to be checked
    */
    function checkQ(arr,q){
        found = false;
        counter = 0;
        while(counter != arr.length){
            for (var i = 0; i <arr.length; i++) {
                if(arr[i].toString() == q.toString()){
                    console.log(q);
                    found = true;
                    return found;  
                }
    
                counter++;        
            }  
    
        }
    
        return found;
    
    }
    
    
    /*
    Builds the quiz, The game CodeTracer
    Takes one parameter:
    -A array, the randomly selected questions
    */
    function quiz(f){ 	
        var questionNumber=0;
        var questionBank= f;
        var stage="#game1";
        var stage2=new Object;
        var questionLock=false;
        var numberOfQuestions = f.length;
        var score=0;
        var counter=1;
    
        const Http = new XMLHttpRequest();
        const url='http://localhost:8080/Login';
        Http.open("GET", url);
        Http.send();
    
        Http.onreadystatechange = (e) => {
          loggedPlayerId = Http.responseText;
        }
    
        
    
    /*Calls the fucntion displayQuestion*/
        displayQuestion();
    
       
    /*Function used to disply the questions and options for the user to see and select*/
        function displayQuestion(){
            var rnd=Math.random()*3;
            rnd=Math.ceil(rnd);
            var q1;
            var q2;
            var q3;
            if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
            if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
            if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}
    
          
    
            $(stage).html('<div id="tracker">'+counter+'/'+numberOfQuestions+'</div>');
          
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
    /*
    Function used to change to the next question once a answer has been selected
    */
        function changeQuestion(){
            questionNumber++;
            counter++;
    
            if(stage=="#game1"){stage2="#game1";stage="#game2";}
            else{stage2="#game2";stage="#game1";}
            if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
            
            $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
            $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
        }//change question
    /*
    Function used to display the users score and paly again button
    Stores the user score here
    */
        function displayFinalSlide(){
            $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Score: '+score+'/'+numberOfQuestions+'</div>');
            $(stage).append('<div class=footer><div class="playbtn">PLAY AGAIN</div></div>');
            
            if(f == randomPython){
                const Http = new XMLHttpRequest();
                const url='http://localhost:8080/games/CodeTracer/Python?playerId='+(loggedPlayerId).toString()+'&gameName=CodeTracerPython&gameScore='+(score).toString();
                Http.open("GET", url);
                Http.send();
            }
            else{
                const Http = new XMLHttpRequest();
                const url='http://localhost:8080/games/CodeTracer/Java?playerId='+(loggedPlayerId).toString()+'&gameName=CodeTracerJava&gameScore='+(score).toString();
                Http.open("GET", url);
                Http.send(); 
            }
          
            $('.playbtn').click(function(){
                location.reload();
            })       
        }//display final slide
    }
    
    /*
    Function used to disply the menu of the game to the user
    */
    function menu(){
        document.getElementsByClassName("gameMenu");
        $('#pyBtn').click(function(){
            randQ(pythonQuestions,randomPython);
            quiz(randomPython);
            $(".gameMenu").remove();
    
        })
        $('#javaBtn').click(function(){
            randQ(javaQuestions,randomJava);
            quiz(randomJava);
            $(".gameMenu").remove();
    
        })
    }
    
    menu();
    