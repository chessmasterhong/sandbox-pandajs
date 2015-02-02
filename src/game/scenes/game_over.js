game.module(
    'game.scenes.game_over'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('GameOver', {
        init: function() {
            console.log('Game Over Scene');
        }
    });
});
