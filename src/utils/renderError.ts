import { Alert } from 'react-native';
import { AppError } from '@/utils/appError';

export function renderError(error: any, alternativeMessage: string) {
  console.error('Erro detectado:', error);
  
  const isAppError = error instanceof AppError;
  
  // Verifica se é um erro de rede
  if (isNetworkError(error)) {
    Alert.alert(
      'Erro de Conexão',
      'Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente.'
    );
    return;
  }

  // Verifica se é um erro de validação do backend
  if (isValidationError(error)) {
    const message = error.response?.data?.message || alternativeMessage;
    Alert.alert('Erro de Validação', message);
    return;
  }

  // Erro de autenticação
  if (isAuthError(error)) {
    Alert.alert(
      'Erro de Autenticação',
      'Sua sessão expirou ou você não tem permissão para acessar este recurso.'
    );
    return;
  }

  // Retorna mensagem de erro específica ou alternativa
  const message = isAppError ? error.message : alternativeMessage;
  Alert.alert('Ops!', message);
}

function isNetworkError(error: any): boolean {
  return (
    error.code === 'NETWORK_ERROR' ||
    error.code === 'ECONNABORTED' ||
    error.message?.includes('Network Error') ||
    error.message?.includes('timeout') ||
    !error.response
  );
}

function isValidationError(error: any): boolean {
  return error.response?.status === 400 || error.response?.status === 422;
}

function isAuthError(error: any): boolean {
  return error.response?.status === 401 || error.response?.status === 403;
}
