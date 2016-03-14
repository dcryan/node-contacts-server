(function ()
 {
   angular
   .module ( 'ContactsApp' )
   .config ( homeConfig );

   homeConfig.$inject = [ '$stateProvider' ];

   function homeConfig ( $stateProvider )
   {
     $stateProvider
     .state ( 'home', {
       url   : '/home',
       templateUrl : 'app/js/home/home.html',
       controller  : 'HomeController as HomeControllerVm'
     } );
   }
 }) ();

