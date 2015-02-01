game.module(
    'game.entities.testEntity'
)
.body(function() {
    'use strict';

    game.addAsset('logo.png');

    game.createClass('testEntity', {
        init: function() {
            var logo = new game.Sprite('logo.png');
            game.scene.stage.addChild(logo);
            logo.position.set(200, 200);

            game.scene.world = new game.World();
            var body = new game.Body();
            body.position.x = 200;
            body.position.y = 200;
            body.mass = 0;
            var shape = new game.Rectangle(100, 100);
            body.addShape(shape);
            game.scene.world.addBody(body);
        }
    });
});
