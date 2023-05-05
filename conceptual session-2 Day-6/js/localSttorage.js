const localStorage = () => {
    const keyField = document.getElementById('key')
    const key = keyField.value;


    const valueField = document.getElementById('value')
    const value = valueField.value;
    keyField.value = '';
    valueField.value = '';
    localStorage.setItem(key, value)
}