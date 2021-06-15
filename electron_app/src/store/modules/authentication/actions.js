import { HTTP } from '@/plugins/axios'

const debugLogin = ({commit}) => {
    localStorage.token='token';
    commit('SET_AUTHENTICATED', true);
    commit('SET_USER', {
      first_name: "Eduard",
      last_name: "Terlouw",
      gender: "male",
      age: 21
  });
   
}

const getClientData = (context) => {
  return HTTP.get(context.rootGetters["api/GET_CLIENT_URL"]).then((response)=>{context.commit("SET_USER", response.data); console.log(response)});
}

const login = (context, payload) => {
    return HTTP.post(context.rootGetters["api/GET_LOGIN_EXTENSION"], payload).then((response)=>{
      //TODO: Remove this log in production
      console.log(response);
      localStorage.token=response.data.token;
      localStorage.userId = response.data.userId;
      // HTTP.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      
      context.commit('SET_AUTHENTICATED', true);
      return true;
    }
  ).catch(()=>{
    context.commit('SET_AUTHENTICATED', false);
    return false;
  })
}

const signOut = ({commit}) => {
  if(localStorage.token){
    localStorage.removeItem('token');
    commit('SET_AUTHENTICATED', false);
  }
}

const checkAuthenticated = ({commit}) => {
  if(localStorage.token){
    commit('SET_AUTHENTICATED', true);
  }
}

export default {
  debugLogin,
  login,
  signOut,
  checkAuthenticated,
  getClientData
}