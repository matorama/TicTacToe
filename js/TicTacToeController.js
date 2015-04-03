angular
    .module('TicTacToeApp')
    .controller('TicTacToeController', TicTacToeController);

    TicTacToeController.$inject = ['$firebaseArray'];

    function TicTacToeController($firebaseArray){
        var self = this;

        var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        var OMoves = [];
        var XMoves = [];

        self.holes = [
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
      

        self.counter; //keeps count of the successful clicks
        self.moveXHere = moveXHere; 
        self.moveOHere = moveOHere;
        self.playerTurn = playerTurn;


        function playerTurn($index){
            self.counter++;
            if (self.counter % 2 === 0){
                moveXHere($index);
                OMoves.push($index)
                checkForXWin()
            }else {
                moveOHere($index);
                checkForOWin()
            }
        }

        function moveXHere($index){
            console.log("clicked a box");
            self.holes[$index].xIsHere = true;
        }

        function moveOHere($index){
            console.log("clicked a box");
            self.holes[$index].oIsHere = true;
        }


        function checkForXWin (){
            if ((self.holes[0].xIsHere === true) && (self.holes[1].xIsHere === true) && (self.holes[2].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[3].xIsHere === true) && (self.holes[4].xIsHere === true) && (self.holes[5].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[6].xIsHere === true) && (self.holes[7].xIsHere === true) && (self.holes[8].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[0].xIsHere === true) && (self.holes[3].xIsHere === true) && (self.holes[6].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[1].xIsHere === true) && (self.holes[4].xIsHere === true) && (self.holes[7].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[2].xIsHere === true) && (self.holes[5].xIsHere === true) && (self.holes[8].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[0].xIsHere === true) && (self.holes[4].xIsHere === true) && (self.holes[8].xIsHere === true)){
                console.log("X won!");
            } else if
                ((self.holes[2].xIsHere === true) && (self.holes[4].xIsHere === true) && (self.holes[6].xIsHere === true)){
                console.log("X won!");
            }
        }

        function checkForOWin (){
            if ((self.holes[0].oIsHere === true) && (self.holes[1].oIsHere === true) && (self.holes[2].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[3].oIsHere === true) && (self.holes[4].oIsHere === true) && (self.holes[5].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[6].oIsHere === true) && (self.holes[7].oIsHere === true) && (self.holes[8].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[0].oIsHere === true) && (self.holes[3].oIsHere === true) && (self.holes[6].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[1].oIsHere === true) && (self.holes[4].oIsHere === true) && (self.holes[7].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[2].oIsHere === true) && (self.holes[5].oIsHere === true) && (self.holes[8].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[0].oIsHere === true) && (self.holes[4].oIsHere === true) && (self.holes[8].oIsHere === true)){
                console.log("O won!");
            } else if
                ((self.holes[2].oIsHere === true) && (self.holes[4].oIsHere === true) && (self.holes[6].oIsHere === true)){
                console.log("O won!");
            }
        }


 

        (function init(){
            self.counter = 0;
        })();

    }