/* globals angular*/
'use strict';

angular.module('musicApp').controller('ArtistDetailsController', ['$http', '$scope', 'artistData', function($http, $scope, artistData){

  // artistData
  //   .getArtist(5)
  //   .then(function(data){
  //     $scope.artist = data;
  //   });

  var artist = {'name':'The Prodigy','image':'http://images.global.tilllate.com/images/articles/fckeditor/Image/the_prodigy_1(1).jpg','created':'04/02/1990','additionalInformation':{'location':'UK','albums':'6','singles':'13','bandMembers':['Liam Howlett','Keith Flint','Leo Crabtree']},'id':8,'albums':[{'image':'http://vinyleye.com.au/images/uploads/The-Prodigy-Music-For-The-Jil-440536.jpg','name':'Jilted Generation','year':'1994','songs':'12','price':'10','status':'1','id':1,'rating':0},{'image':'http://cdn3.pitchfork.com/news/48223/80bfba92.jpeg','name':'The Fat Of The Land','year':'1998','songs':'15','price':'15','status':'2','id':2,'rating':0},{'image':'http://m.mickjaggernauts.com/tumblr/012010/invaders.jpg','name':'Invaders Must Die','year':'2007','songs':'20','price':'10','status':'2','id':3,'rating':0},{'image':'http://2.bp.blogspot.com/--lh1RTUfPdk/URAC2_U3ZhI/AAAAAAAAAC4/BFDFhz_nV48/s1600/image_4fa2db211c7a3.jpg','name':'How To Steal','year':'2014','songs':'12','price':'20','status':'3','id':4,'rating':0}]};

  $scope.artist = artist;
  console.log(artist);
  $scope.hideBandMembers = true;
  $scope.showBandMembersText = 'Show';
  $scope.showBandMembers = showBandMembers;

  $scope.bandRecordsShowText = 'Show';
  $scope.bandRecordsShown = false;
  $scope.showAndHideRecords = showAndHideRecords;

  $scope.upVoteRating = upVoteRating;
  $scope.downVoteRating = downVoteRating;

  function showBandMembers() {
    if ($scope.hideBandMembers === true){
      $scope.hideBandMembers = false;
      $scope.showBandMembersText = 'Hide';
    } else {
      $scope.hideBandMembers = true;
      $scope.showBandMembersText = 'Show';
    }
  }

  function showAndHideRecords() {
    if ($scope.bandRecordsShown === false){
      $scope.bandRecordsShown = true;
      $scope.bandRecordsShowText = 'Hide';
    } else {
      $scope.bandRecordsShown = false;
      $scope.bandRecordsShowText = 'Show';
    }
  }

  function upVoteRating(album) {
    album.rating ++;
  }

  function downVoteRating(album) {
    if (album.rating > 0) {
    album.rating --;
    }
  }

}]);
