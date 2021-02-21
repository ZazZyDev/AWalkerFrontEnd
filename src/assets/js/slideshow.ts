import * as $ from 'jquery';
import 'vegas/dist/vegas.js'  

export function slideshow(){

console.log("slideshow function");

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_01.jpg',
				 video:{
					 src: [
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.mp4',
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.webm',
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.ogv'
					 ],
					 loop: false,
					 mute: true,
				 }
				},
				{src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_02.jpg'},
				{src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_03.jpg'}
			];
		} else {
			 responsiveImage = [
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_01.jpg' },
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_02.jpg' },
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_03.jpg' }
			];
}
$( window ).on( "load", function() {
	console.log( "window loaded" );

$("#slider").vegas({
		overlay: true,
		transition: 'fade2',
		transitionDuration: 2000,
		delay: 5000,
		animationDuration: 20000,
		animation: 'random',
		slides: responsiveImage,
	});
});
}