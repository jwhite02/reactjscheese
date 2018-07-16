export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';

export function chooseCat (cat) {
    const action = {
        type: CHOOSE_CATEGORY,
        cat
    }
    return action;
}