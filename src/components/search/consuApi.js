import axios from 'axios'; 
require('dotenv').config(); 

const API_URL = process.env.REACT_APP_API_URL 
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL
const API_KEY = process.env.REACT_APP_API_KEY
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY
const STORAGE_KEY_SET_DATE = process.env.REACT_APP_STORAGE_KEY_SET_DATE
const STORAGE_GRANTED_TYPE = process.env.REACT_APP_STORAGE_GRANTED_TYPE

const storage = window.localStorage

//valid token
const prepare = () => {
    let bearerToken = storage.getItem(STORAGE_KEY)
    let bearerTokenDate = storage.getItem(STORAGE_KEY_SET_DATE)
    let bearerTokenType = storage.getItem(STORAGE_GRANTED_TYPE)
     console.log('prepping with ' + bearerTokenType)
    if (
      !bearerToken ||
      !bearerTokenDate ||
      (bearerTokenType === GRANT_TYPE &&
        bearerTokenDate < Math.floor(Date.now() / 1000) - 24 * 3600)
    ) {
      console.log('getting a new client token')
      return getClientToken()
    } else {
      return new Promise(resolve => {
        resolve(bearerToken)
      })
    }
}

  const packageData = data => {
    const form = new FormData()
    for (const key in data) {
      form.append(key, data[key])
    }
    return form
  }; 
  const getClientToken = id => {
    const data = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: API_KEY
    };
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: TOKEN_URL,
        data: packageData(data),
        config: {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      })
        .then(response => {
          storage.setItem(STORAGE_KEY, response.data.access_token)
          storage.setItem(STORAGE_KEY_SET_DATE, Math.floor(Date.now() / 1000))
          storage.setItem(STORAGE_GRANTED_TYPE, GRANT_TYPE)
          const bearerToken = response.data.access_token
          resolve(bearerToken)
        })
        .catch(error => {
          console.log('error ' + error)
          reject(error)
        })
    })
  }; 

  /**
   * Search for a product
   */

  const searchProduct = phrase => {
    console.log(phrase); 
    return makeApiRequest(
      API_URL + `products?page=1&per_page=100&phrase=${phrase}`
    )
  }; 

  /**
   * Get a product by product ID
   */
  const getProduct = id => {
    return makeApiRequest(API_URL + 'products/' + id)
  }

  /**
   * Make api request from api url end point
   */
  const makeApiRequest = url => {
    return prepare().then(token => {
      return axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
    })
  }

export {
    makeApiRequest,
    getProduct,
    searchProduct,
  }; 
