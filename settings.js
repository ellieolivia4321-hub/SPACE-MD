require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJBIVFzVM59zYAQAAIMHAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9lYl81WhZFYmoiEELFygFxQ0n+iGFBJIlwcxExQ7*fYKyq7sfZnpqeEpyuffcc8693wApMUM2aoD+DVQUXyBH7ZI3FQI6GNVRhCjoghByCHRQL5XXZhQ5XLo6BV1H1o01svB6sfOU+7uOOu0fFTMS*P1MeQGPLqjqU46D3wS0Eu++GZ7RZu*NIkMMKteMonlKgv7bbLfCpVHfx9cRdeY78wU82ogQU0xis0pQgSjMbdS4ENPPwS8XsTO24iQtUtHpZNs6d206vMXn3l11ud2pZ9F5VRSKLWSfg2+qg2vuWtobnEj2Noo0TfEj0TGl1dlB6So7pof5aXyyJ*n8CZ*hmKBwHiLCMW8+z*ucjWSrszVWfqZqPcnpwGwzvUNVTc47Ye6nN22RFqZWy+bngENSk0g4q0txSEp*tw7tlTVz74VrX7aukw72oinMTBYMp9mvwF364ZXs**A+XU693N*D8h4cSZP3V+jiazvV90zb5HY2fD3kconluJwFn4O*2JL8Mp2RA52Gr+VxQqS9tgunaS+69zfW4up2msq5NJvePv4JH*Ka*g4lFrf9LLhNtiSQrbnvRfsqiNjqyjMbz7Ukx9Glw2aNOmZhM9IkUnJvYqmqlw7ZYXh4S+gIuh3jUHprGtc3dTewzNP4+vJeUYaaeQh08dEFFMWYcQo5Lkm7J8lCF8Dw4qGAIv5OL3CKQ8X3VjGgK5PGJMVrCbn7YbOGnHssufZsoyOYN56b2QvogoqWAWIMhTPMeEmbBWIMxogB*a+vXUDQjT+Fa9PJYhdEmDK+JXWVlzD8UPXjEAZBWRPuNSQYtwtEgS783EacYxKzlseaQBok+ILGCeQM6BHMGfpRIaIoBDqnNfrRteMybIn3zImsrLQh6ILiXRAcAh1IsqIJsqTJQl8c6qr4J*tybePCqvpCEAddQGB7HbxCmv1xLWkegi7In281TVJEURpIfVFV2sft*uMH6jZJiDjEOQM6GC9PS9ooq7h*ie+G75uNYdiG0TL5UeWHXZ5y8Lc1Cbc5HO9GkixUjpPcOnzhK0XQz93NREkG6cY7XbenNPinIEAHk+Oo3In0VC17pKntHGeM5dvNwgrvWBP6abMKe71kM+gPrln*VfCZGUpTQxVITpukw5wGbXf126zx8rfp0mlQ1BB1ZLy02UJ0wQH6NRkaFTi4Ha*mdngSDn6du9HgLJVlYqlr6767mIvylvnKcmtIhsiSt5OZVVUcUPcoJGIgkUl4zWX7cFtm8hFmNpaPc8UwnkZ+b6T8+wDD7xZr9Wt*I4ze58F3mf5bzyfy1nfCo*tLkO8j5l*adHTyhKO8s*Zxvgr50N6kZRDRzdSxiFNthBuaI0UQCm0yVWTweHztgiqHPCppAXTAihMEXUDLunXxnETlbzKNDTY349hq684h48bPztjgAjEOiwro4mAgqgOl35eft1xaVjPIEqADUsijU+vyxqgqj0P+0WfAaL9FPAWPvwFQSwECFAMUAAAICACQSFRc1TOfc2AEAACDBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACIBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348032830619',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'ellieolivia4321_hub',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 23234321,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '7870531135:AAH9nsAwkjjLFEtyYdfKUVYeXXXY3Ri01AA',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 5,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user