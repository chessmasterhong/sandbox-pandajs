/**
 * @fileOverview Game settings module for allowing the player to configure the
 *     settings for the game.
 */

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
