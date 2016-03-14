(function ()
 {
   angular
   .module ( 'ContactsApp' )
   .service ( 'Birds', Birds );

   Birds.$inject = [ '$http' ];

   function Birds ( $http )
   {
     // The constructor function for the service
    this.getBirds = getBirds;
    function getBirds()
    {
      return $http.get('/birds');
    }
   }
 }) ();
