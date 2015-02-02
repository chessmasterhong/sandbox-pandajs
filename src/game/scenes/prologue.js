/**
 * @fileOverview Game prologue module for displaying the introduction scenario
 *     of the game.
 */

game.module(
    'game.scenes.prologue'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Prologue', {
        init: function() {
            console.log('Prologue Scene');
        }
    });
});
