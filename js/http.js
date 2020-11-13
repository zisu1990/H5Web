
function axiosPostRequst(url, data) {
    let result = axios({
        method: 'post',
        url: url,
        data: data,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + "&";
            }
            return ret;
        }],
        header: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(resp => {
        return resp.data;
    }).catch(error => {
        return "exception=" + error;
    });
    return result;
}

//get请求
function axiosGetRequst(url) {
    var result = axios({
        method: 'get',
        url: url
    }).then(function (resp) {
        return resp.data;
    }).catch(function (error) {
        return "exception=" + error;
    });
    return result;
}

//消息提示框
function showModel(msg = "请求错误") {
    let time = -1
    clearTimeout(time)
    let showModle = document.querySelector('.showModle')
    showModle.style.display = "block"
    showModle.innerHTML = msg
    setTimeout(() => {
        showModle.style.display = "none"
    }, 1900);
}