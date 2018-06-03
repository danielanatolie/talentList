export function selectTalent(talent) {
    return {
        type: 'TALENT_SELECTED', 
        payload: talent
    };
}