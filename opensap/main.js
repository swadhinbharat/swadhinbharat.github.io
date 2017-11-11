angular.module("myapp", []).controller('NorthwindController', ['$scope', '$http',
    function($scope, $http) {
        // var northwindURL='/destinations/northwind/V4/Northwind/Northwind.svc/Invoices?$top=15';  
        var northwindURL = 'https://open.sap.com/api/v2/courses?include=channel%2Cuser_enrollment';
        $http({
            method: 'GET',
            url: northwindURL
        }).then(function successCallback(response) {
            var results = response.data.data;
            var courses = [];

            _.each(results, function(result) {
                var course = {};
                course.title = result.attributes.title;
                course.status = result.attributes.status;
                course.accessible = result.attributes.accessible;
                course.startdate = moment(new Date(result.attributes.start_at), "YYYYMMDD").fromNow();
                course.category = result.attributes.classifiers.category ? result.attributes.classifiers.category.join() : '';
                course.topic = result.attributes.classifiers.topic ? result.attributes.classifiers.topic.join() : '';
                course.url = 'https://open.sap.com/courses/' + result.attributes.slug + '/progress';
                course.teachers = result.attributes.teachers;
                // console.log(result.attributes.teachers);


                // console.log(new Date(result.attributes.start_at));
                // if (new Date(result.attributes.start_at) > new Date() ) {
                //     course.class = 'table-active'; 
                // }
                // if (new Date(result.attributes.end_at) > new Date() ) {
                //     course.class = 'table-info'; 
                // }


                // courses.push(course);
                courses.push(result);
            });
            $scope.courses = courses;
        }, function errorCallback(response) {
            alert("Error while fetching courses" + response);
        });
    }
]).filter('dateFormatter', function() { 
    return function(myDate) {
        return moment(new Date(myDate), 'YYYYMMDD').fromNow();
    };
}).filter('statusFormatter', function() {
    return function(status) {
        switch (status) {
            case 'announced':
                return 'table-active';
            case 'active':
                return 'table-success';
            case 'self-paced':
                return 'table-warning';
            default:
        }
        x
    };
});