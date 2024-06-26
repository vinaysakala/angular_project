import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-groupcoloumntable',
  templateUrl: './groupcoloumntable.component.html',
  styleUrls: ['./groupcoloumntable.component.css']
})
export class GroupcoloumntableComponent {
  // sales!: any[];

  //   lastYearTotal!: number;

  //   thisYearTotal!: number;

  //   ngOnInit() {
  //       this.sales = [
  //           { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
  //           { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
  //           { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
  //           { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
  //           { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
  //           { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
  //           { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
  //           { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
  //           { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
  //           { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
  //       ];

  //       this.calculateLastYearTotal();
  //       this.calculateThisYearTotal();
  //   }

  //   calculateLastYearTotal() {
  //       let total = 0;
  //       for (let sale of this.sales) {
  //           total += sale.lastYearProfit;
  //       }

  //       this.lastYearTotal = total;
  //   }

  //   calculateThisYearTotal() {
  //       let total = 0;
  //       for (let sale of this.sales) {
  //           total += sale.thisYearProfit;
  //       }

  //       this.thisYearTotal = total;
  //   }
  
  // @Input() columnNames: string[] = [];
  // @Input() groupedColumnTable: any[] = [];

  // sales!: any[];
  // lastYearTotal!: number;
  // thisYearTotal!: number;

  // ngOnInit() {
  //   // Initialize your sales data here
  //   this.calculateLastYearTotal();
  //   this.calculateThisYearTotal();
  // }

  // calculateLastYearTotal() {
  //   let total = 0;
  //   for (let sale of this.sales) {
  //     total += sale.lastYearProfit;
  //   }
  //   this.lastYearTotal = total;
  // }

  // calculateThisYearTotal() {
  //   let total = 0;
  //   for (let sale of this.sales) {
  //     total += sale.thisYearProfit;
  //   }
  //   this.thisYearTotal = total;
  // }
  columnHeaders=['Casual Leave', 'Sick Leave','Earned Leaave','Paternity Leave','Total']
  
  @Input() data:any;
  mainheader=['paid','unpaid']

  // public headerarray =[
  //   {id:1,header:1,subheader:null,childheader:null},
  //   {id:2,header:2,subheader:null,childheader:null},
      
  //   {id:3,header:2,subheader:1,childheader:null},
    
  //   {id:4,header:2,subheader:2,childheader:null},
    
  //   {id:4,header:2,subheader:1,childheader:1},
  //   {id:4,header:2,subheader:1,childheader:2},
    
  //   ]

    // {
    //   id: 1, header  : 1,
    //   sub: [{
    //     id: 3, header: 2, subheader: 1, child: [
    //       { id: 4, header: 2, subheader: 1, childheader: 1 },
    //       { id: 4, header: 2, subheader: 1, childheader: 2 },
    //     ]
    //   },
    //   { id: 4, header: 2, subheader: 2 },]
    // },
    // { id: 2, header: 2 }
    yourData = [
      { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
      { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
 ];

}
