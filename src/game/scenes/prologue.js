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
