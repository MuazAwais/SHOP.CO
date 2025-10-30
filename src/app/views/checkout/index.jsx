import React from 'react'
import PaymentCard from './payment'
import OrderDetail from './orderDetail'

const CheckoutView = () => {
  return (
    <div>
        <div className="flex gap-[20px]">
        <div className="w-full">
        <PaymentCard />
        </div>
        <div className="w-full">
        <OrderDetail/>
        </div>
      </div>
    </div>
  )
}

export default CheckoutView