import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Label
} from 'recharts';

import Persons from '../Images/Icons/Persons.svg';
import TotalSale from '../Images/Icons/Vector (1).svg';
import Rupees from '../Images/Icons/Rupees.svg';
import TavarArrow from '../Images/Icons/TavarArrow.svg';
import Framelines from '../Images/Icons/Frame (1).svg';
import TopArrow from '../Images/Icons/TopArrow.svg';

const data = [
    { month: 'Jan', sales: 70 },
    { month: 'Feb', sales: 60 },
    { month: 'Mar', sales: 65 },
    { month: 'Apr', sales: 80 },
    { month: 'May', sales: 90 },
    { month: 'Jun', sales: 55 },
    { month: 'Jul', sales: 70 },
    { month: 'Aug', sales: 85 },
    { month: 'Sep', sales: 60 },
];

const orderStatusData = [
    { name: 'Success', value: 50 },
    { name: 'Pending', value: 22 },
    { name: 'Failed', value: 22 }
   
];

const COLORS = ['#84cc16','#ef4444','#3b82f6'];

const Dashboard = () => {
    return (
        <div className="">
        <div className="bg-zinc-300 -mt-2">
            {/* Header Section */}
            <div className="font-manrope text-2xl font-extrabold text-left w-full pl-7 p-2 bg-zinc-100 py-4">
                Track Your Growth
            </div>

            {/* Statistics Overview */}
            <div className="flex flex-wrap gap-3 mb-2 ml-4 p-2">
                <div className="bg-white p-3 shadow-md w-64 h-28 relative text-sm">
                    <img src={Persons} className="absolute top-6 left-4" />
                    <div className="font-bold mt-12 mb-0">1034</div>
                    <p>Total Customer</p>
                </div>
                <div className="bg-white p-3 shadow-md w-64 h-28 relative text-sm">
                    <img src={TotalSale} className="absolute top-4 left-4" />
                    <div className="text-sm font-bold mt-12 mb-0">382</div>
                    <p>Total Sale Today</p>
                </div>
                <div className="bg-white p-3 shadow-md w-64 h-28 relative text-sm">
                    <img src={Rupees} className="absolute top-4 left-4" />
                    <div className="font-bold mt-12 mb-0">6050000</div>
                    <p>Total Amount</p>
                </div>
                <div className='flex text-sm font-semibold'>
                    <div className='bg-black w-64 p-8 text-white relative h-28 '>
                        <p className="p-1 text-orange-600">Earned Growth</p>
                        <div className="pl-8 text-white font-semibold">₹50%</div>
                        <div className='bg-orange-600 w-34 p-7 rounded-l-full absolute right-0 top-0 h-28'>
                            <img src={TavarArrow} className="w-12 h-12 flex justify-center " />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-3 ml-5 w-full gap-3 bg-zinc-300" style={{ width: "1195px" }}>
                {/* Sales Statistic */}
                <div className="bg-white p-4 lg:col-span-2 border-l-2 border-black">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold mb-4">Sales Statistic</h2>
                        <div className="flex gap-2">
                            <div className="w-6 h-6 flex items-center justify-center rounded-tl-[5.82px] bg-gray-200">
                                <img src={Framelines} className="w-4 h-4" />
                            </div>
                            <div className="w-6 h-6 flex items-center justify-center rounded-tl-[5.82px] bg-gray-200">
                                <img src={TopArrow} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-68 bg-white shadow-lg p-4 ">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="sales" stroke="#FFA500" fillOpacity={1} fill="url(#colorSales)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="w-full bg-black shadow-lg px-2 mt-8 py-2">
                        <div className="flex flex-wrap gap-4 justify-between">
                            <div className="text-white border-r border-gray-700 pr-4 text-xs flex-1 my-0.5">
                                <p className='text-orange-500 pt-2'>Low Stock</p>
                                <p>06 Items</p>
                            </div>
                            <div className="text-white border-r border-gray-700 pr-4 text-xs flex-1 ">
                                <p className='text-lime-600 pt-2'>Sales</p>
                                <p>120 Items</p>
                            </div>
                            <div className="text-white border-r border-gray-700 pr-4 text-xs flex-1 ">
                                <p className='pt-2'>+Products</p>
                                <p>06</p>
                            </div>
                            <div className="text-white border-r border-gray-700 pr-4 text-xs flex-1 ">
                                <p className='text-orange-500 pt-2'>Out of Stock</p>
                                <p>06</p>
                            </div>
                            <div className="text-white border-r border-gray-700 pr-4 text-xs flex-1 ">
                                <p className='pt-2'>+ Customer</p>
                                <p>06</p>
                            </div>
                            <div className="text-white text-xs flex-1">
                                <p className='pt-3'>Wholesale</p>
                                <p>04</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification with gap */}
                <div className='bg-zinc-300'>
                <div className="bg-white p-4 shadow-md w-64 ">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Notification</h2>
                        <p className="text-orange-600 text-sm cursor-pointer underline">View All</p>
                    </div>
                    <div className="space-y-1">
                        <div className="bg-gray-100 p-2 border-l-4 border-orange-600 w-full">
                            <div className="text-neutral-900 text-xs font-bold">Inventory Synced</div>
                            <p className="text-[11px]">All products have been successfully synchronized with the central database.</p>
                        </div>
                        <div className="bg-gray-100 p-2 border-l-4 border-orange-600 w-full">
                            <div className="text-neutral-900 text-xs font-bold">Inventory Synced</div>
                            <p className="text-[11px]">All products have been successfully synchronized with the central database.</p>
                        </div>
                        <div className="bg-gray-100 p-2 border-l-4 border-orange-600 w-full">
                            <div className="text-neutral-900 text-xs font-bold">Inventory Synced</div>
                            <p className="text-[11px]">All products have been successfully synchronized with the central database.</p>
                        </div>
                    </div>

                  <div>
         <h2 className="text-xl font-bold mb-1 mt-3">Order Status</h2>
         <p className='font-Montserrat text-sm font-normal'>Total Earnings of the Month</p>
         <div style={{ display: 'flex', alignItems: 'center' }}>
            
         <PieChart width={150} height={150}>
                <Pie
                    data={orderStatusData}
                    cx="40%"
                    cy="60%"
                    innerRadius={40}
                    outerRadius={60}
                    dataKey="value"
                    labelLine={false}
                >
                    {orderStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                     <Label
          value="Ratio"
          position="center"
          fill="#333"
          style={{
            fontSize: '14px',
            fontWeight: 'semibold',
            textAnchor: 'middle',
            dominantBaseline: 'central',
            transform: 'translateY(-10px)', 
          }}
        />
        <Label
          value="100%"
          position="center"
          fill="#333"
          style={{
            fontSize: '12px',
            fontWeight: 'semibold',
            textAnchor: 'middle',
            dominantBaseline: 'central',
            transform: 'translateY(7px)', 
          }}
        />
                </Pie>
            </PieChart>

            <div className='mt-11' >
                {orderStatusData.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center',}}>
                        <div style={{
                            marginTop:'2px',
                            width: '12px',
                            height: '12px',
                            backgroundColor: COLORS[index % COLORS.length],
                            marginRight: '8px',
                            borderRadius: '50px'
                        }}></div>
                        <span className='mb-0'>{item.name}</span>
                    </div>
                ))}
            </div>
            
           
        </div>
        </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;

