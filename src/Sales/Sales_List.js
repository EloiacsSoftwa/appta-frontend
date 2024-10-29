import React from 'react'
import Vector from '../Images/Sales/Vector.svg'

function Sales_List() {



    const reports = [
        {
          title: "Total Customers",
          value: "2,420",
        },
        {
          title: "New Customers",
          value: "2,420",
        },
        {
          title: "Total Sales",
          value: "₹ 90,896.00",
          extra: "20%",
         
        },
        {
          title: "Unpaid",
          value: "₹ 8,056",
        },
      ];




    const salesData = [
        {
          date: '09-Oct-2024',
          customer: 'Shane',
          customerId: 'CK0546',
          status: 'pending',
          payment: 'pending',
          total: '₹ 2,500',
          paid: '₹ 2,500',
          counter: 'C3',
        },
        {
          date: '09-Oct-2024',
          customer: 'Robert',
          customerId: 'CK0546',
          status: 'completed',
          payment: 'completed',
          total: '₹ 2,500',
          paid: '₹ 2,500',
          counter: 'C3',
        },
        {
          date: '09-Oct-2024',
          customer: 'Branson',
          customerId: 'CK0546',
          status: 'completed',
          payment: 'completed',
          total: '₹ 2,500',
          paid: '₹ 2,500',
          counter: 'C4',
        },
      ];










  return (
    <div className='h-screen bg-white p-4 w-full'>

<div className='flex justify-start items-center gap-2 mb-2.5'>
<label className='font-semibold text-22 text-neutral-900'>Sales - </label> <label className='font-bold text-22 text-orange-600'> Sales List</label>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:grid-cols-4 gap-x-4 mb-6">
      {reports.map((report, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-custom">
          <p className="text-sm text-orange-600 font-semibold">{report.title}</p>


          <div className='flex justify-between items-center'>

          <p className="text-2xl font-medium text-black">
            {report.value}
            
          </p>
          {report.extra && (
            <div className='flex items-center'>
                <div className='text-emerald-500 text-sm font-semibold'> {report.extra}</div>
                <div> <img src={Vector} className='w-5 h-5' /> </div>
                </div>
              
            )}
          </div>
        </div>
      ))}
    </div>




    </div>
  )
}

export default Sales_List