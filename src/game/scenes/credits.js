/**
 * @fileOverview Credits screen module for displaying the contributors of the
 *     game and any additional acknowledgments.
 */

game.module(
    'game.scenes.credits'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Credits', {
        init: function() {
            console.log('Credits Screen');
        }
    });
});
