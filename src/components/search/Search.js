import axios from 'axios'; 

const API_URL = 'https://consupedia.se/api/v2/'
const TOKEN_URL = 'https://consupedia.se/oauth/token'
const API_KEY = '39UF0fV2OunjNnhlgfRMdvSqtpjZK7HmGoxLvmvY'
//  const API_KEY = 'q1tnWxDWObB0KhWO4MZnUc8Abe6MkmUk53UAqMjK' // students
const GRANT_TYPE = 'client_credentials'
const GRANT_TYPE_USER = 'password'
const CLIENT_ID = 1
const STORAGE_KEY = 'consuToken'
const STORAGE_KEY_SET_DATE = 'consuTokenDate'
const STORAGE_GRANTED_TYPE = 'consuTokenGrantType'

const storage = window.localStorage

//  Borde kolla att den är valid också
const prepare = () => {
    let bearerToken = storage.getItem(STORAGE_KEY)
    let bearerTokenDate = storage.getItem(STORAGE_KEY_SET_DATE)
    let bearerTokenType = storage.getItem(STORAGE_GRANTED_TYPE)
    //  console.log('prepping with ' + bearerTokenType)
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
  
  const clearStorage = () => {
    // TODO: Funktion som loggar ut / rensar localStorage ifall token gått ut!
  }
  
  //NOTE: funktionerna nedan används i samband med att skapa/logga in en användare 

  const packageData = data => {
    const form = new FormData()
    for (const key in data) {
      form.append(key, data[key])
    }
    return form
  }
  
  // const getUserToken = (username, password) => {
  //   const data = {
  //     grant_type: GRANT_TYPE_USER,
  //     client_id: CLIENT_ID,
  //     client_secret: API_KEY,
  //     username: username,
  //     password: password
  //   }; 
  //   return new Promise((resolve, reject) => {
  //     axios({
  //       method: 'post',
  //       url: TOKEN_URL,
  //       data: packageData(data),
  //       config: {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/x-www-form-urlencoded'
  //         }
  //       }
  //     })
  //       .then(response => {
  //         storage.setItem(STORAGE_KEY, response.data.access_token); 
  //         storage.setItem(STORAGE_KEY_SET_DATE, Math.floor(Date.now() / 1000)); 
  //         storage.setItem(STORAGE_GRANTED_TYPE, GRANT_TYPE_USER); 
  //         const bearerToken = response.data.access_token

  //         resolve(bearerToken); 
  //       })
  //       .catch(error => {
  //         console.log('error ' + error)
  //         reject(error); 
  //       }); 
  //   }); 
  // }
  // const createUser = obj => {
  //   const data = obj
  //   return prepare().then(token => {
  //     return new Promise((resolve, reject) => {
  //       axios({
  //         method: 'post',
  //         url: API_URL + 'signup',
  //         data: packageData(data),
  //         config: {
  //           headers: {
  //             Accept: 'application/json',
  //             Authorization: 'Bearer ' + token
  //           }
  //         }
  //       })
  //         .then(response => {
  //           resolve(response)
  //         })
  //         .catch(error => {
  //           console.log('error signup' + error)
  //           reject(error)
  //         })
  //     })
  //   })
  // }
  const getClientToken = id => {
    const data = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: API_KEY
    }
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
  }
  /**
   * Get a product by bar code
   * @param {code} ean or other barcode
   * @returns {object} product object
   */
  // const getProductByCode = code => {
  //   return makeApiRequest(API_URL + 'products?page=1&per_page=1&gtin=' + code)
  // }


  /**
   * Search for a product
   * @param {phrase} any string
   * @returns {object} products object
   */
  const searchProduct = phrase => {
      console.log(phrase); 
    // return makeApiRequest(API_URL + 'products?page=1&per_page=50&is_vegan=1&phrase=' + phrase)
    return makeApiRequest(
      API_URL + 'products?page=1&per_page=50&phrase=' + phrase
    )
  }




  /**
   * Get a product by product ID
   * @param {ID} product ID
   * @returns {object} product object
   */
  const getProduct = id => {
    return makeApiRequest(API_URL + 'products/' + id)
  }

  /**
   * Get a product by product ID STUDENT
   * @param {ID} product ID
   * @returns {object} product object
   */
  // const getStudentProduct = id => {
  //   return makeApiRequest(
  //     'https://consupedia.se/api/' + 'students/products/' + id
  //   )
  // }
  /**
   * Get current user details
   * @returns {object} logged in user object
   */
  // const getUser = id => {
  //   return makeApiRequest(API_URL + 'currentuser')
  // }
  /**
   * Get a users primary consumer details
   * @returns {object} consumer details
   */
  // const getUserPrimary = id => {
  //   return makeApiRequest(API_URL + 'users/' + id + '/primaryconsumer')
  // }
  const getItemById = (endpoint, id) => {
    return makeApiRequest(API_URL + endpoint + '/' + id)
  }
  const getByEndPoint = endpoint => {
    return makeApiRequest(API_URL + endpoint)
  }
  const searchIngredient = phrase => {
    return makeApiRequest(API_URL + 'ingredients?phrase=' + phrase)
  }


  /**
   * Make api request from api url end point
   * @param {url} valid api url
   * @returns {object} response object
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

  // const makePostRequest = (url, data) => {
  //   return prepare().then(token => {
  //     return axios.post(url, data, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         Accept: 'application/json',
  //         Authorization: 'Bearer ' + token
  //       }
  //     })
  //   })
  // }
  // const makeDeleteRequest = (url, data) => {
  //   return prepare().then(token => {
  //     return axios.delete(API_URL + url, data, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         Accept: 'application/json',
  //         Authorization: 'Bearer ' + token
  //       }
  //     })
  //   })
  // }; 
  

// export default Search;
export {
    // getProductByCode,
    searchIngredient,
    getItemById,
    // getUserToken,
    getByEndPoint,
    // makePostRequest,
    // makeDeleteRequest,
    makeApiRequest,
    getProduct,
    searchProduct,
    // getUser,
    clearStorage,
    // getUserPrimary,
    // createUser,
    // getStudentProduct
  }; 
