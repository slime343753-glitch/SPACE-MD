require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGM2NVtTQKThUwQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFGBFBkIiOWEDwhoKC1419KKDQkqtVBYoT*vsG9vT0POzO9vJUZGVknjx5Tn0HeYEpmqMGqN9BSXANGWqPrCkRUIFexTEioAMiyCBQgTOyz2f2WAhHzswjQwjH0+hYNsHY00cotm84N*UeXU64VHsDzw4oqyDF4W8K3svdwa0cUvETN9+Ow3QQ45Mr3qVyORDOw1Gs8N1moMHFnn8Dz7YixATnJ7M8owwRmM5R40JMvgY*m3ElZ8eNxF963WzfTdddV6j53nYh6dZxvpQtZWrCtA62q6*BX9u1Gx5dwZf5QhxqbOE9*IxzEi3bPSKnueNZuBju7JG2Ed*hU3zKUTSNUM4wa77Mu2BHDiLb6+aqBYKx5SJrx0rkJ86WM+umR0zXKP2B*Ih3m68Bf8wP8+4mol0L+pq0GZLcepz1EnH3KhF4I*HL6STY5scxT38F7pIPrST*h3dNv8ncTjfX+VooPRJgKdWTARxvZ*Y+zIO9K4TmYG7faV*5GnzpolBhG94X*raQYG+JnJFzSa2J4s2EqzfJWRampXTqwpHyCR+yivwOZfE4ni50T+nxcd4cBiscCXJYLJuQ9mNfYlJF6qw2Z*KRyaW2cpJiPUxXzlnP5LU1Ok8WmZut3Czfj8WpW8zc*B5Ndf329pooQc00Amrv2QEEnTBlBDJc5G1M6QAY1R4KCWIvcgFy0+noehFu1F70qT*wDFZdBfm6n1wij98ItaEl0yYLD1byBjqgJEWIKEXRBFNWkGaBKIUnRIH6518dkKM7e19b26zf64AYE8o2eVWmBYw+dvpxCcOwqHLmNXlotAdEgMp*hhFjOD*RlsUqhyQ84xoZZ8goUGOYUvRzPkRQBFRGKvTTs0YRtbQvRW88U2QbdED2WgeOgAqGvaHYFwVhIPGK2h*8Qb*d2rKwLL*liIEOSF9pCi8r4kDsKxIvSFKb2MafPwG29SLEIE4pUIHhPLwaKZa5DLSaHsZjzTxpxkkDnwN96OKd+fRoc0rZawyhwUfGXSu64ozbGFm8WGcrS9rtA78+TK7lSHz7hyJABb6wu8ebwzaQhB6vLPTEmvicctNxdbCb5c7b5NitN8PLfJrIdl*nK2vsRF3lkF6R68WHeDo*iMUg9oarcCPrBw4FcDFqRdQBEapxiH5tZuqJ0O3hGx+419VN73bls+*ZViY1YTI7NLJTmhONyZq0x+vLWEyov42qRUxXcOEoJOmXVubGwooPDjNuwq*cFDd97YdiX45Jf7xU+KWmdlXtb4zRy*g5bBf436t7B94qjH92fqnx4yn5Fzvqx53XredReGK0yIL4SojpnqienyPHlhIdbVOBlwV9cF1x4Pn8qwPKFLK4IBlQAcwjUuAIdAApqlay0zwuftPM0Pipob1PnkLKtE8b+DhDlMGsBGpPlhSxL4sD6T3LJUU5gfTcvtALa+6uWk03Wll6DLIPVwGt*cacBp5*A1BLAQIUAxQAAAgIAGM2NVtTQKThUwQAAG8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '919434226508',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
