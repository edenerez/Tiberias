﻿jTextMinerApp.directive('actionMode', function () {
    return {
        restrict: 'AE',
        templateUrl: 'partials/templates/ActionModeTemplate.html',
        controller: ['$scope', 'ClassService', function ($scope, ClassService) {
            $scope.ExperimentActionMode = ClassService.ExperimentActionMode;
            $scope.$watch('ExperimentActionMode', function () {
                ClassService.updateExperimentActionMode($scope.ExperimentActionMode);
            });
        }]
    };
});