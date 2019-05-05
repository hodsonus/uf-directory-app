angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /*
    Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	  */

      // $scope.listings.push($scope.newListing);

      Listings.create($scope.newListing);
      $scope.newListing = {};
      location.reload();
    };

    $scope.deleteListing = function(index) {
	   /*
     Delete the article using the Listings factory. If the removal is successful, 
	   navigate back to 'listing.list'. Otherwise, display the error. 
     */

     // $log.log('\n\nThe _id of the object we are trying to delete:\n');
     //  $log.log($scope.listings[index]._id + "\n\n\n");
     var listing = $scope.listings[index];
      Listings.delete(listing._id);
            // $scope.listings.splice(index,1);
      location.reload();
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);