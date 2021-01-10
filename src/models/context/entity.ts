import { Storage } from '@ionic/storage';
import { Base } from '../contracts/base';

export class Entity<T extends Base> {

    private _data: T[];
    private className: string;
    
    constructor(private storage: Storage, name: string) {        
        this.className = name;
        this.get()
            .then( value => this._data = value );
    }

    public async get(): Promise<T[]>{
        try{
            let entity = await this.storage.get(this.className);
            if(!entity)
                entity = [];
            return entity;
        }catch(error){
            console.error(error);
        }
        return null;
    }

    public async add(value: T): Promise<T[]> {
        try{
            this._data.push(value);
            return this.storage.set(this.className, this._data);
        }catch(error){
            console.error(error);
        }
        return null;
    }

    public async remove(value: T): Promise<T[]> {
        try{
            this._data.splice(this._data.indexOf(value), 1);
            return this.storage.set(this.className, this._data);
        }catch(error){
            console.error(error);
        }
        return null;
    }

    public async getById(id: string){
        return this._data.find(x => x.id === id);
    }

    public async getByName(name: string){
        return this._data.find(x => x.name === name);
    }
}
