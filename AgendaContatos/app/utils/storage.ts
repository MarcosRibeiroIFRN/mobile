import AsyncStorage from 'expo-storage';
import { Contato } from '../types/Contato';

const STORAGE_KEY = 'contatos';

export async function listarContatos(): Promise<Contato[]> {
  try {
    const data = await AsyncStorage.getItem({ key: STORAGE_KEY });
    console.log('Dados lidos do storage:', data);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erro ao ler contatos do storage:', error);
    return [];
  }
}

export async function listarFavoritos(): Promise<Contato[]> {
  const todos = await listarContatos();
  return todos.filter(c => c.favorito);
}

export async function salvarContato(novo: Contato): Promise<boolean> {
  console.log(novo.email, novo.nome);
  const contatos = await listarContatos();
  console.log('Contatos já salvos:', contatos); 
  const existe = contatos.some(c => c.email === novo.email);
  if (existe) {
    console.log('Já existe contato com esse email!');
    return false;
  }
  const atualizados = [...contatos, novo];
  await AsyncStorage.setItem({ key: STORAGE_KEY, value: JSON.stringify(atualizados) });
  console.log('Contato salvo no storage:', atualizados);
  return true;
}