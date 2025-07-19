import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest', // TypeScriptを使用している場合
  testEnvironment: 'node', // DOMが不要なら 'node'。React等なら 'jsdom'
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // 例: import x from '@/utils/x'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  clearMocks: true, // 各テスト後にモックをクリア
  verbose: true, // テストごとの詳細なログ出力
}

export default config
