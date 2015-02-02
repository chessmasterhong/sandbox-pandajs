game.module(
    'game.main'
)
.require(
    'game.scenes.boot',
    'game.scenes.title',
    'game.scenes.world',
    'game.entities.testEntity',
    'plugins.tiled.tiled'
)
.body(function() {});
