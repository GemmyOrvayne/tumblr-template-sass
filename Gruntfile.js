module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
					'templates/_header.tumblr',
//					'_blockAnswer.tumblr',
//					'_blockAudio.tumblr',
//					'_blockChat.tumblr',
//					'_blockLink.tumblr',
//					'_blockPhoto.tumblr',
//					'_blockPhotoset.tumblr',
//					'_blockPosts.tumblr',
//					'_blockQuote.tumblr',
//					'_blockText.tumblr',
//					'_blockVideo.tumblr',
					'templates/_footer.tumblr'
				],
				dest: "build/unprocessed.template.tumblr"
			}
		},
		preprocess : {
			html : {
				src : 'build/unprocessed.template.tumblr',
				dest : 'theme.tumblr'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.registerTask('default', ['concat', 'preprocess']);
}