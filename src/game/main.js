game.module(
    'game.main'
)
.require(
    'plugins.tiled.tiled'
)
.body(function() {
    'use strict';

    game.addAsset('maps/desert.json');
    game.addAsset('tileset/tmw_desert_spacing.png');

    game.createScene('Main', {
        init: function() {
            console.log('Hello World!');

            var tilemap = new game.TileMap('maps/desert.json');
            tilemap.addTo(this.stage);
        }
    });
});
