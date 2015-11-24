/*
* TransformMatrixPlugin
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2013 nackpan
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
 
// namespace:
this.createjs = this.createjs||{};
 
(function() {
/**
 * TransformMatrixPlugin.js
 * You can transform the target by tweening its matrix. 
 * These transformation functions include skewing, rotation, and scaling.
 *
 *To use, install the plugin after TweenJS has loaded. 
 *
 * <h4>Example</h4>
 *
 *      createjs.Tween.get(target).to({x:100, y:40}).set({matEnabled:true}).to({mat:{skewX:20, rotation:20}).set({matEnabled:false}) ;
 *
 * You can transform the target's matrix by using the 'mat' property.
 * The 'mat' has properties: skewX, skewY, rotation, scallX and scallY; 
 * You must insert '.set({matEnabled:true})'  just before using 'mat' property.
 * And add '.set({matEnabled:false})' after using 'mat' property.
 * @class TransformMatrixPlugin
 * @constructor
 **/
var TransformMatrixPlugin = function() {
  throw("TransformMatrixPlugin cannot be instantiated.");
};
    
// static interface:
    /**
     * @property priority
     * @static
     **/
    TransformMatrixPlugin.priority = -10;
 
    /**
     * Installs this plugin for use with TweenJS, and registers for a list of properties that this plugin will operate
     * with. Call this once after TweenJS is loaded to enable this plugin.
     * @method install
     * @static
     **/
    TransformMatrixPlugin.install = function() {
        // this registers this plugin to work with the "test" property.
        createjs.Tween.installPlugin(TransformMatrixPlugin, ["matEnabled","mat"]);
    };
    
    /**
     * @method init
     * @static
     **/
    TransformMatrixPlugin.init = function(tween, prop, value) {
        if(!value){ 
            value = {rotation:0.0,scaleX:1.0, scaleY:1.0, skewX:0.0, skewY:0.0};
        }
        return value;
    };
    
    /**
     * @method init
     * @static
     **/
    TransformMatrixPlugin.step = function(tween, prop, startValue, endValue, injectProps) {
    };
    
    /**
     * @method tween
     * @static
     **/
    TransformMatrixPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
        if (wait) return value;
        if(tween._target.matEnabled === void 0) return value;
        if(!tween._target.matEnabled) return value;
        
        var tx = tween._target.x;
        var ty = tween._target.y;       
        
        var v0 = startValues.mat;
        var v1 = endValues.mat;
        var arr = ["rotation","scaleX","scaleY","skewX","skewY"];
        for(var i = 0; i < arr.length; i++){
            if(v0[arr[i]] === void 0){
                if(arr[i] == "rotation"){
                    v0[arr[i]] = 0;
                }else{
                    v0[arr[i]] = 1;
                }
            }
        }
        for(i = 0; i < arr.length; i++){
            if(v1[arr[i]] === void 0){
                v1[arr[i]] = v0[arr[i]];
            }
        }
        
        var skewX = (v1.skewX - v0.skewX) * ratio + v0.skewX ;
        var skewY = (v1.skewY - v0.skewY) * ratio + v0.skewY;
        var rot = (v1.rotation - v0.rotation) * ratio + v0.rotation;
        var scaleX = (v1.scaleX - v0.scaleX) * ratio + v0.scaleX ;
        var scaleY = (v1.scaleY - v0.scaleY) * ratio + v0.scaleY;
        var matrix = new createjs.Matrix2D(1,0,0,1,0,0);
        matrix.skew(skewX, skewY);
        matrix.rotate(rot * Math.PI/180);
        matrix.scale(scaleX, scaleY);
        matrix.translate(tx, ty);
        matrix.decompose(tween._target);
        
        return value;
    };
    
createjs.TransformMatrixPlugin = TransformMatrixPlugin;
}());