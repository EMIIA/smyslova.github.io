(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.EMIIAIIoTPLATFORM1 = function() {
	this.initialize(img.EMIIAIIoTPLATFORM1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1921,1081);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A99D9").ss(1,1,1,3,true).p("AAuAAQAAATgOANQgNAOgTAAQgSAAgOgOQgNgNAAgTQAAgSANgNQAOgNASAAQATAAANANQAOANAAASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,11.1,11.1);


(lib.КРУГ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:29.3,scaleY:29.3,x:-0.4,y:-0.4},23).to({scaleX:41.37,scaleY:41.37,x:-0.1,y:-0.7,alpha:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.5,11.1,11.1);


// stage content:
(lib.круги_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// КРУГ 3
	this.instance = new lib.КРУГ("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1301.2,797.8,1,1,0,0,0,-0.1,-0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({_off:true},40).wait(1));

	// КРУГ 2
	this.instance_1 = new lib.КРУГ("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(959.5,533.5,1,1,0,0,0,-0.1,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(41).to({x:963,y:456.1,startPosition:41},0).to({_off:true},1).wait(10));

	// КРУГ 1
	this.instance_2 = new lib.КРУГ("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(359.2,852.1,1,1,0,0,0,-253.9,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({x:211.2,y:892.1,startPosition:41},0).to({_off:true},1).wait(19));

	// ФОН
	this.instance_3 = new lib.EMIIAIIoTPLATFORM1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1921,1081);
// library properties:
lib.properties = {
	id: 'CFF130FAE2913949BE358E6531E92962',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EMIIAIIoTPLATFORM1.png", id:"EMIIAIIoTPLATFORM1"}
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
an.compositions['CFF130FAE2913949BE358E6531E92962'] = {
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