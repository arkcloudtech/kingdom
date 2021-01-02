import http from "../http-common";

class KingsGuardService {
    getGuards() {
        return http.get('/guards/');
    }

    createGuard(guardData) {
        return http.post('/guards', guardData);
    }

    deleteGuard(id) {
        return http.delete(`/guards/${id}`);
    }

    deleteAllGuards() {
        return http.delete('/guards');
    }

    activateGuard(id) {
        return http.get('/guards/${id}');
    }

    alertGuard(id, data) {
        return http.put(`/guards/${id}`, data);
    }

    deactivateGuard(id) {
        return http.put(`/guards/${id}`, data);
    }

    deactivateAll() {
        return http.put('/guards');
    }

    findByTitle(title) {
        return http.get(`/guards?title=${title}`);
    }
}

export default new KingsGuardService();