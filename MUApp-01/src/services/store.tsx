import React from "react";
import UserAPI from "./APIBEELAND/User";

export class Store{
    user: string

    constructor(){
        this.user = ''
    }
}

class BDS extends React.Component<any, any> {
    store: Store
    
    constructor(props: any){
        super(props);
        this.store = new Store();
    }

    authorize = () => {
            return UserAPI.currentUser().then(infor => {
                if(infor){
                    this.store.user = infor.data.data.HoTen
                }
            }).catch(ex => {
                if((ex as any)?.response?.status === 401){
                throw new Error("401")
            }
        })
    }
}

export const bds = new BDS({});