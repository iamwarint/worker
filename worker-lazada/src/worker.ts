import { FetchEvent, FetchEventListener, CloudflareWorkerGlobalScope } from '@cloudflare/workers-types';

declare const self: CloudflareWorkerGlobalScope;

const handler: FetchEventListener = async (event) => {
  const A = `
  jsv: 2.6.1
  appKey: 24677475
  t: 1712224094852
  sign: 1e5999a041959c8fa9d232a3aed04176
  api: mtop.lazada.guided.shopping.categories.categoriesLpCommon
  v: 1.0
  type: originaljson
  AntiCreep: true
  timeout: 20000
  dataType: json
  sessionOption: AutoLoginOnly
  x-i18n-language: en
  x-i18n-regionID: TH
  appkey: 24677475
  data: {"regionId":"TH","language":"en","platform":"pc","isbackup":"true","backupParams":"language,regionID,platform,pageNo","moduleName":"categoriesLpMultiFloor"}
`;

  const params = {};
  for (const i of A.split('\n').slice(1, -1)) {
    const [key, value] = i.split(':').map((x) => x.trim());
    params[key] = value;
  }

  const url = 'https://acs-m.lazada.co.th/h5/mtop.lazada.guided.shopping.categories.categorieslpcommon/1.0/';
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  const queryString2 = 'WebIdLastTime=1712203825&aid=1988&app_language=th-TH&app_name=tiktok_web&browser_language=th&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F123.0.0.0%20Safari%2F537.36%20Edg%2F123.0.0.0&channel=tiktok_web&cookie_enabled=true&device_id=7353859344587277842&device_platform=web_pc&device_type=web_h264&focus_state=true&from_page=search&history_len=3&is_fullscreen=false&is_page_visible=true&keyword=%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%94&offset=72&os=windows&priority_region=TH&referer=https%3A%2F%2Fwww.tiktok.com%2Fexplore&region=TH&root_referer=https%3A%2F%2Fwww.tiktok.com%2Fexplore&screen_height=1080&screen_width=1920&search_id=202404040412243E616569638A6610101A&search_source=recom_search&tz_name=Asia%2FBangkok&verifyFp=verify_lukpyh2b_83zEueOD_XY1Y_4vZt_8qpu_W7GNKrWEwtUl&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=th-TH&msToken=LRFehsAhgjO1eDMW_EDxOS2EsWQGLSyAE1Cvi-EGhblQ_SXRxnqEzwzMdpV2mVq_sg5rtOyGbTfmtd4CUpkSxbp3dRWoZbcsxqOgbvZT6Xay058GUNQOxmSKR-t9nKoc603yBQCG1splOLERudw=&X-Bogus=DFSzswVY5ZxANy6-t-Pu9OGRbmCn&_signature=_02B4Z6wo00001di4mpAAAIDAF6lj3bkZBgnYuJ4AABAh13'

  const response = await fetch(`${url}?${queryString}`, {
    headers: {
      'authority': 'acs-m.lazada.co.th',
      'method': 'GET',
      'path': '/h5/mtop.lazada.guided.shopping.categories.categorieslpcommon/1.0/?jsv=2.6.1&appKey=24677475&t=1712224094852&sign=1e5999a041959c8fa9d232a3aed04176&api=mtop.lazada.guided.shopping.categories.categoriesLpCommon&v=1.0&type=originaljson&AntiCreep=true&timeout=20000&dataType=json&sessionOption=AutoLoginOnly&x-i18n-language=en&x-i18n-regionID=TH&appkey=24677475&data=%7B%22regionId%22%3A%22TH%22%2C%22language%22%3A%22en%22%2C%22platform%22%3A%22pc%22%2C%22isbackup%22%3A%22true%22%2C%22backupParams%22%3A%22language%2CregionID%2Cplatform%2CpageNo%22%2C%22moduleName%22%3A%22categoriesLpMultiFloor%22%7D',
      'scheme': 'https',
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'th-TH,th;q=0.9,en;q=0.8',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Cookie': 'lazada_share_info=955182358_1_9300_100717936049_955182358_null; miidlaz=miidgk2dlf1hqk7vv3m1p7f; exlaz=c_lzd_byr:mm_294091166_189852503_2146652503!th1316057:clkgk2dlf1hqk7vv3f1p7c::; lzd_click_id=clkgk2dlf1hqk7vv3f1p7c; t_fv=1712223944692; t_uid=vGeQxjmPVGkpXcRwWfE5r86r6ZVVbTCc; t_sid=lwW3CkPIyQFdRb7YDClLVZR2y8mkEXU1; utm_channel=NA; hng=TH|en|THB|764; _m_h5_tk=bc20ed2220b125a877f34773cb45c023_1712234025208; _m_h5_tk_enc=5f4df696d6775c1544368136ac9dc780; cna=yWSVHlizXnQCATHk+GVQcNV8; lzd_cid=5d2d5a8b-72f2-43bc-8fa1-1853260b2ed3; lzd_sid=16673a3e42cb96cd0f49b7514fba986a; _tb_token_=eb6be04e3be71; lwrid=AQGOqIAcT47itI88gdveX39uI7%2Bv; xlly_s=1; tfstk=fjnZtvscqhKaru00TWZ4zbYjDHZT4udWQmNbnxD0C5VGfG1m8XhVhddvW2PqtWsjGlAT0-cjt5G_jmud0YHxfdEXBlHTDoAWN3ZqBAEY3CCukBMHn-ENOqMeVAHOKpfsG6-5uVHoRKPmiP4nK8V3ISjmi6j39-ecs-jMLvVLnoj0SRfhx82RsiVi9wkinMy7SC_D9hb20JzaZv-dmiohVPPoIWSDZDywM7DgTij468hdEvk6_gHQXDGzFfthbbkirj0otHSaJVDE0znAspq0o2g772RG0Wi_3zq08tjmLlVLymqkq6yK-AgmXfWVmRnsVrP88KjYlkm7r4cNHLH3j-cYymORX5Dme0374nS3brjz9se3nTnx7sb4SJeUNpJhvnftQaKTEgbAkyq8L79_CZQYSJeUNpJFkZU3eJPWCR1..; isg=BCUlFjtwryrkmMt24WoqMWaENOFfYtn0zzlODicK4NxrPkWw77N-xJncyLpIPvGs; epssw=1*Grl611Mim1LjT7GSuW6kq_9m1AbL7RkGxRmA1wCSNAGP_FfZYUUqIUFQTQh-H1B56TsTsb9AjhxGs14G_T6LnjF76T1R31B5wKC5WApVdEZHk6fzjDGyVx7Vo0D3_JyTqyPdzb3RtTo998nxxJ9-YGWCeYB4xDmnxkqddTH5322VdLHR3zQRdLrB1sEU6XrnmdH4xDuRyaQRyaC.',
      'Origin': 'https://www.lazada.co.th',
      'Pragma': 'no-cache',
      'Referer': 'https://www.lazada.co.th/',
      'Sec-Ch-Ua':'"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'X-I18n-Language': 'en',
      'X-I18n-Regionid': 'TH'
    },
  });
    console.log(response.url);

  if (response.ok) {
    const text = await response.text();
    if (text.trim() !== "") {
      try {
        const data = JSON.parse(text);
        console.log(data);
        return new Response(JSON.stringify(data), {
          status: response.status,
          statusText: response.statusText,
        });
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    } else {
      console.error('Empty JSON data');
      return new Response('Internal Server Error', { status: 500 });
    }
  } else {
    console.error('Request failed:', response.status);
    return new Response('Internal Server Error', { status: 500 });
  }
};

const listener: FetchEventListener = (event) => {
  event.respondWith(handler(event));
};

self.addEventListener('fetch', listener);

export { handler, listener };
