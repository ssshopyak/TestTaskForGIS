import { makeAutoObservable, makeObservable } from "mobx";

class Store {
    isLogined = false
    constructor() {
        makeAutoObservable(this)
    }
    toAuth() {
        this.isLogined = !this.isLogined
    }
}

export default new Store()