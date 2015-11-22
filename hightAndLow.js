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
		
		/* 表示するトランプの選出 */
		
		var l = 0;
		
		//表示するカード
		visibleCade = trumpArrya[l];
		//比較するカード
		hiddenCard = trumpArrya[l + 1];
		
		this.visibleCade.text = trumpArrya[l];
		this.hiddenCard.text = trumpArrya[l + 1];
		
		l++;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// obj
	this.hiddenCard = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#0066CC");
	this.hiddenCard.name = "hiddenCard";
	this.hiddenCard.lineHeight = 32;
	this.hiddenCard.lineWidth = 143;
	this.hiddenCard.setTransform(259.5,62.6);

	this.visibleCade = new cjs.Text("", "bold 30px 'M+ 1c heavy'", "#993366");
	this.visibleCade.name = "visibleCade";
	this.visibleCade.lineHeight = 32;
	this.visibleCade.lineWidth = 143;
	this.visibleCade.setTransform(65,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.visibleCade},{t:this.hiddenCard}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(340,262.6,341.5,94.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;