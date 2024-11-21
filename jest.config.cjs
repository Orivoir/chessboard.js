/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended/all'],
  testRegex: '/__tests__/.*(\\.|/)(test|spec)\\.[jt]sx?$',

  testEnvironmentOptions: {
    html: '<html lang="fr"></html>',
    url: 'https://lorem.ipsum/',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  },
}
