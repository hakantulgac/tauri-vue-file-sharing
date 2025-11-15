import http from "./http"

const getChannels = () => {
    return http.get('/api/channels')
}

const deleteChannel = (channelId) =>  {
    return http.delete('/api/channels/' + channelId)
} 

const getIpAddress = () => {
    return http.get('/api/ip_address')
}

export {
    getChannels,
    getIpAddress,
    deleteChannel
}