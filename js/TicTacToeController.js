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
        self.currentXPosition; 
        self.moveXHere = moveXHere; 

        function moveXHere($index){
            console.log("clicked a box")
            self.counter++
            self.holes[$index].xIsHere = true;
            // var index = self.holes.indexOf(hole);
            // console.log(index)
            // self.holes[index].xIsHere = true;
            // self.currentMolePosition = index;
            // self.holes[index];


        }


        // //called using ng-click directive in the view
        // function whackMole($index){
        //     //only execute the following code if the hole
        //     //that was clicked has a mole in it
        //     if($index === self.currentMolePosition){

        //         //generate a random number to move the mole to a new hole
        //         var randomIndex = Math.floor(Math.random() * self.holes.length);
               
        //         // this while loop ensures that the next hole the mole 
        //         // moves to will not be the same as the current hole
        //         while(randomIndex === self.currentMolePosition){
        //             randomIndex = Math.floor(Math.random() * self.holes.length);
        //         }

        //         // self.holes[$index].xIsHere = false;
        //         self.holes[randomIndex].xIsHere = true;
        //         // self.currentMolePosition = randomIndex;
        //         self.counter++;
        //     }
        // }

        //this function is wrapped in an IIFE (immediately-invoked function expression)
        //it runs as soon as this file loads to initialize the game
        (function init(){
            self.currentXPosition = 0;
            // whackMole(0);
            self.counter = 0;
        })();

    }