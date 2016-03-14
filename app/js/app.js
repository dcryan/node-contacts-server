(function ()
 {
   angular
   .module ( 'ContactsApp', [
     'ui.router'
   ] )
   .config ( appConfig )

   appConfig.$inject = [ '$urlRouterProvider' ];

   function appConfig ( $urlRouterProvider )
   {
     $urlRouterProvider.otherwise('/home');
   }
 }) ();
