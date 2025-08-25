import React, { useState } from 'react';
import BookingForm from '../components/Bookingpage/BookingForm';
import RoomSelection from '../components/Bookingpage/RoomSelection';
import GuestDetails from '../components/Bookingpage/GuestDetails';
import PaymentSection from '../components/Bookingpage/PaymentSection';
import BookingSummary from '../components/Bookingpage/BookingSummary';

const BookingPage = () => {
  const [step, setStep] = useState(1); // 1: Dates, 2: Room, 3: Guest, 4: Payment
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    selectedRoom: null,
    extras: [],
    guestInfo: {},
    paymentMethod: 'credit-card',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  onClick={() => setStep(i)} // fully clickable in any order
                  className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center 
                    ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  {i}
                </div>
                <span className="mt-2 text-sm">
                  {i === 1 ? 'Dates' : i === 2 ? 'Room' : i === 3 ? 'Details' : 'Payment'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Booking Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            {step === 1 && (
              <BookingForm 
                data={bookingData} 
                setData={setBookingData} 
                nextStep={nextStep} 
              />
            )}
            {step === 2 && (
              <RoomSelection 
                data={bookingData} 
                setData={setBookingData} 
                nextStep={nextStep} 
                prevStep={prevStep} 
              />
            )}
            {step === 3 && (
              <GuestDetails 
                data={bookingData} 
                setData={setBookingData} 
                nextStep={nextStep} 
                prevStep={prevStep} 
              />
            )}
            {step === 4 && (
              <PaymentSection 
                data={bookingData} 
                setData={setBookingData} 
                prevStep={prevStep} 
              />
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-4">
            <BookingSummary data={bookingData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
