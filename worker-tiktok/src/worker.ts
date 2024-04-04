import { FetchEvent } from 'types-cloudflare-worker'
import { Response } from 'node-fetch'

const A = `
WebIdLastTime: 1711938775
aid: 1988
app_language: th-TH
app_name: tiktok_web
browser_language: th-TH
browser_name: Mozilla
browser_online: true
browser_platform: Win32
browser_version: 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36
channel: tiktok_web
cookie_enabled: true
count: 20
device_id: 7352720965166351873
device_platform: web_pc
focus_state: true
from_page: search
history_len: 13
is_fullscreen: false
is_page_visible: true
keyword: เอี๊ยด
offset: 12
os: windows
priority_region: TH
referer: https://www.google.com/
region: TH
root_referer: https://www.tiktok.com/v2/auth/authorize/client_key=awnpsw2jjy71llsc
screen_height: 1070
screen_width: 1920
search_id: 202404011245023FDE35A32D40FF0A2439
tz_name: Asia/Bangkok
verifyFp: verify_lugc6d80_3L2i6EzU_Muel_4QcF_BOgW_HDVfrwRSXfrU
web_search_code: {"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}}
webcast_language: th-TH
msToken: YNt3YQsYZ8HcIihSYn3s2E8AscTJCgukKYRGCSrPBcC7s9Y2ufwX-89-cpaOeIpkFYOh9kGS4XKh9Yh6L1ymbvSU_RjxYAsCfZXa6laA8ibvlqJvdmPV69kVraJjwOQM7H35XUHzxVh2ZoB15g==
X-Bogus: DFSzswVY5VTANxu0t-GY/o1WyZny
_signature: _02B4Z6wo00001rvCU8wAAIDAWsKwzYOewc67wldAAMkG4b
`

addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request: Request): Promise<Response> {
    const payload: Record<string, string> = {}
    A.split('\n').forEach(line => {
      const [key, value] = line.split(':').map(str => str.trim())
      if (key && value) payload[key] = value
    })
  
    try {
      const url = 'https://www.tiktok.com/api/search/general/full/?' + new URLSearchParams(payload).toString()
      console.log(url)
      const data = await fetch(url)
      if (!data.ok) throw new Error(`Request failed with status: ${data.status}`)
      console.log("Data content:", await data.text())
      const json_data = await data.json()
      const df = json_data['data']
      console.log(df)
      return new Response(JSON.stringify(df), { status: 200, headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      console.error("Request failed:", e)
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
  }