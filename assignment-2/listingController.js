angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = $scope.listings[0];

    $scope.addListing = function() {
    	var listing = {
    		"code": this.code,
    		"name": this.name,
    		"address": this.address,
    		"coordinates": {
    			"longitude": this.longitude,
    			"latitude": this.latitude
    		}
    	}
    	$scope.listings.push(listing);
    };
    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
    	$scope.detailedInfo = $scope.listings[index];
    };
  }
]);