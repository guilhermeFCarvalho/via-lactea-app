import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const UsuarioUtils = {
  getIdUsuarioDoToken: async function () {
    const token: any = await AsyncStorage.getItem('Token');
    const decodeToken: any = jwt_decode(token);
    return decodeToken.userId;
  },
};

export default UsuarioUtils;
