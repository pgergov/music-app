/* globals angular*/
'use strict';

angular.module('musicApp').factory('artistData', function($http, $q){
  return {
    saveArtist: function(artist){
      var defer = $q.defer();

      $http({
            url: '/save-artist/',
            method: 'POST',
            data: artist,
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          })
        .success(function(data) {
          defer.resolve(data);
        })
        .error(function(data) {
          defer.reject(data);
        });

      return defer.promise;

    }, // TODO: make post request to the server
    getArtist: function(id) {
      var defer = $q.defer();

      $http({method: 'GET', url: 'data/artist/' + id + '.json'})
        .success(function(data){
          defer.resolve(data);
        })
        .error(function(data){
          defer.reject(data);
        });

      return defer.promise;
    }
  };
});