import { Voice } from '@signalwire/realtime-api'

const projectId = process.env.SIGNALWIRE_PROJECT_KEY
const token = process.env.SIGNALWIRE_TOKEN
const verifiedNumber = process.env.VERIFIED_NUMBER

const client = new Voice.Client({
  project: projectId,
  token: token,
  contexts: ["office"]
})

try {
  const call = await client.dialPhone({
    from: verifiedNumber,  // The number you bought from SignalWire
    to: "+525580972492",
    timeout: 30
  })

  console.log('The call has been answered!', call.id)
} catch (e) {
  console.error(e)
}