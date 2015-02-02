/**
 * @fileOverview Game epilogue module for displaying the ending scenario of the
 *     game.
 */

game.module(
    'game.scenes.epilogue'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Epilogue', {
        init: function() {
            console.log('Epilogue Scene');
        }
    });
});
