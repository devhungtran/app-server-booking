


const generateToken = () =>{
    const length = 39
    let token = "IDS"
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        token += char.charAt(randomIndex);
    }
    token +="." 
    for (let i = 0; i < 19; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        token += char.charAt(randomIndex);
    }
    return token 

}

module.exports = {
    generateToken
}