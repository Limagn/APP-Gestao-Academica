import AsyncStorage from "@react-native-async-storage/async-storage";
import { SubjectStorageDTO } from "./subjectStorageDTO";
import { SUBJECT_COLLECTION } from "../storageConfig";


export async function subjectGetAll() {
  try {
    const storage = await AsyncStorage.getItem(SUBJECT_COLLECTION)
    const subjects: SubjectStorageDTO[] = storage ? JSON.parse(storage) : []
    console.log("Dados armazenados:", subjects);
    
    return subjects
  } catch (error) {
    throw error;
  }
}