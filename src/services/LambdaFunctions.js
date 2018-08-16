import Lambda from '@/services/Lambda'

export default {
  getEmail () {
    return Lambda().get('getEmail')
  },
  getPhoneNumber () {
    return Lambda().get('getPhoneNumber')
  }
}
