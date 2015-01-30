game.module(
    'game.main'
)
.body(function() {
    'use strict';

    game.createScene('Main', {
        init: function() {
            console.log('Hello World!');
        }
    });
});
