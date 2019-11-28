import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  constructor(public http:HttpClient) 
  { 

  }

Select()
{
return this.http.get("http://localhost:8989/emps");
}


SelectByNo(No)
{
  return this.http.get("http://localhost:8989/emps/"+No);

}

Update(empobj)
{

  return this.http.put("http://localhost:8989/emps/"    +empobj.No,   empobj);
}

Delete(No)
{
  return this.http.delete("http://localhost:8989/emps/"+No);

}

Insert(empobj)
{

  return this.http.post("http://localhost:8989/emps" ,empobj);
}

}
