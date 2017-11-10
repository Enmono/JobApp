/**
 * Created by WEB-UID-JAVA on 2017/11/8.
 */
const STORAGE_KEY = 'TODOS_LIST'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
