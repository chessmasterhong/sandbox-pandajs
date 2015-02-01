game.module(
    'game.entities.testEntity'
)
.body(function() {
    'use strict';

    game.addAsset('panda2.png');

    game.createClass('testEntity', {
        init: function(x, y) {
            this.body = new game.Body();
            this.body.position.x = x;
            this.body.position.y = y;
            this.body.mass = 1;
            this.body.addShape(new game.Rectangle(70, 63));

            this.sprite = new game.Sprite('panda2.png');
            this.sprite.anchor.set(0.5, 0.5);
            this.sprite.position.set(x, y);

            game.scene.addObject(this);
            game.scene.stage.addChild(this.sprite);
            game.scene.world.addBody(this.body);
        },

        update: function() {
            this.sprite.position.x = this.body.position.x;
            this.sprite.position.y = this.body.position.y;
        }
    });
});
