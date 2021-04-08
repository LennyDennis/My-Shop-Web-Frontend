export interface Balance {
  id:number;
  customer:string;
  product:string;
  quantity:number;
  totalCost:number;
  paid:number;
  balance:number;
  lastPaid:string;
}
