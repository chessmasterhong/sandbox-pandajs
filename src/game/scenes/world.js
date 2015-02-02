/**
 * @fileOverview World module for handling all world interactions for the
 *     player, non-player characters, and environment. Main module for
 *     connecting all other game logic together.
 */

game.module(
    'game.scenes.world'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('World', {
        init: function() {
            console.log('World Scene');

            var tilemap = new game.TileMap('maps/desert.json');
            tilemap.addTo(this.stage);

            this.world = new game.World();
            var testEntity = new game.testEntity(200, 200);
        }
    });
});
