import $ from 'jquery';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.jas = (function($) {
	'use strict';
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({
		toggleActions: 'restart complete resume pause', //play, pause, resume, reset, restart, complete, reverse, none
		// markers: true,
		// scrub: true,
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

			const oneOption = {
				trigger: '.one',
				start: 'top 70%',
				end: "bottom 20%",
				scrub: true,
			}

			gsap.from('.one .title', {
				scrollTrigger: oneOption,
				duration: 5,
				y: 250,
			});
			gsap.from('.one .desc', {
				scrollTrigger: oneOption,
				duration: 3,
				y: 300,
			});
			gsap.to('.two', {
				yPercent: -100,
				scrollTrigger:{
					trigger: '.section',
					start: 'top top',
					end: '+=100%',
					scrub: true,
					pin: true,
					// markers: true,
				}
			});
			gsap.from('.three .title', {
				scrollTrigger:{
					trigger: '.three',
					scrub: true,
				},
				duration: 1,
				x: '80%',
			});

			const four = gsap.timeline({
				scrollTrigger: {
					trigger: '.four',
					start: 'top top',
					end: '+=300%',
					scrub: true,
					pin: true,
					anticipatePin: 1,
					// markers: true,
				}
			});
			four.from('.images2', { xPercent: 100 })
				.from('.images3', { xPercent: -100 })


		},
	};
	$(document).ready(function() {
		common.init();
	});

	return {};
})($);