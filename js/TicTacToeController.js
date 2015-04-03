angular
    .module('TicTacToeApp')
    .controller('TicTacToeController', TicTacToeController);

    TicTacToeController.$inject = ['$firebaseObject'];

    function TicTacToeController($firebaseObject){
        var self = this;
        self.game = syncGameWithFirebase();
        self.playerTurn = playerTurn;
      

       
        self.moveXHere = moveXHere; 
        self.moveOHere = moveOHere;
       
        
        self.reset = reset;


         function syncGameWithFirebase(){
            var ref = new Firebase('https://tictactoeang.firebaseio.com/');
            var gameObject = $firebaseObject(ref);

            //initialize values in the gameObject once it's loaded
            gameObject.$loaded(function(){
                gameObject.counter = 0; //keeps count of the successful clicks
                gameObject.holes = [];
                gameObject.message ="";

                for(var i = 0; i < 9; i++){
                    gameObject.holes.push({xIsHere: false, oIsHere:false});
                }

                gameObject.$save();
              
            });

            return gameObject;
        }

        function playerTurn($index){
            if ((self.game.holes[$index].xIsHere == false) && (self.game.holes[$index].oIsHere == false)){
                self.game.counter++;
                console.log(self.game.counter)
                checkForTie();
                if (self.game.counter % 2 === 0){
                    moveOHere($index);
                    checkForOWin();
                    // self.game.$save();
             
                }else {
                   
                    moveXHere($index);
                    checkForXWin();
                    // self.game.$save();
                };
                self.game.$save();

                
            }
        }

        function moveXHere($index){
            console.log("clicked a box");
            self.game.holes[$index].xIsHere = true;
            self.game.$save();
        }

        function moveOHere($index){
            console.log("clicked a box");
            self.game.holes[$index].oIsHere = true;
             self.game.$save();
        }


        function checkForXWin (){
            if ((self.game.holes[0].xIsHere === true) && (self.game.holes[1].xIsHere === true) && (self.game.holes[2].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[3].xIsHere === true) && (self.game.holes[4].xIsHere === true) && (self.game.holes[5].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[6].xIsHere === true) && (self.game.holes[7].xIsHere === true) && (self.game.holes[8].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[0].xIsHere === true) && (self.game.holes[3].xIsHere === true) && (self.game.holes[6].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[1].xIsHere === true) && (self.game.holes[4].xIsHere === true) && (self.game.holes[7].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[2].xIsHere === true) && (self.game.holes[5].xIsHere === true) && (self.game.holes[8].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[0].xIsHere === true) && (self.game.holes[4].xIsHere === true) && (self.game.holes[8].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            } else if
                ((self.game.holes[2].xIsHere === true) && (self.game.holes[4].xIsHere === true) && (self.game.holes[6].xIsHere === true)){
                console.log("X won!");
                self.game.message = "Congratulations! Player X Won!"
            }
        }

        function checkForOWin (){
            if ((self.game.holes[0].oIsHere === true) && (self.game.holes[1].oIsHere === true) && (self.game.holes[2].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[3].oIsHere === true) && (self.game.holes[4].oIsHere === true) && (self.game.holes[5].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[6].oIsHere === true) && (self.game.holes[7].oIsHere === true) && (self.game.holes[8].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[0].oIsHere === true) && (self.game.holes[3].oIsHere === true) && (self.game.holes[6].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[1].oIsHere === true) && (self.game.holes[4].oIsHere === true) && (self.game.holes[7].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[2].oIsHere === true) && (self.game.holes[5].oIsHere === true) && (self.game.holes[8].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[0].oIsHere === true) && (self.game.holes[4].oIsHere === true) && (self.game.holes[8].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            } else if
                ((self.game.holes[2].oIsHere === true) && (self.game.holes[4].oIsHere === true) && (self.game.holes[6].oIsHere === true)){
                console.log("O won!");
                self.game.message = "Congratulations! Player O Won!"
            }
        }

        function checkForTie(){
            if (self.game.counter >= 9){
                console.log("It's a tie")
                self.game.message = "It's a tie!"
            }
        }

        function reset(){
            console.log("Reset the board")
            self.game.counter = 0;
            self.game.message = ""
             self.game.holes = [
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false},
            {xIsHere: false, oIsHere:false}
        ];
            self.game.$save();
        }
 

        (function init(){
            // self.game.counter = 0;
        })();

    }