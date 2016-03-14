(function ()
 {
   angular
   .module ( 'ContactsApp' )
   .controller ( 'HomeController', HomeController );

   HomeController.$inject = [ '$scope', 'Birds' ];

   function HomeController ( $scope, Birds )
   {
     Birds.getBirds()
     .success ( function( birds )
           {
             $scope.birds = birds;
           } );
   }
 }) ();
