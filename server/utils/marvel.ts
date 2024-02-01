import * as crypto from 'crypto'

// Function to generate a timestamp
const generateTimestamp = (): string => {
  return Math.floor(new Date().getTime() / 1000).toString()
}

// Function to generate the hash using md5
const generateHash = (
  timestamp: string,
  privateKey: string,
  publicKey: string
): string => {
  const dataToHash = timestamp + privateKey + publicKey
  return crypto.createHash('md5').update(dataToHash).digest('hex')
}

// Function to make an authenticated API call
export const makeAuthenticatedAPICall = (type: string): string => {
  const publicKey = process.env.APP_MARVEL_API_PUBLIC
  const privateKey = process.env.APP_MARVEL_API_PRIVATE
  const timestamp = generateTimestamp()
  const hash = generateHash(timestamp, privateKey, publicKey)

  // Construct the API call with the generated timestamp, public key, and hash
  return `http://gateway.marvel.com/v1/public/${type}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
}
