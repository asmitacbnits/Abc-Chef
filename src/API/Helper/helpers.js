
export const apiBaseUrl = `http://localhost:5073`;


export const updateObject = (oldObj, newObj) => {
    //console.log("state===>",{ ...oldObj});
    //console.log("state===>",{ ...newObj});
    return { ...oldObj, ...newObj };
}

export const getMethod = (type)=>{
    let obj = {
        ADD:"post",
        UPDATE:"put",
        DELETE:"delete",
        GET:"get",
        GET_ALL:"get"
    }
    return obj[type];
}

export const getAuthToken = localStorage.getItem("access-token");
//export const getAuthUserId = localStorage.getItem("adminId");
//export const getAuthUserImage = localStorage.getItem("profileImg");
export const getImageUrl = imgUrl => apiBaseUrl+'/'+imgUrl;