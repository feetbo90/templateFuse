const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'product-component',
                'title': 'Product',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/product'
            },
        ]
    }
];

export default navigationConfig;
