import * as fs from 'fs'
import { paths } from './paths'

/**
 * Remove the extension from a file name (eg. "file.svg")
 * @param fileName {string} Filename string
 */
const removeFileExtension = (fileName: string) => {
	return fileName.replace(/\.[^/.]+$/, '')
}

/**
 * Get all the svg icons from the svg
 * source path and remove the file extension
 */
const iconsList: string[] = fs
	.readdirSync(paths.svg)
	.map((icon: string) => {
		if (icon.match(/\.svg$/i)) {
			return removeFileExtension(icon)
		}
		return undefined // Додано явне повернення undefined
	})
	.filter(
		(icon: string | undefined): icon is string => typeof icon === 'string'
	)

/**
 * Define the Icon object constructor
 * to build the icon object schema
 * required by the theme
 * @param path {String} is the filename path
 */
class Icon {
	constructor(path: string) {
		const iconName = '_file_' + path
		this[iconName] = {
			iconPath: `./svg/${path}.svg`,
		}
	}
}

/**
 * For each files found in `iconsList`
 * call the Icon contructor and generate the
 * full json theme
 */
const icons = iconsList.reduce(
	(acc, icon: string) => {
		const iconFromSvg = new Icon(icon)
		acc.iconDefinitions = {
			...acc.iconDefinitions,
			...iconFromSvg,
		}
		return acc
	},
	{ iconDefinitions: {} }
)
export default icons
