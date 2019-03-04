(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.Безымянный3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A99D9").s().p("AAXB3IAAjPIgTAXIgRAVIgjAAIA9hKIAlAAIAADtg");
	this.shape.setTransform(23.1,25.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A99D9").s().p("Ah3B3IAAhZQAAgRAMgLQALgLARAAICfAAQAFAAAEgEQAEgDgBgGIAAg4QABgFgEgEQgEgDgFAAIifAAQgGAAgDADQgEAEAAAFIAAAJIgbAAIAAgJQAAgQAMgMQALgMARAAICfAAQARAAALAMQAMAMAAAQIAAA4QAAAQgMALQgLAMgRAAIifAAQgGAAgDAEQgEADAAAGIAAAxQAAAGAEADQADAEAGAAIDHAAIAAAbg");
	this.shape_1.setTransform(24.7,26);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

	// Слой_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A99D9").s().p("AhPB3QgRAAgLgMQgMgMAAgQIAAgGIAbAAIAAAGQAAAGAEADQAEAEAFAAICfAAQAFAAAEgEQAEgDAAgGIAAg3QAAgGgEgDQgEgEgFAAIiaAAIAAgaICPAAQAGAAADgEQAEgDAAgGIAAgyQAAgFgEgEQgDgDgGAAIiUAAQgFAAgEADQgEAEAAAFIAAAJIgbAAIAAgJQAAgRAMgLQALgMARAAICUAAQARAAAMAMQALALAAARIAAAyQAAAJgEAJIACAFQANAMAAARIAAA3QAAAQgMAMQgLAMgRAAg");
	this.shape_2.setTransform(24.7,26.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '66F6BBEEAB913A4396DAB74D3B296601',
	width: 50,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['66F6BBEEAB913A4396DAB74D3B296601'] = {
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