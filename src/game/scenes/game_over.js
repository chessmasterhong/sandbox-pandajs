/**
 * @fileOverview Game over screen module for displaying the game over screen
 *     when the player meets a fail game condition or objective.
 */

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
