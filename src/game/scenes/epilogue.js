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
