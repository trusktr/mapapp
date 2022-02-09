// Methods related to messages

import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Messages} from './messages.js'

Meteor.methods({
	'messages.insert'(value) {
		check(value, String)

		// NOTE, do not add a 'shouldShowTime' field! The UI relies on this.
		// TODO, add a runtime check or a test case for not having shouldShowTime.
		return Messages.insert({
			value,
			time: Date.now(),
		})
	},
})
