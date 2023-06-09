import * as fs from 'fs-extra'
import { paths } from './paths'
import themeScheme from './themeScheme'

/**
 * Build the icons theme and write the
 * theme file to the build path.
 */
const writeTheme = (scheme: object) => {
	fs.writeFile(
		// Pass the theme output path and filename
		`${paths.build}/tech-icons.json`,
		// Pass the icon theme scheme
		JSON.stringify(scheme, null, 3),
		err => {
			if (err) {
				console.error(err)
				return
			}
			console.log('Tech Icons has been generated')
		}
	)
}

writeTheme(themeScheme)
