const validateCommon = (text, type) => {
    if(type === 'money') {
        return text.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '$'
    }
    return text;
}

export default validateCommon;