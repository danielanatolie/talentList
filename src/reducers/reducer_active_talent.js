export default function(state = null, action) {
    switch(action.type) {
        case 'TALENT_SELECTED':
            return action.payload;
    }
    return state;
}
