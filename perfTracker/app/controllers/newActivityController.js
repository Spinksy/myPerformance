angular.module('myPerformance.controllers')
    .controller('newActivityController', newActivityController);

function newActivityController($modalInstance, $firebase, activityService, strategyService) {
    var vm = this;
    vm.newActivity = {};
    vm.labelStyles = { How: 'label label-default', What: 'label label-warning' };
    vm.strategyValues = strategyService.values;

    vm.submitActivity = function () {
                
        activityService.addActivity(vm.newActivity);
        clearActivityRecord();
        $modalInstance.close();
    }

    function clearActivityRecord(){
        vm.newActivity = {};
    }
};