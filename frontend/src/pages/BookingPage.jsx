import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <>
      <section className="page-hero booking-hero">
        <div className="page-hero-copy">
          <span className="section-label">Reserve a Session</span>
          <h1>Tell me what you are building, and I will shape the session around it.</h1>
          <p>
            Choose a package, share your timeline, and send a booking request. The form works locally and can connect to the Django API when the backend is running.
          </p>
        </div>
      </section>

      <section className="section-shell booking-section">
        <BookingForm />
      </section>
    </>
  );
}

export default BookingPage;
