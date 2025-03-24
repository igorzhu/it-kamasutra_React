import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
        headers: {
            "API-KEY": "cd41c8ab-56d8-43e8-b25c-fe32ab509e2d"
        }

});

export const usersAPI = {
    getUsers (pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId)  {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId)  {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please, use profileAPI object.');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
   updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}