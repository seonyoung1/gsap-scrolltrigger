import $ from "jquery";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(MorphSVGPlugin);
// gsap.to("#circle", {duration: 1, morphSVG: "#hippo"});

window.jas = (function($){
	"use strict";
	var common = {

		init : function(){
			console.log('start!!');
		},
	};

	$(document).ready(function(){
		common.init();
	});

	return{
	}
})($);



