/* eslint-disable no-useless-catch */
import { Alert } from 'react-native';

export class ErrorHandler {
  static handle(error: any, defaultMessage: string = 'Ocorreu um erro inesperado'): void {
    console.error('Erro detectado:', error);

    // Verifica se é um erro de rede
    if (this.isNetworkError(error)) {
      Alert.alert(
        'Erro de Conexão',
        'Não foi possível conectar ao servidor. Verifique sua conexão com a internet e tente novamente.'
      );
      return;
    }

    // Verifica se é um erro de validação do backend
    if (this.isValidationError(error)) {
      const message = error.response?.data?.message || 'Dados inválidos fornecidos';
      Alert.alert('Erro de Validação', message);
      return;
    }

    // Erro de autenticação
    if (this.isAuthError(error)) {
      Alert.alert(
        'Erro de Autenticação',
        'Sua sessão expirou ou você não tem permissão para acessar este recurso.'
      );
      return;
    }

    // Erro genérico
    Alert.alert('Erro', error.message || defaultMessage);
  }

  private static isNetworkError(error: any): boolean {
    return (
      error.code === 'NETWORK_ERROR' ||
      error.code === 'ECONNABORTED' ||
      error.message?.includes('Network Error') ||
      error.message?.includes('timeout') ||
      !error.response
    );
  }

  private static isValidationError(error: any): boolean {
    return error.response?.status === 400 || error.response?.status === 422;
  }

  private static isAuthError(error: any): boolean {
    return error.response?.status === 401 || error.response?.status === 403;
  }
}