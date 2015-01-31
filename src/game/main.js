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

    game.createScene('Boot', {
        init: function() {
            console.log('Boot Scene');
        }
    });

    game.createScene('Title', {
        init: function() {
            console.log('Title Scene');
        }
    });

    game.createScene('Main', {
        init: function() {
            console.log('Hello World!');

            var tilemap = new game.TileMap('maps/desert.json');
            tilemap.addTo(this.stage);
        }
    });

    game.createScene('Battle', {
        init: function() {
            console.log('Battle Scene');
        }
    });

    game.createScene('World', {
        init: function() {
            console.log('World Scene');
        }
    });

    game.createScene('Prologue', {
        init: function() {
            console.log('Prologue Scene');
        }
    });

    game.createScene('Epilogue', {
        init: function() {
            console.log('Epilogue Scene');
        }
    });

    game.createScene('Game Over', {
        init: function() {
            console.log('Game Over Scene');
        }
    });

    game.createScene('Settings', {
        init: function() {
            console.log('Settings Scene');
        }
    });

    game.createScene('Credits', {
        init: function() {
            console.log('Credits Screen');
        }
    });
});
