module.exports = {
	plugins: [
		/*       require('autoprefixer')({
							grid:true
					}), */
		require('postcss-preset-env')({
			stage: 1,
		}),
		require('postcss-custom-media')({
			preserve: false
		}),
		require('postcss-cssnext')({
			features: {
				autoprefixer: {
					grid: true,
					flexbox: false,
				},
				customProperties: false,
				calc: false,
			}
		})
	]
}
