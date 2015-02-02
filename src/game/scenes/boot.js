game.module(
    'game.scenes.boot'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Boot', {
        init: function() {
            console.log('Boot Scene');

            // Add new asset to load queue
            game.addAsset('tileset/tmw_desert_spacing.png');
            game.addAsset('maps/desert.json');

            // Initialize new loader with callback function
            // Change game to 'Main' scene on load complete
            var loader = new game.Loader();
            loader.onComplete(this.loaded.bind(this));
            loader.start();
        },

        loaded: function() {
            game.system.setScene('Title');
        }
    });
});