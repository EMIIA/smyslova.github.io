(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.EMIIAIIoTPLATFORM = function() {
	this.initialize(img.EMIIAIIoTPLATFORM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1401,1401);


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
	this.instance.setTransform(1195.1,995.8,1,1,0,0,0,-0.1,-0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(41).to({startPosition:41},0).wait(1));

	// КРУГ 2
	this.instance_1 = new lib.КРУГ("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(704,616.6,1,1,0,0,0,-0.1,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(41).to({x:703,y:616.1,startPosition:41},0).to({_off:true},1).wait(11));

	// КРУГ 1
	this.instance_2 = new lib.КРУГ("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-48.8,1052.1,1,1,0,0,0,-253.9,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({startPosition:41},0).to({_off:true},1).wait(20));

	// ФОН
	this.instance_3 = new lib.EMIIAIIoTPLATFORM();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700,700,1401,1401);
// library properties:
lib.properties = {
	id: 'B92E6444E73A23489DBB2F8EAA4B29F8',
	width: 1400,
	height: 1400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EMIIAIIoTPLATFORM.jpg", id:"EMIIAIIoTPLATFORM"}
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
an.compositions['B92E6444E73A23489DBB2F8EAA4B29F8'] = {
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