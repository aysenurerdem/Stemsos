

describe('NavCtrl', function() {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('dashboardCtrl', {
                '$scope': scope
            });
        };

    }));

    it('should be dashboard when we call dashboard', function() {
        var controller = createController();
        $location.path('/dashboard');
        expect($location.path()).toBe('/dashboard');
    });
});