import { Storage } from '@ionic/storage';
import { StringBuilder } from '../../provider';
import { HasId } from '../contracts/has-id';

export class Entity<T extends HasId> {

    private _data: T[];
    private className: string;
    
    constructor(private storage: Storage, name: string) {        
        this.className = name;
        this._data = [];
        this.initialize();
    }
    
    private initialize(){
        this.storage.get(this.className)
            .then( (value: any[]) => {
                if(!value) value = [];
                this._data = value;
            });
    }

    public async getAll(): Promise<T[]>{
        try{          
            this._data = await this.storage.get(this.className);
            if(!this._data) this._data = [];
            return this._data;
        }catch(error){
            console.error(error);
        }
        return null;    
    }

    public async get( promise: (value: T, index: number, obj: T[]) => boolean ): Promise<T[]>{
        try{
            return this._data.filter(promise);
        }catch(error){
            console.error(error);
        }
        return null;    
    }

    public async getById(id: string){
        return this._data.find(x => x.id === id);
    }

    public async add(value: T): Promise<T> {
        try{
            if(!!value.id) return this.edit(value);
            value.id = await this.newGuid();
            this._data.push(value);
            await this.storage.set(this.className, this._data);
            return value;
        }catch(error){
            console.error(error);
        }
        return null;
    }

    public async edit(value: T): Promise<T> {
        try{
            let element = this._data.find(x => x.id === value.id);
            if(!element) return await this.idValidation<T>(value, 'edit');
            this._data.splice(this._data.indexOf(element), 1);
            this._data.push(value);
            await this.storage.set(this.className, this._data);
            return value;
        }catch(error){
            console.error(error);
        }
        return null;
    }

    public async remove(value: T): Promise<T> {
        try{
            let element = this._data.find(x => x.id === value.id);
            if(!element) return await this.idValidation<T>(value, 'remove');
            this._data.splice(this._data.indexOf(element), 1);
            await this.storage.set(this.className, this._data);
            return value;
        }catch(error){
            console.error(error);
        }
        return null;
    }


    private async idValidation<T>(event: any, method: string): Promise<T> {
        console.error(`Entity.${method}: intentó guardar sin Id ${event}`)
        return null;
    }

    private async newGuid(): Promise<string> {
        let builder = new StringBuilder();
        for (let j = 0; j < 32; j++) {
            if (j == 8 || j == 12 || j == 16 || j == 20)
                builder.Append('-');
            builder.Append( Math.floor(Math.random() * 16).toString(16).toUpperCase() );            
        }
        return builder.ToString();
    }  
}
