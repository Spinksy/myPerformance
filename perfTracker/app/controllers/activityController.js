angular.module('myPerformance.controllers')
    .controller('activityController', activityController);

function activityController($modal, activityService) {
    var vm = this;

    vm.activities = activityService.activityRecord;

    vm.deleteActivity = function (activity) {
        activityService.deleteActivity(activity);
    }

    vm.addActivity = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'newActivity.html',
            controller: 'newActivityController',
            controllerAs: 'vm',
            size: size,
            resolve: {
                strategyValues: function () { return vm.strategyValues; }
            }
        });
    }

}