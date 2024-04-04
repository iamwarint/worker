import { FetchEvent, FetchEventListener, CloudflareWorkerGlobalScope } from '@cloudflare/workers-types';

declare const self: CloudflareWorkerGlobalScope;

const handler: FetchEventListener = async (event) => {
  const A = `
  by: relevancy
  keyword: iphone
  limit: 60
  newest: 0
  order: desc
  page_type: search
  scenario: PAGE_GLOBAL_SEARCH
  version: 2
  view_session_id: 3003ffcd-db55-4805-8438-de34bc96ab06
`;

  const params = {};
  for (const i of A.split('\n').slice(1, -1)) {
    const [key, value] = i.split(':').map((x) => x.trim());
    params[key] = value;
  }

  const url = 'https://shopee.co.th/api/v4/search/search_items';
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  const response = await fetch(`${url}?${queryString}`, {
    headers: {
      'authority': 'shopee.co.th',
      'method': 'GET',
      'path': '/api/v4/search/search_items?by=relevancy&keyword=iphone&limit=60&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2&view_session_id=3003ffcd-db55-4805-8438-de34bc96ab06',
      'scheme': 'https',
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'th-TH,th;q=0.9,en;q=0.8',
      'Af-Ac-Enc-Dat': 'AAczLjQuMS0xAAABjqhiJuUAABBIAzAAAAAAAAAAAiJ4pX3er/cbtIIrdi/7jMhrAugG7Ff23YkR5nK6vdtJdUg9hKn+Lv82EjQVcrev5p8Cm51HJH5/2qmdhFATAtz74Bv1bzYFY4a2+NLDcv0RdP+rHXb68dnAzQIf1omszIHIAdiKVqCN5c76Dyg8fellUAcRwSqzkeqIz9Ma19Xhy7PmE3b68dnAzQIf1omszIHIAdiKVqCN5c76Dyg8fellUAcRkhWDuPzGQ8tcpsuuG35Kb+m7pS02OJvEIbrnM/6ulXKM2ksDv9Rl3tl3uv4HzymvmPjrKGAe2uix5Xlb3hufjCNO5v5XNpTyMdKhlWkTLm6M2ksDv9Rl3tl3uv4HzymvABlyUxpx+uVjeTWti+2ETg9EB2TZMoBV7mUNPhYq2DINzVFNw7BDUFemhNmJt0Xyf09PeFQGlnnqG++VC86TU5haTbZQU3nSTFW4bWvv4OthR6kJwaX5Q+ab6zd+UuFmhVr5OtVoN3BSpCZUfYqsJLQel4hpE1TAeOjb8PMEnP5ZeN0jWpVWcnfqC28TfdIRKpQ/FVrSP1fTcfosYH8Y3jco1IB3T8hRtpcudIwmO5jSgyRfXL5oYhBq35qkJba8E3lAIW6HSbZruJCwVQDfyAkAd6OKR2S9fU35jwp1IKL9hvQV0xb8RzZIPx+ICWbROXkARndOFz7l7V2++LDe9VaquDS7p2ha00xY4hjJ7r8h9I2Y036hpKOyb7igfQ8pv4phv4g3ThFf0yWVLco8E30u5YrmaWuRacOYoRLWHKTOd46u2BUQ5J2MEmrm3XAIIi5QPliuI4CHnvu6vJ+NvywouqrwYgZUdLOoaIuGbVM/CmZUhTkcqWuWPZW8yi8Ik8KHwFGX7kwrdqCrFwNf4FTuaZtnawUmWBGBIeJOZvaX/zYTJ8PH9tVFw9ppG9ibOH4MocjpljsHow6OyrRle2T3BIYezjb8jk+3tMXFC7FFRdBKCsHvaDtTeGEuaIxW8zTEE7JIwlbVFLZ/Y9bogW618k7nE2z5cN0gwkEL6I2X/zYTJ8PH9tVFw9ppG9ibl/82EyfDx/bVRcPaaRvYm+ZCS0onqqa4ZwMH9tSUUzM=',
      'Af-Ac-Enc-Sz-Token': 'PL35Ijg6ZQSV7Deo1nf9jg==|00uTKU8NQjDt2kCAPeH6xPyLJntc+JRTSmJ+kSpQTOJ42lFUSYB5/qCbw2sYc0P9AN0ky0RjM2FunXY=|FeS44UnvvvEfPwhe|08|3',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Cookie': '__LOCALE__null=TH; csrftoken=VCNb63Y7Ptet0KUL5AD1hYDxeNW4RFoy; _gcl_au=1.1.469384760.1712221515; _med=affiliates; _sapid=ad8f689fe6e266f9c7ff2f6f73b85f5553b1296722f8cc976e7fc276; _QPWSDCXHZQA=68d4698e-f5d0-44b6-fb2f-fb39b32383d8; SPC_SI=S34CZgAAAABCQ0ZYaUR0M2cxgwAAAAAAclJ4YjAzeEE=; SPC_SEC_SI=v1-QnVjMVNkM0ZvS2hlUTBnT1L/e7FWH677HA/KXBvM9UEtQa7Z0/Ym3ALkJZc6XOMJt/v1l5AZ+MAwaR9687CGX6LIkdJRXVOHtMETZVbwvio=; REC7iLP4Q=f7b8a1d9-49f6-4d53-9d58-a6dd7c889938; SPC_F=HYOeFX2jNl5DGsfEubiD52dVhs5TCJ1R; REC_T_ID=73d636cb-f262-11ee-87a7-623f7c7a9df6; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.3.1924061110.1712221517; language=th; SPC_IA=1; SPC_CLIENTID=SFlPZUZYMmpObDVEqvmhrentvtqnbgjr; SPC_EC=.QmxlOVUybEE3M04wZmVwetqE1m9G8H/EfADUtI8o5mAXiru1Bp9btzHRGjMkRBVLx1nLaz+vwXuijsSUnSZWh1y0C+31DIe0STSd+D9iEZrnoQqhRalmhOjV+ETMdgEeZQZPYETx8LXSs1q6KgUeQoTgFpuivxEe5J06jdS0KvSw4hZ9yNOzYPbx5wRDXtNJX/hkGLgltNSe+vH/MdwSbA==; SPC_ST=.QmxlOVUybEE3M04wZmVwetqE1m9G8H/EfADUtI8o5mAXiru1Bp9btzHRGjMkRBVLx1nLaz+vwXuijsSUnSZWh1y0C+31DIe0STSd+D9iEZrnoQqhRalmhOjV+ETMdgEeZQZPYETx8LXSs1q6KgUeQoTgFpuivxEe5J06jdS0KvSw4hZ9yNOzYPbx5wRDXtNJX/hkGLgltNSe+vH/MdwSbA==; SPC_U=94111856; SPC_R_T_ID=1/r/ziR6fIJL3MYx8B/MxGrH+hiCGS+yZGQ06BzubsB0ZXGy13BeGL0X7waiF6m/OVCgf2/uyxIefVyWRRuG7KNeRJqnIg9ubGCh37pJ4KBr7cWTZyOnbsT/sNLrMykgFL0QvPxh6TV3ytq6Kfnnxfx6kijOouCqKZX2K+X8Li8=; SPC_R_T_IV=TEkxNUJYdFphNE93cFRpQg==; SPC_T_ID=1/r/ziR6fIJL3MYx8B/MxGrH+hiCGS+yZGQ06BzubsB0ZXGy13BeGL0X7waiF6m/OVCgf2/uyxIefVyWRRuG7KNeRJqnIg9ubGCh37pJ4KBr7cWTZyOnbsT/sNLrMykgFL0QvPxh6TV3ytq6Kfnnxfx6kijOouCqKZX2K+X8Li8=; SPC_T_IV=TEkxNUJYdFphNE93cFRpQg==; _ga=GA1.1.1944225144.1712221516; _dc_gtm_UA-61914165-6=1; _ga_LB1RXY1EGG=GS1.1.1712221516.1.1.1712221987.54.0.0; shopee_webUnique_ccd=PL35Ijg6ZQSV7Deo1nf9jg%3D%3D%7C00uTKU8NQjDt2kCAPeH6xPyLJntc%2BJRTSmJ%2BkSpQTOJ42lFUSYB5%2FqCbw2sYc0P9AN0ky0RjM2FunXY%3D%7CFeS44UnvvvEfPwhe%7C08%7C3; ds=e5f253d7a93c95db80cdd81958e788b2',
      'Pragma': 'no-cache',
      'Referer': 'https://shopee.co.th/search?keyword=iphone',
      'Sec-Ch-Ua':'"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Sz-Token': 'PL35Ijg6ZQSV7Deo1nf9jg==|00uTKU8NQjDt2kCAPeH6xPyLJntc+JRTSmJ+kSpQTOJ42lFUSYB5/qCbw2sYc0P9AN0ky0RjM2FunXY=|FeS44UnvvvEfPwhe|08|3',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'X-Api-Source': 'pc',
      'X-Csrftoken': 'VCNb63Y7Ptet0KUL5AD1hYDxeNW4RFoy',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Sap-Access-F': '3.2.122.2.0|13|3.4.1-1_5.1.0_0_164|70d76433459d447f9ab8492528f3c74bd8a4f3cdf6674d|10900|1100',
      'X-Sap-Access-S': 'Tbgm_59ejdhVQo0JpvyofFUfeYAePjaKJQEICj_-mB8=',
      'X-Sap-Access-T': '1712221989',
      'X-Sap-Ri': '256f0e66db0f0ab168ad78330301072d96a4a2b52c1ff59e596e',
      'X-Sap-Sec':'ZyTkgDARZmANamANbcA2amzNbcANamzNamABamANHmuNaZzBamARamANqYQvPJ5NamTwaJANTmuNax6tj9ssGRXe3DNiGM0CEu9trUhPb6basQJT6Mf+3qDYkGYA3XM+H672PbwoB8HYRNJV01uY5zCVDznCp14QGYWgLkhx10Su31RJlQRnmErufM6vVHvLHdUQiNYOeXKBkvf2DJSHNvJYoje2v1JV8ft56cghe+bDcygW6A8t0z11K9ACpAKa3SsoMhT29jr6jI/A6QNpS4KuB1BQR25TwkK+8zXBtFxm1NgBIudM58XTLZ8vRpAfDPxmQRxP0vjABs8RXLsdOmr4VZFE3rLyTFlSIvtE1I6TE9Zv53Q4TROZKF4Q3fTMs63tF3M5372IBkaycUCi/mc2nQyNYEXUkctNXq9wY/SgX8zlHurJ0U2MwCnBsTfBnJ8NapISH38Zwxe0bd+jnWKWE4S8ld+jjQUo5wGSjwB6bPuzAQQJc4yeBzplQ4K1kkdcjukr7PZejYEx4aCAinpCv5jWNuGMOZPiqSWCS//8FIif80TRm9GW/CuaJSxrRisgLkYlaMxrYsCfluiHnBbHCUmUD5gbVhsR2/44IDAlgePaO5Z/vGs6dYvQm0aJSiIOHlORbzIoMIx4AjkKJHn2N5B7TrfO7hdgkqyqTy3N/h/Qax1NrBM90jL5zttQf/5/sIbjq0EC+RbJWwd7s2MXANAL/n40UhnQwa9troBVysfSS8lAyDWfEm/ZhGmUAfK4dbQ0PkUQfNE2kn7ytGUBxuoeyOfxvTLABkjqinzqRxDhf8meRtv0LsJCSVxKtZDrabj51rvt6h85FCVVkraM0GIlkmkOJRgx+43ls7DVue9Khuq8hx3kFI4rmBiTAJpjy4qgwpHFDcc1WapMxC3wj/Ck2kXQoW51wPhcsdY5D9ArHIzkbPp3mPdK+otG57OX0jZ/P0pQO0eBe+DSLsGTm8KHQXKPce3xK+51fbvbV4x0EPJyYiSjTkiooXp7hk+utn8lEq2On4uLpcjpTTEJpRK7N3nt9HBYrEEd6jK867PR4vTns+6yrMbbQzP/VC7rD29bI6ZY5GHh2tT/3U7tkRW/kbYDz+QqCgkzeJ2AtmKTxFCH0DN1C2suAnETkJuHNm6VG2huOLOOml2dXTBsGnac1EglK4fVxeBz0CgN8ujwTfhqivIoaYzOgR6mEnT4Ogz2OjQzNcwNamTgfTuXTdygaGQvPo22amANGmANalzNamTolQHMt6E2fXzGcbZG3kVSm59uGc5NamAFjXuqfXj9AcANamA2amRNxmARam5NamA2amANGmANalzNamDRx4NNIWwqFF4X91svsa4scg4bIF5NamAWATTmT41ziFANamD=',
      'X-Shopee-Language': 'th',
      'X-Sz-Sdk-Version': '1.7.8',
      'Vary': 'Accept-Encoding',
      'X-Request-Id': '1f8a1b841541bf7a201626686e346700:000000b638427eb7:0000000000000000'
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
