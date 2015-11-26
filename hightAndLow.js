(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#003300",
	manifest: [
		{src:"images/trump52.png", id:"trump52"}
	]
};



// symbols:



(lib.trump52 = function() {
	this.initialize(img.trump52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.MC_start = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOwDVQgmgPgbgeQgcgegOgpQgOgqAAg1QAAgyAOgqQAOgpAcgeQA3g8BfAAQBeAAA4A8QA3A8AABnQAABqg3A8QgcAeglAPQgmAOgvAAQgwAAglgOgAO5hlQgZAjAABEQAACOBlgBQBkABAAiOQAAhEgZgjQgZgjgyAAQgzAAgZAjgAhnDaIAAmuQA8gIBAgBQBsABA6A5QAdAcAPAoQAOApAAA1QAAA3gOArQgPArgdAdQg6A7hsgBQhAAAg8gJgAgDiJIAAEZQAOAEASAAQAfAAAWgJQAWgJAPgSQAdgjAAhOQAAglgHgaQgIgbgOgQQgegig8AAQgSAAgOAEgAd7DeIAAhaIBoAAIAABagAYkDeIgulNIgBAAIgtFNIh3AAIhXm1IBnAAIAuFNIABAAIAplNIB8AAIApFNIABAAIAulNIBlAAIhXG1gAHkDeIAAm1IBpAAIAAFgIC5AAIAABVgAkkDeIiNkLIgBAAIAAELIhiAAIAAm1IBiAAICNELIABAAIAAkLIBiAAIAAG1gAq7DeIgYhgIiCAAIgXBgIhrAAICOm1IBtAAICOG1gArmAxIgtivIgBAAIgtCvIBbAAgA2hDeIAAhaIBoAAIAABagA6xDeIAAk3IBmAAIAAE3gA97DeIAAi9IiHAAIAAC9IhmAAIAAm1IBmAAIAACsICHAAIAAisIBmAAIAAG1gAeABSQAAgXAGgTQAHgUAOgQIAYgWIA0grIAQgSQAHgKAAgLQAAgohBAAQgfAAgiAGQgiAFglAMIAAhWQBJgSBOAAQAlAAAdAIQAcAHAVAPQAqAdAAAvQAAAXgGASQgGARgNAOIgWAWIg7ApQgLAJgKAQQgLARgBAUgA2cBSQAAgXAGgTQAHgUAOgQIAYgWIA0grIAQgSQAHgKAAgLQAAgohBAAQgfAAgiAGQgiAFglAMIAAhWQBJgSBOAAQAlAAAdAIQAcAHAVAPQAqAdAAAvQAAAXgGASQgGARgNAOIgWAWIg7ApQgLAJgKAQQgLARgBAUgA6xiVIAAhNIBmAAIAABNg");
	this.shape.setTransform(280.9,73.3);

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,69,69,0.8)").s().p("Egq9ALuIAA3bMBV6AAAIAAXbg");
	this.shape_1.setTransform(275,75,1,0.586);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,31.1,550,87.9);


(lib.containerVisuble = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();
	this.instance.setTransform(-227,-339);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227,-339,455,679);


(lib.containerHeddin = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();
	this.instance.setTransform(-227,-339);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227,-339,455,679);


(lib.container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.btn_02 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6666").s().p("AhcBpQgTgIgOgPQgOgOgGgWQgIgUAAgaQAAgZAIgUQAGgVAOgPQAcgeAvAAQAvAAAaAeQAcAeAAAzQAAA0gcAeQgOAPgQAIQgTAHgYAAQgYAAgSgHgAhYg0QgMASAAAiQAABGAyAAQAyAAAAhGQAAgigMgSQgNgRgZAAQgZAAgNARgADcBtIgXilIgBAAIgXClIg7AAIgrjZIAzAAIAXClIABAAIAUilIA+AAIAVClIAAAAIAXilIAzAAIgsDZgAlCBtIAAjZIA1AAIAACuIBcAAIAAArg");
	this.shape.setTransform(32.3,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.7,22.5);


(lib.btn_01 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6666").s().p("AASBpQgSgIgNgPQgOgOgGgWQgIgUAAgaQAAgZAIgUQAGgVAOgPQAageAwAAQAuAAAcAeQAcAeAAAzQAAA0gcAeQgOAPgSAIQgTAHgXAAQgYAAgTgHgAAWg0QgMASAAAiQAABGAzAAQAyAAAAhGQAAgigNgSQgMgRgZAAQgaAAgNARgAmyBrIAAjWQAegEAhAAQA2AAAdAdQAOANAHAVQAIAVAAAaQAAAagIAVQgHAWgOAPQgdAdg2AAQghAAgegFgAmBhGIAACNQAJABAJAAQAPAAALgEQALgFAIgJQAOgRAAgmQAAgTgEgNQgDgNgHgIQgPgRgeAAQgJAAgJABgAFMBtIgXilIgBAAIgWClIg8AAIgrjZIAzAAIAYClIAAAAIAVilIA+AAIAUClIAAAAIAYilIAyAAIgsDZgAhxBtIgUg7QgEgNgGgEQgHgFgMAAIgPAAIAABRIgyAAIAAjYQAhgEAnAAQAXAAAQAEQARAFALAIQAWARAAAfQAAAUgMARQgFAHgIAEQgIAGgJADIAAAAQAHAFAGAJQAHAJAFANIAXA+gAixhHIAAA/IARAAQAVABAKgKQAHgEACgGQADgGAAgIQAAgggpABQgLAAgIABg");
	this.shape.setTransform(43.6,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,22.5);


(lib.btn_00 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6666").s().p("AhPBpQgUgIgPgPQgPgOgIgWQgIgUAAgaQAAg0AegdQAPgPAVgIQAVgHAbAAQAfAAAaAHIAAAqIgagHQgNgCgMAAQgiABgRARQgRASAAAjQAAAkAQARQARASAeAAQAMAAAJgCIAAg2IgvAAIAAglIBdAAIAAB5QghANglAAQgaAAgUgHgAFaBtIAAiuIg6AAIAAgrICoAAIAAArIg6AAIAACugADHBtIAAheIhDAAIAABeIgzAAIAAjZIAzAAIAABWIBDAAIAAhWIAzAAIAADZgAjtBtIAAjZIA4AAIAADZgAlRBtIAAheIhDAAIAABeIgzAAIAAjZIAzAAIAABWIBDAAIAAhWIAzAAIAADZg");
	this.shape.setTransform(45.7,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.4,22.5);


// stage content:
(lib.hightAndLow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* ---------------------------
		トランプ配列
		
		#マークに関して
		0:スペード
		1:クラブ
		2:ハート
		3:ダイヤ
		
		#数値
		0~12:カードの番号
		
		------------------------------*/
		
		cardArrya = new Array(); // カードの配列 0,0 ~ 4,12 例）0,0だったらスペードのA
		trumpArrya = new Array(); // カードの並び順配列 0 ~ 41 
		
		markArrya = [0, 1, 2, 3]; //マークの配列
		numberArrya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //番号の配列
		
		//カード準備
		var i;
		var j;
		
		// １次元配列を作成する
		var array = new Array();
		
		//トランプカードを用意する
		for (i = 0; i < 4; i++) {
		
			// １次元配列の各番地に、配列をさらに作成。
			cardArrya[i] = new Array();
		
			for (j = 0; j < 13; j++) {
		
				// カードの要素をそれぞれ格納する
				cardArrya[i][j] = j;
				trumpArrya[i * 13 + j] = i * 13 + j;
			}
		}
		
		var k;
		var r;
		var t;
		
		//トランプカードをシャッフルする
		for (k = 0; k < 52; k++) {
			// 0~51の間でランダムな番地を取得
			var r = Math.floor(Math.random() * 52);
		
			// ランダムで出したtrumpArryaの番地をtに代入
			var t = trumpArrya[r];
		
			// ランダムで指定した番地のindex同士を入れ替える
			trumpArrya[r] = trumpArrya[k];
		
			// ランダムでだしたtrumpArryaの配列indexに格納されていた数値を入れる
			trumpArrya[k] = t;
		}
		
		
		console.log(trumpArrya);
		this.stop();
		
		var that = this;
		
		var images = [];
		var visibleImage;
		var hiddenImage;
		var index = 0;
		
		/*createjs.Tween.get(this.MC_start, {
			loop: false
		}).wait(1000)
			.to({
				scaleX:4,
				scaleY:4,
				alpha: 0,
				visible: false
			}, 1500, createjs.Ease.sineInOut);
			
		
		lib:TransformMatrixPlugin.js 
		createjs.Tween
			.get(this.MC_start, {loop: false})
			.wait(500).set({matEnabled:true})
		    .to({mat:{rotation:30.0,scaleX:1.0, scaleY:1.0, skewX:30.0, skewY:30.0}, x:160, y:280}, 2000, createjs.Ease.circlnOut);
		 */
		createjs.Tween
				.get(this.MC_start,{override:false})
				.to({alpha:0},0)
				.wait(4000)
				.to({alpha:1},3000, createjs.Ease.backOut)
				.to({alpha:0,scaleX:4,scaleY:4},1000, createjs.Ease.backOut);
		
		createjs.Tween
			.get(this.containerVisuble,{override:false})
			.to({rotation:3600,scaleX:0.35,scaleY:0.35,skewX:0,skewY:0, x:100, y:70}, 2000,createjs.Ease.quadOut)
			.to({x:80, y: 50},3000, createjs.Ease.backOut)
			.to({scaleX: 0.01},3000, createjs.Ease.backOut)
			.call(handleComplete)
			.to({scaleX: 0.35},1000, createjs.Ease.backOut);
		    function handleComplete() {
		        //Tween complete
				that.containerVisuble.addChild(visibleImage);
		    };
		
		createjs.Tween
			.get(this.containerHeddin,{override:false})
			.to({rotation:-3600,scaleX:0.35,scaleY:0.35,skewX:0,skewY:0, x:330, y:70}, 2000,createjs.Ease.quadOut)
			.to({x:300, y: 50},3000, createjs.Ease.backOut);
		
		
		//ライブラリからインスタンスの追加
		//var containerHeddin = new lib.containerHeddin();
		//this.addChild(containerHeddin);
		//変形等は
		//setTransform(x, y,伸縮x, 伸縮y, x軸回転, 傾斜x, 傾斜y, 移動x*-1(+だとマイナス方向へ移動), 移動y*-1(+だとマイナス方向へ移動))
		
		this.init = function () {
			//image = images[index];
			visibleImage = images[visibleCard];
			hiddenImage = images[hiddenCard];
		
			//該当するカードの画像を格納
			console.log("visibleCard--------->" + visibleCard);
			console.log("visibleImage--------->" + visibleImage);
			this.containerVisuble.addChild(images[53]);
			this.containerVisuble.setTransform(28, -50);
		
			//該当するカードの画像を格納
			console.log("hiddenCard--------->" + hiddenCard);
			console.log("hiddenImage--------->" + hiddenImage);
			this.containerHeddin.addChild(images[52]);
			this.containerHeddin.setTransform(300, -50);
		}
		
		//ステージの何処をクリックしてもカードが更新される
		/*stage.on("stagemousedown", function (e) {
			createjs.Tween.get(this.container, {
				override: true
			})
				.to({
					alpha: 0
				}, 400, createjs.Ease.circOut)
				.wait(200)
				.call(function () {
					this.container.removeChild(image);
					index++;
					if (index >= images.length) {
						index = 0;
					}
					image = images[index];
					this.container.addChild(image);
				}, null, this)
				.to({
					alpha: 1
				}, 600, createjs.Ease.circIn);
		}, this);*/
		
		var queue = new createjs.LoadQueue(true);　
		queue.on("fileload", fileLoadHandler, this);　
		queue.on("complete", completeHandler, this);　
		queue.loadManifest("manifest.json");
		
		function fileLoadHandler(event) {
			if (event.item.type === createjs.LoadQueue.IMAGE) {　
				images.push(new createjs.Bitmap(event.result));
			}　
		}
		function completeHandler(event) {
			this.init();
		};
		
		/* 表示するトランプの選出 */
		var l = 0;
		
		//表示するカード
		visibleCard = trumpArrya[l];
		//比較するカード
		hiddenCard = trumpArrya[l + 1];
		
		//カードの番号からのカードの要素の抽出
		//割った数のあまりがカードの番号
		//あまりが0の時はカード番号はK
		visibleCardMunber = (visibleCard + 1) % 13;
		if (visibleCardMunber == 0) {
			visibleCardMunber = 13;
		}
		
		hiddenCardMunber = (hiddenCard + 1) % 13;
		if (hiddenCardMunber == 0) {
			hiddenCardMunber = 13;
		}
		
		visibleCardMark = (visibleCard + 1 - visibleCardMunber) / 13;
		hiddenCardMark = (hiddenCard + 1 - hiddenCardMunber) / 13;
		
		//マークの特定
		//１つに出来ないか後で考える
		switch (visibleCardMark) {
			case 0:
				visibleCardMark = "スペード";
				break;
			case 1:
				visibleCardMark = "クラブ";
				break;
			case 2:
				visibleCardMark = "ハート";
				break;
			case 3:
				//52番目のカードはダイヤのK。4で割り切れる。
			default:
				visibleCardMark = "ダイヤ";
				break;
		}
		switch (hiddenCardMark) {
			case 0:
				hiddenCardMark = "スペード";
				break;
			case 1:
				hiddenCardMark = "クラブ";
				break;
			case 2:
				hiddenCardMark = "ハート";
				break;
			case 3:
				//52番目のカードはダイヤのK。4で割り切れる。
			default:
				hiddenCardMark = "ダイヤ";
				break;
		}
		
		this.visibleCard.text = trumpArrya[l] + "(" + visibleCardMunber + "," + visibleCardMark + ")";
		this.hiddenCard.text = trumpArrya[l + 1] + "(" + hiddenCardMunber + "," + hiddenCardMark + ")";
		
		l++;
		
		//ボタンイベント
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler() {
			this.containerHeddin.addChild(hiddenImage);
			console.log("hiddenCard--------->" + hiddenCard);
			console.log("hiddenImage--------->" + hiddenImage);
		}
		
		this.button_2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			this.containerHeddin.addChild(hiddenImage);
			console.log("hiddenCard--------->" + hiddenCard);
			console.log("hiddenImage--------->" + hiddenImage);
		}
		
		this.button_3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			this.containerHeddin.addChild(hiddenImage);
			console.log("hiddenCard--------->" + hiddenCard);
			console.log("hiddenImage--------->" + hiddenImage);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// anime
	this.MC_start = new lib.MC_start();
	this.MC_start.setTransform(315.4,192,1,0.933,0,0,0,315.4,75);

	this.timeline.addTween(cjs.Tween.get(this.MC_start).wait(1));

	// btn
	this.button_1 = new lib.btn_02();
	this.button_1.setTransform(460,368,1,1,0,0,0,66,20.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_3 = new lib.btn_01();
	this.button_3.setTransform(274.7,368,1,1,0,0,0,65.5,20);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.button_2 = new lib.btn_00();
	this.button_2.setTransform(89.5,368,1,1,0,0,0,65.5,20.5);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_2},{t:this.button_3},{t:this.button_1}]}).wait(1));

	// obj
	this.containerHeddin = new lib.containerHeddin();
	this.containerHeddin.setTransform(402.1,183,0.44,0.439);

	this.containerVisuble = new lib.containerVisuble();
	this.containerVisuble.setTransform(141,183.4,0.44,0.44,0,0,0,-0.1,0.9);

	this.hiddenCard = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#003303");
	this.hiddenCard.name = "hiddenCard";
	this.hiddenCard.lineHeight = 32;
	this.hiddenCard.lineWidth = 236;
	this.hiddenCard.setTransform(294,23.6);

	this.visibleCard = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#003303");
	this.visibleCard.name = "visibleCard";
	this.visibleCard.lineHeight = 32;
	this.visibleCard.lineWidth = 251;
	this.visibleCard.setTransform(25,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.visibleCard},{t:this.hiddenCard},{t:this.containerVisuble},{t:this.containerHeddin}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,223.2,550,347.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;