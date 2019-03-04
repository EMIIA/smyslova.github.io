(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A99D9").ss(0.4,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAMgNAOgJQALgHANgGQATgJAWgEQAOgCAPAAQAQAAAOACQAWAEATAJQAMAGAMAHQANAJANANQAyAyAABGgAgdhDIAACQIBUhJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-18.1,-18.1,36.2,36.3), null);


(lib.треугольник = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A99D9").ss(0.4,1,1).p("AgphHIAACPIBThIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A99D9").ss(0.5,1,1).p("AgphHIBTBHIhTBIg");
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A99D9").ss(0.6,1,1).p("AgphHIBTBHIhTBIg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A99D9").ss(0.7,1,1).p("AgphHIBTBHIhTBIg");
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4A99D9").ss(0.8,1,1).p("AgphHIBTBHIhTBIg");
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4A99D9").ss(0.9,1,1).p("AgphHIBTBHIhTBIg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4A99D9").ss(1,1,1).p("AgphHIBTBHIhTBIg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4A99D9").ss(1,1,1).p("AgphHIAACPIBThIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(25).to({_off:false},0).wait(2).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).wait(2).to({_off:true},1).wait(15).to({_off:false},0).wait(2).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(2).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-8.2,10.4,16.5);


(lib.down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.down, new cjs.Rectangle(-17.3,-17.3,34.6,34.7), null);


(lib.but = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.треугольник();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A99D9").ss(0.4,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAMgNAOgJQALgHANgGQATgJAWgEQAOgCAPAAQAQAAAOACQAWAEATAJQAMAGAMAHQANAJANANQAyAyAABGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A99D9").ss(0.4,1,1).p("ACrAAQAABHgyAyQgyAyhHAAQhGAAgygyQgygyAAhHQAAhGAygyQAMgNAOgJQALgHANgGQATgJAWgEQAOgCAPAAQAQAAAOACQAWAEATAJQAMAGAMAHQANAJANANQAyAyAABGgAgdhDIAACQIBUhJg");

	this.instance_1 = new lib.down();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A99D9").ss(0.4,1,1).p("Al0kjILpAAIAAJHIrpAAg");
	this.shape_2.setTransform(1.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("Al0EkIAApHILpAAIAAJHg");
	this.shape_3.setTransform(1.5,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-18.1,36.2,36.3);


// stage content:
(lib.Кнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://www.youtube.com/embed/cHT3bFJCbSo", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.button_2 = new lib.but();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(27.1,25.6);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.but(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,32.5,36.2,36.3);
// library properties:
lib.properties = {
	id: '784748CEF65A7E49A172638740C8E982',
	width: 50,
	height: 50,
	fps: 30,
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
an.compositions['784748CEF65A7E49A172638740C8E982'] = {
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