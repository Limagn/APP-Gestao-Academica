import AsyncStorage from "@react-native-async-storage/async-storage";
import { SubjectStorageDTO } from "./subjectStorageDTO";
import { SUBJECT_COLLECTION } from "../storageConfig";
import { subjectGetAll } from "./subjectGetAll";


export async function subjectCreate(newSubject: SubjectStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(SUBJECT_COLLECTION);
    const subjects = storage ? JSON.parse(storage) : [];
    const updatedSubjects = [...subjects, newSubject];
    
    await AsyncStorage.setItem(SUBJECT_COLLECTION, JSON.stringify(updatedSubjects));

  } catch (error) {
    console.error("Erro: ", error);
    throw error;
  }
}