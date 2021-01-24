import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  }
}
/*
AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '123456'
})
*/
