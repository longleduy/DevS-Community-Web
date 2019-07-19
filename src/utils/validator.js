export const validEmail = (email) => {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) return false
    return true
}
export const passWordRegx = (passWord) => {
    //Todo: Ít nhất 6 ký tự, chữ hoa, thường và số
    let regx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    if (regx.test(passWord)) return true;
    return false;
}