(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rabbit_atlas_", frames: [[1082,769,294,373],[1082,0,470,767],[1589,314,80,42],[1548,769,110,114],[0,1082,1080,312],[1589,0,21,312],[1378,1073,87,48],[1612,44,52,51],[1378,903,119,168],[1612,0,79,42],[1305,1449,130,89],[1499,1035,125,94],[1082,1144,221,320],[1554,0,33,348],[1305,1144,210,158],[1378,769,168,132],[1305,1304,112,143],[0,0,1080,1080],[1499,903,143,130]]}
];


// symbols:



(lib.голова = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.дверца = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.закрытыевеки = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.лампочкималенькие = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.лампочки = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.лента1 = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.лента2 = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.лента3 = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.маяк = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.полузакрытыевеки = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.рука1 = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.рука2 = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.теньголова = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.теньлента = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.теньрука = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.теньягода = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.туловище = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.фонскр = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ягода = function() {
	this.spriteSheet = ss["rabbit_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.рука2();
	this.instance.parent = this;
	this.instance.setTransform(-32,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-22,125,94);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.маяк();
	this.instance.parent = this;
	this.instance.setTransform(-119,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-119,-168,119,168), null);


(lib.ягода_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ягода();
	this.instance.parent = this;
	this.instance.setTransform(-143,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ягода_1, new cjs.Rectangle(-143,-130,143,130), null);


(lib.теньягода_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.теньягода();
	this.instance.parent = this;
	this.instance.setTransform(-171.7,-144.2,0.986,1.094,0,-2.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.теньягода_1, new cjs.Rectangle(-171.7,-144.2,171.7,144.3), null);


(lib.теньрука_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.теньрука();
	this.instance.parent = this;
	this.instance.setTransform(-222.9,-136.8,0.791,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.теньрука_1, new cjs.Rectangle(-222.9,-219.9,223,220), null);


(lib.теньлента_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.теньлента();
	this.instance.parent = this;
	this.instance.setTransform(-33,-197.3,1,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.теньлента_1, new cjs.Rectangle(-33,-197.3,33,197.3), null);


(lib.теньголова_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.теньголова();
	this.instance.parent = this;
	this.instance.setTransform(-221,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.теньголова_1, new cjs.Rectangle(-221,-320,221,320), null);


(lib.рука1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.рука1();
	this.instance.parent = this;
	this.instance.setTransform(-148.6,-85.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.рука1_1, new cjs.Rectangle(-148.6,-119.6,148.6,119.6), null);


(lib.лента3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.лента3();
	this.instance.parent = this;
	this.instance.setTransform(-52,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.лента3_1, new cjs.Rectangle(-52,-51,52,51), null);


(lib.лента2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.лента2();
	this.instance.parent = this;
	this.instance.setTransform(-87,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.лента2_1, new cjs.Rectangle(-87,-48,87,48), null);


(lib.лента1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.лента1();
	this.instance.parent = this;
	this.instance.setTransform(-21,-312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.лента1_1, new cjs.Rectangle(-21,-312,21,312), null);


(lib.голова_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.голова();
	this.instance.parent = this;
	this.instance.setTransform(-293.9,-380.7,1,1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.голова_1, new cjs.Rectangle(-303.9,-380.7,303.9,380.8), null);


(lib.маяк_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(167.2,-48.9,1,1,5.3,0,0,-108.4,-159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-59.5,regY:-84,rotation:5.5,x:208.6,y:31},0).wait(1).to({rotation:6.1,x:207.8,y:31.4},0).wait(1).to({rotation:7.1,x:206.3,y:32.1},0).wait(1).to({rotation:8.7,x:204.1,y:33.1},0).wait(1).to({rotation:10.9,x:200.9,y:34.5},0).wait(1).to({rotation:13.8,x:196.7,y:36.1},0).wait(1).to({rotation:17.3,x:191.4,y:37.8},0).wait(1).to({rotation:21.2,x:185.5,y:39.2},0).wait(1).to({rotation:25.2,x:179.3,y:40.3},0).wait(1).to({rotation:28.8,x:173.7,y:40.9},0).wait(1).to({rotation:31.8,x:169,y:41.1},0).wait(1).to({rotation:34.2,x:165.1},0).wait(1).to({rotation:36.1,x:162.3,y:41},0).wait(1).to({rotation:37.4,x:160.2,y:40.8},0).wait(1).to({rotation:38.2,x:158.9,y:40.7},0).wait(1).to({rotation:38.7,x:158.2,y:40.6},0).wait(1).to({regX:-108.4,regY:-159.6,rotation:38.8,x:167.3,y:-48.9},0).to({regX:-108.3,regY:-159.5,rotation:4.5},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.8,-58.3,134.1,178.3);


// stage content:
(lib.Часыссюрпризом_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// дверца
	this.instance = new lib.дверца();
	this.instance.parent = this;
	this.instance.setTransform(143,14,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// лента 3.png
	this.instance_1 = new lib.лента3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.9,194.9,0.296,0.296,0,0,0,-10.3,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-10.4,regY:-8.9,rotation:-11.8,x:151.8,y:193.2},15).to({regX:-10.3,regY:-8.8,scaleX:0.36,scaleY:0.47,rotation:-41.8,y:193.3},18).to({regY:-8.9,scaleY:0.47,rotation:-26.8,x:155.2,y:198.5},10).to({regY:-8.8,scaleY:0.47,rotation:-41.8,x:151.8,y:193.3},11).to({regX:-10.1,scaleX:0.27,scaleY:0.36,rotation:-11.8,x:154.2,y:196.4},9).to({regY:-8.7,scaleY:0.62,rotation:-56.8,x:154.8,y:195},9).to({regX:-10.3,rotation:-51,x:165.3,y:197.3},8).to({regX:-10.1,rotation:-56.8,x:154.8,y:193.8},9).to({regX:-10.3,x:173,y:190},11).to({regY:-8.6,x:149.8,y:195.4},9).to({scaleX:0.27,scaleY:0.62,rotation:-56.9},6).to({regX:-10.2,regY:-8.7,scaleX:0.27,scaleY:0.62,rotation:-56.8,x:171.1,y:198.5},17).wait(18));

	// рука 2.png
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.9,175.9,0.296,0.296,30,0,0,72.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.1,rotation:25,x:164.2,y:175.4},15).to({regX:72.2,rotation:15.1,x:152.9},18).to({x:158.1},10).to({x:152.4},11).to({x:164.9,y:171.5},9).to({x:152.3,y:176.5},9).to({x:162.5},8).to({x:152.3},9).to({regX:72.3,regY:0.3,x:170.5,y:171.6},11).to({regX:72.4,regY:0.1,x:147.7,y:176.5},9).to({startPosition:0},6).to({regX:72.3,regY:0.2,rotation:-14.9,x:158.4,y:169.4},17).wait(18));

	// лента 2.png
	this.instance_3 = new lib.лента2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.5,176.3,0.39,0.296,-12.5,0,0,-43.5,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-43.3,regY:-23.6,scaleX:0.34,scaleY:0.35,rotation:-8,x:116.4,y:180},15).to({regY:-23.8,scaleX:0.21,scaleY:0.3,rotation:-5.5,x:111.2,y:180.8},18).to({regX:-42.8,regY:-23.7,scaleX:0.28,rotation:-1,x:114.2,y:180.7},10).to({regX:-42.4,regY:-23.3,scaleX:0.23,scaleY:0.22,rotation:9.2,x:110.7},11).to({regY:-23.2,scaleX:0.37,rotation:-3,x:118,y:178.7},9).to({regY:-23.1,scaleX:0.27,rotation:12,x:112.3,y:182.1},9).to({regX:-42.1,regY:-22.8,scaleX:0.35,rotation:8.3,x:116.3,y:181.7},8).to({regX:-42,regY:-22.9,scaleX:0.23,x:111.1,y:180.9},9).to({regX:-41.8,regY:-22.7,scaleX:0.46,rotation:1.3,x:121.7,y:179.9},11).to({regX:-41.6,scaleX:0.22,rotation:5.8,x:110.6,y:180.3},9).wait(3).to({regX:-41.5,regY:-22.4,scaleX:0.3,rotation:-3.2,x:119,y:189.2},16).to({scaleX:0.37,x:122},4).wait(18));

	// ягода
	this.instance_4 = new lib.ягода_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.7,171.3,0.296,0.296,8.3,0,0,-93.5,-264.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-264.7,rotation:16.5,x:103.3,y:172.1},15).to({regY:-264.9,x:102.3,y:189.8},18).to({regX:-93.4,x:103.2},10).to({x:101.7,y:205.2},11).wait(9).to({regX:-93.3,regY:-264.8,y:223},9).wait(8).to({regX:-93.4,regY:-264.9,y:236.6},9).wait(11).to({x:100.7,y:282.2},9).wait(41));

	// лента 1.png
	this.instance_5 = new lib.лента1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(93.6,171.3,0.405,0.138,0,1,-42,-6.2,-309.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-6,regY:-308.3,skewX:-0.5,skewY:-43.5,x:96.5,y:171.4},15).to({regY:-308.6,scaleY:0.19,skewX:1,skewY:-42,x:96.4,y:171.3},18).to({regY:-308.4,skewX:0,skewY:-43.1,x:96.5},10).to({regX:-6.1,regY:-308.6,scaleY:0.24,skewX:1,skewY:-42,x:96.4},11).wait(9).to({regX:-5.9,regY:-308.4,scaleY:0.31},9).wait(8).to({regX:-5.8,regY:-308.3,scaleY:0.35,x:96.5},9).wait(11).to({regX:-5.7,scaleY:0.5,y:171.4},9).wait(3).to({x:99.4,y:184.8},16).wait(22));

	// веки закр
	this.instance_6 = new lib.закрытыевеки();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101.2,140.8,0.296,0.296,-6.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({_off:true},2).wait(49).to({_off:false,rotation:-14.4,x:99.3,y:145},0).to({_off:true},2).wait(45).to({_off:false,rotation:-23.9,x:97.5,y:150},0).to({_off:true},2).wait(3).to({_off:false,rotation:-23,x:97.2,y:149},0).to({_off:true},2).wait(21));

	// веки полу
	this.instance_7 = new lib.полузакрытыевеки();
	this.instance_7.parent = this;
	this.instance_7.setTransform(101.8,140.2,0.296,0.296,-4.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).to({_off:true},4).wait(47).to({_off:false,rotation:-11,x:99.4,y:143.7},0).to({_off:true},4).wait(43).to({_off:false,rotation:-21.4,x:97.5,y:149},0).wait(3).to({rotation:-21.2,x:97.2,y:148.8},0).to({_off:true},1).wait(1).to({_off:false,rotation:-21.5,x:97.5,y:148.5},0).to({_off:true},4).wait(20));

	// голова.png
	this.instance_8 = new lib.голова_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(128.8,159.6,0.296,0.296,0,0,0,-216.3,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-216.4,regY:-26.8,rotation:-7},15).wait(27).to({regX:-216.3,regY:-26.7,rotation:-14.2},9).wait(44).to({regX:-216.5,regY:-26.6,rotation:-22.4,x:128.9,y:159.7},9).wait(46));

	// лампочки
	this.instance_9 = new lib.лампочки();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,30,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

	// туловище.png
	this.instance_10 = new lib.туловище();
	this.instance_10.parent = this;
	this.instance_10.setTransform(115,146,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

	// рука 1.png
	this.instance_11 = new lib.рука1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(125.5,172.4,0.296,0.296,0,0,0,-30.6,-84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:-30.5,scaleX:0.27},19).wait(93).to({regX:-30.8,rotation:-26,x:125.4},16).wait(22));

	// лампочки маленькие
	this.instance_12 = new lib.лампочкималенькие();
	this.instance_12.parent = this;
	this.instance_12.setTransform(183,172,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150));

	// маяк
	this.instance_13 = new lib.маяк_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(221,168.6,0.296,0.296,0,0,0,199,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

	// тень голова.png
	this.instance_14 = new lib.теньголова_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(105.3,110.4,0.296,0.296,0,0,0,-88.8,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:-81.3,rotation:-8.6,x:107.7},19).wait(23).to({regX:-88.6,regY:-81,scaleX:0.33,scaleY:0.32,rotation:0,skewX:-4.5,skewY:-25.9,x:107.5,y:106.3},11).wait(42).to({regX:-88.5,skewX:-12.7,skewY:-34.1,x:110.5,y:103.7},9).wait(46));

	// тень рука.png
	this.instance_15 = new lib.теньрука_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(82.2,154.7,0.296,0.296,0,0,0,-111.5,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:-111.4,scaleX:0.25,x:85.4},17).wait(95).to({rotation:-30,x:96.9,y:158.7},20).wait(18));

	// тень лента.png
	this.instance_16 = new lib.теньлента_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(54.1,171.8,0.296,0.296,0,0,0,-16.6,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:62.1},17).to({regX:-16.4,regY:-98.4,scaleY:0.35,x:62.5,y:178.3},16).wait(10).to({scaleY:0.42,y:183.6},11).wait(9).to({regY:-98.2,scaleY:0.5,y:191.6},9).wait(8).to({regY:-98.3,scaleY:0.59,x:61.7,y:200.4},9).wait(11).to({regY:-98.2,scaleY:0.97,x:62.5,y:237.4},10).wait(2).to({x:71.8,y:255.6},20).wait(18));

	// тень ягода.png
	this.instance_17 = new lib.теньягода_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(54.9,214.6,0.296,0.296,0,0,0,-85.8,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:-85.7,regY:-72.1,rotation:15,x:62.5,y:213.4},17).to({x:63.3,y:224.8},16).wait(10).to({y:235.6},11).wait(9).to({y:251.7},9).wait(8).to({y:268.7},9).wait(11).to({y:340.8},10).wait(40));

	// фон
	this.instance_18 = new lib.фонскр();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,0,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,160,320,320);
// library properties:
lib.properties = {
	id: 'C36D3F657773894898AB101CA38AD62E',
	width: 320,
	height: 320,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/rabbit_atlas_.png", id:"rabbit_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C36D3F657773894898AB101CA38AD62E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;