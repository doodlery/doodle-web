var paths = [
	{
		from: './app/source/images/**/*',
		to: './app/public/images'
	}, {
		from: './app/source/fonts/**/*',
		to: './app/public/fonts'
	}, {
		from: './app/source/js/**/*',
		to: './app/public/js'
	}, {
		from: './app/source/plugins/**/*',
		to: './app/public/plugins'
	}
];


var paths = {
	mark_base: {
		from: 'M249.653,132.575c-5.624-1.788-17.369-10.077-22.494-7.151c-10.498,5.991-15.167,35.846-10.818,47.124c1.849,4.796,11.964,10.206,16.862,11.763c4.898,1.558,16.28,2.983,20.56,0.136c10.063-6.695,23.494-33.765,18.384-44.719C269.653,134.38,255.277,134.363,249.653,132.575z',
		to: 'M115.652,0 0,0 19.449,236.11 115.652,266 211.855,236.11 231.305,0'
	},
	mark_D: {
		from: '',
		to: 'M149.644,198H70.226V57h79.418c19.904,20.919,29.858,44.452,29.858,70.598C179.502,153.876,169.548,177.345,149.644,198z M103.059,57.882v139.431c7.763-4.052,14.701-8.889,20.814-14.512c6.194-5.817,11.562-13.53,16.106-23.141c4.542-9.608,6.814-20.297,6.814-32.063c0-16.015-4.46-30.396-13.381-43.144C124.409,71.708,114.29,62.851,103.059,57.882z'
	},
	mark_shadow: {
		from: '',
		to: 'M115.652,0H0l19.449,236.11L115.652,266l96.203-29.89L231.305,0H115.652z M115.656,246.165l-78.439-23.711L21.535,18l94.121-0.062V246.165z'
	},
	o1: {
		from: '',
		to: 'M302.085,198c-13.134,7.816-47.858,7.568-61.137,0c-13.061-7.444-11.49-27.535-11.49-42.351c0-13.368,3.829-26.918,11.49-40.649h61.137c7.371,13.731,11.057,27.57,11.057,41.517C313.142,170.104,315.367,190.096,302.085,198zM270.726,157.25c10.767-11.417-3.75,16.454-3.75,2c0-15.247,15.017,12.452,4.25,1.25c-11.057,11.057,6-16.742,6-2C277.226,174.038,259.669,146.267,270.726,157.25z'
	},
	o2: {
		from: '',
		to: 'M394.77,198h-61.137c-7.661-12.935-11.49-27.535-11.49-42.351c0-13.368,3.829-26.918,11.49-40.649h61.137c7.371,13.731,11.057,27.57,11.057,41.517C405.826,170.104,402.141,184.415,394.77,198z M364.093,196.099c10.767-11.417,16.151-24.353,16.151-38.807c0-15.247-5.385-28.472-16.151-39.674c-11.057,11.057-16.585,23.956-16.585,38.698C347.508,171.854,353.036,185.115,364.093,196.099z'
	},
	d: {
		from: '',
		to: 'M456.226,56v59h-30.232c-7.588,14-11.382,27.607-11.382,41.555c0,13.73,3.794,27.445,11.382,41.445h56.232V56H456.226z M456.226,196.532c-11-12.067-16.585-25.365-16.585-39.891c0-14.163,5.585-27.642,16.585-40.433V196.532z'
	},
	l: {
		from: '',
		to: ''
	},
	e: {
		from: '',
		to: 'M593.698,158h-31.327c0.65,8.312,2.385,15.175,5.203,21.389c2.818,6.216,6.756,11.636,11.815,16.26c6.647-6.431,11.417-14.959,14.309-25.582l18.753,18.861c-1.229,2.818-2.639,6.327-4.228,9.072h-59.728c-7.517-12.718-11.273-27.283-11.273-42.242c0-8.672,0.902-15.861,2.71-21.571c1.806-5.854,4.661-12.249,8.563-19.187h56.259c0.071,1.084,0.108,2.313,0.108,3.686C604.863,131.55,601.141,144.921,593.698,158z M579.39,117.076c-11.057,8.528-16.767,21.645-17.127,39.349C572.957,147.319,578.666,134.203,579.39,117.076z'
	}
}

window.onload = function(){
	var speed = 2000;

	var svg = Snap(600,300).remove().attr({viewBox: [0, 0, 600, 300]});
	//.path(pathString,segmentArray)：図形の描画
	var path = svg.path(paths.mark_base.from).attr({fill: '#6da500'});
	svg.click(function() {
		path.stop().attr({
			path: paths.mark_base.from,
			fill: '#6da500'
		}).animate({
			path: paths.mark_base.to,
			fill: '#6dccc6'
		}, speed);
	});
	svg.prependTo(container);
};
