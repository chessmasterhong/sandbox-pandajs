game.module(
    'game.scenes.settings'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Settings', {
        init: function() {
            console.log('Settings Scene');
        }
    });
});
