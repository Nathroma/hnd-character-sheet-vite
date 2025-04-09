import { CharacterDatas } from "@/types/characterType";
import { Equipment } from "@/types/itemType";

const useEquipment = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {

  
    const addEquipement = (equipement: Equipment) => {
      const newCharacterDatas = { ...characterDatas };
      newCharacterDatas.inventory.equipments.push(equipement);
      setCharacter(newCharacterDatas);
    };
  
    const editEquipement = (equipementId: number, equipement: Equipment) => {
      const newCharacterDatas = { ...characterDatas };
      const index = newCharacterDatas.inventory.equipments.findIndex(e => e.id === equipementId);
      if (index !== -1) {
        newCharacterDatas.inventory.equipments[index] = equipement;
        setCharacter(newCharacterDatas);
      }
    };
  
    const removeEquipement = (equipementId: number) => {
      const newCharacterDatas = { ...characterDatas };
      newCharacterDatas.inventory.equipments = newCharacterDatas.inventory.equipments.filter(equipement => equipement.id !== equipementId);
      setCharacter(newCharacterDatas);
    };
  

  return { addEquipement, editEquipement, removeEquipement };
};

export default useEquipment;