game.module(
    'game.scenes.battle'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Battle', {
        init: function() {
            console.log('Battle Scene');
        }
    });
});
