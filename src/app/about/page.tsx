import React from "react";

export default function Page() {
  return (
    <>
      <div>
        <div className="px-2 lg:px-24 mt-10 flex flex-wrap lg:flex-nowrap justify-evenly items-center">
          <img
            className="justify-self-start"
            src="./about-main.png"
            alt="parking-about"
          />
          <div className="text-xl">
            <p>
              <span className="font-bold">At SmartPark,</span> we are on a
              mission to reshape the way parking is managed and experienced, and
              we're doing it with the brilliance of blockchain technology. Our
              groundbreaking parking management system represents a leap forward
              in efficiency, transparency, and convenience for both vehicle
              owners and parking spot providers.
            </p>
            <p className="mt-4">
              Imagine a world where finding the perfect parking spot is
              effortless, where making payments is secure and instantaneous, and
              where the entire process is backed by the tamper-proof security of
              blockchain. SmartPark brings this vision to life.
            </p>
          </div>
        </div>
        <div className="px-2 lg:px-24 mt-5 flex flex-wrap flex-row-reverse  lg:flex-nowrap justify-evenly items-center">
        <img
            className="justify-self-en"
            src="./vision.png"
            alt="vision-about"
          />
          <div className="text-xl">
            <p className="">
              <span className="font-bold">At SmartPark,</span> we believe in the potential of blockchain technology
              to reshape the way parking is managed. Our system is built on a
              decentralized blockchain foundation, ensuring data integrity and
              transparency while providing a seamless, user-friendly parking
              experience
            </p>
            <p className="mt-4">
              Join us at SmartPark and experience a new era of effortless
              parking, transformed by sapphire brilliance and secured with the
              oasis privacy layer. Together, we're making parking smarter, more
              accessible, and more enjoyable for everyone.
            </p>
          </div>
          
        </div>
        <div className="container my-10 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <h2 className="mb-16 text-3xl font-bold underline">
              SmartPark Features at a Glance
            </h2>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 px-2">
              <div className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./spot-owner.png" alt="spot-owner" />
                </div>
                <h5 className="mb-4 text-lg font-bold">
                  Spot owner registration
                </h5>
                <p className="">
                  Spot owners can also register in the SmartPark system by
                  providing relevant information about their parking spaces,
                  including location, availability, pricing, and any specific
                  rules or restrictions. This allows spot owners to showcase
                  their available spots to potential users.
                </p>
              </div>
              <div className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./user.png" alt="user" />
                </div>
                <h5 className="mb-4 text-lg font-bold">User registration</h5>
                <p className="">
                  Users can register in the SmartPark system by providing their
                  personal information, such as name, contact details, and
                  payment preferences. Registration ensures a secure and
                  personalized user experience within the SmartPark ecosystem.
                </p>
              </div>

              <div className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./spot.png" alt="spot" />
                </div>
                <h5 className="mb-4 text-lg font-bold">
                  Parking Spot Management
                </h5>
                <p className="">
                  Spot owners can add their available parking spots to the
                  system. Information such as spot availability, geographical
                  coordinates, spot type, and price is included. This
                  comprehensive database allows vehicle owners to easily search
                  for and book available parking spots.
                </p>
              </div>

              <div className="mt-5 mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./booking.png" alt="spot" />
                </div>
                <h5 className="mb-4 text-lg font-bold">Spot Booking</h5>
                <p className="">
                  Vehicle owners can reserve parking spots through the SmartPark
                  system. When a spot is successfully booked, its availability
                  status is updated to prevent other vehicles from booking the
                  same spot during the selected time frame. The system records
                  relevant booking details, including the booking ID, booking
                  time, parking in/out time, payment status, and transaction
                  information.
                </p>
              </div>

              <div className="mt-5 mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./money.png" alt="payment" />
                </div>
                <h5 className="mb-4 text-lg font-bold">Payment Processing</h5>
                <p className="">
                  The system supports seamless payment processing, allowing
                  vehicle owners to make payments to spot owners. Payment
                  options may include cryptocurrencies or digital payment
                  systems. Each payment transaction is transparent and traceable
                  on the blockchain, ensuring secure and efficient transactions.
                </p>
              </div>

              <div className="mt-5 mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <img src="./notification.png" alt="notif" />
                </div>
                <h5 className="mb-4 text-lg font-bold">
                  Instant Notifications
                </h5>
                <p className="">
                  The system provides event notifications for important actions
                  such as spot bookings, releases, transfers, vehicle identity
                  creation, and payment receipts. These notifications promote
                  transparency and facilitate communication between all parties
                  involved in the ecosystem.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
