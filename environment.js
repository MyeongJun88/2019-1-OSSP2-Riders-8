const path = require('path');
const fs = require('fs');

const {
  NODE_ENV = 'development',

  HTTP_PORT = '8080',
  HTTPS_PORT = '8443',

  GITHUB_CLIENT_ID = 'd60e3227a1d0d157e70e',
  GITHUB_CLIENT_SECRET = 'bd9e47f879a752172def01f902bd2423d8f22550',
  GITHUB_WEBHOOK_SECRET = 'bd9e47f879a752172def01f902bd2423d8f22550',

  CREDENTIALS_ENABLED = '0',
  CREDENTIALS_PATH,
  CREDENTIALS_CA,
  CREDENTIALS_KEY,
  CREDENTIALS_CERT,
} = process.env;

const isEnabled = v => v === '1';

const __PROD__ = NODE_ENV === 'production';
const __DEV__ = !__PROD__;

const httpPort = parseInt(HTTP_PORT);
const httpsPort = parseInt(HTTPS_PORT);

const githubClientId = GITHUB_CLIENT_ID;
const githubClientSecret = GITHUB_CLIENT_SECRET;
const githubWebhookSecret = GITHUB_WEBHOOK_SECRET;

const read = (file) => fs.readFileSync(path.resolve(CREDENTIALS_PATH, file));
const credentials = isEnabled(CREDENTIALS_ENABLED) && {
  ca: read(CREDENTIALS_CA),
  key: read(CREDENTIALS_KEY),
  cert: read(CREDENTIALS_CERT),
};

const buildPath = path.resolve(__dirname, 'build');
const frontendBuildPath = path.resolve(buildPath, 'frontend');
const backendBuildPath = path.resolve(buildPath, 'backend');

const srcPath = path.resolve(__dirname, 'src');
const frontendSrcPath = path.resolve(srcPath, 'frontend');
const backendSrcPath = path.resolve(srcPath, 'backend');

const apiEndpoint = '/api';

module.exports = {
  __PROD__,
  __DEV__,
  httpPort,
  httpsPort,
  githubClientId,
  githubClientSecret,
  githubWebhookSecret,
  credentials,
  frontendBuildPath,
  backendBuildPath,
  frontendSrcPath,
  backendSrcPath,
  apiEndpoint,
};
