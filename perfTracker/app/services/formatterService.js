angular.module('myPerformance.services')
    .service('formatterService', formatterService);

function formatterService() {

    var formatter = this;

    formatter.formatDate = function (date) {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    };

};