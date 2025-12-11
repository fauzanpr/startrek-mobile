import LoginPage from '@/features/auth/login';

import { Redirect } from 'expo-router';
import * as SecureStore from "expo-secure-store";

function IndexSreen() {
  if (!!SecureStore.getItem("access")) {
    return <Redirect href={"/(tabs)/home"} />
  };

  return (
    <LoginPage />
  )
}

export default IndexSreen;