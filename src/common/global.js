import m_contacts from '../mocks/contact'

/*
这个对象是做缓存用的
脚本语言就是不好 随便存东西 到底有啥都不知道
*/
export default {
  getContact(v) {
    if (this._contact) {
      return v ? this._contact[v] : this._contact
    } else {
      let contactObj = {}
      m_contacts.forEach((v) => {
        contactObj[v.id] = v
      })
      this._contact = contactObj
      return this.getContact(v)
    }
  },
  setContact(k, v) {
    if (v) {
      if (this._contact) this._contact[k] = v
      else {
        this._contact = {}
        this._contact[k] = v
      }
    } else {
      this._contact = k
    }
  },
  getUserInfo() {
    return this._userInfo
  },
  setUserInfo(v) {
    this._userInfo = v
  }

}
