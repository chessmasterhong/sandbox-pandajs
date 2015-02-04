/**
 * @fileOverview Boot module for loading all essential assets required
 *     immediately in the game. Initializes and configures default game
 *     settings.
 */

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

            // ==========
            // Add new assets to load queue

            // ----- Fonts -----
            game.addAsset('interfaces/fonts/verdana_24.fnt');

            // ----- Images -----
            // Images/Screens
            game.addAsset('interfaces/backgrounds/sky.png', 'titleBackground');
            game.addAsset('interfaces/backgrounds/BackdropBlackLittleSparkTransparent.png', 'titleMidground');
            game.addAsset('interfaces/backgrounds/d20_by_olracadejup-d4ohdvm.png', 'titleForeground');

            // Tilesets
            game.addAsset('tileset/tmw_desert_spacing.png');

            // ----- Maps -----
            game.addAsset('maps/desert.json');
            // ==========

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
