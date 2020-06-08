import $ from 'jquery';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.jas = (function($) {
	'use strict';
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({
		toggleActions: 'restart complete resume pause', //play, pause, resume, reset, restart, complete, reverse, none
		markers: true,
		scrub: true,
		// onEnter: () => {
		// 	console.log('onEnter');
		// },
		// onLeave: () => console.log('onLeave'),
		// onEnterBack: () => console.log("onEnterBack"),
		// onLeaveBack: () => console.log("onLeaveBack"),
		// onRefresh: () => console.log("onRefresh"),
	});

	var common = {
		init: () => {

			const twoOption = {
				trigger: '.two',
				start: 'top 70%',
				end: "bottom 20%",
			}

			gsap.from('.two .title', {
				scrollTrigger: twoOption,
				duration: 5,
				y: 250,
			});
			gsap.from('.two .desc', {
				scrollTrigger: twoOption,
				duration: 3,
				y: 300,
			})


			gsap.from('.three .title', {
				scrollTrigger:{
					trigger: '.three',
				},
				duration: 1,
				x: '80%',
			})

		},
	};
	$(document).ready(function() {
		common.init();
	});

	return {};
})($);