import http from "../http-common";

class CitizenService {
    listCitizens() {
        return http.get('/citizens/');
    }

    grantCitizenship(citizenInfo) {
        return http.post('/citizens', citizenInfo);
    }

    revokeCitizenship(id) {
        return http.delete(`/citizens/${id}`);
    }

    revokeAllCitizenships() {
        return http.delete('/citizens');
    }

    enterCitizen(citizenInfo) {
        return http.get(`/guards/${citizenInfo.id}`);
    }

    updateCitizen(citizenInfo) {
        return http.put(`/citizens/${citizenInfo.id}`, citizenInfo);
    }

    exitCitizen(id) {
        return http.put(`/citizens/${id}`);
    }

    exitAllCitizens(permissions) {
        return http.put('/citizens', permissions);
    }

    locateCitizen(citizenID) {
        return http.get(`/citizens?citizenID=${citizenID}`);
    }
}

export default new CitizenService();