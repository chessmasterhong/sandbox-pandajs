/**
 * @fileOverview Main module to require all other modules necessary for loading
 *     the game. Entry point for the game.
 */

game.module(
    'game.main'
)
.require(
    // Scenes (Game states)
    'game.scenes.boot',
    'game.scenes.credits',
    'game.scenes.title',
    'game.scenes.world',

    // Entities (Game objects)
    'game.entities.characters.pc.testEntity',

    // Plugins
    'plugins.fader.fader',
    'plugins.tiled.tiled'
)
.body(function() {});
