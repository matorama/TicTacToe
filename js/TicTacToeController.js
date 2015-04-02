angular
    .module('TicTacToeApp')
    .controller('TicTacToeController', TicTacToeController);

    TicTacToeController.$inject = ['$firebaseArray'];

    function TicTacToeController($firebaseArray){
        var self = this;

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
            if (self.counter % 2 === 0 && ){
                moveXHere($index);
            }
            else {
                moveOHere($index);
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


 

        (function init(){
            self.counter = 0;
        })();

    }