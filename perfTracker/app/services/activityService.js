angular.module('myPerformance.services')
    .service('activityService', activityService);

function activityService($firebase, formatterService) {

    var vm = this;
    var ref = new Firebase("https://scorching-fire-1021.firebaseio.com/myPerformance");

    vm.activityRecord = $firebase(ref).$asArray();

    vm.addActivity = function (newActivity) {

        newActivity.date = formatterService.formatDate(new Date());
        //newActivity.tags = newActivity.tags != null ? newActivity.tags.replace(',', '').split(/[ ]+/) : null;

        var success = function (ref) {
            var id = ref.key();
            
            console.log(vm.activityRecord.$indexFor(id)); // returns location in the array
        }

        vm.activityRecord.$add(newActivity).then(success);
    }

    vm.deleteActivity = function (activity) {
        vm.activityRecord.$remove(activity)
            .then(function (ref) {
                alert(ref.key() = 'removed'); // true
            })
    }
};