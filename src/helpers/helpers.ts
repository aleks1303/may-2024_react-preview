export const retriveLocalStorage = <T> (key: string) => {
    let object = localStorage.getItem(key) || '';
    if (object) {
        return {} as T
    }
    let parse = JSON.parse(object)
    return parse as T
}