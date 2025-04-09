import { CharacterDatas } from "@/types/characterType";
import { ImportantItem, KnownCharacter } from "@/types/noteType";

const usePlayerNote = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {

    const updatePlayerNote = (playerNote: string) => {
        const newCharacterDatas = { ...characterDatas };
        newCharacterDatas.playerNotes.note = playerNote;
        setCharacter(newCharacterDatas);
    };
    
    const addKnownCharacter = (knownCharacter: KnownCharacter) => {
          const newCharacterDatas = { ...characterDatas };
          newCharacterDatas.playerNotes.knownCharacters.push(knownCharacter);
          setCharacter(newCharacterDatas);
        };
      
    const editKnownCharacter = (knownCharacterId: number, knownCharacter: KnownCharacter) => {
        const newCharacterDatas = { ...characterDatas };
        const index = newCharacterDatas.playerNotes.knownCharacters.findIndex(e => e.id === knownCharacterId);
        if (index !== -1) {
            newCharacterDatas.playerNotes.knownCharacters[index] = knownCharacter;
            setCharacter(newCharacterDatas);
        }
    };
      
    const removeKnownCharacter = (knownCharacterId: number) => {
        const newCharacterDatas = { ...characterDatas };
        newCharacterDatas.playerNotes.knownCharacters = newCharacterDatas.playerNotes.knownCharacters.filter(knownCharacter => knownCharacter.id !== knownCharacterId);
        setCharacter(newCharacterDatas);
    };

    const addImportantItem = (importantItem: ImportantItem) => {
          const newCharacterDatas = { ...characterDatas };
          newCharacterDatas.playerNotes.ImportantItem.push(importantItem);
          setCharacter(newCharacterDatas);
        };
      
    const editImportantItem = (importantItemId: number, importantItem: ImportantItem) => {
        const newCharacterDatas = { ...characterDatas };
        const index = newCharacterDatas.playerNotes.ImportantItem.findIndex(e => e.id === importantItemId);
        if (index !== -1) {
            newCharacterDatas.playerNotes.ImportantItem[index] = importantItem;
            setCharacter(newCharacterDatas);
        }
    };
      
    const removeImportantItem = (importantItemId: number) => {
        const newCharacterDatas = { ...characterDatas };
        newCharacterDatas.playerNotes.ImportantItem = newCharacterDatas.playerNotes.ImportantItem.filter(item => item.id !== importantItemId);
        setCharacter(newCharacterDatas);
    };

  return { updatePlayerNote, addKnownCharacter, editKnownCharacter, removeKnownCharacter, addImportantItem, editImportantItem, removeImportantItem };
};

export default usePlayerNote;