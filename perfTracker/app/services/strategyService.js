angular.module('myPerformance.services')
    .service("strategyService", strategyValueService);

function strategyValueService() {

    var vm = this;

    vm.values = [{ type: 'What', title: 'Productivity' }, { type: 'What', title: 'Risk' }, { type: 'What', title: 'Sustainable Growth' },
        { type: 'What', title: 'Customer Relationships' }, { type: 'What', title: 'People and Culture' },
        { type: 'How', title: 'Customer Focus' }, { type: 'How', title: 'Team and Culture' }, { type: 'How', title: 'Continuous Improvement' },
        { type: 'How', title: 'Effective Communication' }, { type: 'How', title: 'Judgement' }, { type: 'How', title: 'Drive for Results' }]
}
