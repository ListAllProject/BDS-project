import { Store } from "antd/lib/form/interface";
import { API } from "../api";

let HomeAPI = {
    //k biet api nen tam thoi ghi ten zị
    getList(sortby:string,order:string,limit:number,offset:number) { 
        let params = ""

        if(sortby){
            params = params + `sortby=${sortby}&`
        }
        return API().get(`/abc/xyz?${params}`);
      },
    getById(id:number) { 
        return API().get(`/abc/xyz/${id}`);
      },
    create(obj:Store) { 
        return API().post(`/abc/xyz`, obj);
      },
    update(obj:Store) { 
        return API().put(`/abc/xyz/${obj.id}`, obj);
      },
    delete(id:number) { 
        return API().delete(`/abc/xyz/${id}`);
      },
};

export default HomeAPI;