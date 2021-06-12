var portfolioApp = angular.module('portfolioApp',[]);
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'Malarka',
    'when':'Mar 21, 2021',
    'thumbnailUrl':'painter.jpg'
    },
    { 'title':'Poranek',
    'when':'Mar 10, 2021',
    'thumbnailUrl':'morning.jpg'
    },
    { 'title':'OceanDream3',
    'when':'Feb 16, 2021',
    'thumbnailUrl':'oceandream3.jpg'
    },
    { 'title':'Salvation',
    'when':'Jan 20, 2021',
    'thumbnailUrl':'salvation.jpg'
    },
    { 'title':'OceanDream2',
    'when':'Feb 16, 2021',
    'thumbnailUrl':'oceandream2.jpg'
    },
    { 'title':'OceanDream1',
    'when':'Feb 16, 2021',
    'thumbnailUrl':'oceandream1.jpg'
    }
    ]
    $scope.orderProp = 'title';
    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
        {
        'label':'Chronologicznie',
        'value':'when'
        },
        {
            'label':'Antychronologicznie',
            'value':'when'
        }
        ];
    $scope.galleries.length;
    
    });