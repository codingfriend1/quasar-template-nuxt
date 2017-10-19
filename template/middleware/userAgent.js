import {
  Platform,
  getPlatform
} from 'quasar'

export default function (context) {
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
  Platform.is = getPlatform(context.userAgent)
}
