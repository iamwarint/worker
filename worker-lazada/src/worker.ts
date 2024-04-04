import { FetchEvent, FetchEventListener, CloudflareWorkerGlobalScope } from '@cloudflare/workers-types';

declare const self: CloudflareWorkerGlobalScope;

const handler: FetchEventListener = async (event) => {
  const body = await event.request.text();
  console.log('Body:', body);

  const params = {
    jsv: '2.6.1',
    appKey: '24677475',
    t: '1712224094852',
    sign: '1e5999a041959c8fa9d232a3aed04176',
    api: 'mtop.lazada.guided.shopping.categories.categorieslpcommon',
    v: '1.0',
    type: 'originaljson',
    AntiCreep: 'true',
    timeout: '20000',
    dataType: 'json',
    sessionOption: 'AutoLoginOnly',
    'x-i18n-language': 'en',
    'x-i18n-regionID': 'TH',
    appkey: '24677475',
    data: '{"regionId":"TH","language":"en","platform":"pc","isbackup":"true","backupParams":"language,regionID,platform,pageNo","moduleName":"categoriesLpMultiFloor"}'
  };

  console.log('Params:', params);

  const url = 'https://acs-m.lazada.co.th/h5/mtop.lazada.guided.shopping.categories.categorieslpcommon/1.0/';
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  const headers = {
    'authority': 'acs-m.lazada.co.th',
    'method': 'GET',
    'path': '/h5/mtop.lazada.guided.shopping.categories.categorieslpcommon/1.0/?jsv=2.6.1&appKey=24677475&t=1712224094852&sign=1e5999a041959c8fa9d232a3aed04176&api=mtop.lazada.guided.shopping.categories.categoriesLpCommon&v=1.0&type=originaljson&AntiCreep=true&timeout=20000&dataType=json&sessionOption=AutoLoginOnly&x-i18n-language=en&x-i18n-regionID=TH&appkey=24677475&data=%7B%22regionId%22%3A%22TH%22%2C%22language%22%3A%22en%22%2C%22platform%22%3A%22pc%22%2C%22isbackup%22%3A%22true%22%2C%22backupParams%22%3A%22language%2CregionID%2Cplatform%2CpageNo%22%2C%22moduleName%22%3A%22categoriesLpMultiFloor%22%7D',
    'scheme': 'https',
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'th-TH,th;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://www.lazada.co.th',
    'Pragma': 'no-cache',
    'Referer': 'https://www.lazada.co.th/',
    'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'X-I18n-Language': 'en',
    'X-I18n-Regionid': 'TH'
  };

  const response = await fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: headers
  });

  console.log(queryString);
  console.log(response.url);

  if (response.ok) {
    const data = await response.json();
    console.log('Response Data:', data);

    const resultValue = data.resultValue;
    if (resultValue && resultValue.categoriesLpMultiFloor) {
      const categoriesLpMultiFloor = resultValue.categoriesLpMultiFloor;
      console.log('categoriesLpMultiFloor:', categoriesLpMultiFloor);

      const categories = categoriesLpMultiFloor.data;
      console.log('Categories:', categories);
    } else {
      console.error('categoriesLpMultiFloor not found in response data');
    }

    return new Response(JSON.stringify(data), {
      status: response.status,
      statusText: response.statusText,
    });
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