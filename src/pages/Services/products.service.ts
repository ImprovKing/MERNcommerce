import axios from "axios"

const ServerURI = "http://localhost:5000/";

class Service {

    //Women Section
    static getWomenSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/women`).then();
    }

    static sortWomenSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/women/price`).then()
    }

    //Men Section
    static getMenSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/men`).then()
    }

    static sortMenSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/men`).then()
    }

    //Accessories 
    static getAccessoriesSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/accessories`).then()
    }

    static sortAccessoriesSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/accessories/price`).then()
    }

    //New Arrival 
    static getNewArrivalSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/newarrival`).then()
    }

    static sortNewarrivalSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/newarrival/price`).then()
    }

    //Jewelries 
    static getJewelriesSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/jewelries`).then()
    }

    static sortJewelriesSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/jewelries/price`).then()
    }

    //Popular 
    static getPopularSectionProducts = () => {
        return axios.get(`${ServerURI}/Products/popular`).then()
    }

    static sortPopularSectionProductsByPrice = () => {
        return axios.get(`${ServerURI}/Products/popular/price`).then()
    }

}

export default Service ;