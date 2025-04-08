import { CharacterDatas } from "@/types/characterType";
import { SpellType } from "@/types/spellType";

const useSpell = (characterDatas: CharacterDatas, setCharacter: (data: CharacterDatas) => void) => {

  const addSpell = (spell: SpellType) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.spells.push(spell);
    setCharacter(newCharacterDatas);
  };

  const editSpell = (spellId: number, spell: SpellType) => {
    const newCharacterDatas = { ...characterDatas };
    const index = newCharacterDatas.spells.findIndex(spell => spell.id === spellId);
    if (index !== -1) {
      newCharacterDatas.spells[index] = spell;
      setCharacter(newCharacterDatas);
    }
  };

  const removeSpell = (spellId: number) => {
    const newCharacterDatas = { ...characterDatas };
    newCharacterDatas.spells = newCharacterDatas.spells.filter(spell => spell.id !== spellId);
    setCharacter(newCharacterDatas);
  };

  return { addSpell, editSpell, removeSpell };
};

export default useSpell;