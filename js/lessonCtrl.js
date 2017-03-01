angular.module('directivePractice').controller('lessonCtrl', function($scope){

        $scope.lessons = [
            'Services',
            'Routing',
            'Directives',
            'Review',
            'Firebase',
            'No server project',
            'Node',
            'Express',
            'Mongo'
        ];

        $scope.test = 'Two-way data bindings!';

        function announceDay(lesson, day){
            var dayAlert = lesson + ' is active on ' + day + '.';
        }

});