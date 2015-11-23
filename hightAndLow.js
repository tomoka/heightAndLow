(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFCC",
	manifest: []
};



// symbols:



(lib.containerVisuble = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.containerHeddin = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.container = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


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
		
		//ライブラリからインスタンスの追加
		//var containerHeddin = new lib.containerHeddin();
		//this.addChild(containerHeddin);
		//変形等は
		//setTransform(伸縮x, 傾斜y, 傾斜x, 伸縮y, 移動x, 移動y)
		
		this.init = function () {
			//image = images[index];
			visibleImage = images[visibleCard];
			hiddenImage = images[hiddenCard];
		
			//該当するカードの画像を格納
			console.log("visibleCard--------->" + visibleCard);
			console.log("visibleImage--------->" + visibleImage);
			this.containerVisuble.addChild(visibleImage);
			this.containerVisuble.setTransform(28,80,1,1,0,0,0,0,1);
		
			//該当するカードの画像を格納
			console.log("hiddenCard--------->" + hiddenCard);
			console.log("hiddenImage--------->" + hiddenImage);
			this.containerHeddin.addChild(hiddenImage);
			this.containerHeddin.setTransform(300,80,1,1,0,0,0,0,1);
		}
		
		//ステージの何処をクリックしてもカードが更新される
		stage.on("stagemousedown", function (e) {
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
		}, this);
		
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// obj
	this.containerHeddin = new lib.containerHeddin();
	this.containerHeddin.setTransform(298.1,79.1);

	this.containerVisuble = new lib.containerVisuble();
	this.containerVisuble.setTransform(27,80.1,1,1,0,0,0,-0.1,1);

	this.hiddenCard = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#0066CC");
	this.hiddenCard.name = "hiddenCard";
	this.hiddenCard.lineHeight = 32;
	this.hiddenCard.lineWidth = 236;
	this.hiddenCard.setTransform(294,23.6);

	this.visibleCard = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#993366");
	this.visibleCard.name = "visibleCard";
	this.visibleCard.lineHeight = 32;
	this.visibleCard.lineWidth = 251;
	this.visibleCard.setTransform(25,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.visibleCard},{t:this.hiddenCard},{t:this.containerVisuble},{t:this.containerHeddin}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,223.2,509,46.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;