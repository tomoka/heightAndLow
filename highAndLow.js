(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#003300",
	manifest: []
};



// symbols:



(lib.chip = function() {
	this.spriteSheet = ss["highAndLow_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.trump52 = function() {
	this.spriteSheet = ss["highAndLow_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.win = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-26.5,0,26.6,0).s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape.setTransform(135.8,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-10,0,10.1,0).s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_1.setTransform(95.4,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#94790B","#FFE600","#FFFFFF","#FFD500","#FFFFFF","#FFE900","#938705"],[0,0.176,0.345,0.62,0.706,0.788,1],-39.3,0,39.4,0).s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_2.setTransform(43,36.4);

	// レイヤー 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABOFiIiUkxIAAExIjWAAIAArDIDOAAICVExIAAkxIDWAAIAALDgAhMgyIC0FrICNAAIAApxIiGAAIAAFrIgiAAIizlrIiOAAIAAJxICGAAIAAlrg");
	this.shape_3.setTransform(135.8,36.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape_4.setTransform(135.8,36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah3FiIAArDIDvAAIAALDgAhPE5ICfAAIAApxIifAAg");
	this.shape_5.setTransform(95.4,36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_6.setTransform(95.4,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlFiIgllNIgkFNIj1AAIiHrDIDjAAIAjE9IAdk9ID+AAIAeE9IAjk9IDfAAIiHLDgAASiqIA2HjICxAAIB4pxIiLAAIg2HiIgmAAIgtniIi1AAIgtHiIgmAAIg2niIiPAAIB4JxICxAAIA2njg");
	this.shape_7.setTransform(43,36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_8.setTransform(43,36.4);

	// レイヤー 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#766900").s().p("ABIFsIiEkQIAAEQIjqAAIAArXIDeAAICFEQIAAkQIDqAAIAALXgAhGg8IC0FrIB9AAIAApdIhyAAIAAFrIgzAAIizlrIh9AAIAAJdIByAAIAAlrg");
	this.shape_9.setTransform(135.8,36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#766900").s().p("ABbFOIi0lsIgBAAIAAFsIiuAAIAAqbICuAAICzFsIACAAIAAlsICuAAIAAKbg");
	this.shape_10.setTransform(135.8,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#766900").s().p("AiBFsIAArXIEDAAIAALXgAhFEvICLAAIAApdIiLAAg");
	this.shape_11.setTransform(95.4,36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#766900").s().p("AhjFOIAAqbIDHAAIAAKbg");
	this.shape_12.setTransform(95.4,36.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#766900").s().p("AAcFsIgcj9IgbD9IkGAAIiMrXID5AAIAZDlIAVjlIERAAIAVDlIAZjlID1AAIiMLXgAAbi0IA2HjICfAAIB1pdIh2AAIg2HjIg4AAIgtnjIijAAIgtHjIg4AAIg2njIh6AAIB1JdICfAAIA2njg");
	this.shape_13.setTransform(43,36.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#766900").s().p("AA2FOIg2njIAAAAIg1HjIjTAAIiAqbIC5AAIA2HjIACAAIAsnjIDaAAIAtHjIACAAIA2njIC1AAIiAKbg");
	this.shape_14.setTransform(43,36.4);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.3,72.8);


(lib.start = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARNCpQg+g/AAhqQAAhpA+g/QA/g8BpgBQBrABA9A8QA/BAAABoQAABpg/BAQg9A8hrABQhpgBg/g8gASNAAQAACBBogBQBpABAAiBQAAiAhpABQhogBAACAgAktCpQg/g/AAhqQAAhpA/g/QA/g8BogBQBrABA8A8QA+BAAABoQAABpg+BAQg8A8hrABQhogBg/g8gAjtAAQAACBBngBQBpABAAiBQAAiAhpABQhngBAACAgA7KCoQhDg/AAhpQAAhpBBg/QBCg8BzgBQBbABA/AqIgiBYQg2gig1AAQg/AAgkAjQgjAiAAA/QAAA+AkAkQAlAjA9AAQAYAAASgHIAAhXIhcAAIAAhaIDRAAIAAD6QhRAfhbAAQhygBhBg9gEAh6ADgIAAhjIB6AAIAABjgAclDgIgtlDIgBAAIguFDIiNAAIhfm/IB8AAIAuFDIABAAIAolDICTAAIAnFDIABAAIAtlDIB6AAIhfG/gALTDgIAAm/IB9AAIAAFaIC2AAIAABlgAFuDgIgmh1QgHgXgKgHQgKgJgRAAIgcAAIAACcIh4AAIAAm/ICUAAQBnAAAuAhQAvAhAABDQAAAmgZAhQgXAggmAOIAAABQARAKAOAQQALAPAMAfIAtB8gAEAgUIAhAAQAfAAATgPQASgPAAgcQAAgegQgKQgPgMglAAIghAAgAtEDgIAAhjIB7AAIAABjgAwzDgIAAi5IiBAAIAAC5Ih7AAIAAm/IB7AAIAACsICBAAIAAisIB7AAIAAG/gA/ADgIAAm/ICHAAIAAG/gEgh/ADgIAAi5IiBAAIAAC5Ih7AAIAAm/IB7AAIAACsICBAAIAAisIB7AAIAAG/gEAh/ABNQAAgWAIgVQAIgUANgOIAYgZIAygpIAOgQQAHgJAAgIQAAgjg4AAQg5AAhLAZIgVhgQBPgYBdAAQBOAAAsAfQAsAfAAAxQAAAZgHAQQgFAUgOAOQgKALgNAMIg8ApQgJAJgLAOQgLARgBAQgAs+BNQAAgWAHgVQAGgRAPgRQASgUAHgFIAygpIAOgQQAGgLAAgGQAAgjg3AAQg6AAhKAZIgWhgQBPgYBdAAQBPAAArAfQAsAfAAAxQAAAZgGAQQgGAUgOAOIgXAXIg7ApQgKAJgLAOQgKAOgDATg");
	this.shape.setTransform(275,45);

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,69,69,0.8)").s().p("Egq9AHCIAAuDMBV6AAAIAAODg");
	this.shape_1.setTransform(273,47.1,1,1,0,0,0,-2,2.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,90);


(lib.MC_low = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D9BDD").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClUIBfAAIAcD2IAAAAIAYj2IBuAAIAXD2IABAAIAcj2IBcAAIhBFUg");
	this.shape.setTransform(83.9,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D9BDD").s().p("Ah2CAQgsguAAhSQAAhQAsgwQAsguBKgBQBLABAsAuQAsAwAABQQAABSgsAuQgsAwhLgBQhKABgsgwgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_1.setTransform(47,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D9BDD").s().p("Ah0CrIAAlUIBhAAIAAEGICIAAIAABOg");
	this.shape_2.setTransform(18,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcDKQgUAAgIgRQgHARgUAAIhsAAQgLAAgJgHQgIgIgDgLIhBlUQgDgOAJgMQAKgLAPAAIBfAAQAQAAAJANQAKgNAQAAIBvAAQAQAAAJANQAKgNAQAAIBdAAQAPAAAJALQAKALgDAPIhCFUQgCALgIAIQgJAHgMAAgAA4CLIA1AAIA2kVIgbAAIgYDbQgBALgJAIQgJAJgMAAQgKgBgJgFQgIgGgEgIgAhsCLIA1AAIAFguQgKAPgRABQgMAAgJgJQgKgIgBgLIgZjbIgcAAgAAqATIgOidIg1AAIgGA8IABgBQABgNAJgHQAJgIALAAQALAAAKAIQAJAHABANIALBig");
	this.shape_3.setTransform(83.9,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClUIBfAAIAcD2IAAAAIAYj2IBuAAIAXD2IABAAIAcj2IBcAAIhBFUg");
	this.shape_4.setTransform(83.9,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNCWQg1g3AAhfQAAhdA1g4QA1g5BYAAQBZAAA1A5QA1A4AABdQAABfg1A3Qg1A5hZAAQhYAAg1g5gAhfhqQgkAmAABEQAABFAkAmQAjAlA8AAQA9AAAjglQAkgmAAhFQAAhEgkgmQgjgkg9AAQg8AAgjAkgAg+BrQgkghAAhKQAAhJAkghQAZgWAlgBQAmABAZAWQAkAhAABJQAABKgkAhQgZAXgmgBQglABgZgXgAgVg5QgOAPAAAqQAAArAOAPQAHAIAOAAQAOAAAIgIQAOgPAAgrQAAgqgOgPQgIgJgOAAQgOAAgHAJg");
	this.shape_5.setTransform(47,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah2CAQgsguAAhSQAAhQAsgwQAsguBKgBQBLABAsAuQAsAwAABQQAABSgsAuQgsAwhLgBQhKABgsgwgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_6.setTransform(47,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0DKQgNAAgJgJQgJgJAAgNIAAlUQAAgOAJgJQAJgJANAAIBhAAQANAAAHAJQAJAJAAAOIAADnIBrAAQANAAAJAJQAJAJAAANIAABOQAAANgJAJQgJAJgNAAgAhUCLICpAAIAAgOIhoAAQgNAAgKgJQgJgKAAgNIAAjnIghAAg");
	this.shape_7.setTransform(18,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CrIAAlUIBhAAIAAEGICIAAIAABOg");
	this.shape_8.setTransform(18,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#413732").s().p("AAcDqQgQAAgMgHQgLAHgQAAIhsAAQgWAAgSgPQgRgOgFgWIhBlVQgGgdATgXQATgXAeAAIBfAAQANAAAMAGQANgGANAAIBvAAQANAAAMAGQANgGANAAIBdAAQAeAAATAXQATAXgGAdIhCFVQgEAWgRAOQgSAPgXAAg");
	this.shape_9.setTransform(83.9,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#413732").s().p("AAcCrIgcj3IAAAAIgaD3IhsAAIhClVIBfAAIAcD3IAAAAIAYj3IBuAAIAXD3IABAAIAcj3IBcAAIhBFVg");
	this.shape_10.setTransform(83.9,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#413732").s().p("AikCsQg+hCAAhqQAAhpA+hCQA+hDBmAAQBnAAA+BDQA+BCAABpQAABqg+BCQg+BDhngBQhmABg+hDgAgDAAQAAAYADAKIAAAAQAEgNAAgVQAAgVgEgNIAAAAQgDAKAAAYg");
	this.shape_11.setTransform(47,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("Ah2CAQgsguAAhSQAAhRAsguQAsgvBKAAQBLAAAsAvQAsAuAABRQAABSgsAuQgsAvhLAAQhKAAgsgvgAhCAAQAABiBCAAQBDAAAAhiQAAhhhDAAQhCAAAABhg");
	this.shape_12.setTransform(47,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("Ah0DqQgaAAgSgTQgTgSAAgaIAAlVQAAgaATgSQASgTAaAAIBgAAQAYAAATATQASASAAAaIAADIIBMAAQAaAAATATQASASAAAaIAABOQAAAagSASQgTATgaAAg");
	this.shape_13.setTransform(18.1,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#413732").s().p("Ah0CrIAAlVIBhAAIAAEHICIAAIAABOg");
	this.shape_14.setTransform(18,23.9);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.4,47.8);


(lib.lost = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-23.8,0,23.8,0).s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape.setTransform(136.8,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-22.9,0,22.9,0).s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_1.setTransform(25.9,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-32,0,32.1,0).s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_2.setTransform(79.2,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#153E9C","#00B8FF","#1C3CA0","#00ECFF","#FFFFFF","#00F9FF","#1C48AB"],[0.024,0.192,0.282,0.62,0.702,0.773,0.953],-26.5,0,26.6,0).s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_3.setTransform(188.1,37.3);

	// レイヤー 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwFiIAAoEIisAAIAAi/II5AAIAAC/IisAAIAAIEgAj0jKICsAAIAAIEICRAAIAAoEICsAAIAAhvInpAAg");
	this.shape_4.setTransform(188.1,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_5.setTransform(188.1,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjlE2IgJgGIAAjIIAfAVQBSA4BfAAQAmAAAOgOQAIgHAAgOQAAgRgHgJQgKgJgbgKQh9gmg6g9Qg8g8AAhcQAAhjBJg5QBGg4B/AAQB+AABYAmIAMAGIAADBIgcgNQhigshbAAQghAAgNAMQgHAHAAANQAAAfAtAOQCFAnA3A4QA4A5AABeQAAB8hdA4QhGAqh0AAQh3AAhZg1gAjGEZQBLAqBmAAQCZAAA4hKQAegoAAhEQAAhPgtguQgvguh7gkQhKgXAAg9QAAgcARgSQAYgaA0AAQBXAABaAkIAAhqQhNgehtAAQhyAAg7AvQg5AuAABPQAABMAxAyQAxAyB1AlQAlAMARASQASATAAAiQAAAdgSATQgZAbg5AAQhZAAhPgsg");
	this.shape_6.setTransform(136.8,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape_7.setTransform(136.8,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj3EJQhchiAAinQAAimBchiQBchiCbAAQCcAABcBiQBcBhAACnQAACohcBhQhcBiicAAQibAAhchigAjajtQhRBXAACWQAACXBRBXQBPBVCLAAQCMAABQhVQBQhWAAiYQAAiXhQhWQhQhViMAAQiLAAhPBVgAh6COQgdg1AAhZQAAhYAdg1QAmhGBUAAQBVAAAmBGQAdA1AABYQAABZgdA1QgmBGhVAAQhUAAgmhGgAhdhwQgSAoAABIQAABmAmApQAbAdAuAAQBDAAAbg7QATgogBhJQAAhlgmgpQgagdgwAAQhCAAgbA7g");
	this.shape_8.setTransform(79.2,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_9.setTransform(79.2,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj4FiIAArDIDkAAIAAIEIEMAAIAAC/gAjPE6IGfAAIAAhvIkMAAIAAoEIiTAAg");
	this.shape_10.setTransform(25.9,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_11.setTransform(25.9,37.3);

	// レイヤー 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#349BF1").s().p("Ah6FsIAAoEIisAAIAAjTIJNAAIAADTIisAAIAAIEgAjqjUICsAAIAAIEIB9AAIAAoEICsAAIAAhbInVAAg");
	this.shape_12.setTransform(188.1,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#349BF1").s().p("AhcFOIAAoEIisAAIAAiXIIRAAIAACXIisAAIAAIEg");
	this.shape_13.setTransform(188.1,37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#349BF1").s().p("AjqE+IgOgJIAAjgIAvAgQBPA2BcAAQAgAAALgJQAHgGAAgKQAAgOgFgFQgIgIgYgJQiAgng8g+Qg+g/AAhgQAAhnBMg9QBKg6CCAAQCAAABaAnIASAIIAADYIgqgUQhfgrhaAAQgbAAgKAIQgGAFAAAJQAAAYAmAMQCIAnA4A6QA7A8AABiQAABig4A6QhIBMihAAQh6AAhbg3gAi8ETQBHAmBgAAQCIAAA3g6QAmgoAAhKQAAhKgqgsQgtgsh5gkQhRgZAAhEQAAgdARgVQAbggA7AAQBSAABVAfIAAhUQhJgbhnAAQhuAAg4AtQg2AqAABLQAABIAuAvQAwAxBxAjQAoANATAUQAVAXAAAlQAAAfgSAVQgcAhhAAAQhTAAhLglg");
	this.shape_14.setTransform(136.8,37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#349BF1").s().p("AjaElIAAiYQBXA8BlAAQBQAAAAg3QAAgagNgNQgMgOghgLQh6gmg1g2Qg2g5AAhTQAAhZBBg0QBBgzB4AAQB6AABUAlIAACVQhkguhhAAQhJAAAAA0QAAAuA8ASQCBAnAxAxQAzA1AABWQAADKkDAAQhyAAhTgyg");
	this.shape_15.setTransform(136.8,37.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#349BF1").s().p("Aj/EQQhehlAAirQAAiqBehlQBghlCfAAQChAABfBlQBeBkAACrQAACsheBkQhfBlihAAQifAAhghlgAjTjmQhOBUAACSQAACTBOBUQBNBSCGAAQCIAABMhSQBOhTAAiUQAAiThOhTQhMhSiIAAQiGAAhNBSgAhsC0Qg1g4AAh8QAAh7A1g4QApgqBDAAQBEAAApAqQA2A4AAB7QAAB8g2A4QgpAqhEAAQhDAAgpgqgAg8iMQgpAlAABnQAABoApAlQAWAVAmAAQAoAAAVgVQApglABhoQgBhngpglQgVgVgoAAQgmAAgWAVg");
	this.shape_16.setTransform(79.2,37.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#349BF1").s().p("AjpD7QhWhcAAifQAAieBWhcQBWhcCTAAQCUAABWBcQBWBbAACfQAACghWBbQhWBciUAAQiTAAhWhcgAiDAAQAADACDAAQCEAAAAjAQAAi/iEAAQiDAAAAC/g");
	this.shape_17.setTransform(79.2,37.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#349BF1").s().p("AkCFsIAArXID5AAIAAIEIEMAAIAADTgAjFEwIGMAAIAAhbIkMAAIAAoEIiAAAg");
	this.shape_18.setTransform(25.9,37.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#349BF1").s().p("AjkFOIAAqbIC8AAIAAIEIEMAAIAACXg");
	this.shape_19.setTransform(25.9,37.3);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,217.7,74.7);


(lib.MC_high = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7619D").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlUIBfAAIAACCIBSAAIAAiCIBdAAIAAFUg");
	this.shape.setTransform(100.1,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7619D").s().p("AhiCBQgwguAAhTQAAhSAvguQAugvBTAAQA1ABAtAMIAABMQgwgOgmAAQgvAAgXAYQgXAZAAAzQAAA1AWAYQAXAZAogBQALAAANgDIAAhEIg7AAIAAhFICUAAIAADDQg4AUg9gBQhQAAgwgug");
	this.shape_1.setTransform(67.1,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7619D").s().p("AgyCrIAAlUIBlAAIAAFUg");
	this.shape_2.setTransform(43.8,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7619D").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlUIBdAAIAACCIBSAAIAAiCIBfAAIAAFUg");
	this.shape_3.setTransform(20,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqDKQgNAAgKgJQgJgKAAgNIAAhtIgTAAIAABtQAAANgKAKQgJAJgMAAIhfAAQgMAAgKgJQgJgKAAgNIAAlUQAAgNAJgJQAKgJAMAAIBfAAQAMAAAJAJQAKAJAAANIAABkIATAAIAAhkQAAgNAJgJQAKgJANAAIBdAAQAOAAAJAJQAJAJAAANIAAFUQAAANgJAKQgJAJgOAAgAAqAAQAMAAAKAHQAKAKgBANIAABtIAfAAIAAkVIgfAAIAABjQABANgKAKQgKAJgMAAIhSAAQgOAAgJgJQgKgKAAgNIAAhjIgeAAIAAEVIAeAAIAAhtQAAgNAKgKQAJgHAOAAg");
	this.shape_4.setTransform(100.1,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlUIBfAAIAACCIBSAAIAAiCIBdAAIAAFUg");
	this.shape_5.setTransform(100.1,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4CYQg6g3ABhhQAAhfA3g3QA5g4BfAAQA3AAAzANQALACAGAJQAHAJgBALIAABMQAAAKgEAHQAKADAHAIQAGAJAAAKIAADDQAAAKgFAJQgHAIgJAEQg8AUhDAAQhcAAg6g3gAhNhpQglAkAABFQAABFAmAmQAnAkBDABQAsAAApgLIAAiLIhWAAIAAAGIAdAAQAMAAAKAIQAKAJAAANIAABEQAAALgHAIQgGAJgLACQgQAFgQAAQg3AAgfgjQgfghAAhBQABhAAfghQAtgxBmAUIAAgLQgcgGgmABQhGgBglAmgAAaBGIAAgIIgaAAQAJAGARACg");
	this.shape_6.setTransform(67.1,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiCBQgwguAAhTQAAhSAvguQAugvBTAAQA1ABAtAMIAABMQgwgOgmAAQgvAAgXAYQgXAZAAAzQAAA1AWAYQAXAZAogBQALAAANgDIAAhEIg7AAIAAhFICUAAIAADDQg4AUg9gBQhQAAgwgug");
	this.shape_7.setTransform(67.1,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyDKQgNAAgKgJQgJgKAAgNIAAlUQAAgNAJgJQAKgJANAAIBlAAQANAAAJAJQAKAJAAANIAAFUQAAANgKAKQgJAJgNAAgAgTCLIAmAAIAAkVIgmAAg");
	this.shape_8.setTransform(43.8,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyCrIAAlUIBlAAIAAFUg");
	this.shape_9.setTransform(43.8,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApDKQgNAAgJgJQgJgKAAgNIAAhtIgTAAIAABtQAAANgKAKQgJAJgNAAIhdAAQgOAAgJgJQgJgKAAgNIAAlUQAAgNAJgJQAJgJAOAAIBdAAQANAAAJAJQAKAJAAANIAABkIATAAIAAhkQAAgNAJgJQAJgJANAAIBfAAQANAAAJAJQAJAJAAANIAAFUQAAANgJAKQgJAJgNAAgAApAAQAOAAAJAHQAJAKAAANIAABtIAeAAIAAkVIgeAAIAABjQAAANgJAKQgJAJgOAAIhSAAQgNAAgJgJQgKgKAAgNIAAhjIgeAAIAAEVIAeAAIAAhtQAAgNAKgKQAJgHANAAg");
	this.shape_10.setTransform(20,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlUIBdAAIAACCIBSAAIAAiCIBfAAIAAFUg");
	this.shape_11.setTransform(20,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("AAqDqQgZAAgRgQQgQAQgYAAIhfAAQgaAAgSgTQgTgSAAgaIAAlVQAAgaATgSQASgTAaAAIBfAAQAYAAAQAQQARgQAZAAIBdAAQAaAAATATQASASAAAaIAAFVQAAAagSASQgSATgbAAg");
	this.shape_12.setTransform(100.1,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("AAqCrIAAiNIhSAAIAACNIhfAAIAAlVIBfAAIAACEIBSAAIAAiEIBdAAIAAFVg");
	this.shape_13.setTransform(100.1,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#413732").s().p("AiOCuQhDhBAAhtQAAhsBBhBQBBhABtgBQA9AAA1AOQAVAFANARQANASAAAVIAABPQATASAAAbIAADDQAAAVgLAQQgMARgUAGQhAAXhJgBQhpABhDhBg");
	this.shape_14.setTransform(67.1,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#413732").s().p("AhiCBQgwguAAhTQAAhSAvguQAuguBTAAQA1AAAtAMIAABMQgzgOgjAAQgvAAgXAYQgXAYAAA0QAAA1AWAYQAWAYApAAQANAAALgDIAAhEIg7AAIAAhEICUAAIAADDQg2ASg/AAQhQAAgwgug");
	this.shape_15.setTransform(67.1,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#413732").s().p("AgyDqQgaAAgTgTQgSgSAAgaIAAlVQAAgaASgSQATgTAaAAIBlAAQAaAAATATQASASAAAaIAAFVQAAAagSASQgTATgaAAg");
	this.shape_16.setTransform(43.8,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#413732").s().p("AgyCrIAAlVIBlAAIAAFVg");
	this.shape_17.setTransform(43.8,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#413732").s().p("AAqDqQgZAAgRgQQgRAQgYAAIhdAAQgbAAgSgTQgTgSAAgaIAAlVQAAgaATgSQATgTAaAAIBdAAQAYAAARAQQARgQAZAAIBeAAQAaAAASATQATASAAAaIAAFVQAAAagTASQgSATgaAAg");
	this.shape_18.setTransform(19.9,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#413732").s().p("AApCrIAAiNIhSAAIAACNIhdAAIAAlVIBdAAIAACEIBSAAIAAiEIBfAAIAAFVg");
	this.shape_19.setTransform(20,23.9);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,47.8);


(lib.MC_draw = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80BD26").s().p("AAcCqIgcj2IAAAAIgbD2IhsAAIhBlTIBfAAIAbD2IABAAIAXj2IBvAAIAXD2IABAAIAbj2IBdAAIhCFTg");
	this.shape.setTransform(119.8,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80BD26").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh7IAAAAg");
	this.shape_1.setTransform(83,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80BD26").s().p("AAoCtIgdhZQgFgQgHgIQgIgHgMAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAQAJAIAMQAJANAJAWIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgNAAgNACg");
	this.shape_2.setTransform(51.1,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80BD26").s().p("AiLCoIAAlPQAygHA1AAQBSAAAvAtQAvAtAABRQAABWgvAuQgvAuhSAAQg1AAgygHgAgwhjIAADHQAKACAMAAQAlAAAUgZQAUgZAAg3QAAg0gUgXQgUgXglAAQgMAAgKACg");
	this.shape_3.setTransform(20.4,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcDKQgUAAgIgRQgHARgUAAIhsAAQgLAAgJgHQgIgIgDgLIhBlTQgDgQAJgKQAJgMAQAAIBfAAQAQAAAJANQAKgNAQAAIBvAAQAQAAAJANQAKgNAQAAIBdAAQAPAAAJAMQAKALgDAPIhCFTQgCALgIAIQgJAHgMAAgAA4CLIA1AAIA2kVIgbAAIgYDaQgBAMgJAIQgJAIgMAAQgKAAgJgFQgIgGgEgJgAhsCLIA1AAIAFguQgKAPgRAAQgMAAgJgIQgKgIgBgMIgZjaIgcAAgAAqASIgOicIg1AAIgGA8IABgBQABgMAJgIQAJgIALAAQALAAAKAIQAJAIABAMIALBhg");
	this.shape_4.setTransform(119.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcCqIgcj2IAAAAIgbD2IhsAAIhBlTIBfAAIAbD2IABAAIAXj2IBvAAIAXD2IABAAIAbj2IBdAAIhCFTg");
	this.shape_5.setTransform(119.8,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA9DIQgKgBgIgGQgIgHgDgKIgKgqIguAAIgKAqQgCAKgIAHQgIAGgLABIhhAAQgQAAgIgNQgJgMAFgPIBwlSQADgJAIgGQAHgGAKAAIBgAAQAKAAAIAGQAIAGADAJIBwFSQAFAPgJAMQgKANgPAAgAAtBKQALAAAIAHQAIAGADAKIAKAqIAiAAIhckWIg1AAIhcEWIAfAAIAKgpQADgLAIgGQAIgHALAAgAgfBAQgOAAgJgLQgJgMADgOIAfh7QACgKAIgHQAIgGALgBQAIABAJAGQAJAHACAKIAeB7QADAOgIAMQgJALgPAAg");
	this.shape_6.setTransform(83,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh7IAAAAg");
	this.shape_7.setTransform(83,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnDMQgKAAgIgGQgJgGgDgJIgUhGIAAA8QAAANgKAJQgJAJgNAAIhbAAQgNAAgKgJQgJgJAAgNIAAlSQAAgMAIgJQAIgJAMgBQA+gHA/AAQBhAAArAxQAeAiAAA1QAAAogYAgQgLAOgLAJQALARAJAXIAiBeQAFAQgJANQgKANgQAAgAgWAWQAXAAARAPQAPANAHAYIAWBDIAcAAIgSgzQgHgTgGgIQgFgHgJgFQgQgJAAgTQAAgKAGgIQAFgHAJgDQAVgIAMgRQAMgSAAgTQAAgegOgPQgYgchFAAQgyAAgoAEIAAEVIAcAAIAAhYQAAgNAJgJQAKgJANAAgAgrARQgNAAgKgJQgJgIAAgNIAAhWQAAgLAHgJQAHgIALgDQAPgDASAAQAlAAAWAUQAWAUAAAkQAAAjgZAVQgWASgiAAgAgLgtQAIgBADgDQABgDAAgFQAAgHgBgCQgCgDgJgBg");
	this.shape_8.setTransform(51.1,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoCtIgdhZQgFgQgHgIQgIgHgMAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAQAJAIAMQAJANAJAWIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgNAAgNACg");
	this.shape_9.setTransform(51.1,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiQDHQgLgBgIgJQgIgJAAgMIAAlPQAAgMAIgJQAIgJALgBQAzgIA5AAQBeAAA5A2QA5A3AABeQAABjg5A3Qg5A4heAAQg5AAgzgIgAhsiLIAAEXQAjADAlAAQBFAAAmglQAlglAAhIQAAhDglgkQglgkhGAAQglAAgjADgAg3CDQgLgCgGgJQgHgJAAgLIAAjHQAAgLAHgJQAGgJALgCQAPgDANAAQA1AAAdAjQAcAfAABAQAABBgbAjQgeAlg1AAQgLAAgRgDgAgQBGQAPgCAHgKQANgRAAgsQAAgpgMgOQgHgKgQgCg");
	this.shape_10.setTransform(20.4,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiLCoIAAlPQAygHA1AAQBSAAAvAtQAvAtAABRQAABWgvAuQgvAuhSAAQg1AAgygHgAgwhjIAADHQAKACAMAAQAlAAAUgZQAUgZAAg3QAAg0gUgXQgUgXglAAQgMAAgKACg");
	this.shape_11.setTransform(20.4,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#413732").s().p("AAcDqQgQgBgMgGQgLAGgQABIhsAAQgWAAgSgPQgRgOgFgXIhBlUQgGgdATgWQATgYAeAAIBfAAQANABAMAFQANgFANgBIBvAAQANABAMAFQANgFANgBIBdAAQAeAAATAYQATAWgGAdIhCFUQgEAXgRAOQgSAPgXAAg");
	this.shape_12.setTransform(119.8,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#413732").s().p("AAcCrIgcj3IAAAAIgbD3IhsAAIhBlVIBfAAIAbD3IABAAIAXj3IBvAAIAXD3IABAAIAbj3IBdAAIhCFVg");
	this.shape_13.setTransform(119.8,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#403732").s().p("AA9DrQgWAAgRgOQgSgNgEgXQgFAXgRANQgSAOgXAAIhhAAQggAAgVgbQgIgNgDgPQgDgQAFgPIBxlSQAGgUASgMQAQgMAWAAIBgAAQAVAAARAMQARAMAGAUIBwFSQAFAPgCAQQgCAPgKANQgTAbgiAAg");
	this.shape_14.setTransform(83,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#413732").s().p("AA9CqIgQhCIhcAAIgQBCIhhAAIBxlSIBgAAIBvFSgAgeAiIA8AAIgeh8IAAAAg");
	this.shape_15.setTransform(83,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#413732").s().p("AAnDsQgYAAgQgQQgSAQgYAAIhbAAQgbAAgSgTQgTgSAAgaIAAlSQAAgYAQgSQAQgSAYgDQBDgHA+AAQB2AAAzBCQAhAqAAA8QAAAygeAoIgIAKIArB2QALAfgSAbQgUAbggAAg");
	this.shape_16.setTransform(51.1,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#413732").s().p("AAoCtIgdhZQgFgRgHgHQgHgHgNAAIgWAAIAAB4IhbAAIAAlSQA/gHA7AAQCKAAAABpQAAAdgTAaQgSAYgdAKIAAABQAPAIAJANQAJALAJAYIAhBegAgrhjIAABWIAaAAQAWAAANgMQAOgMABgUQAAgsgyAAQgQAAgKACg");
	this.shape_17.setTransform(51.1,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#413732").s().p("AiUDmQgYgDgPgSQgQgSAAgXIAAlPQAAgYAQgSQAPgRAYgEQA0gHA8AAQBsAABCA/QBBA/AABrQAABxhBBAQhCBBhsAAQg9AAgzgIg");
	this.shape_18.setTransform(20.4,24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#413732").s().p("AiLCoIAAlPQAygHA1AAQBTAAAuAuQAvAtAABPQAABXgvAtQgvAvhSAAQg6AAgtgHgAgwhjIAADHQAMACAKAAQAlAAAUgZQAUgYAAg5QAAgzgUgYQgUgXglABQgKAAgMACg");
	this.shape_19.setTransform(20.4,24);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,146.3,47.8);


(lib.MC_chip = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.chip();
	this.instance.setTransform(-4,-4,0.15,0.15);

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiMCNQg6g7gBhSQABhSA6g6QA6g6BSgBQBSABA7A6QA7A6gBBSQABBSg7A7Qg7A7hSgBQhSABg6g7g");
	this.shape.setTransform(20,20);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-4,48.1,48.1);


(lib.containerVisuble = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.containerHeddin = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,455,679);


(lib.container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.trump52();
	this.instance.setTransform(-227.5,-339.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-227.5,-339.5,455,679);


(lib.btn_result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86E00").s().p("AguCnIAAkBIhbAAIAAhMIETAAIAABMIhbAAIAAEBg");
	this.shape.setTransform(246.1,-1.9,1.895,1.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86E00").s().p("AAmCnIgchXQgEgPgGgIQgIgHgOAAIgUAAIAAB1IhaAAIAAlNIBuAAQBMAAAjAYQAjAZAAAyQAAAcgSAZQgTAXgbALIAAABQAMAHAKANQAKAMAIAWIAhBcgAgqgPIAZAAQAWAAANgLQAOgNAAgTQAAgVgMgJQgMgJgZAAIgZAAg");
	this.shape_1.setTransform(192.8,-1.9,1.895,1.895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F86E00").s().p("AA9CnIgQhAIhbAAIgQBAIhfAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_2.setTransform(133.9,-1.9,1.895,1.895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F86E00").s().p("AgtCnIAAkBIhcAAIAAhMIESAAIAABMIhbAAIAAEBg");
	this.shape_3.setTransform(83.5,-1.9,1.895,1.895);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F86E00").s().p("AhJCiQghgJgVgQIAUhHQAVAPAeALQAbAJAYgBQAnAAAAgdQAAgUgjgLQhDgSgdgaQgcgbAAgpQAAgtAjgbQAigbA+AAQBFAAAuAXIgQBHQgvgXgvAAQgTAAgMAHQgLAJAAAMQAAATAeAJQBGASAeAaQAdAaAAAqQAAAzgjAaQgjAbhEAAQgdAAgigKg");
	this.shape_4.setTransform(30.1,-1.9,1.895,1.895);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F86E00").s().p("AhtCnIAAlNIDbAAIAABJIh/AAIAAA3IB2AAIAABDIh2AAIAABBIB/AAIAABJg");
	this.shape_5.setTransform(-48.3,-1.9,1.895,1.895);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F86E00").s().p("ABmCnIgPjRIgBAAIgpDRIhaAAIgpjRIgBAAIgQDRIhZAAIAqlNIBuAAIAoDoIAAAAIApjoIBuAAIAqFNg");
	this.shape_6.setTransform(-111.5,-1.9,1.895,1.895);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F86E00").s().p("AA9CnIgQhAIhcAAIgOBAIhgAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_7.setTransform(-180,-1.9,1.895,1.895);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F86E00").s().p("AhpB9QgygvAAhOQAAhPAwguQAxguBVAAQBFAAAuAgIgZBCQgpgZgoAAQgtAAgbAaQgaAZAAAvQAAAuAbAbQAbAaAsAAQATAAAOgFIAAhBIhFAAIAAhDICcAAIAAC7Qg+AXhDAAQhRAAgzgvg");
	this.shape_8.setTransform(-242.5,-1.9,1.895,1.895);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguDKQgOAAgKgKQgKgKAAgPIAAjeIg5AAQgOAAgKgLQgLgKAAgOIAAhMQAAgPALgKQAKgKAOAAIETAAQAOAAAKAKQALAKAAAPIAABMQAAAOgLAKQgKALgOAAIg4AAIAADeQAAAPgLAKQgKAKgOAAgAhmh9IA4AAQAPAAAKAKQAKAKAAAPIAADeIAWAAIAAjeQAAgPAKgKQALgKAPAAIA3AAIAAgGIjMAAg");
	this.shape_9.setTransform(246.1,-1.9,1.895,1.895);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguCnIAAkBIhbAAIAAhMIETAAIAABMIhbAAIAAEBg");
	this.shape_10.setTransform(246.1,-1.9,1.895,1.895);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmDKQgLAAgJgGQgJgHgEgLIgMgsIAAAhQAAAPgLAKQgKAKgOAAIhaAAQgPAAgKgKQgKgKAAgPIAAlNQAAgPAKgKQAKgKAPAAIBuAAQBWAAAtAeQAyAkAABEQAAAngZAhQgLANgIAIQAJAOAIAXIAiBdQAGAQgLAQQgKAOgSAAgAgDASQAMADALAKQAPANAIAaIAVA+IATAAIgQgtQgGgOgHgLQgFgHgHgEQgSgKAAgUQAAgHACgGQgNAHgQADgAhhCEIAUAAIAAhSQAAgLAHgKQAGgJALgDQgLgEgGgJQgHgHAAgMIAAhSQAAgNAHgJQAIgKALgCIguAAgAAqh0QAZAUAAAmQAAAagOASQAPgIAJgMQAMgQAAgRQAAgggUgOQgUgOgpgDQAUADAOALgAgHgzIAEgCQACgBAAgEIgBgDIgFgBg");
	this.shape_11.setTransform(192.8,-1.9,1.895,1.895);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmCnIgchXQgEgPgGgIQgIgHgOAAIgUAAIAAB1IhaAAIAAlNIBuAAQBMAAAjAYQAjAZAAAyQAAAcgSAZQgTAXgbALIAAABQAMAHAKANQAKAMAIAWIAhBcgAgqgPIAZAAQAWAAANgLQAOgNAAgTQAAgVgMgJQgMgJgZAAIgZAAg");
	this.shape_12.setTransform(192.8,-1.9,1.895,1.895);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA9DKQgMAAgKgHQgJgIgDgLIgKgmIgkAAIgJAmQgCALgJAIQgKAHgNAAIhfAAQgTAAgJgOQgLgPAFgQIBvlOQAEgLAJgHQAJgGALAAIBfAAQALAAAJAGQAKAHADALIBvFOQAFARgLAOQgKAOgSAAgAAVh0QAJAIADAMIAeB6QAEARgKANQgJAJgKADIAHAAQANAAAJAIQAKAHACAMIAJAlIAWAAIhXkHIgsAAIgIAYQAKgQATAAQAKAAALAHgAhtCEIAUAAIAJglQACgMAKgHQAKgIAMAAIAIAAQgLgDgIgJQgKgOADgQIAbhwg");
	this.shape_13.setTransform(133.9,-1.9,1.895,1.895);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA9CnIgQhAIhbAAIgQBAIhfAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_14.setTransform(133.9,-1.9,1.895,1.895);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtDKQgPAAgKgKQgKgKAAgPIAAjeIg5AAQgOAAgKgLQgLgKABgOIAAhMQgBgPALgKQAKgKAOAAIESAAQAPAAALAKQAKAKAAAPIAABMQAAAOgKAKQgLALgPAAIg3AAIAADeQAAAPgKAKQgLAKgPAAgAhmh9IA5AAQAOAAAKAKQAKAKAAAPIAADeIAWAAIAAjeQAAgPAKgKQALgKAOAAIA4AAIAAgGIjMAAg");
	this.shape_15.setTransform(83.5,-1.9,1.895,1.895);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtCnIAAkBIhcAAIAAhMIESAAIAABMIhbAAIAAEBg");
	this.shape_16.setTransform(83.5,-1.9,1.895,1.895);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTDEQgqgNgXgSQgJgGgDgLQgEgKADgLIAVhHQAEgRASgGQAEgCAHAAIgOgLQgnglAAg3QAAg/AwgmQAsghBKAAQBMAAA3AbQALAFAFAKQAFALgCANIgRBHQgDAQgQAIQgLAFgMgDQAQAKAJAJQApAjAAA5QAABEgxAlQgsAihQAAQghAAgogLgAhWB4QAJAFAOADQAdAJAYAAQA4AAAagTQAVgRAAghQAAgbgSgPQgVgVhAgQQghgJgOgWQgJgNAAgRQAAgfAagSQAUgOAfAAQAjAAAiALIABgCQgggKgrAAQgyAAgZAUQgVAPAAAdQAAAaASARQAWAVA5APQA+ASAAAuQAAAbgRARQgUAVglAAQgegBgggKIgSgHg");
	this.shape_17.setTransform(30.1,-1.9,1.895,1.895);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhJCiQghgJgVgQIAUhHQAVAPAeALQAbAJAYgBQAnAAAAgdQAAgUgjgLQhDgSgdgaQgcgbAAgpQAAgtAjgbQAigbA+AAQBFAAAuAXIgQBHQgvgXgvAAQgTAAgMAHQgLAJAAAMQAAATAeAJQBGASAeAaQAdAaAAAqQAAAzgjAaQgjAbhEAAQgdAAgigKg");
	this.shape_18.setTransform(30.1,-1.9,1.895,1.895);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhtDKQgOAAgLgKQgKgKAAgPIAAlNQAAgPAKgKQALgKAOAAIDbAAQAOAAALAKQAKAKAAAPIAABJQAAAWgTAJQAKALAAANIAABDQAAAVgSAKQAMADAHAJQAIAKAAAMIAABJQAAAPgKAKQgLAKgOAAgAhKCEICVAAIAAgDIhcAAQgOAAgLgKQgKgLAAgOIAAhBQAAgMAJgKQAIgIAMgCQgMgCgIgKQgJgKAAgNIAAg3QAAgOAKgLQALgKAOAAIBcAAIAAgDIiVAAg");
	this.shape_19.setTransform(-48.3,-1.9,1.895,1.895);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhtCnIAAlNIDbAAIAABJIh/AAIAAA3IB2AAIAABDIh2AAIAABBIB/AAIAABJg");
	this.shape_20.setTransform(-48.3,-1.9,1.895,1.895);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABmDKQgTAAgKgPQgKAPgTAAIhZAAQgUAAgJgPQgKAPgTAAIhZAAQgQAAgKgLQgKgMACgQIAplOQACgNAKgJQAJgIANAAIBvAAQANAAAKAIQAKAIABANIAGAnIAHgnQACgNAJgIQAKgIANAAIBuAAQAOAAAJAIQAKAJACANIApFOQACAQgKAMQgKALgRAAgABuhEQAKAKACANIAMCxIATAAIghkHIgxAAIgMBCQAKgMARAAQAOAAAKAJgAgRCEIAhAAIAIgoQgLAJgNAAQgOAAgLgMgAiYCEIARAAIANixQABgNAKgKQAKgJANAAQAVAAAKAQIgNhGIgxAAg");
	this.shape_21.setTransform(-111.4,-1.9,1.895,1.895);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABmCnIgPjRIgBAAIgpDRIhaAAIgpjRIgBAAIgQDRIhZAAIAqlNIBuAAIAoDoIAAAAIApjoIBuAAIAqFNg");
	this.shape_22.setTransform(-111.5,-1.9,1.895,1.895);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA9DKQgNAAgJgHQgKgIgCgLIgJgmIgkAAIgJAmQgDALgKAIQgJAHgMAAIhgAAQgTAAgJgOQgLgPAFgQIBvlOQADgLAJgHQAKgGALAAIBfAAQAMAAAIAGQAKAHADALIBuFOQAGAQgKAPQgLAOgSAAgAAUh0QALAIACAMIAeB6QAEAQgLAOQgHAJgLADIAHAAQAMAAAJAIQAKAHADAMIAJAlIAWAAIhYkHIgsAAIgIAYQALgQATAAQAKAAAKAHgAhtCEIAUAAIAJglQADgMAJgHQAKgIALAAIAJAAQgLgDgJgJQgKgOAEgQIAchwg");
	this.shape_23.setTransform(-180,-1.9,1.895,1.895);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA9CnIgQhAIhcAAIgOBAIhgAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_24.setTransform(-180,-1.9,1.895,1.895);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiBCXQg9g6AAhdQAAheA7g4QA7g4BjAAQBQAAA3AmQAKAHAEAMQADALgEAMIgVA1IACAAQAOAAALALQAKAJAAAPIAAC7QAAALgGAJQgGAJgKAEQhDAZhLAAQhgAAg8g4gAhShkQgmAkAABAQAAA/AnAlQApAlBDAAQAyAAAsgNIAAh/IgsAAQAMADAHAIQAIAJAAAMIAABBQAAALgHAKQgHAJgLAEQgTAGgYAAQg5AAgmgkQgmgkAAg+QAAg9AlgkQAkgkA8AAQAggBAeAMIAAgBQgdgNgqAAQhIAAglAkg");
	this.shape_25.setTransform(-242.5,-1.9,1.895,1.895);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhpB9QgygvAAhOQAAhPAwguQAxguBVAAQBFAAAuAgIgZBCQgpgZgoAAQgtAAgbAaQgaAZAAAvQAAAuAbAbQAbAaAsAAQATAAAOgFIAAhBIhFAAIAAhDICcAAIAAC7Qg+AXhDAAQhRAAgzgvg");
	this.shape_26.setTransform(-242.5,-1.9,1.895,1.895);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#403732").s().p("AguDoQgaAAgUgTQgSgTgBgbIAAjAIgaAAQgaAAgUgTQgSgUgBgaIAAhMQABgbASgTQAUgTAaAAIETAAQAaAAATATQAUATgBAbIAABMQABAagUAUQgTATgaAAIgbAAIAADAQAAAbgSATQgUATgaAAg");
	this.shape_27.setTransform(246.1,0,1.895,1.895);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#413732").s().p("AguCnIAAkBIhbAAIAAhMIETAAIAABMIhbAAIAAEBg");
	this.shape_28.setTransform(246.1,0,1.895,1.895);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#403732").s().p("AAmDoQgXAAgQgOQgSAOgXAAIhaAAQgbAAgTgTQgTgTAAgbIAAlNQAAgbATgTQATgTAbAAIBuAAQBgAAA0AkQA/AsAABUQAAAxgfApIgHAIQAFAIAFAOIAhBcQAFAPgCAQQgCAQgJANQgTAbgiAAg");
	this.shape_29.setTransform(192.8,0,1.895,1.895);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#413732").s().p("AAmCnIgchXQgEgPgGgIQgIgHgOAAIgUAAIAAB1IhaAAIAAlNIBuAAQBMAAAjAYQAjAZAAAyQAAAcgSAZQgTAXgbALIAAABQAMAHAKANQAKAMAIAWIAhBcgAgqgPIAZAAQAWAAANgLQAOgNAAgTQAAgVgMgJQgMgJgZAAIgZAAg");
	this.shape_30.setTransform(192.8,0,1.895,1.895);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#403732").s().p("AA9DoQgWAAgRgMQgRgNgFgUQgGAUgRANQgRAMgWAAIhfAAQghAAgUgaQgJgNgDgQQgCgPAFgPIBulOQAHgUARgMQARgMAVAAIBfAAQAVAAARAMQARAMAGAUIBvFOQAKAggTAbQgJAMgOAHQgOAHgQAAg");
	this.shape_31.setTransform(133.9,0,1.895,1.895);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#413732").s().p("AA9CnIgQhAIhbAAIgQBAIhfAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_32.setTransform(133.9,0,1.895,1.895);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#403732").s().p("AgtDoQgbAAgUgTQgTgTAAgbIAAjAIgaAAQgaAAgUgTQgSgUgBgaIAAhMQABgbASgTQAUgTAaAAIESAAQAcAAASATQAUATgBAbIAABMQABAagUAUQgSATgcAAIgaAAIAADAQABAbgUATQgSATgcAAg");
	this.shape_33.setTransform(83.5,0,1.895,1.895);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#413732").s().p("AgtCnIAAkBIhcAAIAAhMIESAAIAABMIhbAAIAAEBg");
	this.shape_34.setTransform(83.5,0,1.895,1.895);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#403732").s().p("AhcDhQgrgOgfgVQgQgMgHgTQgGgUAFgUIAVhHQADgLAJgMQghgoAAg5QAAhOA8guQA0goBUAAQBTAAA9AeQAUAJAKAVQAKAUgFAWIgQBIQgEAPgLANQAnApAAA+QAABSg8AuQg1AohaAAQglAAgtgMg");
	this.shape_35.setTransform(30.1,0,1.895,1.895);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#413732").s().p("AhJCiQghgJgVgQIAUhHQAVAPAeAKQAbAKAYgBQAnAAAAgdQAAgUgjgLQhDgSgdgaQgcgbAAgpQAAgtAjgbQAigbA+AAQBFAAAuAXIgQBHQgvgXgvAAQgTAAgMAHQgLAJAAAMQAAATAeAJQBGASAeAaQAdAaAAArQAAAxgjAbQgjAbhEAAQgdAAgigKg");
	this.shape_36.setTransform(30.1,0,1.895,1.895);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#403732").s().p("AhtDoQgbAAgTgTQgTgTAAgbIAAlNQAAgbATgTQATgTAbAAIDbAAQAbAAATATQATATAAAbIAABJQAAAUgMASQADAJAAAIIAABDQAAAMgFANQAOARAAAXIAABJQAAAbgTATQgTATgbAAg");
	this.shape_37.setTransform(-48.3,0,1.895,1.895);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#413732").s().p("AhtCnIAAlNIDbAAIAABJIh/AAIAAA3IB2AAIAABDIh2AAIAABBIB/AAIAABJg");
	this.shape_38.setTransform(-48.3,0,1.895,1.895);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#403732").s().p("ABmDoQgQAAgMgGQgNAGgQAAIhaAAQgQAAgNgGQgNAGgQAAIhZAAQgcAAgUgVQgTgWADgdIAplOQADgZATgQQASgQAZAAIBuAAQAYAAAQAPQASgPAXAAIBuAAQAZAAASAQQATAQADAZIApFOQAEAcgTAXQgUAVgdAAg");
	this.shape_39.setTransform(-111.4,0,1.895,1.895);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#413732").s().p("ABmCnIgPjRIgBAAIgpDRIhaAAIgpjRIgBAAIgQDRIhZAAIAqlNIBuAAIAoDoIAAAAIApjoIBuAAIAqFNg");
	this.shape_40.setTransform(-111.5,0,1.895,1.895);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#403732").s().p("AA9DoQgWAAgRgMQgRgNgFgUQgGAUgRANQgRAMgVAAIhgAAQghAAgUgaQgUgcALgfIBvlOQAGgUARgMQARgMAVAAIBfAAQAVAAARAMQARAMAHAUIBuFOQALAfgUAcQgUAaghAAg");
	this.shape_41.setTransform(-180,0,1.895,1.895);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#413732").s().p("AA9CnIgQhAIhcAAIgOBAIhgAAIBulNIBfAAIBuFNgAgeAiIA7AAIgdh6IAAAAg");
	this.shape_42.setTransform(-180,0,1.895,1.895);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#403732").s().p("AiWCsQhGhCAAhqQAAhrBFhBQBDhABvAAQBYAABAArQATANAGAWQAHAVgIAWIgJAYQAbAUAAAhIAAC7QAAAVgMAQQgLARgTAGQhJAchPAAQhsAAhFhBg");
	this.shape_43.setTransform(-242.5,0,1.895,1.895);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#413732").s().p("AhpB9QgygvAAhOQAAhPAwguQAxguBVAAQBFAAAuAgIgZBCQgpgagoABQgtAAgbAaQgaAZAAAvQAAAuAbAaQAbAbAsAAQATAAAOgFIAAhBIhFAAIAAhDICcAAIAAC7Qg+AXhDAAQhRAAgzgvg");
	this.shape_44.setTransform(-242.5,0,1.895,1.895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.5,-45,569.1,90);


(lib.low = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_low();
	this.instance.setTransform(-0.9,-1.1,1,1,0,0,0,55.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-25,110.4,47.8);


(lib.draw = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_draw();
	this.instance.setTransform(-0.3,-0.1,1,1,0,0,0,72.7,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:23.8,scaleX:1.54,scaleY:1.54,y:-0.2},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-23.8,146.3,47.8);


(lib.high = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MC_high();
	this.instance.setTransform(0,-1.1,1,1,0,0,0,75,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-25,120,47.8);


// stage content:



(lib.highAndLow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loading:0,roop:1,result:2});

	// timeline functions:
	this.frame_0 = function() {
		/*
				初期設定フレーム
				*/
		
		this.stop();
		
		that = this;
		
		//カード準備
		i = 0;
		j = 0;
		
		/* 表示するトランプの選出 */
		/* わざと１枚目から始まるように-1・・・w */
		l = -1;
		
		// １次元配列を作成する
		
		cardArrya = new Array(); // カードの配列 0,0 ~ 4,12 例）0,0だったらスペードのA
		trumpArrya = new Array(); // カードの並び順配列 0 ~ 41 
		
		markArrya = [0, 1, 2, 3]; //マークの配列
		numberArrya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //番号の配列
		
		//トランプカード配列を用意
		arrya = new Array();
		cardArrya = new Array();
		
		k = 0;
		r = 0;
		t = 0;
		
		//シーン番号
		scene = 0;
		
		//勝った回数と遊んだ回数
		winCount = 0;
		attackCount = 1;
		gameWin = false;
		
		right = 0;
		left = 1;
		
		
		//画像読み込み準備
		images = new Array();
		visibleImage = 0;
		hiddenImage = 0;
		index = 0;
		btnFlag = true;
		
		//初期
		/*
		this.btn_high.alpha = 0;
		this.btn_low.alpha = 0;
		this.btn_draw.alpha = 0;
		*/
		this.containerVisuble.alpha = 0;
		this.containerHeddin.alpha = 0;
		
		queue = new createjs.LoadQueue(true);　
		
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
			console.log("complete card image");
			createjs.Tween
				.get(that.mc_loading, {
					override: true
				})
				.to({
					alpha: 0
				}, 1500, createjs.Ease.quadOut)
				.call(completeNext);
		
			/*createjs.Tween
						.get(this.containerVisuble, {
							override: true
						})
						.set({x:170, y:180})
						.to({
							alpha: 1
						}, 1000, createjs.Ease.quadOut);
					createjs.Tween
						.get(this.containerHeddin, {
							override: true
						})
						.set({x:380, y:180})
						.to({
							alpha: 1
						}, 1000, createjs.Ease.quadOut);*/
		
			function completeNext() {
				console.log("complete loading animation");
				that.play();
			}
		};
		
		this.init = function () {
			//該当するカードの画像を格納の準備
			this.containerVisuble.addChild(images[53]);
			this.containerHeddin.addChild(images[52]);
		}
		function loadingAnime() {
			console.log("loadingAnime");
		
			createjs.Tween
				.get(that.mc_loading, {
					override: true
				})
				.to({
					rotation: 360
				}, 1500, createjs.Ease.liner)
				.call(nextLoadingAnime);
		
			function nextLoadingAnime() {
				that.mc_loading.setTransform(278.1, 184.1, 4.512, 4.512, 0, 0, 0, 19.9, 19.9);
				loadingAnime();
		
			}
		}
		loadingAnime();
	}
	this.frame_1 = function() {
		this.stop();
		/* ---------------------------
				トランプ配列
				
				#マークに関して
				0:スペード
				1:クラブ
				2:ハート
				3:ダイヤ
				
				#数値
				0~12:カードの番号
				
				#シーンの用意
				scene00:スタート
				scene01:初期化
				scene02:メインループ
				scene03:リザルト
				scene04:ヘルプ
				
				------------------------------*/
		right = 53;
		left = 52;
		
		
		//トランプカードを用意する
		for (i = 0; i < 4; i++) {
			cardArrya[i] = new Array();
		
			for (j = 0; j < 13; j++) {
		
				// カードの要素をそれぞれ格納する
				cardArrya[i][j] = j;
				trumpArrya[i * 13 + j] = i * 13 + j;
			}
		}
		
		var container = new Array();
		
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
		
		console.log("winCount!!!" + winCount + "トランプ配列" + trumpArrya);
		
		//勝った数のチップの表示をリセット
		for (var ii = 0; ii < 27; ii++) {
			var name = "";
		
			if (ii <= 9) {
				name = "MC_chip0" + ii;
			} else {
				name = "MC_chip" + ii;
			}
			console.log("チップ表示リセット" + name);
			that[name].alpha = 0;
		}
		
		
		this.winScore.text = "0勝";
		
		
		
		/* 
				カードインスタンスの生成
				*/
		for (var iii = 0; iii < 52; iii++) {
			var objName = "";
		
			if (ii <= 9) {
				objName = "container0" + iii;
				container[iii] = "container0" + iii;
			} else {
				objName = "container" + iii;
				container[iii] = "container" + iii;
			}
		
			//ライブラリから別のシンボルを追加する場合は、
			//上記手順 2 の「クラス」フィールドと以下のコードに、別の名前を入力します。
			container[iii] = new lib.container();
			container[iii].name = objName;
			stage.addChild(container[iii]);
		
			/*
					objName.x = iii*10;
					objName.y = iii*10;
					objName.scaleX = 0.35;
					objName.scaleY = 0.35;
					*/
		
			var x = Math.random(iii * 5) * -100;
			var y = Math.random(iii * 5) * -100;
			var r = Math.random(360) * 100;
			//var r = 360/iii*4;
		
			//objName.setTransform(x, y, 0.35, 0.35, r, 0, 0, 0, 0);
			container[iii].scaleX = 0.35;
			container[iii].scaleY = 0.35;
			stage.setChildIndex(container[iii], iii+1);
			//stage.setChildIndex(container[iii],5);
		
			createjs.Tween
				.get(container[iii], {
					override: true
				})
				.to({
					x: x,
					y: y,
					rotation: r
				}, 500, createjs.Ease.quadOut);
		
			//console.log("------objName number parame" + iii + "------");
			//console.log("name------->" + container[iii].name);
			//console.log("alpha------>" + objName.alpha);
			//console.log("x---------->" + objName.x);
			//console.log("y---------->" + objName.y);
			//console.log("scaleX----->" + objName.scaleX);
			//console.log("scaleY----->" + objName.scaleY);
			//console.log("r------->" + r);
			//console.log("visible---->" + objName.visible);
			//console.log("深度---->" + container[iii].getNumChildren());
			//console.log(iii);
			//console.log(stage.container[iii].name);
			console.log(stage.getChildIndex(container[iii]));
			console.log(container[iii]);
			console.log("----------------------------------");
		
		}
		/*
		sceneアップデート
		
		
		*/
		
		function upDate() {
			switch (scene) {
				case 0:
					l = 0;
					scene = 1
					break;
				case 1:
					l++;
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				default:
					l = 0;
					scene = 1
					break;
			}
			console.log("l--------->" + l);
			console.log("scene--------->" + scene);
		}
		this.stop();
		
		function nextCard() {
			console.log("こんぷりーと");
			/*
			that.MC_win.setTransform(273.1, 192, 1, 1, 0, 0, 0, 82.7, 36.4);
			that.MC_lost.setTransform(273, 192, 1, 1, 0, 0, 0, 108.8, 37.3);
			container[left].setTransform(170, 180, 0.348, 0.348, 0, 0, 0, 240, 320);
			container[right].setTransform(380, 180, 0.348, 0.348, 0, 0, 0, 240, 320);
			*/
		
			btn_high.alpha = 0;
			btn_draw.alpha = 0;
			btn_low.alpha = 0;
		
			var leftX = Math.random(left * 5) * 100 + 500;
			var leftY = Math.random(left * 5) * -100;
			var rightX = Math.random(right * 5) * 100 + 500;
			var rightY = Math.random(right * 5) * -100;
			var leftR = Math.random(360) * 100;
			var rightR = Math.random(360) * 100;
		
			that.winScore.text = winCount + "勝";
		
			createjs.Tween.get(container[left], {
				override: true
			}).to({
				scaleX: 0.01
			}, 1000, createjs.Ease.backOut)
				.call(handleComplete2)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut)
				.to({
					x: leftX,
					y: leftY,
					rotation: leftR
				}, 1000, createjs.Ease.quadOut);
		
			createjs.Tween.get(container[right], {
				override: true
			}).to({
				scaleX: 0.01
			}, 1000, createjs.Ease.backOut)
				.call(handleComplete3)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut)
				.to({
					x: rightX,
					y: rightY,
					rotation: rightR
				}, 1000, createjs.Ease.quadOut)
				.call(handleComplete4);
		
		
			function handleComplete4() {
				//console.log("visibleCard333---->" + visibleCard);
				gameWin = false;
		
				//26回目の対戦だったら終了
				if (26 == attackCount) {
					//リザルトへ
					that.gotoAndPlay(2);
				} else {
					//0~51
					console.log("かーどはける深度の置き換え");
		
					console.log("深度rightいれかえ--->" + container[52 - right]);
					console.log("深度leftいれかえ---->" + container[50 - left]);
					stage.swapChildren(container[right-2], container[right]);
					stage.swapChildren(container[left-2], container[left]);
					stage.swapChildren(container[52 - right], container[right]);
					stage.swapChildren(container[50 - left], container[left]);
					console.log("深度right置き換え後---->" + stage.getChildIndex(container[52 - right]));
					console.log("深度left置き換え後---->" + stage.getChildIndex(container[50 - left]));
		
					console.log("深度rightいれかえ--->" + container[right]);
					console.log("深度leftいれかえ---->" + container[left]);
					console.log("深度right置き換え後---->" + stage.getChildIndex(container[right]));
					console.log("深度left置き換え後---->" + stage.getChildIndex(container[left]));
		
					attackCount++;
					that.nextAttack();
				}
			}
			function handleComplete2() {
				//Tween complete
				container[left].removeChild(leftCardImage);
			}
			function handleComplete3() {
				//Tween complete
				container[right].removeChild(rightCardImage);
			}
		
		
		}
		
		
		this.nextAttack = function () {
			console.log("nextAttack");
		
			that.score.text = attackCount + "回戦目";
		
			//カード表示のセット
			//右：隠すカード
			//左：見せるカード
			right = right - 2;
			rightCardId = trumpArrya[right];
		
			left = left - 2;
			leftCardId = trumpArrya[left];
		
			rightCardImage = images[rightCardId];
			leftCardImage = images[leftCardId];
		
			//カードの番号からのカードの要素の抽出
			//割った数のあまりがカードの番号
			//あまりが0の時はカード番号はK
			leftCardMunber = (leftCardId + 1) % 13;
			if (leftCardMunber == 0) {
				leftCardMunber = 13;
			}
		
			rightCardMunber = (rightCardId + 1) % 13;
			if (rightCardMunber == 0) {
				rightCardMunber = 13;
			}
		
			rightCardMark = (rightCardId + 1 - rightCardMunber) / 13;
			leftCardMark = (leftCardId + 1 - leftCardMunber) / 13;
		
			//マークの特定
			//１つに出来ないか後で考える
			switch (leftCardMark) {
				case 0:
					leftCardMark = "スペード";
					break;
				case 1:
					leftCardMark = "クラブ";
					break;
				case 2:
					leftCardMark = "ハート";
					break;
				case 3:
					//52番目のカードはダイヤのK。4で割り切れる。
				default:
					leftCardMark = "ダイヤ";
					break;
			}
			switch (rightCardMark) {
				case 0:
					rightCardMark = "スペード";
					break;
				case 1:
					rightCardMark = "クラブ";
					break;
				case 2:
					rightCardMark = "ハート";
					break;
				case 3:
					//52番目のカードはダイヤのK。4で割り切れる。
				default:
					rightCardMark = "ダイヤ";
					break;
			}
		
		
			//0~51
			console.log("かーど入ってくる深度");
		
			console.log("深度right---->" + stage.getChildIndex(container[right]));
			console.log("深度left---->" + stage.getChildIndex(container[left]));
			//stage.swapChildren(container[right - 4], container[right]);
			//stage.swapChildren(container[left - 4], container[left]);
			console.log("深度right置き換え後---->" + stage.getChildIndex(container[right]));
			console.log("深度left置き換え後---->" + stage.getChildIndex(container[left]));
		
			var MC_start = new lib.start();
			stage.addChild(MC_start).setTransform(275, 205, 1, 1, 0, 0, 0, 275, 45);
			stage.setChildIndex(MC_start, (stage.getNumChildren()) + 1);
			MC_start.alpha = 0;
		
			console.log("あにめすたーと");
			createjs.Tween
				.get(MC_start, {
					override: true
				})
				.wait(1000)
				.to({
					alpha: 1
				}, 1000)
				.wait(500)
				.to({
					alpha: 0,
					scaleX: 4,
					scaleY: 4
				}, 1000, createjs.Ease.backOut)
				.call(handleComplete0);
		
			function handleComplete0() {
				//Tween complete
				btnFlag = false;
				console.log("ボタンフラグ false");
				stage.removeChild(MC_start);
		
				buttonAdd();
			};
		
		
			createjs.Tween
				.get(container[left], {
					override: true
				})
				.to({
					x: 170,
					y: 180,
					rotation: 360,
					scaleX: 0.35,
					scaleY: 0.35,
					skewX: 0,
					skewY: 0
				}, 1500, createjs.Ease.quadOut)
				.to({
					scaleX: 0.01
				}, 1000, createjs.Ease.backOut)
				.call(handleComplete1)
				.to({
					scaleX: 0.35
				}, 300, createjs.Ease.backOut);
		
			function handleComplete1() {
				//Tween complete
				container[left].addChild(leftCardImage).setTransform(-228, -342, 1, 1, 0, 0, 0, 0, 0);
			};
			createjs.Tween
				.get(container[right], {
					override: true
				})
				.to({
					x: 380,
					y: 180,
					rotation: -360,
					scaleX: 0.35,
					scaleY: 0.35,
					skewX: 0,
					skewY: 0
				}, 1800, createjs.Ease.quadOut)
				.to({
					x: 380,
					y: 180
				}, 500, createjs.Ease.backOut);
		}
		function buttonAdd() {
			btn_high.alpha = 1;
			btn_draw.alpha = 1;
			btn_low.alpha = 1;
		
		};
		
		that.nextAttack();
		//ボタン配置
		
		var btn_high = new lib.high();
		var btn_draw = new lib.draw();
		var btn_low = new lib.low();
		
		stage.addChild(btn_high).setTransform(180, 310, 1, 1, 0, 0, 0, 75, 24);
		stage.addChild(btn_draw).setTransform(340, 310, 1, 1, 0, 0, 0, 73, 24);
		stage.addChild(btn_low).setTransform(510, 310, 1, 1, 0, 0, 0, 55, 24);
		
		stage.setChildIndex(btn_high, (stage.getNumChildren()) + 1);
		stage.setChildIndex(btn_draw, (stage.getNumChildren()) + 1);
		stage.setChildIndex(btn_low, (stage.getNumChildren()) + 1);
		
		btn_high.alpha = 0;
		btn_draw.alpha = 0;
		btn_low.alpha = 0;
		
		//ボタンイベント
		btn_high.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(container[right], {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween complete
					container[right].addChild(rightCardImage).setTransform(-228, -342, 1, 1, 0, 0, 0, 0, 0);;
				};
				if (rightCardMunber > leftCardMunber) {
					winMovie();
				} else {
					lostMovie();
				}
			}
		}
		
		btn_draw.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(container[right], {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween complete
					container[right].addChild(rightCardImage).setTransform(-228, -342, 1, 1, 0, 0, 0, 0, 0);;
				};
				if (rightCardMunber == leftCardMunber) {
					winMovie();
				} else {
					lostMovie();
				}
			}
		}
		
		btn_low.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			if (!btnFlag) {
				btnFlag = true;
				createjs.Tween
					.get(container[right], {
						override: false
					})
					.to({
						scaleX: 0.01
					}, 1000, createjs.Ease.backOut)
					.call(handleComplete3)
					.to({
						scaleX: 0.35
					}, 1000, createjs.Ease.backOut);
				function handleComplete3() {
					//Tween completev
					container[right].addChild(rightCardImage).setTransform(-228, -342, 1, 1, 0, 0, 0, 0, 0);;
				};
				if (rightCardMunber < leftCardMunber) {
					winMovie();
				} else {
					lostMovie();
				}
			}
		}
		
		function winMovie() {
			gameWin = true;
		
			var MC_win = new lib.win();
			stage.addChild(MC_win).setTransform(273.1, 192, 1, 1, 0, 0, 0, 82.7, 36.4);
			stage.setChildIndex(MC_win, (stage.getNumChildren()) + 1);
			MC_win.alpha = 0;
		
			createjs.Tween
				.get(MC_win, {
					override: true
				})
				.to({
					alpha: 1
				}, 1000)
				.wait(1000)
				.to({
					alpha: 0,
					scaleX: 4,
					scaleY: 4
				}, 1000, createjs.Ease.backOut).call(nextCard);
			//勝ったら印をつける
			var name = "";
		
			if (winCount <= 9) {
				name = "MC_chip0" + winCount;
			} else {
				name = "MC_chip" + winCount;
			}
			console.log(name);
			that[name].alpha = 1;
			//stage.removeChild(MC_win1);
			winCount++;
		
		}
		function lostMovie() {
		
			var MC_lost = new lib.lost();
			stage.addChild(MC_lost).setTransform(273, 192, 1, 1, 0, 0, 0, 108.8, 37.3);
			stage.setChildIndex(MC_lost, (stage.getNumChildren()) + 1);
			MC_lost.alpha = 0;
		
			createjs.Tween
				.get(MC_lost, {
					override: true
				})
				.to({
					alpha: 1
				}, 1000)
				.wait(1000)
				.to({
					alpha: 0,
					y: 400
				}, 1000, createjs.Ease.backOut).call(nextCard);
			//stage.removeChild(MC_lost);
		
		}
	}
	this.frame_2 = function() {
		this.stop();
		this.winScore.text = "勝率0%";
		
		this.score.text = "RESULT";
		this.winScore.text = "勝率" + Math.floor(winCount / 26 * 100) + "％";
		
		console.log("勝率" + Math.floor(winCount / 26 * 100) + "％");
		/* もう一度ゲームする */
		
		this.btn_result.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2() {
			location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// score
	this.winScore = new cjs.Text("000", "bold 20px 'M+ 1c heavy'", "#FFFFFF");
	this.winScore.name = "winScore";
	this.winScore.textAlign = "right";
	this.winScore.lineHeight = 22;
	this.winScore.lineWidth = 76;
	this.winScore.setTransform(81,355);

	this.score = new cjs.Text("000", "bold 30px 'M+ 1c heavy'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.lineWidth = 513;
	this.score.setTransform(270.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score,p:{x:270.5,lineWidth:513}},{t:this.winScore,p:{x:81,y:355,font:"bold 20px 'M+ 1c heavy'",textAlign:"right",lineHeight:22,lineWidth:76}}]},1).to({state:[{t:this.score,p:{x:266.5,lineWidth:335}},{t:this.winScore,p:{x:266.5,y:113.5,font:"bold 60px 'M+ 1c heavy'",textAlign:"center",lineHeight:62,lineWidth:335}}]},1).wait(1));

	// loading
	this.mc_loading = new lib.MC_chip();
	this.mc_loading.setTransform(278.1,184.1,4.512,4.512,0,0,0,19.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_loading).to({_off:true},1).wait(2));

	// title
	this.MC_start = new lib.start();
	this.MC_start.setTransform(275.4,202.1,1,0.933,0,0,0,275.4,45.1);
	this.MC_start.alpha = 0;
	this.MC_start._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_start).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// win
	this.MC_win = new lib.win();
	this.MC_win.setTransform(273.1,192,1,1,0,0,0,82.7,36.4);
	this.MC_win.alpha = 0;
	this.MC_win._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_win).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// lost
	this.MC_lost = new lib.lost();
	this.MC_lost.setTransform(273,192,1,1,0,0,0,108.8,37.3);
	this.MC_lost.alpha = 0;
	this.MC_lost._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MC_lost).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// obj
	this.containerHeddin = new lib.containerHeddin();
	this.containerHeddin.setTransform(174.8,183.6,0.33,0.33,0,0,0,226.7,344.6);

	this.containerVisuble = new lib.containerVisuble();
	this.containerVisuble.setTransform(87.7,183.9,0.33,0.33,0,0,0,232.5,345.4);

	this.btn_result = new lib.btn_result();
	this.btn_result.setTransform(272.9,308.2,0.511,0.511);
	new cjs.ButtonHelper(this.btn_result, 0, 1, 2, false, new lib.btn_result(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.containerVisuble},{t:this.containerHeddin}]}).to({state:[{t:this.btn_result}]},2).wait(1));

	// chip
	this.MC_chip26 = new lib.MC_chip();
	this.MC_chip26.setTransform(499,366,1,1,0,0,0,20,22);
	this.MC_chip26.alpha = 0;

	this.MC_chip25 = new lib.MC_chip();
	this.MC_chip25.setTransform(483,366,1,1,0,0,0,20,22);
	this.MC_chip25.alpha = 0;

	this.MC_chip24 = new lib.MC_chip();
	this.MC_chip24.setTransform(468.2,366,1,1,0,0,0,20,22);
	this.MC_chip24.alpha = 0;

	this.MC_chip23 = new lib.MC_chip();
	this.MC_chip23.setTransform(453.4,366,1,1,0,0,0,20,22);
	this.MC_chip23.alpha = 0;

	this.MC_chip22 = new lib.MC_chip();
	this.MC_chip22.setTransform(438.6,366,1,1,0,0,0,20,22);
	this.MC_chip22.alpha = 0;

	this.MC_chip21 = new lib.MC_chip();
	this.MC_chip21.setTransform(423.8,366,1,1,0,0,0,20,22);
	this.MC_chip21.alpha = 0;

	this.MC_chip20 = new lib.MC_chip();
	this.MC_chip20.setTransform(409,366,1,1,0,0,0,20,22);
	this.MC_chip20.alpha = 0;

	this.MC_chip19 = new lib.MC_chip();
	this.MC_chip19.setTransform(394.2,366,1,1,0,0,0,20,22);
	this.MC_chip19.alpha = 0;

	this.MC_chip18 = new lib.MC_chip();
	this.MC_chip18.setTransform(379.4,366,1,1,0,0,0,20,22);
	this.MC_chip18.alpha = 0;

	this.MC_chip17 = new lib.MC_chip();
	this.MC_chip17.setTransform(364.6,366,1,1,0,0,0,20,22);
	this.MC_chip17.alpha = 0;

	this.MC_chip16 = new lib.MC_chip();
	this.MC_chip16.setTransform(349.8,366,1,1,0,0,0,20,22);
	this.MC_chip16.alpha = 0;

	this.MC_chip15 = new lib.MC_chip();
	this.MC_chip15.setTransform(335,366,1,1,0,0,0,20,22);
	this.MC_chip15.alpha = 0;

	this.MC_chip14 = new lib.MC_chip();
	this.MC_chip14.setTransform(320.2,366,1,1,0,0,0,20,22);
	this.MC_chip14.alpha = 0;

	this.MC_chip13 = new lib.MC_chip();
	this.MC_chip13.setTransform(305.4,366,1,1,0,0,0,20,22);
	this.MC_chip13.alpha = 0;

	this.MC_chip12 = new lib.MC_chip();
	this.MC_chip12.setTransform(290.6,366,1,1,0,0,0,20,22);
	this.MC_chip12.alpha = 0;

	this.MC_chip11 = new lib.MC_chip();
	this.MC_chip11.setTransform(275.8,366,1,1,0,0,0,20,22);
	this.MC_chip11.alpha = 0;

	this.MC_chip10 = new lib.MC_chip();
	this.MC_chip10.setTransform(261,366,1,1,0,0,0,20,22);
	this.MC_chip10.alpha = 0;

	this.MC_chip09 = new lib.MC_chip();
	this.MC_chip09.setTransform(246.2,366,1,1,0,0,0,20,22);
	this.MC_chip09.alpha = 0;

	this.MC_chip08 = new lib.MC_chip();
	this.MC_chip08.setTransform(233.4,365,1,1,0,0,0,22,21);
	this.MC_chip08.alpha = 0;

	this.MC_chip07 = new lib.MC_chip();
	this.MC_chip07.setTransform(216.6,364,1,1,0,0,0,20,20);
	this.MC_chip07.alpha = 0;

	this.MC_chip06 = new lib.MC_chip();
	this.MC_chip06.setTransform(202.8,364,1,1,0,0,0,21,20);
	this.MC_chip06.alpha = 0;

	this.MC_chip05 = new lib.MC_chip();
	this.MC_chip05.setTransform(187,365,1,1,0,0,0,20,21);
	this.MC_chip05.alpha = 0;

	this.MC_chip04 = new lib.MC_chip();
	this.MC_chip04.setTransform(173.2,365,1,1,0,0,0,21,21);
	this.MC_chip04.alpha = 0;

	this.MC_chip03 = new lib.MC_chip();
	this.MC_chip03.setTransform(159.4,366,1,1,0,0,0,22,22);
	this.MC_chip03.alpha = 0;

	this.MC_chip02 = new lib.MC_chip();
	this.MC_chip02.setTransform(142.6,364,1,1,0,0,0,20,20);
	this.MC_chip02.alpha = 0;

	this.MC_chip01 = new lib.MC_chip();
	this.MC_chip01.setTransform(128.8,365,1,1,0,0,0,21,21);
	this.MC_chip01.alpha = 0;

	this.MC_chip00 = new lib.MC_chip();
	this.MC_chip00.setTransform(113,364,1,1,0,0,0,20,20);
	this.MC_chip00.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.MC_chip00},{t:this.MC_chip01},{t:this.MC_chip02},{t:this.MC_chip03},{t:this.MC_chip04},{t:this.MC_chip05},{t:this.MC_chip06},{t:this.MC_chip07},{t:this.MC_chip08},{t:this.MC_chip09},{t:this.MC_chip10},{t:this.MC_chip11},{t:this.MC_chip12},{t:this.MC_chip13},{t:this.MC_chip14},{t:this.MC_chip15},{t:this.MC_chip16},{t:this.MC_chip17},{t:this.MC_chip18},{t:this.MC_chip19},{t:this.MC_chip20},{t:this.MC_chip21},{t:this.MC_chip22},{t:this.MC_chip23},{t:this.MC_chip24},{t:this.MC_chip25},{t:this.MC_chip26}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,270,376,223.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;