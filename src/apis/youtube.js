import axios from 'axios'

const KEY = 'AIzaSyAczedXULQLgOpWEYQ1j_SXJJSloBu34cM'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})