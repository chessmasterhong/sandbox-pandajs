/**
 * @fileOverview Title screen module for displaying the title screen when the
 *     game is loaded and ready to play.
 */

game.module(
    'game.scenes.title'
)
.require(
    'engine.core'
)
.body(function() {
    'use strict';

    game.createScene('Title', {
        riset: {
            state: 0,
            timer: 0
        },

        background: {
            sprite: null,
            r: 255,
            g: 255,
            b: 255
        },

        midground: {
            sprite: null
        },

        foreground: {
            sprite: null,
            r: 255,
            g: 255,
            b: 255
        },

        init: function() {
            console.log('Title Scene');

            this.background.sprite = new game.Sprite('titleBackground');
            this.background.sprite.scale.set(1.6, 1.6);
            game.scene.stage.addChild(this.background.sprite);

            this.midground.sprite = new game.Sprite('titleMidground');
            this.midground.sprite.scale.set(1.6, 1.6);
            this.midground.sprite.alpha = 0;
            game.scene.stage.addChild(this.midground.sprite);

            this.foreground.sprite = new game.Sprite('titleForeground');
            this.foreground.sprite.scale.set(1.6, 1.6);
            game.scene.stage.addChild(this.foreground.sprite);
        },

        update: function() {
            this.background.sprite.tint = '0x' + Math.floor(this.background.r).toString(16) + Math.floor(this.background.g).toString(16) + Math.floor(this.background.b).toString(16);
            this.foreground.sprite.tint = '0x' + Math.floor(this.foreground.r).toString(16) + Math.floor(this.foreground.g).toString(16) + Math.floor(this.foreground.b).toString(16);

            if(this.riset.state === 0) { // Day/Night
                this.riset.timer++;
                if(this.riset.timer > 2000) {
                    if(this.background.r > 128) {
                        this.riset.state = 1;
                    } else {
                        this.riset.state = 2;
                    }
                    this.riset.timer = 0;
                }
            } else if(this.riset.state === 1) { // Sunset
                if(this.background.g > 96) {
                    this.background.g = (this.background.g - 0.2) % 255;
                    this.background.b = (this.background.b - 0.2) % 255;
                } else if(this.background.r > 96) {
                    this.background.r = (this.background.r - 0.2) % 255;
                } else if(this.background.g > 64) {
                    this.background.r = (this.background.r - 0.1) % 255;
                    this.background.g = (this.background.g - 0.1) % 255;
                    this.background.b = (this.background.b - 0.1) % 255;
                } else {
                    this.riset.state = 0;
                }

                if(this.background.r < 128) {
                    this.midground.sprite.alpha = (64 / this.background.r - 0.5) * 2;
                }

                if(this.foreground.g > 176) {
                    this.foreground.g = (this.foreground.g - 0.1) % 255;
                    this.foreground.b = (this.foreground.b - 0.1) % 255;
                } else if(this.foreground.r > 176) {
                    this.foreground.r = (this.foreground.r - 0.1) % 255;
                } else if(this.foreground.g > 128) {
                    this.foreground.r = (this.foreground.r - 0.1) % 255;
                    this.foreground.g = (this.foreground.g - 0.1) % 255;
                    this.foreground.b = (this.foreground.b - 0.1) % 255;
                }
            } else if(this.riset.state === 2) { // Sunrise
                if(this.background.r < 96) {
                    this.background.r = (this.background.r + 0.1) % 255;
                    this.background.g = (this.background.g + 0.1) % 255;
                    this.background.b = (this.background.b + 0.1) % 255;
                } else if(this.background.r < 254) {
                    this.background.r = (this.background.r + 0.2) % 255;
                } else if(this.background.g < 254) {
                    this.background.g = (this.background.g + 0.2) % 255;
                    this.background.b = (this.background.b + 0.2) % 255;
                } else {
                    this.riset.state = 0;
                }

                if(this.background.r < 128) {
                    this.midground.sprite.alpha = (64 / this.background.r - 0.5) * 2;
                }

                if(this.foreground.r < 176) {
                    this.foreground.r = (this.foreground.r + 0.1) % 255;
                    this.foreground.g = (this.foreground.g + 0.1) % 255;
                    this.foreground.b = (this.foreground.b + 0.1) % 255;
                } else if(this.foreground.r < 254) {
                    this.foreground.r = (this.foreground.r + 0.1) % 255;
                } else if(this.foreground.g < 254) {
                    this.foreground.g = (this.foreground.g + 0.1) % 255;
                    this.foreground.b = (this.foreground.b + 0.1) % 255;
                }
            }
        },

        keydown: function() {
            game.system.setScene('World');
        },

        click: function() {
            game.system.setScene('World');
        }
    });
});
